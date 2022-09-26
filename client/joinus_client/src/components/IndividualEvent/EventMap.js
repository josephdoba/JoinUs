import React, { useState } from "react";
import MapComponent from "./MapComponent";
import MapError from "./MapError";
import { useLoadScript, InfoWindow } from "@react-google-maps/api";
import "./map.scss";

export default function EventMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <MapComponent />;
}
