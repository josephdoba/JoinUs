import { useBetween } from "use-between";
import { useState } from "react";

const useUser = () => {
  const [user, setUser] = useState({
    id: null,
    name: null,
    age: null,
    gender: null,
    picture: null,
  });

  return {
    user,
    setUser,
  };
};

const useSharedUser = () => useBetween(useUser);

export default useSharedUser;
