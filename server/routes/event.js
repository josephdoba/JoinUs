"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const events_1 = __importDefault(require("../db/queries/events"));
const router = express_1.default.Router();
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
exports.default = router;
