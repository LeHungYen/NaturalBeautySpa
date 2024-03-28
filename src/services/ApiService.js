import axios from "axios";
// get
// const data = await apiService.fetchData('endpoint', {}, { Authorization: 'Bearer your_access_token' });

// post // Gửi dữ liệu với Content-Type là multipart/form-data
// await apiService.postData('endpoint', formData, {
//     'Authorization': 'Bearer your_access_token',
//     'Content-Type': 'multipart/form-data'
// });

// post // Gửi dữ liệu với Content-Type là application/json (Mặc định)
// await apiService.postData('endpoint', jsonData);


// put
// const putData = { key: 'updated_value' };
// const data = await apiService.putData('endpoint', putData, { Authorization: 'Bearer your_access_token' });


// delete
// const data = await apiService.deleteData('endpoint', { Authorization: 'Bearer your_access_token' });

export class ApiService {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async fetchData(endpoint, params = {}, headers = {}) {
        try {
            const response = await axios.get(`${this.baseURL}/${endpoint}`, { params, headers });
            return response.data;
        } catch (error) {
            throw error
        }
    }

    async postData(endpoint, data, headers = {}) {
        try {
            const response = await axios.post(`${this.baseURL}/${endpoint}`, data, {
                headers: {
                    ...headers,
                    'Content-Type': headers['Content-Type'] || 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            throw error
        }
    }

    async putData(endpoint, data, headers = {}) {
        try {
            const response = await axios.put(`${this.baseURL}/${endpoint}`, data, { headers });
            return response.data;
        } catch (error) {
            throw error
        }
    }

    async deleteData(endpoint, headers = {}) {
        try {
            const response = await axios.delete(`${this.baseURL}/${endpoint}`, { headers });
            return response.data;
        } catch (error) {
            throw error
        }
    }

}
