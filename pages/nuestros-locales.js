import React from "react";
import Layout from "../components/Layout";

const NuestrosLocales = () => {
  return (
    <Layout>
      <div className="flex mt-5 mb-12 mx-5 justify-center items-end font-Andika">
        <p className="text-oishiNegro text-lg ">Encuentra un </p>
        <div className="mx-2">
          <h1 className="font-Andika text-2xl font-semibold leading-6">
            <span className=" font-Andika text-3xl font-semibold text-oishiRosa">
              Oishi
            </span>{" "}
            Sushi Bar
          </h1>
        </div>
        <p className="text-oishiNegro text-lg ">en:</p>
      </div>
      <div className="my-6 font-Andika">
        <div className="flex bg-white shadow-lg w-11/12 h-36 rounded-r-xl p-2">
          <img
            src="/oishicanete.jpg"
            alt="img"
            className="h-auto w-auto rounded-xl"
          />
          <div className="ml-2">
            <p className="text-oishiAzul font-bold text-2xl">Cañete</p>
            <p className="text-base flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-8 w-h-8 text-oishiNaranja"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Miguel Grau 501, San Vicente de Cañete 15701
            </p>
            <p className="text-base flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-1 text-oishiNaranja"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              12pm - 10pm
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse mt-8">
          <div className="flex bg-white shadow-lg w-11/12 h-36 rounded-l-xl p-2">
            <div className="mr-2">
              <p className="text-oishiAzul font-bold text-2xl">Ica</p>
              <p className="text-base flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 h-8 w-h-8 text-oishiNaranja"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Miguel Grau 501, San Vicente de Cañete 15701
              </p>
              <p className="text-base flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-1 text-oishiNaranja"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                12pm - 10pm
              </p>
            </div>
            <img
              src="/oishicanete.jpg"
              alt="img"
              className="h-auto w-auto rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="my-12 text-center">
        <p className="text-2xl font-Andika text-oishiNegro">¡ Te esperamos !</p>
      </div>
    </Layout>
  );
};

export default NuestrosLocales;
