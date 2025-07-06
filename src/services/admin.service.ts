import { api } from './api';

interface AdminResponse {
  message: string;
  data?: any;
}

class AdminService {
  async getTeamMembers() {
    return api.get('/team-members');
  }

  async createTeamMember(data: FormData) {
    return api.post('/team-members', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  async updateTeamMember(id: number, data: FormData) {
    return api.post(`/team-members/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  async deleteTeamMember(id: number) {
    return api.delete(`/team-members/${id}`);
  }

  async getPartners() {
    return api.get('/partners');
  }

  async createPartner(data: FormData) {
    return api.post('/partners', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  async updatePartner(id: number, data: FormData) {
    return api.post(`/partners/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  async deletePartner(id: number) {
    return api.delete(`/partners/${id}`);
  }

  // Wasto Achievements
  async getWastoAchievements() {
    return api.get('/wasto-achievements');
  }

  async createWastoAchievement(formData: FormData) {
    // Ensure all form fields are present
    if (!formData.get('title') || !formData.get('description')) {
      throw new Error('Missing required fields');
    }

    return api.post('/admin/wasto-achievements', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
  
  async updateWastoAchievement(id: number, data: FormData) {
    return api.post(`/admin/wasto-achievements/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
  }

  async deleteWastoAchievement(id: number) {
    return api.delete(`/admin/wasto-achievements/${id}`);
  }

  // Wasto Products
  async getWastoProducts(type?: string) {
    const params = type ? { type } : {};
    return api.get('/wasto-products', { params });
  }

  async createWastoProduct(formData: FormData) {
    return api.post('/admin/wasto-products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
  }

  async updateWastoProduct(id: number, data: FormData) {
    return api.post(`/admin/wasto-products/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
  }

  async deleteWastoProduct(id: number) {
    return api.delete(`/admin/wasto-products/${id}`);
  }
}

export const adminService = new AdminService(); 