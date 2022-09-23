## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information

- username: `labber`
- password: `labber`
- database: `final`

3. Install dependencies: `npm i`
4. Add the schema and seed the database in pg

- Check the db folder to see what gets created and seeded in the SDB

5. Run the server: `npm run local`

- Note: nodemon is used, so you should not have to restart your server

8. Visit `http://localhost:8080/`

## Warnings & Tips

- Split routes into their own resource-based file names, as demonstrated with `users.js` and `widgets.js`
- Split database schema (table definitions) and seeds (inserts) into separate files, one per table. See `db` folder for pre-populated examples.

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
