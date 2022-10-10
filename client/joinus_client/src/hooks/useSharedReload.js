import { useBetween } from "use-between";
import { useState } from "react";

const useReload = () => {
  const [reload, setReload] = useState(0);

  return {
    reload,
    setReload,
  };
};

const useSharedReload = () => useBetween(useReload);

export default useSharedReload;
