import axios from 'axios'
import { baseURL } from './config'

const instance = axios.create({
  baseURL: 'https://api.thecoffeehouse.com/',
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
export const getProductList = () => instance.get('api/v2/menu')