
export default function cleanEvent (obj) {
  
 const cleanCreateEvent = (obj) => {
  console.log(`From cleanEvent  ==> cleanCreateEvent: ${obj}`)
  return obj

 }
 const cleanEditEvent = (obj) => {
  return console.log(`From cleanEvent ==> cleanEditEvent: ${obj}`)
 }

 // do you need cleaners for the following?: userLeaveEvent, userJoinEvent, userDeleteEvent

 return { cleanCreateEvent, cleanEditEvent }
};