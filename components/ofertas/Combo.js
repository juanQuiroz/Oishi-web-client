import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

const Combo = () => {
  return (
    <div className=" bg-white  rounded-xl mx-1 shadow-sm h-auto">
      <img
        src="https://res.cloudinary.com/alldevsoftware/image/upload/v1633153648/OishiWebLandingpage/large1_bse54z.jpg"
        alt="..."
        className="rounded-t-xl min-w-full sm:w-16"
      />

      <div className="p-1 sm:p-2  ">
        <div className="flex justify-between p-2 ">
          <div className="mr-28">
            <p className="text-gray-800 -my-1 text-xl w-full font-semibold ">
              Combo mañanero
            </p>
            <p className="text-gray-800 font-thin -my-1 text-lg">
              Descripcion del combo
            </p>
          </div>
          <MdAddShoppingCart className="h-9 w-9 ml-12 text-red-500" />
        </div>

        {/* <ul className="flex justify-around flex-wrap"> */}
        <ul className="grid grid-cols-2 gap-2 mx-2">
          <li className="p-1 mb-1 bg-gray-50 rounded">Makis furai 12 unds</li>
          <li className="p-1 mb-1 bg-gray-50 rounded">Makis furai 12 unds</li>
          <li className="p-1 mb-1 bg-gray-50 rounded">Makis furai 12 unds</li>
          <li className="p-1 mb-1 bg-gray-50 rounded">Makis furai 12 unds</li>
          <li className="p-1 mb-1 bg-gray-50 rounded">Makis furai 12 unds</li>
        </ul>
        <div className="flex justify-evenly mt-1">
          <p className="text-gray-600 font-bold text-xl line-through">
            S/ 5.00
          </p>
          <p className="text-red-500 font-bold text-2xl">S/ 5.00</p>
        </div>
      </div>
    </div>
  );
};

export default Combo;
