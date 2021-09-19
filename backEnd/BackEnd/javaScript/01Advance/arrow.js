// const sayHello = function(name)
// {
//     return "Hey, there" + name + "!"
// }
// console.log(sayHello('Roshan'))

// const sayHello = (name) =>
// {
//     return `hey There ${name}`
// }
// console.log(sayHello('Roshan'))
const sayHello = (name) =>  `hey There ${name}`
console.log(sayHello('Roshan'))


const todos = [{
    title: 'Buy Bread',
    isDone : true
},{
    title : 'Record YouTube videos',
    isDone : true
},{

    title : ' Go to Gym',
    isDone : false
}]

const thingsDone = todos.filter((todo) =>
    todo.isDone === true
)
console.log(thingsDone)