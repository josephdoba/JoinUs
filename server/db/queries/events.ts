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
const createEvent = (eventObject: any) => {
  // https://node-postgres.com/features/queries
  const createEventQuery = `INSERT INTO events(name, image, description, size_limit, owner_id, category, lat, lng, start_time, end_time) VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`;
  const values = [
    eventObject.body.eventName,
    eventObject.body.eventImage,
    eventObject.body.eventDescription,
    2,
    1, // size_limit, owner_id,
    eventObject.body.Category,
    51.0943441322179,
    -113.99897456996281,
    "2022-10-13 05:00:00",
    "2022-10-13 16:00:00",
  ];

  /*
    const values = [
      eventObject.body.eventName,
      eventObject.body.eventImage,
      eventObject.body.eventDescription,
      2,1,1, // size_limit, owner_id, category (food & dining)
      51.0943441322179,
      -113.99897456996281,
      '2022-10-13 05:00:00',
      '2022-10-13 16:00:00'
    ]
    */
  return db
    .query(createEventQuery, values)
    .then((data) => data.rows)
    .catch((err) => {
      console.error(err.stack);
      console.log("error happened");
    });
};

const leaveEvent = (dataObj: any) => {
  const leaveEventQuery = `DELETE FROM joined_events WHERE user_id=$1 AND event_id=$2;`;
  const values = [dataObj.body.user_id, dataObj.body.event_id];

  return db
    .query(leaveEventQuery, values)
    .then((data) => data.rows)
    .catch((err) => {
      console.error(err.stack);
      console.log("error happened deleting event");
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
      console.log("badbad");
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
      console.log("badbad");
    });
};

// const editEvent = (eventObject) => {
//   return connection_1.db
//       .query(`SELECT * FROM events WHERE id = 1`)
//       .then((data) => data.rows)
//       .catch((err) => console.error(err.stack));
// };

export default {
  getCategories,
  getEvents,
  createEvent,
  leaveEvent,
  joinEvent,
  deleteEvent,
  getComments
};
