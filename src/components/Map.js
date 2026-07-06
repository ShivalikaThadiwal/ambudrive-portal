"use client";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ center = [28.5921, 77.0469], patientCenter = [28.6120, 77.0320], zoom = 13 }) {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    });
  }, []);

  // Custom marker configuration for distinguishing patient
  const patientIcon = typeof window !== 'undefined' ? new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }) : null;

  return (
    <div style={{ height: "100%", width: "100%", minHeight: "460px" }}>
      <MapContainer center={center} zoom={zoom} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        
        {/* Driver Marker (Blue Default) */}
        <Marker position={center}>
          <Popup>
            <span className="font-bold">🚑 Driver (Your Ambulance)</span>
            <br />Dwarka Sector 12
          </Popup>
        </Marker>

        {/* Patient Marker (Custom Red) */}
        {patientIcon && (
          <Marker position={patientCenter} icon={patientIcon}>
            <Popup>
              <span className="font-bold text-red-600">🚨 Patient Location</span>
              <br />Distance: 2.8 KM
            </Popup>
          </Marker>
        )}

        {/* Dynamic routing line mapping both vectors */}
        <Polyline positions={[center, patientCenter]} color="rgb(37, 99, 235)" weight={4} dashArray="5, 10" />
      </MapContainer>
    </div>
  );
}