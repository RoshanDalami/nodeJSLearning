const student ={
    name : 'Roshan',
    age: 21,
    isActive: true

}

//convert this object into a string to be stored in local storage

const studentObjectToString = JSON.stringify(student)

//console.log(typeof(studentObjectToString))

//localStorage.setItem('student' , studentObjectToString)

const toJSON = JSON.parse(studentObjectToString)

console.log(typeof(toJSON))

console.log(toJSON.age)

localStorage.setItem('student' , studentObjectToString)