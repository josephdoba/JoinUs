const userCreateEvent = () => {
  console.log("onClick from userCreateEvent")
};

// const userCreateEvent = () => {
//   return db
//     .query(`SELECT * FROM joined_events`)
//     .then((data) => data.rows)
//     .catch((err) => console.error(err.stack));
// }


module.export = { userCreateEvent }