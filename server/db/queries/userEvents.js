"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userCreateEvent = () => {
    console.log("onClick from userCreateEvent");
};
// const userCreateEvent = () => {
//   return db
//     .query(`SELECT * FROM joined_events`)
//     .then((data) => data.rows)
//     .catch((err) => console.error(err.stack));
// }
const userEditEvent = () => {
    console.log("onClick from userEditEvent");
};
// const userEditEvent = () => {
//   return db
//     .query(`SELECT * FROM joined_events`)
//     .then((data) => data.rows)
//     .catch((err) => console.error(err.stack));
// }
exports.default = { userCreateEvent, userEditEvent };
