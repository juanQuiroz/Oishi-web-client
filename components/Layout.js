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
