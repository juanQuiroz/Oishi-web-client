import React from "react";
import Add from "../../assets/icons/Add.svg";

const PresentacionProducto = () => {
  return (
    <div className="flex-col flex-wrap bg-white shadow rounded-md">
      <div>
        <img
          src="https://res.cloudinary.com/alldevsoftware/image/upload/v1627693282/oishwebtestcarousel/makis_olth2u.jpg"
          alt="..."
          className="rounded-t-md"
        />
      </div>

      <div className="p-1 sm:p-2">
        <h4 className="text-gray-800 -my-1">Makis</h4>
        <h5 className="text-gray-800 font-thin -my-1">Box 12 unid</h5>
      </div>
      <div className="flex justify-between p-1 -mt-1 sm:-mt-1">
        <h2 className="text-gray-800 font-bold">S/ 00.00</h2>
        <Add className="h-6 w-6 sm:h-7 sm:w-7 sm:mr-1" />
      </div>
    </div>
  );
};

export default PresentacionProducto;
