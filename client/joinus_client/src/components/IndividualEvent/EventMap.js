import React, { useState } from "react";
import MapComponent from "./MapComponent";
import MapError from "./MapError";
import {
  useLoadScript,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";

const libraries = ["places"];

export default function EventMap(props) {
  const { lat, lng } = props;
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries,
  });

  if (loadError) return <MapError />;
  if (!isLoaded) return <div>Loading...</div>;

  if (isLoaded) return <MapComponent lat={lat} lng={lng} />;
}
