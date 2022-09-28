import { Fragment } from "react";
import Eventlist from "./Eventlist";
import Herobanner from "./Herobanner";
import HowToJoin from "./HowToJoin";

export default function Home(props) {
  const { eventsData, categoriesData, usersData } = props;
  return (
    <Fragment>
      <Herobanner />
      <HowToJoin />
      <Eventlist
        eventsData={eventsData}
        usersData={usersData}
        categoriesData={categoriesData}
      />
    </Fragment>
  );
}
