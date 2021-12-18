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
        <meta
          name="viewport"
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Mitr:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Andika+New+Basic:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-gradient-to-r from-trueGray-50 to-trueGray-100">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
