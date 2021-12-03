import React from "react";
import Subtitulo from "../ui/Subtitulo";
import { useFormik } from "formik";
import * as Yup from "yup";
import PedidosContext from "../../context/pedidos/pedidosContex";
import axios from "axios";

const FinalizarPedido = ({ setConfirmarpedido }) => {
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
  } = pcontext;

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
      dedicatoria: "",
    },
    validationSchema: Yup.object({
      nombre_razon_social: Yup.string().required(
        "nombre o raz. social obligatorio",
      ),
      dni_ruc: Yup.string().required("DNI o RUC obligatorio"),
    }),

    onSubmit: async values => {
      // Enviar datos al Context state
      console.log("initialValues", values);
      // Estraer solo cantidad y id de la presentacion
      const pedidoPresentaciones = presentacion.map(p => {
        return { id: p.id, cantidad: p.cantidad };
      });
      // Estraer solo cantidad y id de  ofertasSeleccionada
      const pedidofertasSeleccionada = ofertasSeleccionada.map(p => {
        return { id: p.oferta_id, cantidad: p.cantidad };
      });
      console.log("pedidofertasSeleccionada", pedidofertasSeleccionada);
      // Estraer solo cantidad y id de combosSeleccionados
      const pedidocombosSeleccionados = combosSeleccionados.map(p => {
        return { id: p.id, cantidad: p.cantidad };
      });
      console.log("pedidocombosSeleccionados", pedidocombosSeleccionados);

      console.log("FinalizarPedido: ", pedidoPresentaciones);

      try {
        const res = await axios.post(
          "http://localhost:4000/crearpedido",
          {
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
        console.log("CREAR PEDIDO: ", res);
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <div>
      <Subtitulo>Continuar con el pedido</Subtitulo>
      <form onSubmit={formik.handleSubmit}>
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
              <p className="mt-0 mb-4 text-red-500">*{formik.errors.dni_ruc}</p>
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
                <p className="text-black text-sm mt-2">Direccion de entrega</p>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.direccion_entrega}
                  className="w-full bg-blueGray-50 rounded-lg px-1"
                  type="text"
                  name="direccion_entrega"
                />
                <p className="text-black text-sm mt-2">Referencia</p>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.referencia}
                  className="w-full bg-blueGray-50 rounded-lg px-1"
                  type="text"
                  name="referencia"
                />
                <p className="text-black text-sm mt-2">Recibe el pedido:</p>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.recoge_pedido}
                  className="w-full bg-blueGray-50 rounded-lg px-1"
                  type="text"
                  name="recoge_pedido"
                />
              </div>
            ) : (
              <div className="bg-blueGray-300 p-2 rounded-lg shadow mt-1">
                <p className="text-black text-md">¿Quien recoge tu pedido?</p>
                <p className="text-black text-sm mt-2">Nombres y apellidos</p>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.recoge_pedido}
                  className="w-full bg-blueGray-50 rounded-lg px-1"
                  type="text"
                  name="recoge_pedido"
                />
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
              DNI / RUC (para facturación)
            </p>
            {/* DATOS PARA COMPROBANTE DE PAGO */}
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.paraComprobanteDePago}
              className="w-full bg-blueGray-50 rounded-lg px-1"
              type="text"
              name="paraComprobanteDePago"
            />
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
                <span className="ml-2">Tarjeta</span>
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
                />
              </div>
            ) : null}
          </div>
          <div className="bg-blueGray-200 p-2 rounded-lg mb-2">
            <p className="text-black text-md">Dedicatoria:</p>
            <textarea
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dedicatoria}
              className="w-full bg-blueGray-50 rounded-lg px-1"
              type="textBox"
              name="dedicatoria"
            />
          </div>

          <div className="px-1">
            {entregaDelivery && (
              <p className="text-sm text-gray-700 leading-4">
                * El precio no incluye costos de envio, si desea consultar los
                costos de delivery revise el siguiente enlace
                <span>
                  {" "}
                  <a
                    href="/nuestros-locales"
                    target="_blank"
                    className="font-semibold text-oishiAzul"
                  >
                    Nuestros locales
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
                vaciarTotalPedido();
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
  );
};

export default FinalizarPedido;
