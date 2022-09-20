/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
import express from 'express'
//const express = require("express");
var router = express.Router();
var userQueries = require("../db/queries/users");
router.get("/", function (req, res) {
    userQueries
        .getUsers()
        .then(function (users) {
        res.json({ users: users });
    })["catch"](function (err) {
        res.status(500).json({ error: err.message });
    });
});
module.exports = router;
