import express from "express";
import eventQueries from "../db/queries/events";

const router = express.Router();

router.get("/", (req, res) => {
  eventQueries
    .getComments()
    .then((comments: any) => res.json(comments))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.post('/add', (req, res) => {
  eventQueries
    .addComments(req)
    .then((event) => {
      res.json(event);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post('/delete', (req, res) => {
  eventQueries
    .deleteComments(req)
    .then((event) => {
      res.json(event);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});




export default router;