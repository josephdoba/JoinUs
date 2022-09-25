"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../connection");
const getEvents = () => {
    return connection_1.db
        .query(`SELECT * FROM events`)
        .then((data) => data.rows)
        .catch((err) => console.error(err.stack));
};
const getEvent = () => {
    return connection_1.db
        .query(`SELECT * FROM events WHERE owner_id = 2`)
        .then((data) => data.rows)
        .catch((err) => console.error(err.stack));
};
// create the functions first, export it, then import into routes
exports.default = { getEvents, getEvent };
