import axios from "axios";
import api from "../config/axios";
axios;

export const CartaOishi = async ({ setData }) => {
  const res = await api.get("/obtenerCartaPorLocal/390/1", {
    headers: {
      Authorization: 'Token token="bf32645311c1e2cd38a563ff38f1eb3a"',
    },
  });
  setData(res.data.data);
};

// export const obtenerCarta = () =>
//   api
//     .get("/obtenerCartaPorLocal/390/1", {
//       headers: {
//         Authorization: 'Token token="bf32645311c1e2cd38a563ff38f1eb3a"',
//       },
//     })
//     .then(res => res.data);

// export const getUser = id =>
//   api.get(`/usuarios/obtenerUsuario/${id}`).then(res => res.data);

// export const updateUSer = ({ _id, ...updatedUser }) =>
//   api.put(`/usuarios/${_id}`, updatedUser).then(res => res.data);
