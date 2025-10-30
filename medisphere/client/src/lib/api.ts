import axios from 'axios';

interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
  readonly DEV: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5000/api' : 'https://medisphere-cgvy.onrender.com/api'),
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

// Auth API
export const authAPI = {
  login: (email: string, password: string) =>
    api.post('/api/auth/login', { email, password }),
  register: (data: { name: string; email: string; password: string; phone?: string }) =>
    api.post('/api/auth/register', data),
};

// Hospital API
export const hospitalAPI = {
  getAll: () => api.get('/api/hospitals'),
  search: (params: { q?: string; location?: string; specialty?: string }) =>
    api.get('/api/hospitals/search', { params }),
};

// Appointment API
export const appointmentAPI = {
  create: (data: { hospitalId: string; date: string; reason?: string; notes?: string }) =>
    api.post('/api/appointments', data),
  getUserAppointments: () => api.get('/api/appointments'),
};
