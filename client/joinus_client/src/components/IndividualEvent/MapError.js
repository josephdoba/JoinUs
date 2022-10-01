import { Box } from "@mui/material";
import React from "react";
import LoadingError from "../ErrorLoading";

const mapContainerStyle = {
  marginTop: "20px",
  width: "400px",
  height: "400px",
};

export default function MapError() {
  return (
    <Box style={mapContainerStyle}>
      <h2>Error while loading map</h2>
      <h3>Please refresh the page</h3>
      <LoadingError />
    </Box>
  );
}
