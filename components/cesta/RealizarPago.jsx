import React from "react";
import Head from "next/head";
import axios from "axios";

const RealizarPago = ({ dataPedido }) => {
  console.log(
    "🚀 ~ file: RealizarPago.jsx ~ line 6 ~ RealizarPago ~ dataPedido",
    dataPedido
  );

  const [message, setMessage] = React.useState({ message: null });
  React.useEffect(() => {
    import("@lyracom/embedded-form-glue").then((glue) => {
      const endpoint = "https://api.micuentaweb.pe";
      const publicKey =
        "57180685:testpublickey_tL1HboKpWgmbr67wrzAkaqUgYtSKUptE05byY2XFPpQnB";
      let formToken = "payFormToken";
      const KRGlue = glue.default;

      axios
        .post("http://localhost:3000/api/createPayment", {
          amount: 5000,
          currency: "PEN",
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
              .post("http://localhost:3000/api/validatePayment", paymentData)
              .then((response) => {
                if (response.status === 200)
                  setMessage({ message: "Payment successful!" });
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
            message: error + " (see console for more details)",
          })
        );
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Realizar pago</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://static.micuentaweb.pe/static/js/krypton-client/V4.0/ext/classic-reset.css"
        />
        <script src="https://static.micuentaweb.pe/static/js/krypton-client/V4.0/ext/classic.js"></script>
      </Head>
      <div id="myPaymentForm"></div>
      <div>{message.message}</div>
    </div>
  );
};

export default RealizarPago;
