"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * All routes for Widget Data are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /api/widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
const express_1 = __importDefault(require("express"));
const connection_1 = require("../db/connection");
// const express = require("express");
const router = express_1.default.Router();
// const db = require("../db/connection");
router.get("/", (req, res) => {
    const query = `SELECT * FROM events`;
    console.log(query);
    connection_1.db.query(query)
        .then((data) => {
        const widgets = data.rows;
        res.json({ widgets });
    })
        .catch((err) => {
        res.status(500).json({ error: err.message });
    });
});
exports.default = router;
