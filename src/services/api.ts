import axios from 'axios';
import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    // Request interceptor for adding auth token
    this.api.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor for handling errors
    this.api.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => {
        if (error.response?.status === 401) {
          // Handle unauthorized access
          localStorage.removeItem('token');
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );
  }

  // Generic GET request
  async get<T>(endpoint: string): Promise<T> {
    const response = await this.api.get<T>(endpoint);
    return response.data;
  }

  // Generic POST request
  async post<T>(endpoint: string, data?: any): Promise<T> {
    const response = await this.api.post<T>(endpoint, data);
    return response.data;
  }

  // Generic PUT request
  async put<T>(endpoint: string, data?: any): Promise<T> {
    const response = await this.api.put<T>(endpoint, data);
    return response.data;
  }

  // Generic DELETE request
  async delete<T>(endpoint: string): Promise<T> {
    const response = await this.api.delete<T>(endpoint);
    return response.data;
  }
}

export const apiService = new ApiService(); 