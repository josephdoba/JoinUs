import { useEffect, useState } from "react";
import { getGeocode } from "use-places-autocomplete";

// gets lat/lng and displays it as an address
export default function Address({ lat, lng }) {
  const [address, setAddress] = useState(null);

  useEffect(() => {
    const location = { lat, lng };
    getGeocode({ location }).then((results) => {
      console.log(results);
      setAddress(results[0].formatted_address);
    });
  });

  return address;
}
