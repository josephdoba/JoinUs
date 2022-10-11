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
// const io = require("socket.io")(http);

declare global {
  namespace Express {
    interface Request {
      secret?: string;
    }
  }
}

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

import eventsRoutes from "./routes/events";
import usersRoutes from "./routes/users";
import commentRoute from "./routes/comments";

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use("/api/users", usersRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/comments", commentRoute);

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
