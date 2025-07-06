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
}

export const adminService = new AdminService(); 