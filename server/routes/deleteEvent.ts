import express from "express";
// const express = require("express");
// const db = require("../db/connection");
import eventQueries from "../db/queries/events";

const router = express.Router();


router.post('/', (req, res) => {
  eventQueries
    .deleteEvent(req)
    .then((events) => {
      res.json(events);
    })
    .catch((err: any) => {
      res.status(500).json({ error: err.message });
    });
})

export default router;