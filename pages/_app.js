import "tailwindcss/tailwind.css";
import "../estilos.css";
import "../public/styles.css";
import PedidosState from "../context/pedidos/pedidosState";

function MyApp({ Component, pageProps }) {
  return (
    <PedidosState>
      <Component {...pageProps} />
    </PedidosState>
  );
}

export default MyApp;
