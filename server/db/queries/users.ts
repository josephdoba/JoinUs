import { db } from "../connection";
// const db = require('../connection');

const getUsers = () => {
  return db.query("SELECT * FROM users;").then((data) => data.rows);
};

const getUser = (id: string) => {
  return db
    .query(`SELECT * FROM users WHERE id = $1`, [id])
    .then((data) => data.rows);
};

const getUserJoinedEvents = () => {
  return db.query(`SELECT * FROM joined_events`).then((data) => data.rows);
};

export default { getUsers, getUserJoinedEvents, getUser };
