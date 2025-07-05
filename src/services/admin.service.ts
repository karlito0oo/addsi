import { apiService } from './api';

interface AdminResponse {
  message: string;
  data?: any;
}

class AdminService {
  async getTeamData(): Promise<AdminResponse> {
    return await apiService.get<AdminResponse>('/admin/team');
  }

  async getPartnersData(): Promise<AdminResponse> {
    return await apiService.get<AdminResponse>('/admin/partners');
  }

  async getServicesData(): Promise<AdminResponse> {
    return await apiService.get<AdminResponse>('/admin/services');
  }

  async getWastoAchievements(): Promise<AdminResponse> {
    return await apiService.get<AdminResponse>('/admin/wasto-achievements');
  }

  async getOthersData(): Promise<AdminResponse> {
    return await apiService.get<AdminResponse>('/admin/others');
  }
}

export const adminService = new AdminService(); 