var john = {
    name : 'I am john',
    age : 24,
    isActive : true
}
var marry = {
    name : 'I am marry',
    age : 23 ,
    isActive: true
}
var sam = {
    name : 'I am sam',
    age : 29,
    isActive : false,
}

let users = new Map()

users.set('john' , john) //john inside single quotes is key and can be anything but another john is var value

users.set('marry', marry)
users.set('sam',sam)

// console.log(users) // Maps and objects are not same thing 
// .size is a property that gives the size of map i.e number of maps I could fatch

// console.log(users.get('sam'))
console.log(users.keys())

console.log(users.values())

for (const value  of users.values()) {
    console.log(value.name)
}