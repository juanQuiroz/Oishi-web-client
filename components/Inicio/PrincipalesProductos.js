import React from "react";
import Titulos from "../ui/Titulos";
import ProductoPrincipal from "./ProductoPrincipal";

const PrincipalesProductos = () => {
  return (
    <div className="mx-4 sm:mx-8 my-4 sm:my-6">
      <Titulos>Lo más pedido de Oishi!</Titulos>
      <div className="grid grid-rows-20 grid-cols-10 gap-2 sm:gap-5 sm:mx-32 sm:my-10">
        <div className="row-span-4 col-span-10 ">
          <img
            src="https://res.cloudinary.com/alldevsoftware/image/upload/v1633153648/OishiWebLandingpage/large1_bse54z.jpg"
            alt="..."
            className="rounded-md shadow-md"
          />
        </div>
        <div className="row-span-5 col-span-5 ">
          <img
            src="https://images.pexels.com/photos/7243421/pexels-photo-7243421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="..."
            className="rounded-md shadow-md"
          />
        </div>
        <div className="row-span-3 col-span-5 ">
          <img
            src="https://res.cloudinary.com/alldevsoftware/image/upload/c_scale,h_600,w_1000/v1633154045/OishiWebLandingpage/35_lfo9o2.jpg"
            alt="..."
            className="rounded-md shadow-md"
          />
        </div>
        <div className="row-span-6 col-span-5 ">
          <img
            src="https://res.cloudinary.com/alldevsoftware/image/upload/c_crop,h_1200,w_1000/v1633154312/OishiWebLandingpage/pexels-polina-tankilevitch-4725630_zepjht.jpg"
            alt="..."
            className="rounded-md shadow-md"
          />
        </div>
        <div className="row-span-4 col-span-5 ">
          <img
            src="https://res.cloudinary.com/alldevsoftware/image/upload/c_fill,h_400,w_500,x_115,y_243/v1633154197/OishiWebLandingpage/pexels-pixabay-248444_xzxdrt.jpg"
            alt="..."
            className="rounded-md shadow-md"
          />
        </div>
        <div className="row-span-5 col-span-10">
          <img
            src="https://res.cloudinary.com/alldevsoftware/image/upload/c_crop,h_300,w_1000,x_0,y_98/v1633154646/OishiWebLandingpage/pexels-horizon-content-3763816_eef4na.jpg"
            alt="..."
            className="rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default PrincipalesProductos;
