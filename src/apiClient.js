import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Change this to your backend base URL

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const fetchLastOrder = async (userId) => {
  return api.get('/orders/last', { params: { userId } });
};


export const fetchCategories = async () => {
  
  return api.get('/categories');
};


export const fetchProducts = async (categoryKey) => {
  
  return api.get('/products', categoryKey ? { params: { category: categoryKey } } : undefined);
};


export const postCurrentOrder = async (order, userId) => {
  
  return api.post('/orders/current', { order, userId });
};


export const updateCart = async (cart, userId) => {
  
  return api.put('/cart', { cart, userId });
};


export const fetchCart = async (userId) => {
  
  return api.get('/cart', { params: { userId } });
};

export default api;
