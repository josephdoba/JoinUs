/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
import express from "express";

import userQueries from "../db/queries/users";

const router = express.Router();

router.get("/", (req, res) => {
  userQueries
    .getUsers()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/events", (req, res) => {
  userQueries
    .getJoinedEvents()
    .then((joinedEvents) => {
      res.json(joinedEvents);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// get the user's login
router.get("/:user_id", (req, res) => {
  const userID = req.params.user_id;
  userQueries
    .getUser(userID)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

export default router;
