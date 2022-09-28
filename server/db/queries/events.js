"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../connection");
const getCategories = () => {
    return connection_1.db
        .query(`SELECT * FROM categories`)
        .then((data) => data.rows)
        .catch((err) => console.error(err.stack));
};
const getEvents = () => {
    return connection_1.db
        .query(`SELECT * FROM events`)
        .then((data) => data.rows)
        .catch((err) => console.error(err.stack));
};
const getEventByID = (eventID) => {
    // dont worry, I will change this to ': number' before pushing
    return connection_1.db
        .query(`SELECT * FROM events WHERE id = $1`, [eventID])
        .then((data) => data.rows)
        .catch((err) => console.error(err.stack));
};
// stored in state
// create the functions first, export it, then import into routes
exports.default = { getEvents, getEventByID, getCategories };
