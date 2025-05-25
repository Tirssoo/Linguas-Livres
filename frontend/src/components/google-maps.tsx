import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -23.55052,
  lng: -46.633308,
};

export default function MapComponent() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // chave no .env
  });

  if (!isLoaded) return <div>Carregando mapa...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
      <Marker position={center} />
    </GoogleMap>
  );
}