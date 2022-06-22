import axios from 'axios';
import queryString from 'query-string';
import API_CONFIG from './apiConfig';

const axiosClient = axios.create({
    baseURL: API_CONFIG.Url,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify({...params, api_key: API_CONFIG.ApiKey})
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    throw error;
});

export default axiosClient;