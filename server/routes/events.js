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
// const express = require("express");
// const db = require("../db/connection");
const events_1 = __importDefault(require("../db/queries/events"));
const router = express_1.default.Router();
// api route for category list
router.get("/categories", (req, res) => {
    events_1.default
        .getCategories()
        .then((categories) => res.json(categories))
        .catch((err) => res.status(500).json({ error: err.message }));
});
// api route for all events
router.get("/", (req, res) => {
    events_1.default
        .getEvents()
        .then((events) => {
        res.json(events);
    })
        .catch((err) => {
        res.status(500).json({ error: err.message });
    });
});
exports.default = router;
