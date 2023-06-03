import axios from 'axios';

export const blogAxios = axios.create({
  baseURL: 'https://strapi-itb-demo.onrender.com/api/',
});
