import moment from 'moment';

// upcoming Events
export function upcomingEvents(events) {
  let results = [];
  const now = moment(Date.now());
  events.forEach(event => {
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
  events.forEach(event => {
    const eventEnd = moment(event.end_time);
    if (!now.isBefore(eventEnd)) {
      results.push(event);
    }
  });
  return results;
}

export function findUsersCreatedEvents(userID, eventsData) {
  let data = [];
  for (const i of eventsData) {
    if (userID === i.owner_id) {
      data.push(i);
    }
  }
  return data;
}

export function findJoinedEvents(userID, eventsData, joinedEvents) {
  // let eventID = [];
  let finalEvents = [];

  const events = joinedEvents.filter(e => e.user_id === userID);
  // for (const i of joinedEvents) {
  //   if (userID === i.user_id) {
  //     eventID.push(i.event_id);
  //   }
  // }

  for (const event of eventsData) {
    for (const id of events) {
      if (id === event.id) finalEvents.push(event);
    }
  }
  return finalEvents;
}

// return an array events by selected category
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
