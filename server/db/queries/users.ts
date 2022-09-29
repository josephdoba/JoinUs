import { db } from "../connection";
// const db = require('../connection');

const getUsers = () => {
  return db.query("SELECT * FROM users;").then((data) => {
    return data.rows;
  });
};

const getUserJoinedEvents = () => {
  return db
    .query(`SELECT * FROM joined_events`)
    .then((data) => data.rows)
    .catch((err) => console.error(err.stack));
};

export default { getUsers, getUserJoinedEvents };
