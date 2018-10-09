import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';

const API_URL = 'http://localhost:8080';

export function getProducts() {
  const request = axios.get(`${API_URL}/products`);

  return {
    type: GET_PRODUCTS,
    payload: request
  };
}
