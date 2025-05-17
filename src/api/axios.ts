import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiCep = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CEP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api, apiCep };
