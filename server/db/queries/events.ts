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

const createEvent = (eventObject: any) => {
  return db
    .query(`
INSERT INTO events(name, image, description, size_limit, owner_id, category, lat, lng, start_time, end_time) VALUES
('coffee test', 'https://ptfc.co.uk/wp-content/uploads/2020/09/PTFC-this-is-a-test-event1090x630.jpg', 'Test description', 3, 1, 1, 51.0233064354121, -114.02369425973428, '2022-10-13 05:00:00', '2022-10-13 16:00:00');
`)
    .then((data) => data.rows)
    .catch((err) => console.error(err.stack));
};

const editEvent = (eventObject: any) => {
  return db
    .query(`SELECT * FROM events WHERE id = 1`)
    .then((data) => data.rows)
    .catch((err) => console.error(err.stack));
};

export default { getCategories, getEvents, createEvent };
