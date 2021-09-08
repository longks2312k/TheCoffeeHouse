import axios from 'axios'
import { baseURL } from './config'

const instance = axios.create({
  baseURL: 'https://api.thecoffeehouse.com/api/',
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
export const getProductList = () => instance.get('v2/menu')
export const getStore = () => instance.get('get_all_store')
export const getCoffee = () => instance.get('v2/category/web')
export const cfLogin = (params) => instance.post('verify_mobile',params)