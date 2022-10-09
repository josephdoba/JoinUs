import { useBetween } from "use-between";
import { useState } from "react";

const useEvent = () => {
  const [event, setEvent] = useState({
    id: null,
    name: null,
    image: null,
    description: null,
    size_limit: null,
    city: null,
    owner_id: null,
    category: null,
    lat: null,
    lng: null,
    start_time: null,
    end_time: null,
  });
  console.log(`event in shareduser ${event.name}`);

  return {
    event,
    setEvent,
  };
};

const useSharedEvent = () => useBetween(useEvent);

export default useSharedEvent;
