"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const events_1 = __importDefault(require("../db/queries/events"));
const router = express_1.default.Router();
// api route for category list
router.get("/categories", (req, res) => {
    events_1.default
        .getCategories()
        .then((categories) => res.json(categories))
        .catch((err) => res.status(500).json({ error: err.message }));
});
// api route for all events
router.get("/", (req, res) => {
    events_1.default
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
    // console.log("-----------------------", req.body)
    events_1.default
        .createEvent(req)
        .then((events) => {
        // console.log(events);
        res.json(events);
    })
        .catch((err) => {
        res.status(500).json({ error: err.message });
    });
});
// api route for edit event
router.put("/", (req, res) => {
    // console.log("-----------------------", req.body)
    events_1.default
        .editEvent(req)
        .then((events) => {
        res.json(events);
    })
        .catch((err) => {
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
    events_1.default
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
    events_1.default
        .leaveEvent(req)
        .then((event) => {
        res.json(event);
    })
        .catch((err) => {
        res.status(500).json({ error: err.message });
    });
});
router.post("/delete", (req, res) => {
    events_1.default
        .deleteEvent(req)
        .then((events) => {
        res.json(events);
    })
        .catch((err) => {
        res.status(500).json({ error: err.message });
    });
});
exports.default = router;
