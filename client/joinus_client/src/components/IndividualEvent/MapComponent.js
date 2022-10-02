import { GoogleMap, MarkerF, DirectionsRenderer } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const mapContainerStyle = {
  marginTop: "20px",
  width: "500px",
  height: "500px",
};

export default function MapComponent(props) {
  const [userCoords, setUserCoords] = useState(null);
  const { lat, lng, setMap, directions, duration, distance } = props;

  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

  // find user's coordinates
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserCoords({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      console.log("user Latitude is :", position.coords.latitude);
      console.log(" user Longitude is :", position.coords.longitude);
    });
  }, []);

  // arggggg why is the marker not workign!!!!!!

  const center = { lat, lng };
  console.log(`event coords is ${lat}, ${lng}`);

  return (
    <GoogleMap
      zoom={12}
      center={center ? center : userCoords} // set center to event location, or user's location
      mapContainerStyle={mapContainerStyle}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
      }}
      onLoad={(map) => setMap(map)}
    >
      <MarkerF position={center} onLoad={onLoad} />
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  );
}
