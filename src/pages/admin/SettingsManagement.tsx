import { useState, useEffect } from 'react';
import { adminService } from '../../services/admin.service';
import { motion } from 'framer-motion';
import { STORAGE_URL } from '../../config';
import { Editor } from '@tinymce/tinymce-react';

interface Setting {
  id: number;
  key: string;
  value: string;
  type: 'text' | 'textarea' | 'image';
  group: string;
  label: string;
}

const SettingsManagement = () => {
  const [settings, setSettings] = useState<Setting[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [editingSetting, setEditingSetting] = useState<Setting | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValue, setFormValue] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string>('');

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      const response = await adminService.getSettings();
      setSettings(response.data);
    } catch (err) {
      setError('Failed to fetch settings');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (setting: Setting) => {
    setEditingSetting(setting);
    setFormValue(setting.value);
    if (setting.type === 'image') {
      setPreviewImage(`${STORAGE_URL}/${setting.value}`);
    }
    setIsModalOpen(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSetting) return;

    try {
      const form = new FormData();
      
      if (editingSetting.type === 'image' && imageFile) {
        form.append('value', imageFile);
      } else {
        form.append('value', formValue);
      }

      await adminService.updateSetting(editingSetting.id, form);
      fetchSettings();
      setIsModalOpen(false);
      resetForm();
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred');
      console.error(err);
    }
  };

  const resetForm = () => {
    setEditingSetting(null);
    setFormValue('');
    setImageFile(null);
    setPreviewImage('');
    setError('');
  };

  const groupedSettings = settings.reduce((acc, setting) => {
    if (!acc[setting.group]) {
      acc[setting.group] = [];
    }
    acc[setting.group].push(setting);
    return acc;
  }, {} as Record<string, Setting[]>);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-8 text-green-700">
          Settings Management
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Modal */}
        {isModalOpen && editingSetting && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-6">
                Edit {editingSetting.label}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {editingSetting.type === 'text' && (
                  <input
                    type="text"
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                    className="bg-white w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                )}

                {editingSetting.type === 'textarea' && (
                  <Editor
                    apiKey="64rh1j62dcc88bffgbbmcw34ick3av3ikgv56fpll6jovyyj"
                    value={formValue}
                    onEditorChange={(content) => setFormValue(content)}
                    init={{
                      height: 400,
                      menubar: true,
                      plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                      ],
                      toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                      content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif; font-size: 14px; }'
                    }}
                  />
                )}

                {editingSetting.type === 'image' && (
                  <div className="space-y-4">
                    <input
                      type="file"
                      onChange={handleImageChange}
                      className="w-full"
                      accept="image/*"
                    />
                    {previewImage && (
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="max-w-xs h-auto rounded-md shadow-md"
                      />
                    )}
                  </div>
                )}

                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      resetForm();
                      setIsModalOpen(false);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Settings List */}
        <div className="space-y-8">
          {Object.entries(groupedSettings).map(([group, groupSettings]) => (
            <div key={group} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 capitalize">
                {group.replace(/_/g, ' ')}
              </h2>
              <div className="space-y-4">
                {groupSettings.map((setting) => (
                  <div
                    key={setting.id}
                    className="flex items-start justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-grow">
                      <h3 className="font-medium">{setting.label}</h3>
                      {setting.type === 'image' ? (
                        <img
                          src={`${STORAGE_URL}/${setting.value}`}
                          alt={setting.label}
                          className="mt-2 max-w-xs h-auto rounded"
                        />
                      ) : (
                        <div 
                          className="mt-1 text-gray-600 prose max-w-none"
                          dangerouslySetInnerHTML={{ __html: setting.value }}
                        />
                      )}
                    </div>
                    <button
                      onClick={() => handleEdit(setting)}
                      className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                    >
                      Edit
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SettingsManagement; 