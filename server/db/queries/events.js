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
const createEvent = (eventObject) => {
    return connection_1.db
        //     .query(`
        // INSERT INTO events(name, image, description, size_limit, owner_id, category, lat, lng, start_time, end_time) VALUES
        // ('coffee test', 'https://ptfc.co.uk/wp-content/uploads/2020/09/PTFC-this-is-a-test-event1090x630.jpg', 'Test description', 3, 1, 1, 51.0233064354121, -114.02369425973428, '2022-10-13 05:00:00', '2022-10-13 16:00:00');
        // `)
        .query(`
INSERT INTO events(name, image, description, size_limit, owner_id, category, lat, lng, start_time, end_time) VALUES
('coffee test', 'https://ptfc.co.uk/wp-content/uploads/2020/09/PTFC-this-is-a-test-event1090x630.jpg', 'Test description', 3, 1, 1, 51.0233064354121, -114.02369425973428, '2022-10-13 05:00:00', '2022-10-13 16:00:00');
`)
        .then((data) => data.rows)
        .catch((err) => console.error(err.stack));
};
const editEvent = (eventObject) => {
    return connection_1.db
        .query(`SELECT * FROM events WHERE id = 1`)
        .then((data) => data.rows)
        .catch((err) => console.error(err.stack));
};
exports.default = { getCategories, getEvents };
/*
INSERT INTO categories (name) VALUES
('Food & Dining'), 1
('Games & Recreation'), 2
('Fitness'), 3
('Outdoors'), 4
('Alcohol & Beverages'), 5
('Movies & Theatre'), 6
('Live Music'), 7
('Chatting & Philosophy'), 8
('Water Sports'), 9
('Entrepreneurial & Business'), 10
('Arts'), 11
('Health & Wellness'); 12
*/ 
