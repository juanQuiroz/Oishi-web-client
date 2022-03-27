import React, { useContext } from "react";
import Layout from "../Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { apitest } from "../../config/axios";
import { useRouter } from "next/router";
import Link from "next/link";
import PedidosContext from "../../context/pedidos/pedidosContex";

const Cliente = () => {
  const pedidosContext = useContext(PedidosContext);
  const { addCustomer } = pedidosContext;

  const router = useRouter();

  return <h1>Cliente</h1>;
};

export default Cliente;
