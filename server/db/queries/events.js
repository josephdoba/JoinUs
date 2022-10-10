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
const createEvent = (eventObj) => {
    console.log("event eventObject from queries/events.ts");
    // console.log(eventObj)
    console.log(eventObj.body);
    console.log(Number(eventObj.body.eventCategory));
    // https://node-postgres.com/features/queries
    const createEventQuery = `INSERT INTO events(name, image, description, size_limit, owner_id, category, city, lat, lng, start_time, end_time) VALUES
  ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`;
    const values = [
        eventObj.body.eventName,
        eventObj.body.eventImage,
        eventObj.body.eventDescription,
        eventObj.body.eventSizeLimit,
        eventObj.body.eventOwnerId,
        Number(eventObj.body.eventCategory),
        eventObj.body.eventCity,
        eventObj.body.lat,
        eventObj.body.lng,
        eventObj.body.start_time,
        eventObj.body.end_time,
    ];
    return connection_1.db
        .query(createEventQuery, values)
        .then((data) => data.rows)
        .then(() => console.log(values))
        .catch((err) => {
        console.error(err.stack);
        console.log("Something went wrong with createEvent in events.ts");
    });
};
// make an update call
const editEvent = (eventObj) => {
    console.log("editEvent call from events.ts");
    const editEventQuery = `
  UPDATE events
    SET name=$2, image=$3, description=$4, size_limit=$5, category=$7, city=$8, lat=$9, lng=$10, start_time=$11, end_time=$12
    WHERE id=$1 AND owner_id=$6`;
    const values = [
        eventObj.body.eventId,
        eventObj.body.eventName,
        eventObj.body.eventImage,
        eventObj.body.eventDescription,
        eventObj.body.eventSizeLimit,
        eventObj.body.eventOwnerId,
        Number(eventObj.body.eventCategory),
        eventObj.body.eventCity,
        eventObj.body.lat,
        eventObj.body.lng,
        eventObj.body.start_time,
        eventObj.body.end_time,
    ];
    return (connection_1.db
        // .query(`SELECT * FROM events WHERE id = 1`)
        .query(editEventQuery, values)
        .then((data) => data.rows)
        .catch((err) => console.error(err.stack)));
};
const leaveEvent = (dataObj) => {
    const leaveEventQuery = `DELETE FROM joined_events WHERE user_id=$1 AND event_id=$2;`;
    const values = [dataObj.body.user_id, dataObj.body.event_id];
    return connection_1.db
        .query(leaveEventQuery, values)
        .then((data) => data.rows)
        .catch((err) => {
        console.error(err.stack);
        console.log("Something went wrong with leaveEvent in events.ts");
    });
};
const joinEvent = (dataObj) => {
    const joinEventQuery = `INSERT INTO joined_events(user_id, event_id, user_attendance) VALUES ($1, $2, $3);`;
    const values = [dataObj.body.user_id, dataObj.body.event_id, false];
    return connection_1.db
        .query(joinEventQuery, values)
        .then((data) => data.rows)
        .catch((err) => {
        console.error(err.stack);
        console.log("Something went wrong with joinEvent in events.ts");
    });
};
const deleteEvent = (dataObj) => {
    const deleteEventQuery = `DELETE FROM events WHERE id=$1 AND owner_id=$2;`;
    const values = [dataObj.body.event_id, dataObj.body.owner_id];
    return connection_1.db
        .query(deleteEventQuery, values)
        .then((data) => {
        console.log(data);
        return data.rows;
    })
        .catch((err) => {
        console.error(err.stack);
        console.log("Something went wrong with deleteEvent in events.ts");
    });
};
const addComments = (dataObj) => {
    const addCommentQuery = `INSERT INTO comments(user_id, event_id, name, message) VALUES ($1, $2, $3, $4);`;
    const values = [
        dataObj.body.user_id,
        dataObj.body.event_id,
        dataObj.body.name,
        dataObj.body.message,
    ];
    return connection_1.db
        .query(addCommentQuery, values)
        .then((data) => data.rows)
        .catch((err) => {
        console.error(err.stack);
        console.log("Something went wrong with addComments in events.ts");
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
        console.log("Something went wrong with deleteComments in events.ts");
    });
};
exports.default = {
    getCategories,
    getEvents,
    createEvent,
    editEvent,
    leaveEvent,
    joinEvent,
    deleteEvent,
    getComments,
    addComments,
    deleteComments,
};
