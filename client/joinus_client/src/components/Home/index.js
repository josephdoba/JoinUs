import { Fragment } from "react";
import EventMap from "../IndividualEvent/EventMap";
import Herobanner from "./Herobanner";
import HowToJoin from "./HowToJoin";

export default function Home(props) {
  const { event } = props;
  return (
    <Fragment>
      <Herobanner />
      <HowToJoin />
      <EventMap lat={event.lat} lng={event.lng} />
    </Fragment>
  );
}
