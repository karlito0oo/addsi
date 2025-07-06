import { useState, useEffect } from 'react';
import { adminService } from '../../services/admin.service';
import { STORAGE_URL } from '../../config';
import { toast } from 'react-hot-toast';

interface Achievement {
  id: number;
  title: string;
  description: string;
  image: string;
  achievement_date: string | null;
  order: number;
}

export default function WastoAchievementsManagement() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchAchievements = async () => {
    try {
      const response = await adminService.getWastoAchievements();
      setAchievements(response.data);
    } catch (error) {
      console.error('Error fetching achievements:', error);
      toast.error('Failed to load achievements');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAchievements();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      if (selectedAchievement) {
        await adminService.updateWastoAchievement(selectedAchievement.id, formData);
        toast.success('Achievement updated successfully');
      } else {
        await adminService.createWastoAchievement(formData);
        toast.success('Achievement created successfully');
      }
      
      fetchAchievements();
      setIsModalOpen(false);
      setSelectedAchievement(null);
    } catch (error) {
      console.error('Error saving achievement:', error);
      toast.error('Failed to save achievement');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this achievement?')) return;

    setLoading(true);
    try {
      await adminService.deleteWastoAchievement(id);
      toast.success('Achievement deleted successfully');
      fetchAchievements();
    } catch (error) {
      console.error('Error deleting achievement:', error);
      toast.error('Failed to delete achievement');
    } finally {
      setLoading(false);
    }
  };

  const openModal = (achievement?: Achievement) => {
    setSelectedAchievement(achievement || null);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Wasto Achievements Management</h1>
        <button
          onClick={() => openModal()}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
        >
          Add New Achievement
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={`${STORAGE_URL}/${achievement.image}`}
                alt={achievement.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600 mb-4">{achievement.description}</p>
                {achievement.achievement_date && (
                  <p className="text-sm text-gray-500 mb-4">
                    Date: {new Date(achievement.achievement_date).toLocaleDateString()}
                  </p>
                )}
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => openModal(achievement)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(achievement.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              {selectedAchievement ? 'Edit Achievement' : 'Add New Achievement'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={selectedAchievement?.title}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  defaultValue={selectedAchievement?.description}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
                {selectedAchievement && (
                  <div className="mb-3">
                    <img
                      src={`${STORAGE_URL}/${selectedAchievement.image}`}
                      alt={selectedAchievement.title}
                      className="w-32 h-32 object-cover rounded-md border border-gray-300"
                    />
                  </div>
                )}
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                  required={!selectedAchievement}
                />
                {selectedAchievement && (
                  <p className="mt-1 text-sm text-gray-500">Leave empty to keep the current image</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Achievement Date</label>
                <input
                  type="date"
                  name="achievement_date"
                  defaultValue={selectedAchievement?.achievement_date?.split('T')[0]}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Order</label>
                <input
                  type="number"
                  name="order"
                  defaultValue={selectedAchievement?.order || 0}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                />
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setSelectedAchievement(null);
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  {selectedAchievement ? 'Update' : 'Create'} Achievement
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 