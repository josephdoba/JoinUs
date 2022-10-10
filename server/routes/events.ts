/*
 * All routes for Widget Data are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /api/widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
import express from "express";
// const express = require("express");
// const db = require("../db/connection");
import eventQueries from "../db/queries/events";

const router = express.Router();

// api route for category list
router.get("/categories", (req, res) => {
  eventQueries
    .getCategories()
    .then((categories: any) => res.json(categories))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// api route for all events
router.get("/", (req, res) => {
  eventQueries
    .getEvents()
    .then((events) => {
      res.json(events);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// api route for create event
router.post("/", (req, res) => {
  console.log("-----------------------", req.body)
  eventQueries
    .createEvent(req)
    .then((events) => {
      res.json(events);
    })
    .catch((err: any) => {
      res.status(500).json({ error: err.message });
    });
});

// api route for edit event
router.put("/", (req, res) => {
  console.log("-----------------------", req.body)
  eventQueries
    .editEvent(req)
    .then((events) => {
      res.json(events);
    })
    .catch((err: any) => {
      res.status(500).json({ error: err.message });
    });
});


// show event from event owner based on owner_id ()

// router.get("/:id", (req: any, res: any) => {
//   eventQueries
//     .getEventByID(req)
//     .then(() => {
//       console.log(req.events.event.id);
//       // res.json({ events });
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message });
//     });
// });
/*
router.post("/:id", (req: any, res: any) => { // join event route
  eventQueries
    .getEventByID(req)
    .then(() => {
      console.log(req.events.event.id);
      // res.json({ events });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
*/

export default router;
