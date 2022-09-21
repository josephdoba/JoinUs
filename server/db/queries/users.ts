import { db } from "../connection";
// const db = require('../connection');

export const getUsers = () => {
  return db.query("SELECT * FROM users;").then((data) => {
    return data.rows;
  });
};
