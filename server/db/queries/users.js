"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../connection"));
// const db = require('../connection');
const getUsers = () => {
    return connection_1.default.query("SELECT * FROM users;").then((data) => {
        return data.rows;
    });
};
exports.default = { getUsers };
