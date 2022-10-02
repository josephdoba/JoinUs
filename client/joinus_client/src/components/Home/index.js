import { Fragment } from "react";
import Herobanner from "./Herobanner";
import HowToJoin from "./HowToJoin";

export default function Home() {
  return (
    <Fragment>
      <Herobanner />
      <HowToJoin />
    </Fragment>
  );
}
