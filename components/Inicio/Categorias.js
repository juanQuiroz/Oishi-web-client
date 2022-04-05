import React from "react";
import Titulos from "../ui/Titulos";
import Categoria from "./Categoria";
import Link from "next/link";

const Categorias = () => {
  return (
    <div className="mx-2 sm:mx-4 my-5 sm:mt-9">
      <Titulos>Categorias</Titulos>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-6 mt-4">
        <Link href="/cartaOishi">
          <a>
            <Categoria categoria="Oishi piqueos" />
          </a>
        </Link>
        <Link href="/cartaOishi">
          <a>
            <Categoria categoria="Acompañamientos" />
          </a>
        </Link>
        <Link href="/cartaOishi">
          <a>
            <Categoria categoria="Platos calientes" />
          </a>
        </Link>
        <Link href="/cartaOishi">
          <a>
            <Categoria categoria="Sanguches" />
          </a>
        </Link>
        <Link href="/cartaOishi">
          <a>
            <Categoria categoria="Makis" />
          </a>
        </Link>
        <Link href="/cartaOishi">
          <a>
            <Categoria categoria="Combinados" />
          </a>
        </Link>
        <Link href="/cartaOishi">
          <a>
            <Categoria categoria="Bebidas" />
          </a>
        </Link>
        <Link href="/cartaOishi">
          <a>
            <Categoria categoria="Sandwich furai" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Categorias;
