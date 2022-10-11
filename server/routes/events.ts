import express from "express";

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
  console.log("-----------------------", req.body);
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
  console.log("-----------------------", req.body);
  eventQueries
    .editEvent(req)
    .then((events) => {
      res.json(events);
    })
    .catch((err: any) => {
      res.status(500).json({ error: err.message });
    });
});

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

export default router;
