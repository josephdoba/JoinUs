export function checkIfJoinedSingleEvent(userID, eventID, joinedEvents) {
  for (const i of joinedEvents) {
    if (i.user_id === userID && i.event_id === eventID) {
      return true;
    }
  }
  return false;
}

export function checkIfJoinedEvent(userId, eventId, joinedEvents) {
  const events = [];
  for (const i of joinedEvents) {
    if (userId === i.user_id) {
      events.push(i.event_id);
    }
  }
  for (const prop of events) {
    if (prop === eventId) {
      return true;
    }
  }
  return false;
}
