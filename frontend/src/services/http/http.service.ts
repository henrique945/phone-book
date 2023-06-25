//#region Imports

import axios from 'axios';

//#endregion

const API_BASE: string = 'http://localhost:3000/';

export default {
  async get(url: string): Promise<any> {
    const response =  await axios.get(API_BASE + url);
    return response.data;
  },
  async post(url: string, body: any): Promise<any> {
    const response = await axios.post(API_BASE + url, body);
    return response.data;
  },
  async update(url: string, body: any): Promise<any> {
    const response = await axios.put(API_BASE + url, body);
    return response.data;
  },
  async delete(url: string): Promise<any> {
    const response = await axios.delete(API_BASE + url);
    return response.data;
  },
};
