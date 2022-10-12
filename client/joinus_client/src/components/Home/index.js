import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Herobanner from "./Herobanner";
import HowToJoin from "./HowToJoin";

export default function Home() {
  return (
    <Box>
      <Herobanner />
      <Container maxWidth={"lg"}>
        {/* <HowToJoin /> */}

        <input
          style={{ display: "none" }}
          id="raised-button-file"
          type="file"
          name="label_eventImage"
        ></input>
      </Container>
    </Box>
  );
}
