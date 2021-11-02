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
            src="https://res.cloudinary.com/alldevsoftware/image/upload/v1633246425/oishilanding/WhatsApp_Image_2021-10-02_at_5.20.17_PM_2_zrcabv.jpg"
            alt="..."
            className="rounded-md shadow-md"
          />
        </div>
        <div className="row-span-5 col-span-5 ">
          <img
            src="https://res.cloudinary.com/alldevsoftware/image/upload/v1633246425/oishilanding/WhatsApp_Image_2021-10-02_at_5.20.17_PM_iijpsb.jpg"
            alt="..."
            className="rounded-md shadow-md"
          />
        </div>
        <div className="row-span-3 col-span-5 ">
          <img
            src="https://res.cloudinary.com/alldevsoftware/image/upload/v1633246425/oishilanding/WhatsApp_Image_2021-10-02_at_5.20.18_PM_yriyfb.jpg"
            alt="..."
            className="rounded-md shadow-md"
          />
        </div>
        <div className="row-span-6 col-span-5 ">
          <img
            src="https://res.cloudinary.com/alldevsoftware/image/upload/v1633246425/oishilanding/WhatsApp_Image_2021-10-02_at_5.20.17_PM_1_xdqwd6.jpg"
            alt="..."
            className="rounded-md shadow-md"
          />
        </div>
        <div className="row-span-4 col-span-5 ">
          <img
            src="https://res.cloudinary.com/alldevsoftware/image/upload/v1633246425/oishilanding/WhatsApp_Image_2021-10-02_at_5.20.18_PM_1_lkjb5f.jpg"
            alt="..."
            className="rounded-md shadow-md"
          />
        </div>
        <div className="row-span-5 col-span-10">
          <img
            src="https://res.cloudinary.com/alldevsoftware/image/upload/v1633246425/oishilanding/WhatsApp_Image_2021-10-02_at_5.20.17_PM_3_iqaam7.jpg"
            alt="..."
            className="rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default PrincipalesProductos;
