import express from "express";
// const express = require("express");
// const db = require("../db/connection");
import eventQueries from "../db/queries/events";

const router = express.Router();

router.post('/', (req, res) => {
  eventQueries
    .joinEvent(req)
    .then((event) => {
      res.json(event);
    })
})



export default router;