"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("../db/queries/users"));
const router = express_1.default.Router();
// const userQueries = require("../db/queries/users");
router.get("/", (req, res) => {
    users_1.default
        .getUsers()
        .then((users) => {
        res.json({ users });
    })
        .catch((err) => {
        res.status(500).json({ error: err.message });
    });
});
// create api events joined
// delete route
exports.default = router;
