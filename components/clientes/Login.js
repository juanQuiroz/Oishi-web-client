import React, { useContext } from "react";
import Layout from "../Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { apitest } from "../../config/axios";
import { useRouter } from "next/router";
import Link from "next/link";
import PedidosContext from "../../context/pedidos/pedidosContex";

const Login = () => {
  const pedidosContext = useContext(PedidosContext);
  const { addCustomer } = pedidosContext;

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Correo obligatorio"),
      password: Yup.string().required("Contraseña obligatoria"),
    }),

    onSubmit: async (values, { resetForm }) => {
      // PARA WEB SOCKET - API PHP
      try {
        const res = await apitest.post(
          "/api/v2/auth/customers/login",
          {
            email: values.email,
            password: values.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          },
        );

        localStorage.setItem(
          "customer",
          JSON.stringify(res.data.data.customer),
        );

        addCustomer(res.data.data.customer);
        router.push("/carta");
      } catch (e) {
        console.log(e);
      }

      resetForm();
    },
  });

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:w-full">
        <div className="sm:w-7/12 sm:flex sm:justify-evenly sm:items-center bg-gradient-to-b from-blueGray-100  to-blueGray-200  my-6 mx-3 p-4 rounded-xl">
          <div className="sm:w-5/12">
            <div className="w-full flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 text-oishiAzul3 sm:h-28 sm:w-28"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-center text-2xl text-gray-900 font-bold font-Andika">
              Inicia Sesión
            </h2>
            <h3 className="text-center text-xl font-Cunia -mt-2 text-oishiRojo">
              en Oishi
            </h3>
          </div>
          <form className="sm:w-7/12" onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <p className="text-oishiAzul3 font-Andika font-bold text-md">
                Correo:
              </p>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full bg-white rounded-md px-1 py-2 shadow-oishiShadow1 appearance-none"
                type="text"
                name="email"
                placeholder="Correo electrónico"
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="mt-0 mb-4 text-red-500">*{formik.errors.email}</p>
              ) : null}
            </div>
            <div className=" mb-8">
              <p className="text-oishiAzul3 font-Andika font-bold text-md">
                Contraseña:
              </p>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="w-full bg-white rounded-md px-1 py-2 shadow-oishiShadow1 appearance-none"
                type="password"
                name="password"
                placeholder="***********"
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="mt-0 mb-4 text-red-500">
                  *{formik.errors.password}
                </p>
              ) : null}
            </div>

            <button className="w-full bg-oishiAzul text-white font-bold text-lg shadow-oishiShadow2 rounded-xl py-2">
              Iniciar Sesión
            </button>
          </form>
        </div>
        <div className="sm:w-5/12 my-6 mx-3 p-4 bg-gradient-to-b from-blueGray-100  to-blueGray-200 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="sm:h-28 sm:w-28 h-20 w-20 text-oishiAzul3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h2 className="text-lg sm:text-2xl font-Andika text-black font-bold">
            ¿Aun no eres parte de la familia Oishi?
          </h2>

          <Link href="/users/signup">
            <a className="text-lg sm:text-xl font-Andika text-oishiRojo  underline">
              Crea una cuenta en Oishi desde aquí
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
