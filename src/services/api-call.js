import axios from 'axios'

const baseUrl = 'https://api.socialsphere.vn';
export default async function post(data, endpoint) {
    try {
        const response = await axios.post(
            endpoint,
            data,
            {
                baseURL: baseUrl,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        return response;
    } catch (e) {
        return e.response;
    }
}