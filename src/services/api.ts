import axios, { AxiosInstance } from 'axios'

// export const api: AxiosInstance = axios.create({
//   baseURL: process.env.REACT_APP_API_URL

//})

const baseURL = 'https://localhost:7073/api';

export const api: AxiosInstance = axios.create({
  baseURL: baseURL
});