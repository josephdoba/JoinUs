// load .env data into process.env
import dotenv from "dotenv";
dotenv.config();
// Web server config
const PORT = process.env.PORT || 8080;
import express from "express";
const app = express();
import morgan from "morgan";
// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

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
  event_created_at: Date | number;
  event_latitude: number;
  event_longitude: number;
  event_start_time: Date | number;
  event_end_time: Date | number;
}

const events: Event[] = [
  {
    id: 1,
    event_name: "coffee chat",
    event_image:
      "https://images.squarespace-cdn.com/content/v1/5b97eba69f8770a3639818de/1601497107704-YWY5VZU9Q5IHAPQZ983M/image-asset.jpeg",
    event_description:
      "Come join me for me a lovely quick little morning coffee and chat about the problems of the world",
    owner_id: 2,
    event_created_at: Date.now(),
    event_latitude: 51.0233064354121,
    event_longitude: -114.02369425973428,
    event_start_time: Date.now(),
    event_end_time: Date.now(),
  },
  {
    id: 2,
    event_name: "coffee chat 2",
    event_image:
      "https://images.squarespace-cdn.com/content/v1/5b97eba69f8770a3639818de/1601497107704-YWY5VZU9Q5IHAPQZ983M/image-asset.jpeg",
    event_description:
      "Come join me for me a lovely quick little morning coffee and chat about the problems of the world",
    owner_id: 3,
    event_created_at: Date.now(),
    event_latitude: 51.0233064354121,
    event_longitude: -114.02369425973428,
    event_start_time: Date.now(),
    event_end_time: Date.now(),
  },
  {
    id: 3,
    event_name: "coffee chat",
    event_image:
      "https://images.squarespace-cdn.com/content/v1/5b97eba69f8770a3639818de/1601497107704-YWY5VZU9Q5IHAPQZ983M/image-asset.jpeg",
    event_description:
      "Come join me for me a lovely quick little morning coffee and chat about the problems of the world",
    owner_id: 2,
    event_created_at: Date.now(),
    event_latitude: 51.0233064354121,
    event_longitude: -114.02369425973428,
    event_start_time: Date.now(),
    event_end_time: Date.now(),
  },
];

app.get("/", (req, res) => {
  res.json({ events });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
