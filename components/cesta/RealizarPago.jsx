import React from "react";
import Head from "next/head";
import axios from "axios";
import Spinner from "../ui/Spinner";
import Swal from "sweetalert2";
// import { useRouter } from "next/router";
import PedidosContext from "../../context/pedidos/pedidosContex";

const RealizarPago = ({ dataPedido, entregaDelivery }) => {
  const pcontext = React.useContext(PedidosContext);
  const { vaciarCesta } = pcontext;

  // const router = useRouter();
  const createOrderBackend = async () => {
    // PARA WEBSOCKET - API PHP  para crear el pedido en el sistema Oishi pasando primero por el websocket
    try {
      const res = await axios.post(
        "https://weboishibackend.com/crearpedido",
        // "http://localhost:4000/crearpedido",
        dataPedido,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log(
        "🚀 ~ file: RealizarPago.jsx ~ line 28 ~ createOrderBackend ~ res",
        res
      );

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
      // router.push("/cartaOishi");
    } catch (e) {
      console.log(e);
    }
  };

  const [message, setMessage] = React.useState({ message: null });
  React.useEffect(() => {
    import("@lyracom/embedded-form-glue").then((glue) => {
      const endpoint = "https://api.micuentaweb.pe";
      const publicKey =
        "57180685:testpublickey_tL1HboKpWgmbr67wrzAkaqUgYtSKUptE05byY2XFPpQnB";
      let formToken = "payFormToken";
      const KRGlue = glue.default;

      axios
        .post("https://weboishibackend.com/izipaybackend/createPayment", {
          amount:
            dataPedido.total_price * 100 + dataPedido.delivery_price * 100,
          currency: "PEN",
          orderId: Date.now(),
          customer: {
            billingDetails: {
              phoneNumber: dataPedido.phone,
              firstName: dataPedido.customer_name,
              city:
                dataPedido.local_id == 1
                  ? "Cañete"
                  : dataPedido.local_id == 2
                  ? "Ica"
                  : "Chincha",
            },
            shoppingCart: {
              insuranceAmount: dataPedido.total_price * 100,
              shippingAmount: dataPedido.delivery_price * 100,
            },
          },
        })
        .then((resp) => {
          formToken = resp.data.answer.formToken;

          return KRGlue.loadLibrary(
            endpoint,
            publicKey
          ); /* Load the remote library */
        })
        .then(({ KR }) =>
          KR.setFormConfig({
            /* set the minimal configuration */
            formToken: formToken,
            "kr-language": "es-es" /* to update initialization parameter */,
          })
        )
        .then(({ KR }) =>
          KR.onSubmit((paymentData) => {
            axios
              .post(
                "https://weboishibackend.com/izipaybackend/validatePayment",
                paymentData
              )
              .then((response) => {
                if (response.status === 200) {
                  createOrderBackend();
                  setMessage({ message: "Pago exitoso" });
                }
              });
            return false; // Return false to prevent the redirection
          })
        )
        .then(({ KR }) =>
          KR.addForm("#myPaymentForm")
        ) /* add a payment form  to myPaymentForm div*/
        .then(({ KR, result }) =>
          KR.showForm(result.formId)
        ) /* show the payment form */
        .catch((error) =>
          setMessage({
            message: error + " Error de pago",
          })
        );
    });
  }, []);

  return (
    <>
      <div className=" bg-oishiCeleste mx-2 rounded-xl p-6">
        <h1 className="mb-4 text-2xl font-extrabold font-Andika">
          Realizar Pago
        </h1>
        <Head>
          <title>Realizar pago</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          {/* <link
            rel="stylesheet"
            href="https://static.micuentaweb.pe/static/js/krypton-client/V4.0/ext/classic-reset.css"
          /> */}
          <script src="https://static.micuentaweb.pe/static/js/krypton-client/V4.0/ext/classic.js"></script>
        </Head>
        <div className="flex justify-center" id="myPaymentForm">
          <Spinner />
        </div>
      </div>
      <div className=" text-xl mt-6 text-center text-oishiAzul3 font-Andika">
        {message.message}
      </div>
    </>
  );
};

export default RealizarPago;
