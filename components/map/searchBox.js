import React, { useState, useContext } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { updateMarkerBySearchBox } from "../../store/deliveryActions";
import DeliveryContext from "../../store/deliveryContext";

function SearchBox() {
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (autoC) => setAutocomplete(autoC);
  const [delivery, dispatch] = useContext(DeliveryContext);

  const onPlaceChanged = () => {
    const currentMarker = {
      //address: autocomplete.getPlace().formatted_address,
      lat: autocomplete.getPlace().geometry.location.lat(),
      lng: autocomplete.getPlace().geometry.location.lng(),
    };
    dispatch(updateMarkerBySearchBox(currentMarker));
  };

  return (
    <div className="flex flex-col justify-center items-center mt-4 mb-2">
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <div width={"35vw"}>
          <div
            pointerEvents={"none"}
            // eslint-disable-next-line react/no-children-prop
            children={<div color="gray" fontSize={20} />}
          />

          <input
            className="px-2 py-1 rounded-md w-full "
            type={"text"}
            placeholder="Busca tu dirección"
          />
        </div>
      </Autocomplete>
    </div>
  );
}

export default SearchBox;
