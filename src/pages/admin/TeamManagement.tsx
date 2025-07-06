import React, { useState, useEffect } from 'react';
import { adminService } from '../../services/admin.service';
import { STORAGE_URL } from '../../config/index';

interface TeamMember {
  id?: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  category: 'leadership' | 'support';
  order: number;
}

const TeamManagement: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const fetchTeamMembers = async () => {
    try {
      setIsLoading(true);
      const response = await adminService.getTeamMembers();
      setTeamMembers(response.data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch team members');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMember) return;

    try {
      setIsLoading(true);
      const formData = new FormData();
      Object.entries(editingMember).forEach(([key, value]) => {
        formData.append(key, value.toString());
      });
      if (imageFile) {
        formData.append('image', imageFile);
      }

      if (editingMember.id) {
        await adminService.updateTeamMember(editingMember.id, formData);
      } else {
        await adminService.createTeamMember(formData);
      }

      fetchTeamMembers();
      setEditingMember(null);
      setImageFile(null);
    } catch (err: any) {
      setError(err.message || 'Failed to save team member');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this team member?')) return;

    try {
      setIsLoading(true);
      await adminService.deleteTeamMember(id);
      fetchTeamMembers();
    } catch (err: any) {
      setError(err.message || 'Failed to delete team member');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Team Management</h2>
        <button
          onClick={() => setEditingMember({ name: '', position: '', bio: '', image: '', category: 'leadership', order: teamMembers.length })}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add New Member
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {editingMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">
              {editingMember.id ? 'Edit Team Member' : 'Add New Team Member'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={editingMember.name}
                  onChange={e => setEditingMember({ ...editingMember, name: e.target.value })}
                  className="mt-1 block w-full px-3 py-2 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                <input
                  type="text"
                  value={editingMember.position}
                  onChange={e => setEditingMember({ ...editingMember, position: e.target.value })}
                  className="mt-1 block w-full px-3 py-2 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea
                  value={editingMember.bio}
                  onChange={e => setEditingMember({ ...editingMember, bio: e.target.value })}
                  className="mt-1 block w-full px-3 py-2 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  rows={4}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={editingMember.category}
                  onChange={e => setEditingMember({ ...editingMember, category: e.target.value as 'leadership' | 'support' })}
                  className="mt-1 block w-full px-3 py-2 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="leadership">Leadership Team</option>
                  <option value="support">Support Team</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Order</label>
                <input
                  type="number"
                  value={editingMember.order}
                  onChange={e => setEditingMember({ ...editingMember, order: parseInt(e.target.value) })}
                  className="mt-1 block w-full px-3 py-2 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              {editingMember.category === 'leadership' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                  <input
                    type="file"
                    onChange={e => setImageFile(e.target.files?.[0] || null)}
                    className="mt-1 block w-full px-3 py-2 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    accept="image/*"
                    required={!editingMember.id}
                  />
                  {editingMember.image && (
                    <img
                      src={`${STORAGE_URL}/${editingMember.image}`}
                      alt="Current"
                      className="mt-2 h-20 w-20 object-cover rounded"
                    />
                  )}
                </div>
              )}
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setEditingMember(null)}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  {isLoading ? 'Saving...' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Leadership Team</h3>
        <div className="grid grid-cols-1 gap-4">
          {teamMembers
            .filter(member => member.category === 'leadership')
            .sort((a, b) => a.order - b.order)
            .map(member => (
              <div key={member.id} className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img 
                    src={`${STORAGE_URL}/${member.image}`} 
                    alt={member.name} 
                    className="w-12 h-12 rounded-full object-cover" 
                  />
                  <div>
                    <h4 className="font-semibold">{member.name}</h4>
                    <p className="text-sm text-gray-600">{member.position}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setEditingMember(member)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => member.id && handleDelete(member.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>

        <h3 className="text-xl font-semibold mt-8">Support Team</h3>
        <div className="grid grid-cols-1 gap-4">
          {teamMembers
            .filter(member => member.category === 'support')
            .sort((a, b) => a.order - b.order)
            .map(member => (
              <div key={member.id} className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {member.image ? (
                    <img 
                      src={`${STORAGE_URL}/${member.image}`} 
                      alt={member.name} 
                      className="w-12 h-12 rounded-full object-cover" 
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-xl font-medium">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold">{member.name}</h4>
                    <p className="text-sm text-gray-600">{member.position}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setEditingMember(member)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => member.id && handleDelete(member.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TeamManagement; 