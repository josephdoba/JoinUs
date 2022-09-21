import db from "../connection";
// const db = require('../connection');

const getUsers = () => {
  return db.query("SELECT * FROM users;").then((data) => {
    return data.rows;
  });
};

export default { getUsers };
