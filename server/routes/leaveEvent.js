"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const express = require("express");
// const db = require("../db/connection");
const events_1 = __importDefault(require("../db/queries/events"));
const router = express_1.default.Router();
router.post('/', (req, res) => {
    console.log(req.body);
    events_1.default
        .leaveEvent(req)
        .then((event) => {
        res.json(event);
    });
});
exports.default = router;
