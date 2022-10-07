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
const users_1 = __importDefault(require("./db/queries/users"));
const http = require("http").Server(app);
const io = require("socket.io")(http);
// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.static("public"));
// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const events_1 = __importDefault(require("./routes/events"));
const users_2 = __importDefault(require("./routes/users"));
const event_1 = __importDefault(require("./routes/event"));
const comments_1 = __importDefault(require("./routes/comments"));
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use("/api/users", users_2.default);
app.use("/api/events", events_1.default);
app.use("/event", event_1.default);
app.use("/api/comments", comments_1.default);
// login user
app.get("/api/user/:user_id", (req, res) => {
    const userID = req.params.user_id;
    users_1.default
        .getUser(userID)
        .then((user) => {
        res.json(user);
    })
        .catch((err) => {
        res.status(500).json({ error: err.message });
    });
});
io.on("connection", (socket) => {
    socket.on("message", ({ name, message }) => {
        io.emit("message", { name, message });
    });
});
http.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
