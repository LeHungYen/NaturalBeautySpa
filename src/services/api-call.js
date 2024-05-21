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
        return response;
    } catch (e) {
        return e.response;
    }
}

export async function doGet(endpoint) {
    try {
        return await axios.get(
            endpoint,
            {
                baseURL: baseUrl,
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
    } catch (e) {
        console.log(e)
    }
}