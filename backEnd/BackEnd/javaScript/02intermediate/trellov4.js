const myTodos = ['Buy Bread' , 'Go To Gym', 'Record YouTube Videos']
 // console.log(myTodos.indexOf('Record YouTube Videos'))
 // console.log(myTodos[myTodos.indexOf('Buy Bread')])


const newTodos = [{
title : 'Buy Bread' ,
isDone : false ,
},{
    title : 'Go To Gym',
    isDone : true,

},{
    title : 'Record YouTube Videos',
    isDone : true ,

}]
// const index = newTodos.findIndex(function(todo , index){
//     console.log(todo)
// return todo.title === 'Record YouTube Videos'
// })
// console.log(index)
const findTodo = function(myTodos , title){
    const index = myTodos.findIndex(function(todo , index){
        return todo.title.toLowerCase() === title.toLowerCase()

    })
    return myTodos[index]
}

let printMe = findTodo(newTodos , 'Go to Gym')

console.log(printMe)