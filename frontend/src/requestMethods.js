import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzk4NDAyMzljNWYxYmJlZGY2MDRmNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTYxNjM2MCwiZXhwIjoxNjQxODc1NTYwfQ.LLYliKrZz2jHH62SvHk1PQDaD4P7AQEbsnc2rtUDDqA";

export const publicRequest = axios.create({
    baseUrl: BASE_URL
});
export const userRequest = axios.create({
    baseUrl: BASE_URL,
    header: {token:`Bearer ${TOKEN}`}
});