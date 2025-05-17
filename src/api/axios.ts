import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiCep = axios.create({
  baseURL: 'https://viacep.com.br/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api, apiCep };
