import React from "react";
import Layout from "../../components/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { apitest } from "../../config/axios";
import { useRouter } from "next/router";

const login = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Nombre obligatorio"),
      password: Yup.string().required("Nombre obligatorio"),
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
        console.log("🚀 ~ file: login.js ~ line 34 ~ onSubmit: ~ res", res);

        router.push("/carta");
      } catch (e) {
        console.log(e);
      }

      resetForm();
    },
  });

  return (
    <Layout>
      <div className="bg-blueGray-100 my-6 mx-3 p-4 rounded-xl">
        <div>
          <div className="w-full flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 text-oishiAzul3 "
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
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <p className="text-oishiAzul3 font-Andika font-bold text-md">
              Correo:
            </p>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full bg-white rounded-md px-1 py-1 shadow-oishiShadow3"
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
              className="w-full bg-white rounded-md px-1 py-1 shadow-oishiShadow3"
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
    </Layout>
  );
};

export default login;
