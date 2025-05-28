import {
  APIProvider,
  Map as GoogleMap,
  Marker,
} from "@vis.gl/react-google-maps";

const center = {
  lat: -23.5473801,
  lng: -46.6375511,
};

const markers = [
  {
    position: {
      lat: -23.5473801,
      lng: -46.6375511,
    },
    title: "Prefeitura de São Paulo",
    label: "Prefeitura de São Paulo",
  },
  {
    position: {
      lat: -23.5224268,
      lng: -46.6948096,
    },
    title: "Poupa Tempo - Lapa",
    label: "Poupa Tempo - Lapa",
  },
  {
    position: {
      lat: -23.512277,
      lng: -46.7051455,
    },
    title: "Polícia Federal",
    label: "Polícia Federal",
  },
];
export default function MapComponent() {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        defaultCenter={center}
        defaultZoom={13}
        gestureHandling="greedy"
        mapId="map"
        disableDefaultUI={false}
        zoomControl={true}
        streetViewControl={true}
        fullscreenControl={true}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.title}
            position={marker.position}
            title={marker.title}
            label={marker.label}
          />
        ))}
      </GoogleMap>
    </APIProvider>
  );
}
