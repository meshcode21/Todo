import axios from 'axios'

const instance = axios.create({
baseURL: import.meta.env.VITE_API_BASE_URL  ,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Dynamically attach token before each request
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;

// Redirect if unauthorized access....
instance.interceptors.response.use(
  res => res,
  err => {
    if (err.response?.status === 401) {
      // Optional: Clear token and redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);
