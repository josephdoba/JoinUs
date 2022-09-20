"use strict";
exports.__esModule = true;
/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
var express_1 = require("express");
// const express = require("express");
var router = express_1["default"].Router();
router.get("/", function (req, res) {
    res.render("users");
});
module.exports = router;
