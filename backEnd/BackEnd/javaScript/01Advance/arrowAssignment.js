const myTodos = [{
    title:'Buy Bread',
    isDone : true
} ,{
    title: 'Record Youtube Videos',
    isDone : false
},{
    title : 'Go To Gym',
    isDone : true
},{
    title : 'Sambhram',
    isDone : false
},{
    title : 'Computer Science and Engineering',
    isDone : true
},{
    title : 'Use Gel pen',
    isDone : false
}]

const printMe = myTodos.filter((todo)=> 
todo.isDone === false)

console.log(printMe)