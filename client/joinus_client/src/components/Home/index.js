import { Container } from "@mui/material";
import { Fragment } from "react";
import Herobanner from "./Herobanner";
import HowToJoin from "./HowToJoin";

export default function Home() {
  return (
    <Container maxWidth={"lg"}>
      <Herobanner />
      <HowToJoin />
      
      <input
        style={{ display: "none" }}
        id="raised-button-file"
        type="file"
        name="label_eventImage">
      </input>
    </Container>
  );
}
