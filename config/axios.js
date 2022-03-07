import axios from "axios";

export const apiv1 = axios.create({
  baseURL: process.env.v1,
});

export const apiv2 = axios.create({
  baseURL: process.env.v2,
});
