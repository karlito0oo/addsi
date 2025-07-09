import { api } from './api';

export interface AdminCreateData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  role: string;
  is_active: boolean;
}

export interface AdminUpdateData {
  name: string;
  email: string;
  role: string;
  is_active: boolean;
}

export interface PasswordChangeData {
  current_password?: string;
  password: string;
  password_confirmation: string;
  self: boolean;
}

class AdminService {
  // Admin Management
  async getAdmins() {
    return api.get('/admins');
  }

  async createAdmin(data: AdminCreateData) {
    return api.post('/admins', data);
  }

  async updateAdmin(id: number, data: AdminUpdateData) {
    return api.put(`/admins/${id}`, data);
  }

  async deleteAdmin(id: number) {
    return api.delete(`/admins/${id}`);
  }

  async changePassword(id: number, data: PasswordChangeData) {
    return api.post(`/admins/${id}/change-password`, data);
  }

  // Team Members
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

  // Partners
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

  // Settings
  async getSettings(group?: string) {
    const params = group ? { group } : {};
    return api.get('/settings', { params });
  }

  async getPublicSettings() {
    return api.get('/settings/public');
  }

  async getPublicData() {
    return api.get('/public-data');
  }

  async getSettingsByGroup(group: string) {
    return this.getSettings(group).then(response => {
      const settings = response.data;
      return settings.reduce((acc: Record<string, any>, setting: any) => {
        acc[setting.key] = setting.value;
        return acc;
      }, {});
    });
  }

  async updateSetting(id: number, data: FormData) {
    console.log('Updating setting with ID:', id);
    console.log('FormData contents:');
    for (const pair of data.entries()) {
      console.log(pair[0], pair[1]);
    }

    return api.post(`/admin/settings/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
  }
}

export const adminService = new AdminService(); 