import express from "express";
import eventQueries from "../db/queries/events";

const router = express.Router();

router.post("/join", (req, res) => {
  eventQueries
    .joinEvent(req)
    .then((event) => {
      res.json(event);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// inside .joinevent
router.post("/leave", (req, res) => {
  console.log(req.body);
  eventQueries
    .leaveEvent(req)
    .then((event) => {
      res.json(event);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/delete", (req, res) => {
  eventQueries
    .deleteEvent(req)
    .then((events) => {
      res.json(events);
    })
    .catch((err: any) => {
      res.status(500).json({ error: err.message });
    });
});

// router.put("/events", (req, res) => {
//   eventQueries
//     .editEvent(req)
//     .then((events) => {
//       res.json(events);
//     })
//     .catch((err: any) => {
//       res.status(500).json({ error: err.message });
//     });
// });

export default router;
