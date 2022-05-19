import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormCantPresentationsTopping = ({
  presentation,
  toppingSetup,
  setToppingSetup,
  toppingRules,
  toppingSetupwithId,
  setToppingSetupwithId,
}) => {
  console.log(
    "🚀 ~ file: FormCantPresentationsTopping.jsx ~ line 11 ~ presentation",
    presentation,
  );
  const [cantPresentations, setCantPresentations] = React.useState(
    Number(toppingRules.min),
  );

  React.useEffect(() => {
    setToppingSetup(
      toppingSetup.length == 0
        ? [
            {
              id: presentation.presentation_id,
              cantidad: cantPresentations,
              label: presentation.label,
            },
          ]
        : toppingSetup.some(
            presentationInSetup =>
              presentationInSetup.id == presentation.presentation_id,
          )
        ? toppingSetup.map(presentationInSetup =>
            presentationInSetup.id == presentation.presentation_id
              ? {
                  ...presentationInSetup,
                  cantidad: cantPresentations,
                }
              : presentationInSetup,
          )
        : [
            ...toppingSetup,
            {
              id: presentation.presentation_id,
              cantidad: cantPresentations,
              label: presentation.label,
            },
          ],
    );
  }, [cantPresentations]);

  React.useEffect(() => {
    setToppingSetupwithId({
      id: presentation.topping_id,
      presentations: toppingSetup,
    });
  }, [toppingSetup]);

  return (
    <div className="flex justify-between flex-wrap bg-white rounded-md p-1 mb-1">
      <p>{presentation.label}</p>

      <div className="flex justify-center ">
        <button
          type="button"
          onClick={() => {
            cantPresentations > Number(toppingRules.min)
              ? setCantPresentations(cantPresentations - 1)
              : setCantPresentations(Number(toppingRules.min));
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <input
          readOnly
          type="text"
          className="w-10 h-fit mx-1 rounded-md bg-oishiCeleste2 text-center text-black font-bold "
          value={cantPresentations}
        />
        <button
          type="button"
          onClick={() => {
            cantPresentations < Number(toppingRules.max) &&
              toppingSetup
                .map(pre => pre.cantidad)
                .reduce((prev, curr) => prev + curr, 0) <
                Number(toppingRules.total) &&
              setCantPresentations(cantPresentations + 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FormCantPresentationsTopping;
