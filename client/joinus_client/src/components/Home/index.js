import { Fragment } from "react";
import Eventlist from "./Eventlist";
import Herobanner from "./Herobanner";
import HowToJoin from "./HowToJoin";

export default function Home(props) {
  return (
    <Fragment>
      <Herobanner />
      <HowToJoin />
      <Eventlist />
    </Fragment>
  );
}
