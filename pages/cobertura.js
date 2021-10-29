import React from "react";
import Layout from "../components/Layout";

const Cobertura = () => {
  return (
    <Layout>
      <div className="mx-3 my-5 font-Andika">
        <p className="text-2xl text-oishiNegro">Nuestra zona de cobertura: </p>
        <div>
          <p className="text-oishiNaranja text-2xl mb-2 mt-4">Oishi Cañete:</p>
          <div>
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1_-FvbOfUN2ELA6roYN0WJwU5C7VhJ5F5"
              className="w-full h-96 rounded-xl"
              style={{ border: 2 }}
              frameBorder="0"
            ></iframe>
          </div>
        </div>
        <div>
          <p className="text-oishiNaranja text-2xl mb-2 mt-4">Oishi Ica:</p>
          <div>
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1KzudTcVr0bpxdq5lqC7HOv6dNtV2_Prc"
              className="w-full h-96 rounded-xl"
              style={{ border: 2 }}
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cobertura;
