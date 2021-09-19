let myTodos = {
    day: 'Monday',
    meetings : 0,
    meetDone : 0,
    meetingRem : 0,

    addMeeting : function(meetingsToday){
        this.meetings = this.meetings + meetingsToday

    
    } ,
    addMeetDone : function(meetingsDone){
        this.meetDone = this.meetDone + meetingsDone
    },
    resetDay : function(){
        this.meetings = 0 
        this.meetDone = 0
    },
    
    todaySummary : function(){
        console.log(`Today meeting is ${this.meetings} and meetings Done is ${this.meetDone} `)
    }

}

myTodos.addMeeting(10)
myTodos.addMeetDone(5)

myTodos.todaySummary()