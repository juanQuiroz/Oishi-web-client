import axios from "axios";

const api = axios.create({
  baseURL: process.env.customKey,
});

export default api;
