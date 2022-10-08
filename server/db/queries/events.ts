import { db } from "../connection";

const getCategories = () => {
  return db
    .query(`SELECT * FROM categories`)
    .then((data) => data.rows)
    .catch((err) => console.error(err.stack));
};

const getEvents = () => {
  return db
    .query(`SELECT * FROM events`)
    .then((data) => data.rows)
    .catch((err) => console.error(err.stack));
};

const getComments = () => {
  return db
    .query(`SELECT * FROM comments`)
    .then((data) => data.rows)
    .catch((err) => console.error(err.stack));
}


/*
// Ayyyyy so, uh, I know using any is the meme when using TS, but.., we kinda need to use it here. TS doesn't like eventObject: object in this particular instance
https://stackoverflow.com/questions/68998005/how-to-check-object-type-from-request-body-in-typescript
-Joba
*/

const createEvent = (eventObj: any) => {
  console.log("event eventObject from queries/events.ts")
  // console.log(eventObj)
  console.log(eventObj.body)

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
    eventObj.body.end_time
  ];

  const joinFromCreate = joinEvent(eventObj)
  const joinFromCreateValues = [eventObj.body.eventOwnerId, eventObj.body.event_id, true]

  return db
  .query(createEventQuery, values)
  .then((data) => data.rows)
  .then(() => console.log(values))
  .catch((err) => {
    console.error(err.stack);
    console.log("Something went wrong with createEvent in events.ts");
  });


};

// const editEvent = (eventObject) => {
//   return connection_1.db
//       .query(`SELECT * FROM events WHERE id = 1`)
//       .then((data) => data.rows)
//       .catch((err) => console.error(err.stack));
// };

const leaveEvent = (dataObj: any) => {
  const leaveEventQuery = `DELETE FROM joined_events WHERE user_id=$1 AND event_id=$2;`;
  const values = [dataObj.body.user_id, dataObj.body.event_id];

  return db
    .query(leaveEventQuery, values)
    .then((data) => data.rows)
    .catch((err) => {
      console.error(err.stack);
      console.log("Something went wrong with leaveEvent in events.ts");
    });
};

const joinEvent = (dataObj: any) => {
  const joinEventQuery = `INSERT INTO joined_events(user_id, event_id, user_attendance) VALUES ($1, $2, $3);`;
  const values = [dataObj.body.user_id, dataObj.body.event_id, true];

  return db
    .query(joinEventQuery, values)
    .then((data) => data.rows)
    .catch((err) => {
      console.error(err.stack);
      console.log("Something went wrong with joinEvent in events.ts");
    });
};

const deleteEvent = (dataObj: any) => {
  const deleteEventQuery = `DELETE FROM events WHERE id=$1 AND owner_id=$2;`;
  const values = [dataObj.body.event_id, dataObj.body.owner_id];

  return db
    .query(deleteEventQuery, values)
    .then((data) => data.rows)
    .catch((err) => {
      console.error(err.stack);
      console.log("Something went wrong with deleteEvent in events.ts");
    });
};

const addComments = (dataObj: any) => {
  const addCommentQuery = `INSERT INTO comments(user_id, event_id, name, message) VALUES ($1, $2, $3, $4);`
  const values = [dataObj.body.user_id, dataObj.body.event_id, dataObj.body.name, dataObj.body.message];

  return db
    .query(addCommentQuery, values)
    .then((data) => data.rows)
    .catch((err) => {
      console.error(err.stack);
      console.log("Something went wrong with addComments in events.ts");
    });
};

const deleteComments = (dataObj: any) => {
  const deleteCommentQuery = `DELETE FROM comments WHERE id=$1;`
  const values = [dataObj.body.comment_id]

  return db
    .query(deleteCommentQuery, values)
    .then((data) => data.rows)
    .catch((err) => {
      console.error(err.stack);
      console.log("Something went wrong with deleteComments in events.ts");
    });
};

export default {
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
