-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS events CASCADE;
DROP TABLE IF EXISTS joined_events CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  user_name VARCHAR(255) NOT NULL,
  user_pfp VARCHAR(255) NOT NULL,
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY NOT NULL,
  event_name VARCHAR(255) NOT NULL,
  event_image VARCHAR(255) NOT NULL,
  event_description TEXT,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  event_created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  event_latitude FLOAT(32) NOT NULL,
  event_longitude FLOAT(32) NOT NULL,
  event_start_time DATETIME NOT NULL,
  event_end_time DATETIME NOT NULL
)

CREATE TABLE joined_events (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  event_id INTEGER REFERENCES events_id ON DELETE CASCADE
)
