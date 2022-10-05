import express from "express";
// const express = require("express");
// const db = require("../db/connection");
import eventQueries from "../db/queries/events";

const router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body)
  eventQueries
    .leaveEvent(req)
    .then((event) => {
      res.json(event);
    })
});


export default router;