let myTodos = {
    day:'Monday',
    meetings: 0,
    meetDone: 0,
    meetRemining : 0,

}
let addMeeting = function(todo , meet = 0){
    todo.meetings = todo.meetings + meet
}
let addMeetDone = function(todo , meetingDone = 0){
    todo.meetDone = todo.meetDone + meetingDone
}
let meetReminings = function(todo)
{
   todo.meetRemining = todo.meetings - todo.meetDone
}

let resetDay = function(todo ){
    todo.meetings = 0 
    todo.meetDone = 0
}

let daySummery = function(todo)
{
    console.log(`Total meetings for today is ${todo.meetings} and meeting Done is ${todo.meetDone} so the meeting remining is ${todo.meetRemining} `)
}
addMeeting(myTodos , 5)
addMeetDone(myTodos , 3)
meetReminings(myTodos)

daySummery(myTodos)