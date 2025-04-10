import axios from 'axios';

const API_BASE = 'http://localhost:8001/api';

export const fetchBars = (params = {}) => {
  return axios.get(`${API_BASE}/bars/`, { params });
};

export const fetchWaitTimes = (barId) => {
  return axios.get(`${API_BASE}/wait-times/?bar=${barId}`);
};

export const login = (credentials) => {
  return axios.post(`${API_BASE}/auth/login/`, credentials);
};

export const register = (userData) => {
  return axios.post(`${API_BASE}/auth/register/`, userData);
};
