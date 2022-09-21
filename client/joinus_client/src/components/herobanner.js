import React from "react";
import Button from '@mui/material/Button';

const Herobanner = function() {
  return (
  <div>
    <p>include('partials/_navbar')</p>
    <p>include('partials/_landing-page')</p>
    <p>include('partials/_footer')</p>
    <Button variant="contained">Hello World</Button>
  </div>
  )
}

export default Herobanner