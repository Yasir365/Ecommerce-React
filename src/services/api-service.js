import axios from 'axios';
const BASE_URL = 'http://localhost:8080/api/ecommerce-react-apis/v1';

const route = (path) => `${BASE_URL}${path}`

const apiService = {
    signup: async (data) => {
        const response = await axios.post(route('/auth/register'), data);
        return response.data;
    },

    login: async (data) => {
        const response = await axios.post(route('/auth/login'), data);
        return response.data;
    },
    
    forgetPassword: async (data) => {
        const response = await axios.post(route('/auth/forget-password'), data);
        return response.data;
    },

    getUsers: async (token) => {
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const response = await axios.get(route('/users'), { headers });
        return response.data;
    },

};

export default apiService;