export function findUserByID(id, usersData) {
  return usersData.find((user) => user.id === id);
}

// using the event id, get array of joinedEvents with the event id matching the event
// in the joined list, loop through the user array and return the user objects that are attending
export function findEventAttendees(eventId, usersData, joinedEvents) {
  const event = joinedEvents.filter((joined) => joined.event_id === eventId);
  let results = [];

  for (let users of usersData) {
    for (let user of event) {
      if (user.user_id === users.id) {
        results.push(users);
      }
    }
  }
  return results;
}
