import axios from 'axios';
import { API_BASE_URL } from './constants';

export const apiService = {
  getUserInfo: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/user`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw error;
    }
  },

  getPerformanceData: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/performance?days=7`);
      return response.data;
    } catch (error) {
      console.error('Error fetching performance data:', error);
      throw error;
    }
  },

  getSnapshotPolicy: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/snapshot-policy`);
      return response.data;
    } catch (error) {
      console.error('Error fetching snapshot policy:', error);
      throw error;
    }
  },

  saveSnapshotPolicy: async (policyData: any) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/snapshot-policy`, policyData);
      return response.data;
    } catch (error) {
      console.error('Error saving snapshot policy:', error);
      throw error;
    }
  },
};
