import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3004',
})

export async function get(url) {
  const { data } = await api.get(url);
  return data;
}