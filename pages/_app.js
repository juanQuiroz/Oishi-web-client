import "tailwindcss/tailwind.css";
import "../estilos.css";
import "../styles.css";
import "../public/styles.css";
import PedidosState from "../context/pedidos/pedidosState";

import "swiper/css/bundle";

function MyApp({ Component, pageProps }) {
  return (
    <PedidosState>
      <Component {...pageProps} />
    </PedidosState>
  );
}

export default MyApp;
