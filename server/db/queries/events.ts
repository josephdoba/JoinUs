import { db } from "../connection";

// we use interfaces in TS to get around needing to use any
// https://www.typescriptlang.org/docs/handbook/interfaces.html

interface IEventObject {
  body: { eventName: string, eventImage: string, eventDescription: string, eventSizeLimit: number, eventOwnerId: number, eventCategory: string, eventCity: string, lat: number, lng: number, start_time: string, end_time: string }
}

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

const createEvent = (eventObj: IEventObject) => {
  console.log("event eventObject from queries/events.ts")
  // console.log(eventObj)
  console.log(eventObj.body)
  console.log(Number(eventObj.body.eventCategory))

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

  // const joinFromCreate = joinEvent(eventObj)
  // const joinFromCreateValues = [eventObj.body.eventOwnerId, eventObj.body.event_id, true]

  return db
  .query(createEventQuery, values)
  .then((data) => data.rows)
  .then(() => console.log(values))
  .catch((err) => {
    console.error(err.stack);
    console.log("Something went wrong with createEvent in events.ts");
  });


};
// make an update call
const editEvent = (eventObj: any) => {
  const editEventQuery =`UPDATE events
    SET id=$1 name=$2 image=$3, description=$4, size_limit=$5, owner_id=$6, category=$7, city=$8, lat=$9, lng=$10, start_time=$11, end_time=$12
    WHERE id=$1 AND owner_id=$5`;

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

  return db
      // .query(`SELECT * FROM events WHERE id = 1`)
      .query(`SELECT * FROM events WHERE id = $1`)
      .then((data) => data.rows)
      .catch((err) => console.error(err.stack));
};

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
  editEvent,
  leaveEvent,
  joinEvent,
  deleteEvent,
  getComments,
  addComments,
  deleteComments
};
