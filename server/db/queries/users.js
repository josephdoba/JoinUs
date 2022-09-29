"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../connection");
// const db = require('../connection');
const getUsers = () => {
    return connection_1.db.query("SELECT * FROM users;").then((data) => {
        return data.rows;
    });
};
const getUserJoinedEvents = () => {
    return connection_1.db
        .query(`SELECT * FROM joined_events`)
        .then((data) => data.rows)
        .catch((err) => console.error(err.stack));
};
exports.default = { getUsers, getUserJoinedEvents };
