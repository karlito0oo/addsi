import { useState, useEffect } from 'react';
import { adminService } from '../../services/admin.service';
import { motion } from 'framer-motion';
import { STORAGE_URL } from '../../config';

interface WastoProduct {
  id: number;
  category: string;
  description: string;
  image: string;
  type: string;
  order: number;
}

const WastoProductsManagement = () => {
  const [products, setProducts] = useState<WastoProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<WastoProduct | null>(null);
  const [formData, setFormData] = useState({
    category: '',
    description: '',
    type: 'product',
    order: 0,
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await adminService.getWastoProducts();
      setProducts(response.data);
    } catch (err) {
      setError('Failed to fetch products');
      console.error(err);
    } finally {
      setLoading(false);
    }
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
    setError('');

    try {
      const form = new FormData();
      form.append('category', formData.category);
      form.append('description', formData.description);
      form.append('type', formData.type);
      form.append('order', formData.order.toString());

      if (imageFile) {
        form.append('image', imageFile);
      }

      if (selectedProduct) {
        await adminService.updateWastoProduct(selectedProduct.id, form);
      } else {
        await adminService.createWastoProduct(form);
      }

      resetForm();
      fetchProducts();
      setIsModalOpen(false);
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred');
      console.error(err);
    }
  };

  const handleEdit = (product: WastoProduct) => {
    setSelectedProduct(product);
    setFormData({
      category: product.category,
      description: product.description,
      type: product.type,
      order: product.order,
    });
    setPreviewImage(`/storage/${product.image}`);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await adminService.deleteWastoProduct(id);
        fetchProducts();
      } catch (err) {
        setError('Failed to delete product');
        console.error(err);
      }
    }
  };

  const resetForm = () => {
    setSelectedProduct(null);
    setFormData({
      category: '',
      description: '',
      type: 'product',
      order: 0,
    });
    setImageFile(null);
    setPreviewImage('');
    setError('');
  };

  const handleAddNew = () => {
    resetForm();
    setIsModalOpen(true);
  };

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
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-green-700">
            Wasto Products Management
          </h1>
          <button
            onClick={handleAddNew}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
          >
            Add New Product
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-6">
                {selectedProduct ? 'Edit Product' : 'Add New Product'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="bg-white w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as 'product' | 'essential' })}
                    className="bg-white w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  >
                    <option value="product">Product</option>
                    <option value="essential">Essential</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Order
                  </label>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                    className="bg-white w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="bg-white w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image
                  </label>
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="w-full"
                    accept="image/*"
                    required={!selectedProduct}
                  />
                </div>

                {previewImage && (
                  <div>
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="max-w-xs h-auto rounded-md shadow-md"
                    />
                  </div>
                )}

                <div className="flex justify-end gap-4 mt-6">
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
                    {selectedProduct ? 'Update' : 'Create'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={`${STORAGE_URL}/${product.image}`}
                alt={product.category}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.category}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-sm text-gray-500 mb-4">
                  Type: {product.type} | Order: {product.order}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WastoProductsManagement; 