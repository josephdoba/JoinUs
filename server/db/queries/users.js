"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../connection");
// const db = require('../connection');
const getUsers = () => {
    return connection_1.db.query("SELECT * FROM users;").then((data) => data.rows);
};
const getUser = (id) => {
    return connection_1.db
        .query(`SELECT * FROM users WHERE id = $1`, [id])
        .then((data) => data.rows);
};
const getJoinedEvents = () => {
    return connection_1.db.query(`SELECT * FROM joined_events`).then((data) => data.rows);
};
exports.default = { getUsers, getJoinedEvents, getUser };
