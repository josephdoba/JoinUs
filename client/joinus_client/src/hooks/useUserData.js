import { useState } from "react";
import { fetchAPI } from "../api";

export default function useUserData() {
  const [user, setUser] = useState({});

  const login = (userID) => {
    fetchAPI(`user/${userID}`)
      .then((data) => {
        console.log(data.data[0]);
        setUser((prev) => data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    setUser({});
  };

  return { login, logout, user };
}
