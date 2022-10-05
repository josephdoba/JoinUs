"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const events_1 = __importDefault(require("../db/queries/events"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    events_1.default
        .getComments()
        .then((comments) => res.json(comments))
        .catch((err) => res.status(500).json({ error: err.message }));
});
exports.default = router;
