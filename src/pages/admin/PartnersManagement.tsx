import React, { useState, useEffect } from 'react';
import { adminService } from '../../services/admin.service';
import { STORAGE_URL } from '../../config/index';

interface Partner {
  id?: number;
  name: string;
  logo: string;
  category: 'government' | 'nongovernment' | 'private';
  order: number;
}

interface ValidationErrors {
  [key: string]: string[];
}

const PartnersManagement: React.FC = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | ValidationErrors>('');
  const [editingPartner, setEditingPartner] = useState<Partner | null>(null);
  const [logoFile, setLogoFile] = useState<File | null>(null);

  const fetchPartners = async () => {
    try {
      setIsLoading(true);
      const response = await adminService.getPartners();
      setPartners(response.data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch partners');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPartner) return;

    try {
      setIsLoading(true);
      const formData = new FormData();
      Object.entries(editingPartner).forEach(([key, value]) => {
        formData.append(key, value.toString());
      });
      if (logoFile) {
        formData.append('logo', logoFile);
      }

      if (editingPartner.id) {
        await adminService.updatePartner(editingPartner.id, formData);
      } else {
        await adminService.createPartner(formData);
      }

      fetchPartners();
      setEditingPartner(null);
      setLogoFile(null);
      setError('');
    } catch (err: any) {
      if (err.response?.data?.errors) {
        setError(err.response.data.errors);
      } else {
        setError(err.response?.data?.message || err.message || 'Failed to save partner');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this partner?')) return;

    try {
      setIsLoading(true);
      await adminService.deletePartner(id);
      fetchPartners();
    } catch (err: any) {
      setError(err.message || 'Failed to delete partner');
    } finally {
      setIsLoading(false);
    }
  };

  const renderPartnersList = (category: Partner['category'], title: string) => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="grid grid-cols-1 gap-4">
        {partners
          .filter(partner => partner.category === category)
          .sort((a, b) => a.order - b.order)
          .map(partner => (
            <div key={partner.id} className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img 
                  src={`${STORAGE_URL}/${partner.logo}`} 
                  alt={partner.name} 
                  className="w-12 h-12 object-contain" 
                />
                <div>
                  <h4 className="font-semibold">{partner.name}</h4>
                  <p className="text-sm text-gray-500">Order: {partner.order}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setEditingPartner(partner)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => partner.id && handleDelete(partner.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Partners & Affiliations Management</h2>
        <button
          onClick={() => setEditingPartner({ name: '', logo: '', category: 'private', order: partners.length })}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add New Partner
        </button>
      </div>

      {typeof error === 'string' && error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {typeof error === 'object' && Object.keys(error).length > 0 && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <ul className="list-disc list-inside">
            {Object.entries(error).map(([field, messages]) => (
              messages.map((message, index) => (
                <li key={`${field}-${index}`} className="text-red-700">
                  {message}
                </li>
              ))
            ))}
          </ul>
        </div>
      )}

      {editingPartner && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">
              {editingPartner.id ? 'Edit Partner' : 'Add New Partner'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={editingPartner.name}
                  onChange={e => setEditingPartner({ ...editingPartner, name: e.target.value })}
                  className="mt-1 block w-full px-3 py-2 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={editingPartner.category}
                  onChange={e => setEditingPartner({ ...editingPartner, category: e.target.value as Partner['category'] })}
                  className="mt-1 block w-full px-3 py-2 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="government">Government</option>
                  <option value="nongovernment">Non-Government</option>
                  <option value="private">Private</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Order</label>
                <input
                  type="number"
                  value={editingPartner.order}
                  onChange={e => setEditingPartner({ ...editingPartner, order: parseInt(e.target.value) })}
                  className="mt-1 block w-full px-3 py-2 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Logo</label>
                <input
                  type="file"
                  onChange={e => setLogoFile(e.target.files?.[0] || null)}
                  className="mt-1 block w-full px-3 py-2 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  accept="image/*"
                  required={!editingPartner.id}
                />
                {editingPartner.logo && (
                  <img
                    src={`${STORAGE_URL}/${editingPartner.logo}`}
                    alt="Current"
                    className="mt-2 h-20 w-20 object-contain"
                  />
                )}
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setEditingPartner(null)}
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

      {isLoading && !editingPartner && (
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-700 mx-auto"></div>
        </div>
      )}

      <div className="space-y-8">
        {renderPartnersList('government', 'Government Partners')}
        {renderPartnersList('nongovernment', 'Non-Government Partners')}
        {renderPartnersList('private', 'Private Partners')}
      </div>
    </div>
  );
};

export default PartnersManagement; 