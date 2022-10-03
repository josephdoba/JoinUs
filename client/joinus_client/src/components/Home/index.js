import { Container } from "@mui/material";
import { Fragment } from "react";
import Herobanner from "./Herobanner";
import HowToJoin from "./HowToJoin";

export default function Home() {
  return (
    <Container maxWidth={"lg"}>
      <Herobanner />
      <HowToJoin />
    </Container>
  );
}
