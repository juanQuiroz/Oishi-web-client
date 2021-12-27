import axios from "axios";

const api = axios.create({
  baseURL: "https://oishirestaurant.herokuapp.com/api/v1",
  // baseURL: "http://api-oishi.mydevcpanel.xyz/api/v1",
});

export default api;
