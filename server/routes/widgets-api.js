"use strict";
exports.__esModule = true;
/*
 * All routes for Widget Data are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /api/widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
var express_1 = require("express");
//const express = require("express");
var router = express_1["default"].Router();
var db = require("../db/connection");
router.get("/", function (req, res) {
    var query = "SELECT * FROM widgets";
    console.log(query);
    db.query(query)
        .then(function (data) {
        var widgets = data.rows;
        res.json({ widgets: widgets });
    })["catch"](function (err) {
        res.status(500).json({ error: err.message });
    });
});
module.exports = router;
