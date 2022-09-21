"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
// PG database client/connection setup
const pg_1 = require("pg");
// const { Pool } = require('pg');
const dbParams = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
};
const db = new pg_1.Pool(dbParams);
exports.db = db;
db.connect();
