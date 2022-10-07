import moment from "moment";

// return new array without past events
export function upcomingEvents(events) {
  let results = [];
  const now = moment(Date.now());
  events.forEach((event) => {
    const eventEnd = moment(event.end_time);
    if (now.isBefore(eventEnd)) {
      results.push(event);
    }
  });
  return results;
}


export function pastEvents(events) {
  let results = [];
  const now = moment(Date.now());
  events.forEach((event) => {
    const eventEnd = moment(event.end_time);
    if (!now.isBefore(eventEnd)) {
      results.push(event)
    }
  });
  return results
}

// return an array of selected category obj
export function findEventsByCategory(categoryArr, categoryData, eventsData) {
  let arr = [];
  let results = [];

  for (let categoryObj of categoryData) {
    for (let name of categoryArr) {
      if (categoryObj.name === name) {
        arr.push(categoryObj.id);
      }
    }
  }
  for (let eventObj of eventsData) {
    for (let id of arr) {
      if (eventObj.category === id) {
        results.push(eventObj);
      }
    }
  }
  return results;
}


export function findUsersCreatedEvents(userID, eventsData) {
  let data = []
  for (const i of eventsData) {
    if (userID === i.owner_id) {
      data.push(i)
    }
  }
  return data
}

export function findUsersJoinedEvents(userID, eventsData, joinedEvents) {
  let eventID = []
  let finalEvents= []
  for (const i of joinedEvents) {
    if (userID === i.user_id) {
      eventID.push(i.event_id)
    }
  }

  for (const prop of eventsData) {
    for (const prop2 of eventID) {
      if (prop2 === prop.id)
      finalEvents.push(prop)
    }
  }
  return finalEvents
}

export function findCommentsForEvent(eventID, comments) {
  let comment = []
  for (const i of comments) {
    if (i.event_id === eventID) {
      comments.push(i)
    }
  }
  return comment
}

export function checkIfUserJoinedSingleEvent(userID, eventID, joinedEvents) {
  for (const i of joinedEvents) {
    if (i.user_id === userID && i.event_id === eventID) {
      return true
    }
  }
  return false
}
