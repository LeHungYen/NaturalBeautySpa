import axios from 'axios'

const baseUrl = 'http://localhost:8080';
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
        return response.data;
    } catch (e) {
        // ex handle
    }
}