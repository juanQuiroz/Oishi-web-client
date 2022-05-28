import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { apitest } from "../../config/axios";
import { useRouter } from "next/router";
import Link from "next/link";
import PedidosContext from "../../context/pedidos/pedidosContex";
import Layout from "../../components/Layout";
import Swal from "sweetalert2";

const signup = ({ setEditarCliente, cliente }) => {
  const pedidosContext = useContext(PedidosContext);
  const { addCustomer } = pedidosContext;

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      dni: "",
      phone: "",
      email: "",
      password: "",
      password_confirmation: "",
      is_active: true,
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("Nombres obligatorios"),
      last_name: Yup.string().required("Apellidos Obligatorios"),
      dni: Yup.string().required("DNI Obligatorio"),
      phone: Yup.string().required("Telefono Obligatorio"),
      email: Yup.string().required("Correo obligatorio"),
      password: Yup.string().required("Contraseña obligatoria"),
      password_confirmation: Yup.string().required("COnfirma tu contraseña"),
    }),

    onSubmit: async (values, { resetForm }) => {
      // PARA WEB SOCKET - API PHP
      try {
        const res = await apitest.post(
          "/api/v2/auth/customers/register",
          values,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          },
        );
        console.log("🚀 ~ file: signup.js ~ line 49 ~ onSubmit: ~ res", res);
        // SWALHERE
        Swal.fire({
          title: "Usuario creado satisfactoriamente",
          text: " 🥰Gracias por unirte a la familia Oishi",
          icon: "success",
          confirmButtonText: "Aceptar",

          allowOutsideClick: () => !Swal.isLoading(),
        });
        router.push("/users/clientes");
      } catch (e) {
        console.log(e);
      }

      resetForm();
    },
  });
  return (
    <Layout>
      <div className="flex  flex-col sm:flex-row sm:w-full sm:justify-center sm:-mt-10">
        <div className="sm:w-9/12 sm:flex sm:justify-evenly sm:items-center bg-gradient-to-b from-blueGray-100  to-blueGray-200  my-6 mx-3 p-4 rounded-xl">
          <div className="sm:w-5/12">
            <div className="w-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 text-oishiAzul sm:h-40 sm:w-40 text-center mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              <div>
                <h2 className=" text-2xl sm:text-3xl text-gray-900 font-bold font-Andika">
                  Unete a la familia Oishi
                </h2>
                <h3 className=" text-xl sm:text-2xl font-Cunia -mt-2 text-oishiRojo">
                  Crea una cuenta
                </h3>
              </div>
            </div>
          </div>

          <form
            className="sm:w-7/12 mt-6 sm:px-10"
            onSubmit={formik.handleSubmit}
          >
            <div className="mb-2">
              <p className="text-oishiAzul3 font-Andika font-bold text-md ml-1">
                Nombres:
              </p>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.first_name}
                className="w-full bg-white rounded-md px-1 py-1 shadow-oishiShadow1 appearance-none"
                type="text"
                name="first_name"
                placeholder="Ingresa tus nombres"
              />
              {formik.touched.first_name && formik.errors.first_name ? (
                <p className="mt-0 mb-4 text-red-500">
                  *{formik.errors.first_name}
                </p>
              ) : null}
            </div>
            <div className=" mb-2">
              <p className="text-oishiAzul3 font-Andika font-bold text-md ml-1">
                Apellidos:
              </p>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.last_name}
                className="w-full bg-white rounded-md px-1 py-1 shadow-oishiShadow1 appearance-none"
                type="text"
                name="last_name"
                placeholder="Ingresa tus apellidos"
              />
              {formik.touched.last_name && formik.errors.last_name ? (
                <p className="mt-0 mb-4 text-red-500">
                  *{formik.errors.last_name}
                </p>
              ) : null}
            </div>

            <div className=" mb-2">
              <p className="text-oishiAzul3 font-Andika font-bold text-md ml-1">
                DNI:
              </p>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dni}
                className="w-full bg-white rounded-md px-1 py-1 shadow-oishiShadow1 appearance-none"
                type="text"
                name="dni"
                placeholder="Ingresa tu dni"
              />
              {formik.touched.dni && formik.errors.dni ? (
                <p className="mt-0 mb-4 text-red-500">*{formik.errors.dni}</p>
              ) : null}
            </div>
            <div className=" mb-2">
              <p className="text-oishiAzul3 font-Andika font-bold text-md ml-1">
                Teléfono:
              </p>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                className="w-full bg-white rounded-md px-1 py-1 shadow-oishiShadow1 appearance-none"
                type="text"
                name="phone"
                placeholder="ingresa tu telefono"
              />
              {formik.touched.phone && formik.errors.phone ? (
                <p className="mt-0 mb-4 text-red-500">*{formik.errors.phone}</p>
              ) : null}
            </div>

            <div className=" mb-2">
              <p className="text-oishiAzul3 font-Andika font-bold text-md">
                Correo:
              </p>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full bg-white rounded-md px-1 py-1 shadow-oishiShadow1 appearance-none"
                type="text"
                name="email"
                placeholder="Ingresa tu correo"
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="mt-0 mb-4 text-red-500">*{formik.errors.email}</p>
              ) : null}
            </div>
            <div className=" mb-2">
              <p className="text-oishiAzul3 font-Andika font-bold text-md ml-1">
                Contraseña:
              </p>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="w-full bg-white rounded-md px-1 py-1 shadow-oishiShadow1 appearance-none"
                type="password"
                name="password"
                placeholder="Ingresa tu correo"
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="mt-0 mb-4 text-red-500">
                  *{formik.errors.password}
                </p>
              ) : null}
            </div>
            <div className=" mb-8">
              <p className="text-oishiAzul3 font-Andika font-bold text-md ml-1">
                Confirmar Contraseña:
              </p>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password_confirmation}
                className="w-full bg-white rounded-md px-1 py-1 shadow-oishiShadow1 appearance-none"
                type="password"
                name="password_confirmation"
                placeholder="Ingresa tu correo"
              />
              {formik.touched.password_confirmation &&
              formik.errors.password_confirmation ? (
                <p className="mt-0 mb-4 text-red-500">
                  *{formik.errors.password_confirmation}
                </p>
              ) : null}
            </div>

            <div className="flex">
              <button
                type="submit"
                className="ml-1 w-full bg-oishiAzul text-white font-bold text-lg shadow-oishiShadow2 rounded-xl py-2"
              >
                Crear cuenta en Oishi
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default signup;
