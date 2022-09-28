import { db } from "../connection";

const getCategories = () => {
  return db
    .query(`SELECT * FROM categories`)
    .then((data) => data.rows)
    .catch((err) => console.error(err.stack));
};

const getEvents = () => {
  return db
    .query(`SELECT * FROM events`)
    .then((data) => data.rows)
    .catch((err) => console.error(err.stack));
};

export default { getCategories, getEvents };
