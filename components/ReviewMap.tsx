"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface ReviewMapProps {
  institution: string;
}

export default function ReviewMap({ institution }: ReviewMapProps) {
  const [position, setPosition] = useState<[number, number]>([52.37, 4.89]); // Amsterdam fallback
  const [mapError, setMapError] = useState<string | null>(null);

  useEffect(() => {
    if (!institution) return;
    fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(institution)}&format=json`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data[0]) {
          setPosition([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
          setMapError(null);
        } else {
          setMapError("Locatie niet gevonden. Probeer een andere zoekterm.");
        }
      })
      .catch(() => {
        setMapError("Fout bij het laden van de kaart.");
      });
  }, [institution]);

  return (
    <div className="mt-4 space-y-2">
      {mapError && <p className="text-red-500">{mapError}</p>}
      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: "300px", width: "100%", maxWidth: "600px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Kaartgegevens © <a href="https://www.openstreetmap.org/">OpenStreetMap</a>-bijdragers'
        />
        <Marker position={position} />
      </MapContainer>

      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(institution)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Schrijf een review op Google Maps
      </a>
    </div>
  );
}
