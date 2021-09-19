let userEmail = 'thisissomething123'
let password = '123hello00'

let userChecker = function(myString){
    if((myString.includes(123)) && (myString.length > 6)){
        return true
    }
    else{
        return false
    }
}

let passChecker = function(pass)
{
    if((pass.includes(123)) || (pass.lenght >= 10)){
        return true
    }
    else{
        return false
    }
}
console.log(passChecker(password))
console.log(password.length)