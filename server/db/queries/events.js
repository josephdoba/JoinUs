"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../connection");
const getCategories = () => {
    return connection_1.db
        .query(`SELECT * FROM categories`)
        .then((data) => data.rows)
        .catch((err) => console.error(err.stack));
};
const getEvents = () => {
    return connection_1.db
        .query(`SELECT * FROM events`)
        .then((data) => data.rows)
        .catch((err) => console.error(err.stack));
};
const getComments = () => {
    return connection_1.db
        .query(`SELECT * FROM comments`)
        .then((data) => data.rows)
        .catch((err) => console.error(err.stack));
};
/*
    .query(`
INSERT INTO events(name, image, description, size_limit, owner_id, category, lat, lng, start_time, end_time) VALUES
('coffee test', 'https://ptfc.co.uk/wp-content/uploads/2020/09/PTFC-this-is-a-test-event1090x630.jpg', 'Test description', 3, 1, 1, 51.0233064354121, -114.02369425973428, '2022-10-13 05:00:00', '2022-10-13 16:00:00');
`)
*/
/*
// Ayyyyy so, uh, I tried having this as eventObject: object, however TS decided not to allow that... Had to change it to Any for now.
https://stackoverflow.com/questions/68998005/how-to-check-object-type-from-request-body-in-typescript
-Joba
*/
const createEvent = (eventObject) => {
    console.log("event object from queries/events.ts");
    console.log(eventObject.body.Category);
    // https://node-postgres.com/features/queries
    const createEventQuery = `INSERT INTO events(name, image, description, size_limit, owner_id, category, address, lat, lng, start_time, end_time) VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`;
    const values = [
        eventObject.body.eventName,
        eventObject.body.eventImage,
        eventObject.body.eventDescription,
        eventObject.body.eventSizeLimit,
        eventObject.body.OwnerId,
        eventObject.body.Category,
        eventObject.body.eventAddress,
        eventObject.body.lat,
        eventObject.body.lng,
        eventObject.body.start_time,
        eventObject.body.end_time
    ];
    return connection_1.db
        .query(createEventQuery, values)
        .then((data) => data.rows)
        .then(() => console.log(values))
        .catch((err) => {
        console.error(err.stack);
        console.log("error happened in events.ts");
    });
};
const leaveEvent = (dataObj) => {
    const leaveEventQuery = `DELETE FROM joined_events WHERE user_id=$1 AND event_id=$2;`;
    const values = [dataObj.body.user_id, dataObj.body.event_id];
    return connection_1.db
        .query(leaveEventQuery, values)
        .then((data) => data.rows)
        .catch((err) => {
        console.error(err.stack);
        console.log("error happened deleting event");
    });
};
const joinEvent = (dataObj) => {
    const joinEventQuery = `INSERT INTO joined_events(user_id, event_id, user_attendance) VALUES ($1, $2, $3);`;
    const values = [dataObj.body.user_id, dataObj.body.event_id, true];
    return connection_1.db
        .query(joinEventQuery, values)
        .then((data) => data.rows)
        .catch((err) => {
        console.error(err.stack);
        console.log("badbad");
    });
};
const deleteEvent = (dataObj) => {
    const deleteEventQuery = `DELETE FROM events WHERE id=$1 AND owner_id=$2;`;
    const values = [dataObj.body.event_id, dataObj.body.owner_id];
    return connection_1.db
        .query(deleteEventQuery, values)
        .then((data) => data.rows)
        .catch((err) => {
        console.error(err.stack);
        console.log("badbad");
    });
};
const addComments = (dataObj) => {
    const addCommentQuery = `INSERT INTO comments(user_id, event_id, name, message) VALUES ($1, $2, $3, $4);`;
    const values = [dataObj.body.user_id, dataObj.body.event_id, dataObj.body.name, dataObj.body.message];
    return connection_1.db
        .query(addCommentQuery, values)
        .then((data) => data.rows)
        .catch((err) => {
        console.error(err.stack);
        console.log("badbad");
    });
};
const deleteComments = (dataObj) => {
    const deleteCommentQuery = `DELETE FROM comments WHERE id=$1;`;
    const values = [dataObj.body.comment_id];
    return connection_1.db
        .query(deleteCommentQuery, values)
        .then((data) => data.rows)
        .catch((err) => {
        console.error(err.stack);
        console.log("badbad");
    });
};
// const editEvent = (eventObject) => {
//   return connection_1.db
//       .query(`SELECT * FROM events WHERE id = 1`)
//       .then((data) => data.rows)
//       .catch((err) => console.error(err.stack));
// };
exports.default = {
    getCategories,
    getEvents,
    createEvent,
    leaveEvent,
    joinEvent,
    deleteEvent,
    getComments,
    addComments,
    deleteComments
};
