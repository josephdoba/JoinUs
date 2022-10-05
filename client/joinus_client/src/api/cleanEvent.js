export default function cleanEvent (obj) {
  

 const cleanCreateEvent = (obj) => {
  console.log(`From createEvent, cleanCreateEvent: ${obj}`)

 }
 const cleanEditEvent = (obj) => {
  console.log(`From createEvent, EditCreateEvent: ${obj}`)
 }

 // do you need cleaners for the following?: userLeaveEvent, userJoinEvent, userDeleteEvent

 return { cleanCreateEvent, cleanEditEvent }
}