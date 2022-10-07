// load .env data into process.env
import dotenv from "dotenv";
dotenv.config();
// Web server config
const PORT = process.env.PORT || 8080;
import express from "express";
const app = express();
import morgan from "morgan";
import cors from "cors";

import usersQuery from "./db/queries/users";

const http = require("http").Server(app);
const io = require("socket.io")(http);

declare global {
  namespace Express {
    interface Request {
      secret?: string;
    }
  }
}

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
import eventsRoutes from "./routes/events";
import usersRoutes from "./routes/users";
import eventRoute from "./routes/event";
import commentRoute from './routes/comments';

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use("/api/users", usersRoutes);
app.use("/api/events", eventsRoutes);
app.use("/event", eventRoute);
app.use("/api/comments", commentRoute);

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
interface Event {
  id: number;
  event_name: string;
  event_image: string;
  event_description: string;
  owner_id: number;
  event_latitude: number;
  event_longitude: number;
  event_start_time: Date | number;
  event_end_time: Date | number;
}

// login user
app.get("/api/user/:user_id", (req, res) => {
  const userID = req.params.user_id;
  usersQuery
    .getUser(userID)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

io.on(
  "connection",
  (socket: {
    on: (
      arg0: string,
      arg1: ({ name, message }: { name: any; message: any }) => void
    ) => void;
  }) => {
    socket.on("message", ({ name, message }) => {
      io.emit("message", { name, message });
    });
  }
);

http.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
