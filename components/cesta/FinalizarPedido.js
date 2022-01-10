import React from "react";
import Subtitulo from "../ui/Subtitulo";
import { useFormik } from "formik";
import * as Yup from "yup";
import PedidosContext from "../../context/pedidos/pedidosContex";
import axios from "axios";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

import Swal from "sweetalert2";
import Link from "next/link";
import { useRouter } from "next/router";

const FinalizarPedido = () => {
  const router = useRouter();
  const [horarioLaboral, setHorarioLaboral] = React.useState(false);

  // por defecto el metodo de entrega es mediante delivery
  const [entregaDelivery, setEntregaDelivery] = React.useState(true);
  const [efectivo, setEfectivo] = React.useState(false);

  const pcontext = React.useContext(PedidosContext);
  const {
    vaciarTotalPedido,
    addDataPedido,
    presentacion,
    ofertasSeleccionada,
    combosSeleccionados,
    totalPedidos,
    localSeleccionado,
    setConfirmarpedido,
    vaciarCesta,
  } = pcontext;

  dayjs.extend(isBetween);

  React.useEffect(() => {
    if (localSeleccionado == 1) {
      var startHour = dayjs().hour(12).minute(15);
      var endHour = dayjs().hour(21).minute(45);
    } else if (localSeleccionado == 2) {
      var startHour = dayjs().hour(12).minute(15);
      var endHour = dayjs().hour(20).minute(45);
    }

    setHorarioLaboral(dayjs().isBetween(startHour, endHour));
  }, [horarioLaboral]);

  const formik = useFormik({
    initialValues: {
      nombre_razon_social: "",
      dni_ruc: "",
      telefono: "",
      metEntrega: "1", // Valor por defecto (Checked)
      direccion_entrega: "",
      referencia: "",
      recoge_pedido: "",
      tipoComprobante: "",
      metodoPago: "",
      cantidad_efectivo: "",
      paraComprobanteDePago: "", // Valor por defecto (Checked)
      dedicatoria: "", // De momento cremas y salsas
    },
    validationSchema: Yup.object({
      nombre_razon_social: Yup.string().required("Nombre obligatorio"),
      dni_ruc: Yup.number()
        .integer("Ingrese solo numeros")
        .typeError("Ingrese solo numeros")
        .required("DNI_RUC requerido"),
      telefono: Yup.number()
        .integer("Ingrese solo numeros")
        .typeError("Ingrese solo numeros")
        .required("telefono requerido"),
      metEntrega: Yup.string().required("ingrese metodo de entrega"),
      direccion_entrega: Yup.string().when("entregaDelivery", {
        is: true,
        then: Yup.string().required("Direccion obligatoria"),
      }),
      referencia: Yup.string().when("entregaDelivery", {
        is: true,
        then: Yup.string().required("Referencia obligatoria"),
      }),
      recoge_pedido: Yup.string().required("Nombre obligatorio"), // campo se repite en DELIVERY Y REC TIENDA
      // tipoComprobante: Yup.string().required("obligatorio"), //
      metodoPago: Yup.string().required("Metodo de pago obligatorio"),
      cantidad_efectivo: Yup.number()
        .typeError("Ingrese solo numeros")
        .when("efectivo", {
          is: true,
          then: Yup.number()
            .typeError("Ingrese solo numeros")
            .required("Cantidad de efectivo obligatorio"),
        }),
      // dedicatoria: Yup.string().required("Campo obligatorio"),
    }),

    onSubmit: async (values, { resetForm }) => {
      // Enviar datos al Context state

      // Estraer solo cantidad y id de la presentacion
      const pedidoPresentaciones = presentacion.map(p => {
        return { id: p.id, cantidad: p.cantidad };
      });
      // Estraer solo cantidad y id de  ofertasSeleccionada
      const pedidofertasSeleccionada = ofertasSeleccionada.map(p => {
        return { id: p.oferta_id, cantidad: p.cantidad };
      });
      // Estraer solo cantidad y id de combosSeleccionados
      const pedidocombosSeleccionados = combosSeleccionados.map(p => {
        return { id: p.presentacion_id, cantidad: p.cantidad };
      });

      console.log("presentaciones_combos", pedidocombosSeleccionados);
      console.log("presentaciones_productos: ", pedidoPresentaciones);
      console.log("OFERTAS", pedidofertasSeleccionada);

      // PARA WEB SOCKET - API PHP
      try {
        const res = await axios.post(
          "http://weboishibackend.com/weboishi/crearpedido",
          {
            local_id: localSeleccionado,
            paraComprobantePago: values.paraComprobanteDePago,
            dni_ruc: values.dni_ruc,
            nombre_razon_social: values.nombre_razon_social,
            dedicatoria: values.dedicatoria,
            metodo_entrega_id: values.metEntrega,
            direccion_entrega: values.direccion_entrega,
            referencia: values.referencia,
            metodo_pago_id: values.metodoPago,
            cantidad_efectivo: values.cantidad_efectivo,
            comprobante_pago_id: values.tipoComprobante,
            telefono: values.telefono,
            persona_asignada: values.recoge_pedido,
            presentaciones_productos: pedidoPresentaciones,
            presentaciones_combos: pedidocombosSeleccionados,
            ofertas: pedidofertasSeleccionada,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          },
        );
        console.log("Socket Res: ", res);
        // SWALHERE
        Swal.fire({
          title: "Pedido realizado",
          text: "Gracias por pedir en Oishi",
          icon: "success",
          confirmButtonText: "Aceptar",

          allowOutsideClick: () => !Swal.isLoading(),
        }).then(() => {
          if (entregaDelivery) {
            Swal.fire({
              confirmButtonText: "Aceptar",
              imageUrl:
                "https://res.cloudinary.com/alldevsoftware/image/upload/v1640842766/oishilanding/delivery_xuwobo.jpg",
              imageWidth: 450,
              imageHeight: 426,
              imageAlt: "Oishi message",
            });
          } else {
            Swal.fire({
              confirmButtonText: "Aceptar",
              imageUrl:
                "https://res.cloudinary.com/alldevsoftware/image/upload/v1640842766/oishilanding/recojo_hhids9.jpg",
              imageWidth: 450,
              imageHeight: 426,
              imageAlt: "Oishi message",
            });
          }
        });
        vaciarCesta();
        router.push("/carta");
      } catch (e) {
        console.log(e);
      }

      // Para NOTIFICACION PUSH
      try {
        const res = await axios.post(
          "http://weboishibackend.com/weboishi/nuevopedido",
          {
            local_id: localSeleccionado,
            dni_ruc: values.dni_ruc,
            nombre_razon_social: values.nombre_razon_social,
            dedicatoria: values.dedicatoria,
            metodo_entrega_id: values.metEntrega,
            direccion_entrega: values.direccion_entrega,
            referencia: values.referencia,
            metodo_pago_id: values.metodoPago,
            cantidad_efectivo: values.cantidad_efectivo,
            comprobante_pago_id: values.tipoComprobante,
            telefono: values.telefono,
            persona_asignada: values.recoge_pedido,
            presentaciones_productos: pedidoPresentaciones,
            presentaciones_combos: pedidocombosSeleccionados,
            ofertas: pedidofertasSeleccionada,
            paraComprobantePago: values.paraComprobanteDePago,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          },
        );
        console.log("Push Res: ", res);
      } catch (e) {
        console.log(e);
      }
      resetForm();
    },
  });

  return (
    <>
      {horarioLaboral == true ? (
        <div>
          <Subtitulo>Continuar con el pedido</Subtitulo>
          <form onSubmit={formik.handleSubmit} className="font-Andika">
            <div className="rounded-md p-1 sm:p-3">
              <div className="bg-blueGray-200 p-2 rounded-lg mb-2">
                <p className="text-black text-md">Nombre / Raz. Soc.:</p>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.nombre_razon_social}
                  className="w-full bg-blueGray-50 rounded-lg px-1"
                  type="text"
                  name="nombre_razon_social"
                  placeholder="Nombres y apellidos o razon social"
                />
                {formik.touched.nombre_razon_social &&
                formik.errors.nombre_razon_social ? (
                  <p className="mt-0 mb-4 text-red-500">
                    *{formik.errors.nombre_razon_social}
                  </p>
                ) : null}
                <p className="text-black text-md mt-2">DNI / RUC:</p>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dni_ruc}
                  className="w-full bg-blueGray-50 rounded-lg px-1"
                  type="text"
                  name="dni_ruc"
                />
                {formik.touched.dni_ruc && formik.errors.dni_ruc ? (
                  <p className="mt-0 mb-4 text-red-500">
                    *{formik.errors.dni_ruc}
                  </p>
                ) : null}
                <p className="text-black text-md mt-2">Telefono:</p>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.telefono}
                  className="w-full bg-blueGray-50 rounded-lg px-1"
                  type="text"
                  name="telefono"
                />
                {formik.touched.telefono && formik.errors.telefono ? (
                  <p className="mt-0 mb-4 text-red-500">
                    *{formik.errors.telefono}
                  </p>
                ) : null}
              </div>
              <div className="bg-blueGray-200 p-2 rounded-lg mb-2">
                <p className="text-black text-md">
                  ¿Como quieres recibir tu pedido?
                </p>
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.metEntrega}
                      value="1"
                      defaultChecked
                      type="radio"
                      className="form-radio"
                      name="metEntrega"
                      onClick={() => setEntregaDelivery(true)}
                    />
                    <span className="ml-2">Delivery</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.metEntrega}
                      value="2"
                      type="radio"
                      className="form-radio"
                      name="metEntrega"
                      onClick={() => setEntregaDelivery(false)}
                    />
                    <span className="ml-2">Recojo en tienda</span>
                  </label>
                </div>
                {entregaDelivery ? (
                  <div className="bg-blueGray-300 p-2 rounded-lg  shadow mt-1">
                    <p className="text-black text-md">
                      ¿A donde te llevamos tu pedido?
                    </p>
                    <p className="text-black text-sm mt-2">
                      Direccion de entrega
                    </p>
                    <input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.direccion_entrega}
                      className="w-full bg-blueGray-50 rounded-lg px-1"
                      type="text"
                      name="direccion_entrega"
                    />
                    {formik.touched.direccion_entrega &&
                    formik.errors.direccion_entrega ? (
                      <p className="mt-0 mb-4 text-red-500">
                        *{formik.errors.direccion_entrega}
                      </p>
                    ) : null}

                    <p className="text-black text-sm mt-2">Referencia</p>
                    <input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.referencia}
                      className="w-full bg-blueGray-50 rounded-lg px-1"
                      type="text"
                      name="referencia"
                    />
                    {formik.touched.referencia && formik.errors.referencia ? (
                      <p className="mt-0 mb-4 text-red-500">
                        *{formik.errors.referencia}
                      </p>
                    ) : null}

                    <p className="text-black text-sm mt-2">Recibe el pedido:</p>
                    <input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.recoge_pedido}
                      className="w-full bg-blueGray-50 rounded-lg px-1"
                      type="text"
                      name="recoge_pedido"
                    />
                    {formik.touched.recoge_pedido &&
                    formik.errors.recoge_pedido ? (
                      <p className="mt-0 mb-4 text-red-500">
                        *{formik.errors.recoge_pedido}
                      </p>
                    ) : null}
                  </div>
                ) : (
                  <div className="bg-blueGray-300 p-2 rounded-lg shadow mt-1">
                    <p className="text-black text-md">
                      ¿Quien recoge tu pedido?
                    </p>
                    <p className="text-black text-sm mt-2">
                      Nombres y apellidos
                    </p>
                    <input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.recoge_pedido}
                      className="w-full bg-blueGray-50 rounded-lg px-1"
                      type="text"
                      name="recoge_pedido"
                    />
                    {formik.touched.recoge_pedido &&
                    formik.errors.recoge_pedido ? (
                      <p className="mt-0 mb-4 text-red-500">
                        *{formik.errors.recoge_pedido}
                      </p>
                    ) : null}
                  </div>
                )}
              </div>
              <div className="bg-blueGray-200 p-2 rounded-lg mb-2">
                <p className="text-black text-md">Comprobante de pago</p>
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.tipoComprobante}
                      type="radio"
                      className="form-radio"
                      name="tipoComprobante"
                      value="1"
                    />

                    <span className="ml-2">Factura</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.tipoComprobante}
                      type="radio"
                      className="form-radio"
                      name="tipoComprobante"
                      value="2"
                    />

                    <span className="ml-2">Boleta</span>
                  </label>
                </div>
                <p className="text-black text-sm mt-2">
                  Nombre / Raz. Soc. - DNI / RUC (para facturación)
                </p>
                {/* DATOS PARA COMPROBANTE DE PAGO */}
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.paraComprobanteDePago}
                  className="w-full bg-blueGray-50 rounded-lg px-1"
                  type="text"
                  name="paraComprobanteDePago"
                  placeholder="Ej: Juan Perez - 12345678"
                />
                {formik.touched.paraComprobanteDePago &&
                formik.errors.paraComprobanteDePago ? (
                  <p className="mt-0 mb-4 text-red-500">
                    *{formik.errors.paraComprobanteDePago}
                  </p>
                ) : null}
              </div>
              <div className="bg-blueGray-200 p-2 rounded-lg mb-2">
                <p className="text-black text-md">Método de pago</p>
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.metodoPago}
                      type="radio"
                      className="form-radio"
                      name="metodoPago"
                      value="1"
                      onClick={() => setEfectivo(false)}
                    />
                    <span className="ml-2">POS</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.metodoPago}
                      type="radio"
                      className="form-radio"
                      name="metodoPago"
                      value="2"
                      onClick={() => setEfectivo(true)}
                    />
                    <span className="ml-2">Efectivo</span>
                  </label>
                </div>
                {efectivo ? (
                  <div className="bg-blueGray-300 p-2 rounded-lg shadow mt-1">
                    <p className="text-black text-sm ">paga con:</p>
                    <input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.cantidad_efectivo}
                      className="w-full bg-blueGray-50 rounded-lg px-1"
                      type="text"
                      placeholder="S/ Monto con el que paga"
                      name="cantidad_efectivo"
                    />{" "}
                    {formik.touched.cantidad_efectivo &&
                    formik.errors.cantidad_efectivo ? (
                      <p className="mt-0 mb-4 text-red-500">
                        *{formik.errors.cantidad_efectivo}
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </div>
              <div className="bg-blueGray-200 p-2 rounded-lg mb-2">
                <p className="text-black text-md mb-1">
                  {/* <span className="font-semibold">
                    Que salsa desea para su pedido?
                  </span>{" "}
                  <br />
                  <span className="font-semibold">Nota:</span> Recuerde que la
                  cantidad depende de la presentación a comprar acevichado,
                  <span className="font-semibold">
                    maracuya, anguila, tiradito, aji oishi:
                  </span> */}
                  <span className="font-semibold">
                    Elige tus salsas favoritas: acevichado, maracuya, anguila,
                    tiradito, aji oishi.
                  </span>{" "}
                  <span className="text-gray-700">
                    Pero Recuerda que la cantidad de salsas (Salseros) depende
                    de la presentación a comprar,
                  </span>{" "}
                  <span className="text-blue-700">
                    si quieres conocer cuanto te corresponde
                  </span>{" "}
                  <Link href="https://drive.google.com/file/d/14iQ7ZY-jNUMtqSP-6yFcpEOUi2bkc_x2/view?usp=sharing">
                    <a target="_blank" className="text-blue-600 font-bold">
                      haz clic aquí
                    </a>
                  </Link>
                </p>
                <textarea
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dedicatoria}
                  className="w-full bg-blueGray-50 rounded-lg px-1"
                  type="textBox"
                  name="dedicatoria"
                  placeholder="Ej: Maracuya x2 - Anguila x3"
                />
                {formik.touched.dedicatoria && formik.errors.dedicatoria ? (
                  <p className="mt-0 mb-4 text-red-500">
                    *{formik.errors.dedicatoria}
                  </p>
                ) : null}
              </div>

              <div className="px-1">
                {entregaDelivery && (
                  <p className="text-sm text-gray-700 leading-4">
                    * Si seleccionó la modalidad{" "}
                    <span className="font-semibold">Delivery</span> se
                    adicionará el costo de envío a la dirección que indico por
                    consiguiente el monto a pagar se incrementará. Revisa
                    nuestros costos de envío en
                    <span>
                      {" "}
                      <a
                        href="/cobertura"
                        target="_blank"
                        className="font-semibold text-oishiAzul"
                      >
                        Nuestra cobertura
                      </a>
                    </span>
                  </p>
                )}
              </div>
              <div className="flex justify-between mt-4">
                <p className="text-oishiNegro text-lg">Total:</p>
                <p className="text-oishiNegro text-xl font-semibold">
                  S/ {totalPedidos.toFixed(2)}
                </p>
              </div>

              <div className="flex mt-6 mb-4 justify-evenly">
                <button
                  onClick={() => {
                    setConfirmarpedido(false);
                    // vaciarTotalPedido();
                  }}
                  className="font-semibold text-white bg-red-500 px-3 py-2 rounded-full shadow-red hover:shadow-redPlus min-h-10 hover:bg-red-600"
                >
                  Volver
                </button>
                <button
                  type="submit"
                  className="font-semibold text-white bg-green-500 px-3 py-2 rounded-full shadow-green min-h-10 hover:bg-green-600"
                >
                  Confirmar Pedido
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-alert-circle"
            width={54}
            height={54}
            viewBox="0 0 24 24"
            stroke-width={2}
            stroke="#ff2820"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx={12} cy={12} r={9}></circle>
            <line x1={12} y1={8} x2={12} y2={12}></line>
            <line x1={12} y1={16} x2="12.01" y2={16}></line>
          </svg>
          <h2 className="text-lg font-Andika font-semibold py-1 text-red-600">
            lo sentimos, estas fuera del horario de atención. Puedes pedir entre
            <br />
            <span className=" text-2xl text-red-500">12:00 pm - 09:45 pm</span>
          </h2>
        </div>
      )}
    </>
  );
};

export default FinalizarPedido;
