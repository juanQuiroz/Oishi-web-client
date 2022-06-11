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
import { privateEncrypt } from "crypto";

const FinalizarPedido = () => {
  const router = useRouter();
  const [horarioLaboral, setHorarioLaboral] = React.useState(false);

  // por defecto el metodo de entrega es mediante delivery
  const [entregaDelivery, setEntregaDelivery] = React.useState(true);
  const [efectivo, setEfectivo] = React.useState(false);
  const [metodoDePago, setMetodoDePago] = React.useState(null);
  const [metodoDeDelivery, setMetodoDeDelivery] = React.useState(null);
  const [comprobantePago, setComprobantePago] = React.useState(null);

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
    salsasConfig,
  } = pcontext;

  dayjs.extend(isBetween);

  // Horarios de trabajo
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
      dedication: "",
      total_price: totalPedidos,
      customer_name: "",
      dni_ruc: "",
      phone: "",
      metEntrega: "1", // Valor por defecto (Checked)
      delivery_address: "",
      reference: "",
      assigned_person: "",
      tipoComprobante: "",
      metodoPago: "",
      cash: "",
      paraComprobanteDePago: "", // Valor por defecto (Checked)
      // dedicatoria: "", // De momento cremas y salsas
    },
    // validationSchema: Yup.object({
    //   customer_name: Yup.string().required("Nombre obligatorio"),
    //   dni_ruc: Yup.number()
    //     .integer("Ingrese solo numeros")
    //     .typeError("Ingrese solo numeros")
    //     .required("DNI_RUC requerido"),
    //   phone: Yup.number()
    //     .integer("Ingrese solo numeros")
    //     .typeError("Ingrese solo numeros")
    //     .required("telefono requerido"),
    //   metEntrega: Yup.string().required("ingrese metodo de entrega"),
    //   delivery_address: Yup.string().when("entregaDelivery", {
    //     is: true,
    //     then: Yup.string().required("Direccion obligatoria"),
    //   }),
    //   reference: Yup.string().when("entregaDelivery", {
    //     is: true,
    //     then: Yup.string().required("Referencia obligatoria"),
    //   }),
    //   assigned_person: Yup.string().required("Nombre obligatorio"), // campo se repite en DELIVERY Y REC TIENDA
    //   // tipoComprobante: Yup.string().required("obligatorio"), //
    //   metodoPago: Yup.string().required("Metodo de pago obligatorio"),
    //   cash: Yup.number()
    //     .typeError("Ingrese solo numeros")
    //     .when("efectivo", {
    //       is: true,
    //       then: Yup.number()
    //         .typeError("Ingrese solo numeros")
    //         .required("Cantidad de efectivo obligatorio"),
    //     }),
    //   // dedicatoria: Yup.string().required("Campo obligatorio"),
    // }),

    onSubmit: async (values, { resetForm }) => {
      console.log("SUBMITED !!");

      const pedidoPresentaciones = presentacion.map(p => {
        return { id: p.id, quantity: p.cantidad };
      });

      const pedidofertasSeleccionada = ofertasSeleccionada.map(p => {
        return { id: p.oferta_id, quantity: p.cantidad };
      });

      const pedidocombosSeleccionados = combosSeleccionados.map(p => {
        return {
          id: p.id,
          quantity: p.cantidad,
          globalToppingSetup: p.globalToppingSetup,
        };
      });
      console.log(
        "🚀 ~ file: FinalizarPedido.js ~ line 123 ~ onSubmit: ~ combosSeleccionados",
        combosSeleccionados,
      );

      const pedidoSalsasSeleccionadas = salsasConfig.map(s => {
        return {
          id: s.id,
          quantity: s.cantSalsa,
        };
      });

      console.log("Enviado al backend ", {
        local_id: localSeleccionado,
        to_payment_proof: values.paraComprobanteDePago,
        total_price: values.total_price,
        dni_ruc: values.dni_ruc,
        customer_name: values.customer_name,
        // dedicatoria: values.dedicatoria,
        delivery_method_id: metodoDeDelivery,
        delivery_address: values.delivery_address,
        reference: values.reference,
        payment_method_id: metodoDePago,
        cash: values.cash,
        dedication: values.dedication,
        payment_proof_id: comprobantePago,
        phone: values.phone,
        assigned_person: values.assigned_person,
        content: {
          products_presentations: pedidoPresentaciones,
          offers: pedidofertasSeleccionada,
          combos_presentations: pedidocombosSeleccionados,
          sauces: pedidoSalsasSeleccionadas,
        },
      });

      // PARA WEBSOCKET - API PHP
      try {
        const res = await axios.post(
          "http://localhost:4000/crearpedido",
          {
            local_id: localSeleccionado,
            to_payment_proof: values.paraComprobanteDePago,
            total_price: values.total_price,
            dni_ruc: values.dni_ruc,
            customer_name: values.customer_name,
            // dedicatoria: values.dedicatoria,
            delivery_method_id: metodoDeDelivery,
            delivery_address: values.delivery_address,
            reference: values.reference,
            payment_method_id: metodoDePago,
            cash: values.cash,
            dedication: values.dedication,
            payment_proof_id: comprobantePago,
            phone: values.phone,
            assigned_person: values.assigned_person,
            content: {
              products_presentations: pedidoPresentaciones,
              offers: pedidofertasSeleccionada,
              combos_presentations: pedidocombosSeleccionados,
              sauces: pedidoSalsasSeleccionadas,
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          },
        );
        console.log(
          "🚀 ~ file: FinalizarPedido.js ~ line 165 ~ onSubmit: ~ res",
          res.data,
        );

        // ! descomentar luego ...

        // // SWALHERE
        // Swal.fire({
        //   title: "Pedido realizado",
        //   text: "Gracias por pedir en Oishi",
        //   icon: "success",
        //   confirmButtonText: "Aceptar",

        //   allowOutsideClick: () => !Swal.isLoading(),
        // }).then(() => {
        //   if (entregaDelivery) {
        //     Swal.fire({
        //       confirmButtonText: "Aceptar",
        //       imageUrl:
        //         "https://res.cloudinary.com/alldevsoftware/image/upload/v1640842766/oishilanding/delivery_xuwobo.jpg",
        //       imageWidth: 450,
        //       imageHeight: 426,
        //       imageAlt: "Oishi message",
        //     });
        //   } else {
        //     Swal.fire({
        //       confirmButtonText: "Aceptar",
        //       imageUrl:
        //         "https://res.cloudinary.com/alldevsoftware/image/upload/v1640842766/oishilanding/recojo_hhids9.jpg",
        //       imageWidth: 450,
        //       imageHeight: 426,
        //       imageAlt: "Oishi message",
        //     });
        //   }
        // });

        // vaciarCesta();
        // router.push("/carta");
      } catch (e) {
        console.log(e);
      }

      // try {
      //   const res = await axios.post(
      //     "http://localhost:4000/weboishi/nuevopedido",
      //     {
      //       local_id: localSeleccionado,
      //       dni_ruc: values.dni_ruc,
      //       nombre_razon_social: values.nombre_razon_social,
      //       // dedicatoria: values.dedicatoria,
      //       metodo_entrega_id: values.metEntrega,
      //       direccion_entrega: values.direccion_entrega,
      //       referencia: values.referencia,
      //       metodo_pago_id: values.metodoPago,
      //       cantidad_efectivo: values.cantidad_efectivo,
      //       comprobante_pago_id: values.tipoComprobante,
      //       telefono: values.telefono,
      //       persona_asignada: values.recoge_pedido,
      //       presentaciones_productos: pedidoPresentaciones,
      //       presentaciones_combos: pedidocombosSeleccionados,
      //       ofertas: pedidofertasSeleccionada,
      //       paraComprobantePago: values.paraComprobanteDePago,
      //     },
      //     {
      //       headers: {
      //         "Content-Type": "application/json",
      //         Accept: "application/json",
      //       },
      //     },
      //   );
      //   console.log("Push Res: ", res);
      // } catch (e) {
      //   console.log(e);
      // }

      // resetForm();
    },
  });

  return (
    <>
      {horarioLaboral == true ? (
        <div className="sm:mx-12">
          <Subtitulo>Continuar con el pedido</Subtitulo>
          <form onSubmit={formik.handleSubmit} className="font-Andika">
            <div className="rounded-md p-1 sm:p-3">
              <div className="bg-blueGray-200 p-2 rounded-lg mb-2">
                <p className="text-black text-md">Nombre / Raz. Soc.:</p>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.customer_name}
                  className="w-full bg-blueGray-50 rounded-lg px-1"
                  type="text"
                  name="customer_name"
                  placeholder="Nombres y apellidos o razon social"
                />
                {formik.touched.customer_name && formik.errors.customer_name ? (
                  <p className="mt-0 mb-4 text-red-500">
                    *{formik.errors.customer_name}
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
                  value={formik.values.phone}
                  className="w-full bg-blueGray-50 rounded-lg px-1"
                  type="text"
                  name="phone"
                />
                {formik.touched.telefono && formik.errors.phone ? (
                  <p className="mt-0 mb-4 text-red-500">
                    *{formik.errors.phone}
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
                      // value="1"
                      // defaultChecked
                      type="radio"
                      className="form-radio"
                      name="metEntrega"
                      onClick={() => {
                        setEntregaDelivery(true);
                        setMetodoDeDelivery("1");
                      }}
                    />
                    <span className="ml-2">Delivery</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.metEntrega}
                      // value="2"
                      type="radio"
                      className="form-radio"
                      name="metEntrega"
                      onClick={() => {
                        setEntregaDelivery(false);
                        setMetodoDeDelivery("2");
                      }}
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
                      value={formik.values.delivery_address}
                      className="w-full bg-blueGray-50 rounded-lg px-1"
                      type="text"
                      name="delivery_address"
                    />
                    {formik.touched.delivery_address &&
                    formik.errors.delivery_address ? (
                      <p className="mt-0 mb-4 text-red-500">
                        *{formik.errors.delivery_address}
                      </p>
                    ) : null}

                    <p className="text-black text-sm mt-2">Referencia</p>
                    <input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.reference}
                      className="w-full bg-blueGray-50 rounded-lg px-1"
                      type="text"
                      name="reference"
                    />
                    {formik.touched.reference && formik.errors.reference ? (
                      <p className="mt-0 mb-4 text-red-500">
                        *{formik.errors.reference}
                      </p>
                    ) : null}

                    <p className="text-black text-sm mt-2">Recibe el pedido:</p>
                    <input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.assigned_person}
                      className="w-full bg-blueGray-50 rounded-lg px-1"
                      type="text"
                      name="assigned_person"
                    />
                    {formik.touched.assigned_person &&
                    formik.errors.assigned_person ? (
                      <p className="mt-0 mb-4 text-red-500">
                        *{formik.errors.assigned_person}
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
                      value={formik.values.assigned_person}
                      className="w-full bg-blueGray-50 rounded-lg px-1"
                      type="text"
                      name="assigned_person"
                    />
                    {formik.touched.assigned_person &&
                    formik.errors.assigned_person ? (
                      <p className="mt-0 mb-4 text-red-500">
                        *{formik.errors.assigned_person}
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
                      // value="1"
                      onClick={() => setComprobantePago(1)}
                    />

                    <span className="ml-2">Boleta</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.tipoComprobante}
                      type="radio"
                      className="form-radio"
                      name="tipoComprobante"
                      // value="2"
                      onClick={() => setComprobantePago(2)}
                    />

                    <span className="ml-2">Fatura</span>
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
                      // value="1"
                      onClick={() => {
                        setEfectivo(false);
                        setMetodoDePago(1);
                      }}
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
                      // value="2"
                      onClick={() => {
                        setEfectivo(true);
                        setMetodoDePago(2);
                      }}
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
                      value={formik.values.cash}
                      className="w-full bg-blueGray-50 rounded-lg px-1"
                      type="number"
                      placeholder="S/ Monto con el que paga"
                      name="cash"
                    />{" "}
                    {formik.touched.cash && formik.errors.cash ? (
                      <p className="mt-0 mb-4 text-red-500">
                        *{formik.errors.cash}
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </div>
              {/* <div className="bg-blueGray-200 p-2 rounded-lg mb-2">
                <p className="text-black text-md mb-1">
                
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
              </div> */}

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
              <div className="flex justify-between mt-4 mx-1">
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
                  Hacer Pedido
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="px-4 sm:px-14 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-alert-circle"
            width={54}
            height={54}
            viewBox="0 0 24 24"
            strokeWidth={2}
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
