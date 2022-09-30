import { Fragment } from "react";
import Herobanner from "./Herobanner";
import HowToJoin from "./HowToJoin";

export default function Home(props) {
  return (
    <Fragment>
      <Herobanner />
      <HowToJoin />
    </Fragment>
  );
}
