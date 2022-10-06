
export default function cleanEvent (obj) {
  
 const cleanCreateEvent = (obj) => {
  console.log(`------------------------`)
  console.log(`From createEvent, cleanCreateEvent: ${obj}`)
  console.log(`------------------------`)

  return obj

 }
 const cleanEditEvent = (obj) => {
  return console.log(`From createEvent, cleanEditEvent: ${obj}`)
 }

 // do you need cleaners for the following?: userLeaveEvent, userJoinEvent, userDeleteEvent

 return { cleanCreateEvent, cleanEditEvent }
};