import axios from 'axios'

const baseUrl = 'https://localhost:8080';
export default async function post(data, endpoint) {
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
}