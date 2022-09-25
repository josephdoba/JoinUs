import { db } from "../connection";

const getEvents = () => {
  return db
    .query(`SELECT * FROM events`)
    .then((data) => data.rows)
    .catch((err) => console.error(err.stack));
};

const getEvent = () => {
  return db
    .query(`SELECT * FROM events WHERE owner_id = 2`)
    .then((data) => data.rows)
    .catch((err) => console.error(err.stack))
}

// create the functions first, export it, then import into routes

export default { getEvents, getEvent };
