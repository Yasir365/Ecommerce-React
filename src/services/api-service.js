import axios from 'axios';


const BASE_URL = 'https://ecommerce-react-backend.vercel.app/api/ecommerce-react-apis/v1';
// const BASE_URL = 'http://localhost:8080/api/ecommerce-react-apis/v1';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

const setAuthToken = () => {
    const token = localStorage.getItem('token');
    axiosInstance.defaults.headers.common.Authorization = token ? `Bearer ${token}` : '';
};

const apiService = {
    signup: async (data) => {
        const response = await axiosInstance.post('/auth/register', data);
        return response.data;
    },

    login: async (data) => {
        const response = await axiosInstance.post('/auth/login', data);
        return response.data;
    },

    forgetPassword: async (data) => {
        const response = await axiosInstance.post('/auth/forget-password', data);
        return response.data;
    },

    verifyOtp: async (data) => {
        const response = await axiosInstance.post('/auth/verify-otp', data);
        return response.data;
    },

    resetPassword: async (data) => {
        const response = await axiosInstance.post('/auth/reset-password', data);
        return response.data;
    },

    verifyToken: async () => {
        setAuthToken();
        const response = await axiosInstance.get('/auth/verify-token');
        return response;
    },

    addProduct: async (data) => {
        setAuthToken();
        const response = await axiosInstance.post('/products/add-product', data);
        return response;
    },

    getProducts: async (data) => {
        const response = await axiosInstance.post(`/products/get-product`, data);
        return response;
    },

    toggleUserStatus: async (id) => {
        setAuthToken();
        const response = await axiosInstance.get('/users/toggle-user-status?userId=' + id);
        return response;
    },

    getUsers: async (data) => {
        setAuthToken();
        const response = await axiosInstance.post('/users/list', data);
        return response;
    },

    deleteProduct: async (id) => {
        setAuthToken();
        const response = await axiosInstance.delete('/products/delete-product?productId=' + id);
        return response;
    },

    updateProduct: async (data) => {
        setAuthToken();
        const response = await axiosInstance.post('/products/update-product', data);
        return response;
    },

};

export default apiService;