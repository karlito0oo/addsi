import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

// Configure axios defaults
axios.defaults.withCredentials = true;

// Create custom event for auth state changes
const authStateChanged = new Event('storage');

export const authService = {
    async login(credentials: { email: string; password: string }) {
        try {
            const response = await axios.post(`${API_URL}/login`, credentials, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                withCredentials: true
            });
            
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                window.dispatchEvent(authStateChanged);
            }
            return response.data;
        } catch (error: any) {
            if (error.response?.status === 422) {
                throw new Error('Invalid credentials');
            }
            throw error;
        }
    },

    async logout() {
        try {
            const token = this.getToken();
            if (token) {
                await axios.post(`${API_URL}/logout`, {}, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    withCredentials: true
                });
            }
        } finally {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.dispatchEvent(authStateChanged);
        }
    },

    getUser() {
        const userStr = localStorage.getItem('user');
        return userStr ? JSON.parse(userStr) : null;
    },

    getToken() {
        return localStorage.getItem('token');
    },

    isAuthenticated() {
        return !!this.getToken();
    }
}; 