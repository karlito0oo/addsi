import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Input, Switch, message } from 'antd';
import { EditOutlined, DeleteOutlined, LockOutlined } from '@ant-design/icons';
import { adminService } from '../../services/admin.service';

interface Admin {
  id: number;
  name: string;
  email: string;
  is_active: boolean;
  last_login_at: string;
}

const formatDate = (date: string | null) => {
  if (!date) return 'Never';
  
  const d = new Date(date);
  const now = new Date();
  const diff = now.getTime() - d.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (days === 0) {
    if (diff < 1000 * 60) return 'Just now';
    if (diff < 1000 * 60 * 60) return `${Math.floor(diff / (1000 * 60))} minutes ago`;
    return `${Math.floor(diff / (1000 * 60 * 60))} hours ago`;
  }
  
  if (days === 1) return 'Yesterday';
  if (days < 7) return `${days} days ago`;
  
  return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
};

const AdminManagement: React.FC = () => {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState<Admin | null>(null);
  const [form] = Form.useForm();
  const [passwordForm] = Form.useForm();

  const fetchAdmins = async () => {
    try {
      setLoading(true);
      const response = await adminService.getAdmins();
      setAdmins(response.data);
    } catch (error) {
      message.error('Failed to fetch administrators');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmins();
    // Refresh the table every minute to update relative timestamps
    const interval = setInterval(fetchAdmins, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleAdd = () => {
    setEditingAdmin(null);
    form.resetFields();
    setModalVisible(true);
  };

  const handleEdit = (admin: Admin) => {
    setEditingAdmin(admin);
    form.setFieldsValue(admin);
    setModalVisible(true);
  };

  const handleDelete = async (admin: Admin) => {
    try {
      await adminService.deleteAdmin(admin.id);
      message.success('Administrator deleted successfully');
      fetchAdmins();
    } catch (error) {
      message.error('Failed to delete administrator');
    }
  };

  const handlePasswordChange = (admin: Admin) => {
    setEditingAdmin(admin);
    passwordForm.resetFields();
    setPasswordModalVisible(true);
  };

  const handleSubmit = async (values: any) => {
    try {
      if (editingAdmin) {
        await adminService.updateAdmin(editingAdmin.id, values);
        message.success('Administrator updated successfully');
      } else {
        await adminService.createAdmin(values);
        message.success('Administrator created successfully');
      }
      setModalVisible(false);
      fetchAdmins();
    } catch (error) {
      message.error('Failed to save administrator');
    }
  };

  const handlePasswordSubmit = async (values: any) => {
    try {
      if (!editingAdmin) return;
      
      await adminService.changePassword(editingAdmin.id, {
        ...values,
        self: editingAdmin.id === (window as any).user?.id
      });
      
      message.success('Password updated successfully');
      setPasswordModalVisible(false);
    } catch (error) {
      message.error('Failed to update password');
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Active',
      dataIndex: 'is_active',
      key: 'is_active',
      render: (active: boolean) => (active ? 'Yes' : 'No'),
    },
    {
      title: 'Last Login',
      dataIndex: 'last_login_at',
      key: 'last_login_at',
      render: (date: string) => formatDate(date),
      sorter: (a: Admin, b: Admin) => {
        if (!a.last_login_at) return 1;
        if (!b.last_login_at) return -1;
        return new Date(b.last_login_at).getTime() - new Date(a.last_login_at).getTime();
      },
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Admin) => (
        <div className="space-x-2">
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />
          <Button
            icon={<LockOutlined />}
            onClick={() => handlePasswordChange(record)}
          />
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => handleDelete(record)}
            disabled={record.id === (window as any).user?.id}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Administrator Management</h1>
        <Button type="primary" onClick={handleAdd}>
          Add Administrator
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={admins}
        rowKey="id"
        loading={loading}
      />

      <Modal
        title={editingAdmin ? 'Edit Administrator' : 'Add Administrator'}
        open={modalVisible}
        onOk={form.submit}
        onCancel={() => setModalVisible(false)}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter name' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please enter email' },
              { type: 'email', message: 'Please enter a valid email' }
            ]}
          >
            <Input />
          </Form.Item>

          {!editingAdmin && (
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: 'Please enter password' }]}
            >
              <Input.Password />
            </Form.Item>
          )}

          {!editingAdmin && (
            <Form.Item
              name="password_confirmation"
              label="Confirm Password"
              rules={[
                { required: true, message: 'Please confirm password' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('Passwords do not match');
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          )}

          <Form.Item
            name="is_active"
            label="Active"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Change Password"
        open={passwordModalVisible}
        onOk={passwordForm.submit}
        onCancel={() => setPasswordModalVisible(false)}
      >
        <Form
          form={passwordForm}
          layout="vertical"
          onFinish={handlePasswordSubmit}
        >
          {editingAdmin?.id === (window as any).user?.id && (
            <Form.Item
              name="current_password"
              label="Current Password"
              rules={[{ required: true, message: 'Please enter current password' }]}
            >
              <Input.Password />
            </Form.Item>
          )}

          <Form.Item
            name="password"
            label="New Password"
            rules={[{ required: true, message: 'Please enter new password' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="password_confirmation"
            label="Confirm New Password"
            rules={[
              { required: true, message: 'Please confirm new password' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('Passwords do not match');
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminManagement; 