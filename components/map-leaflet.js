import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useRef, useEffect } from "react";

function MapContactUs() {
  return (
    <>
      <MapContainer
        center={[-23.7034237, 133.8809373]}
        zoom={16}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "600px" }}
      >
        <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />
        <Marker position={[-23.7034237, 133.8809373]}>
          <Popup>
            Todd Tavern <br /> 1 Todd Street Alice Springs
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default MapContactUs;
