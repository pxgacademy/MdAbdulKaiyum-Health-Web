"use client";

// eslint-disable-next-line
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// eslint-disable-next-line
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const LocationMap = () => {
  return (
    <MapContainer
      center={[23.8103, 90.4125]}
      zoom={15}
      scrollWheelZoom={true}
      //   style={{ height: "450px", width: "100%" }}
      className="rounded-xl shadow-lg min-h-[450px] container mx-auto"
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[23.8103, 90.4125]}>
        <Popup>আমাদের অফিস এখানে!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LocationMap;
