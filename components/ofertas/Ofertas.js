import React, { useContext } from "react";
import PresentacionOferta from "./PresentacionOferta";
import PedidosContext from "../../context/pedidos/pedidosContex";

const Ofertas = ({ oferta }) => {
  const pedidosContext = useContext(PedidosContext);
  const { localSeleccionado } = pedidosContext;

  return (
    <>
      {oferta?.ofertas ? (
        <div>
          {oferta.ofertas.map(ofer =>
            ofer.local_id == localSeleccionado ? (
              ofer.activo == false ? null : (
                <div key={ofer.producto_id} className="grid grid-cols-2">
                  {oferta &&
                    oferta?.ofertas.map(ofertaPresentacion =>
                      ofertaPresentacion.local_id == localSeleccionado &&
                      ofertaPresentacion.activo == true ? (
                        <PresentacionOferta
                          key={ofertaPresentacion.oferta_id}
                          presentacionOferta={ofertaPresentacion}
                          dataProducto={{
                            nombre: oferta.nombre,
                            url: oferta.url,
                          }}
                        />
                      ) : null,
                    )}
                </div>
              )
            ) : null,
          )}
        </div>
      ) : null}
    </>
  );
};

export default Ofertas;
