import React, { useContext } from "react";
import Layout from "../../components/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { apitest } from "../../config/axios";
import { useRouter } from "next/router";
import Link from "next/link";
import PedidosContext from "../../context/pedidos/pedidosContex";
import Cliente from "../../components/clientes/cliente";
import Login from "../../components/clientes/login";

const cliente = () => {
  const pedidosContext = useContext(PedidosContext);
  const { addCustomer, cliente } = pedidosContext;

  return <Layout>{cliente ? <Cliente /> : <Login />}</Layout>;
};

export default cliente;
