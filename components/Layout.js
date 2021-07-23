import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

//Components

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Oishi SushiBar</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-trueGray-50">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
