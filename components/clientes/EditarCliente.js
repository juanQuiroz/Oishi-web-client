import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { apitest } from "../../config/axios";
import { useRouter } from "next/router";
import Link from "next/link";
import PedidosContext from "../../context/pedidos/pedidosContex";

const EditarCliente = ({ setEditarCliente, cliente }) => {
  const pedidosContext = useContext(PedidosContext);
  const { addCustomer } = pedidosContext;

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: cliente.name,
      last_name: cliente.last_name,
      dni: cliente.dni,
      phone: cliente.phone,
      email: cliente.email,
    },
    validationSchema: Yup.object({
      name: Yup.string().required(" obligatorio"),
      last_name: Yup.string().required("Contraseña obligatoria"),
      dni: Yup.string().required("Correo obligatorio"),
      phone: Yup.string().required("Contraseña obligatoria"),
      email: Yup.string().required("Correo obligatorio"),
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
    <div className="flex flex-col sm:flex-row sm:w-full sm:justify-center sm:-mt-10">
      <div className="sm:w-9/12 sm:flex sm:justify-evenly sm:items-center bg-gradient-to-b from-blueGray-100  to-blueGray-200  my-6 mx-3 p-4 rounded-xl">
        <div className="sm:w-5/12">
          <div className="w-full flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-oishiAzul2 sm:h-44 sm:w-44 text-center mx-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h2 className=" text-2xl sm:text-3xl text-gray-900 font-bold font-Andika">
                Edita tus datos
              </h2>
              <h3 className=" text-xl sm:text-2xl font-Cunia -mt-2 text-oishiRojo">
                en Oishi
              </h3>
            </div>
          </div>
        </div>

        <form
          className="sm:w-7/12 mt-6 sm:px-10"
          onSubmit={formik.handleSubmit}
        >
          <div className="mb-2">
            <p className="text-oishiAzul3 font-Andika font-bold text-md">
              Nombres:
            </p>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="w-full bg-white rounded-md px-1 py-1 shadow-oishiShadow1 appearance-none"
              type="text"
              name="name"
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="mt-0 mb-4 text-red-500">*{formik.errors.name}</p>
            ) : null}
          </div>
          <div className=" mb-2">
            <p className="text-oishiAzul3 font-Andika font-bold text-md">
              Apellidos:
            </p>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.last_name}
              className="w-full bg-white rounded-md px-1 py-1 shadow-oishiShadow1 appearance-none"
              type="text"
              name="last_name"
            />
            {formik.touched.last_name && formik.errors.last_name ? (
              <p className="mt-0 mb-4 text-red-500">
                *{formik.errors.last_name}
              </p>
            ) : null}
          </div>

          <div className=" mb-2">
            <p className="text-oishiAzul3 font-Andika font-bold text-md">
              DNI:
            </p>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dni}
              className="w-full bg-white rounded-md px-1 py-1 shadow-oishiShadow1 appearance-none"
              type="text"
              name="dni"
            />
            {formik.touched.dni && formik.errors.dni ? (
              <p className="mt-0 mb-4 text-red-500">*{formik.errors.dni}</p>
            ) : null}
          </div>
          <div className=" mb-2">
            <p className="text-oishiAzul3 font-Andika font-bold text-md">
              Teléfono:
            </p>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className="w-full bg-white rounded-md px-1 py-1 shadow-oishiShadow1 appearance-none"
              type="text"
              name="phone"
            />
            {formik.touched.phone && formik.errors.phone ? (
              <p className="mt-0 mb-4 text-red-500">*{formik.errors.phone}</p>
            ) : null}
          </div>
          <div className=" mb-8">
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
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="mt-0 mb-4 text-red-500">*{formik.errors.email}</p>
            ) : null}
          </div>

          <div className="flex">
            <button
              className="mr-1 border-2 border-oishiAzul2 font-bold text-lg w-full text-oishiAzul3 shadow-oishiShadow2 rounded-xl py-2"
              onClick={() => setEditarCliente(false)}
            >
              Cancelar
            </button>
            <button className="ml-1 w-full bg-oishiAzul text-white font-bold text-lg shadow-oishiShadow2 rounded-xl py-2">
              Actualizar datos
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditarCliente;
