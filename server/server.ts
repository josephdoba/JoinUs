// load .env data into process.env
import dotenv from "dotenv";
dotenv.config();
// Web server config
const PORT = process.env.PORT || 8080;
import express from "express";
const app = express();
import morgan from "morgan";
const http = require('http').Server(app);
const io = require('socket.io')(http);

import cors from "cors";
// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
import eventsRoutes from "./routes/events";
import usersRoutes from "./routes/users";

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use("/api/users", usersRoutes);
app.use("/api/events", eventsRoutes);

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

app.get("/", (req, res) => {
  res.json({});
});

io.on('connection', (socket: { on: (arg0: string, arg1: ({ name, message }: { name: any; message: any; }) => void) => void; }) => {
  socket.on('message', ({ name, message }) => {
    io.emit('message', { name, message })
  })
})



http.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
