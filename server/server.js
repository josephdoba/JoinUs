"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// load .env data into process.env
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Web server config
const PORT = process.env.PORT || 8080;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const http = require("http").Server(app);
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.static("public"));
const events_1 = __importDefault(require("./routes/events"));
const users_1 = __importDefault(require("./routes/users"));
const comments_1 = __importDefault(require("./routes/comments"));
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use("/api/users", users_1.default);
app.use("/api/events", events_1.default);
app.use("/api/comments", comments_1.default);
// io.on(
//   "connection",
//   (socket: {
//     on: (
//       arg0: string,
//       arg1: ({ name, message }: { name: any; message: any }) => void
//     ) => void;
//   }) => {
//     socket.on("message", ({ name, message }) => {
//       io.emit("message", { name, message });
//     });
//   }
// );
http.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
