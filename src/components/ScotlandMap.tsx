import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers in react-leaflet
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import markerRetina from "leaflet/dist/images/marker-icon-2x.png";

const defaultIcon = new Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconRetinaUrl: markerRetina,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface ScotlandMapProps {
  itinerary: "7" | "9" | "11";
}

const mapRoutes = {
  "7": {
    center: [56.4907, -4.2026] as [number, number],
    points: [
      { lat: 55.9533, lng: -3.1883, name: "Edimburgo", day: "Días 1-2" },
      { lat: 56.1165, lng: -3.9369, name: "Stirling", day: "Día 3" },
      { lat: 56.6198, lng: -5.1070, name: "Glencoe", day: "Día 4" },
      { lat: 57.1497, lng: -6.2180, name: "Isla de Skye", day: "Días 5-6" },
      { lat: 57.4778, lng: -4.2247, name: "Inverness", day: "Día 7" },
    ],
    route: [
      [55.9533, -3.1883],
      [56.1165, -3.9369],
      [56.6198, -5.1070],
      [57.1497, -6.2180],
      [57.4778, -4.2247],
    ] as [number, number][],
  },
  "9": {
    center: [56.8, -4.5] as [number, number],
    points: [
      { lat: 55.9533, lng: -3.1883, name: "Edimburgo", day: "Días 1-2" },
      { lat: 56.1165, lng: -3.9369, name: "Stirling", day: "Día 3" },
      { lat: 57.4778, lng: -4.2247, name: "Inverness", day: "Días 4-5" },
      { lat: 57.1497, lng: -6.2180, name: "Isla de Skye", day: "Días 6-8" },
      { lat: 56.6198, lng: -5.1070, name: "Glencoe", day: "Día 9" },
    ],
    route: [
      [55.9533, -3.1883],
      [56.1165, -3.9369],
      [57.4778, -4.2247],
      [57.1497, -6.2180],
      [56.6198, -5.1070],
      [55.9533, -3.1883],
    ] as [number, number][],
  },
  "11": {
    center: [57.2, -5.0] as [number, number],
    points: [
      { lat: 55.9533, lng: -3.1883, name: "Edimburgo", day: "Días 1-2" },
      { lat: 56.1165, lng: -3.9369, name: "Stirling", day: "Día 3" },
      { lat: 57.4778, lng: -4.2247, name: "Inverness", day: "Días 4-5" },
      { lat: 57.8, lng: -5.8, name: "North Coast 500", day: "Días 5-7" },
      { lat: 57.1497, lng: -6.2180, name: "Isla de Skye", day: "Días 7-9" },
      { lat: 56.6151, lng: -6.0515, name: "Isla de Mull", day: "Días 10-11" },
    ],
    route: [
      [55.9533, -3.1883],
      [56.1165, -3.9369],
      [57.4778, -4.2247],
      [57.8, -5.8],
      [57.1497, -6.2180],
      [56.6151, -6.0515],
      [56.6198, -5.1070],
      [55.9533, -3.1883],
    ] as [number, number][],
  },
};

const ScotlandMap = ({ itinerary }: ScotlandMapProps) => {
  const route = mapRoutes[itinerary];

  useEffect(() => {
    // Fix for Leaflet icons in webpack
    delete (Icon.Default.prototype as any)._getIconUrl;
    Icon.Default.mergeOptions({
      iconRetinaUrl: markerRetina,
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
    });
  }, []);

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-highland border border-border celtic-border">
      <MapContainer
        center={route.center}
        zoom={7}
        className="w-full h-full"
        zoomControl={true}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Route Line */}
        <Polyline
          positions={route.route}
          pathOptions={{
            color: "#4ade80",
            weight: 4,
            opacity: 0.8,
            dashArray: "10, 10",
          }}
        />
        
        {/* Markers */}
        {route.points.map((point, index) => (
          <Marker
            key={index}
            position={[point.lat, point.lng]}
            icon={defaultIcon}
          >
            <Popup className="font-inter">
              <div className="text-center">
                <h3 className="font-cinzel font-semibold text-primary">
                  {point.name}
                </h3>
                <p className="text-sm text-muted-foreground">{point.day}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ScotlandMap;