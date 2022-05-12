import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormCantPresentationsTopping = ({
  presentation,
  toppingSetup,
  setToppingSetup,
  toppingRules,
}) => {
  console.log(
    "🚀 ~ file: FormCantPresentationsTopping.jsx ~ line 11 ~ toppingRules",
    toppingRules,
  );
  const [cantPresentations, setCantPresentations] = React.useState(
    Number(toppingRules.min),
  );

  //   const formik = useFormik({

  //     initialValues: {
  //       cantidadSeleccionada: 0,
  //     },
  //     validationSchema: Yup.object({
  //       cantidadSeleccionada: Yup.number(),
  //     //   cantidad_efectivo: Yup.number()
  //     //     .typeError("Ingrese solo numeros")
  //     //     .when("efectivo", {
  //     //       is: true,
  //     //       then: Yup.number()
  //     //         .typeError("Ingrese solo numeros")
  //     //         .required("Cantidad de efectivo obligatorio"),
  //     //     }),
  //     }),

  //     onSubmit: async (values, { resetForm }) => {

  //     },
  //   });

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

            // setToppingSetup(
            //   toppingSetup.length == 0
            //     ? [
            //         {
            //           id: presentation.presentation_id,
            //           cantidad: cantPresentations,
            //           label: presentation.label,
            //         },
            //       ]
            //     : toppingSetup.some(
            //         presentationInSetup =>
            //           presentationInSetup.id == presentation.presentation_id,
            //       )
            //     ? toppingSetup.map(presentationInSetup =>
            //         presentationInSetup.id == presentation.presentation_id
            //           ? {
            //               ...presentationInSetup,
            //               cantidad: cantPresentations,
            //             }
            //           : presentationInSetup,
            //       )
            //     : [
            //         ...toppingSetup,
            //         {
            //           id: presentation.presentation_id,
            //           cantidad: cantPresentations,
            //           label: presentation.label,
            //         },
            //       ],
            // );
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
            setCantPresentations(cantPresentations + 1);

            // setToppingSetup(
            //   toppingSetup.length == 0
            //     ? [
            //         {
            //           id: presentation.presentation_id,
            //           cantidad: cantPresentations,
            //           label: presentation.label,
            //         },
            //       ]
            //     : toppingSetup.some(
            //         presentationInSetup =>
            //           presentationInSetup.id == presentation.presentation_id,
            //       )
            //     ? toppingSetup.map(presentationInSetup =>
            //         presentationInSetup.id == presentation.presentation_id
            //           ? {
            //               ...presentationInSetup,
            //               cantidad: cantPresentations,
            //             }
            //           : presentationInSetup,
            //       )
            //     : [
            //         ...toppingSetup,
            //         {
            //           id: presentation.presentation_id,
            //           cantidad: cantPresentations,
            //           label: presentation.label,
            //         },
            //       ],
            // );
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
