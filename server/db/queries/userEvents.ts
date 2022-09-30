import { db } from "../connection";

const userCreateEvent = () => {
  return db
    .query(`SELECT * FROM joined_events`)
    .then((data) => data.rows)
    .catch((err) => console.error(err.stack));
}

const userEditEvent = () => {
  return db
    .query(`SELECT * FROM joined_events`)
    .then((data) => data.rows)
    .catch((err) => console.error(err.stack));
}



export { userCreateEvent, userEditEvent }