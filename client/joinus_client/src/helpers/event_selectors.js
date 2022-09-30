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
