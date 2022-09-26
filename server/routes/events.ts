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
    .then((categories) => res.json({ categories }))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// api route for all events
router.get("/", (req, res) => {
  eventQueries
    .getEvents()
    .then((events) => {
      res.json({ events });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

export default router;
