import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

// api.interceptors.request.use(config => {
//     const token = localStorage.getItem('userToken');
//     const authToken = token ? token : null;
//     if (authToken) {
//         config.headers['Authorization'] = `Bearer ${authToken}`;
//     }
//     return config;
// },
//     error => Promise.reject(error));

export default api;