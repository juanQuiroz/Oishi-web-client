import { useContext, useEffect } from "react";
import deliveryZones from "../../core/map/deliveryZones";
import DeliveryContext from "../../store/deliveryContext";
import { updateDeliveryPrice } from "../../store/deliveryActions";
import PedidosContext from "../../context/pedidos/pedidosContex";

function DeliveryPrice() {
  const [delivery, dispatch] = useContext(DeliveryContext);
  const zones = deliveryZones.getList();

  const pedidosContext = useContext(PedidosContext);
  const { setDeliveryPrice, setDeliveryCoordinates } = pedidosContext;

  generateGooglePolygonForZones(zones);

  useEffect(() => {
    const currentPrice = calculatePrice(zones, delivery.userMarker);

    dispatch(updateDeliveryPrice(currentPrice));
    // eslint-disable-next-line react-hooks/exhaustive-deps

    setDeliveryPrice(currentPrice);

    setDeliveryCoordinates(
      JSON.stringify(delivery.userMarker)
        .replace('{"lat":', "")
        .replace('"lng":', "")
        .replace("}", "")
    );
  }, [delivery.userMarker]);

  return (
    <>
      {delivery.price !== null ? (
        <p className=" mt-1 text-md text-oishiAzul3">
          Costo Delivery:{" "}
          <span className="font-semibold">
            S/ {Number(delivery.price).toFixed(2)}
          </span>
          {/* <p>
            {delivery.userMarker.lat !== -13.07823
              ? "Location: " +
                JSON.stringify(delivery.userMarker)
                  .replace('{"lat":', "")
                  .replace('"lng":', "")
                  .replace("}", "")
              : ""}
          </p> */}
        </p>
      ) : (
        <p className=" my-2 text-md text-red-600">
          😕 Lo sentimo, no tenemos combertura en esta zona
        </p>
      )}
    </>
  );
}

function generateGooglePolygonForZones(zones) {
  const google = window.google;
  zones.map((zone) => {
    zone.setGooglePolygon(new google.maps.Polygon({ paths: zone.getPath() }));
  });
}

function calculatePrice(zones, marke) {
  const google = window.google;

  for (let i = 0; i < zones.length; i++) {
    const resultPath = google.maps.geometry.poly.containsLocation(
      marke,
      zones[i].getGooglePolygon()
    );

    if (resultPath) {
      return zones[i].getPrice();
    }
  }

  return null;
}

export default DeliveryPrice;
