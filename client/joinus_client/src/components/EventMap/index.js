import React, { useState } from "react";
import MapComponent from "./MapComponent";
import MapError from "./MapError";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "./map.scss";

const center = {
  lat: 51.0233064354121,
  lng: -114.02369425973428,
};

const EventMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const [map, setMap] = useState(null);

  if (!isLoaded) return <div>Loading...</div>;
  return <MapComponent />;

  function MapComponent() {
    return (
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker position={center} />
      </GoogleMap>
    );
  }
};

export default EventMap;
