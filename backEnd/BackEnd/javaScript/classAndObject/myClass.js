class User{
    constructor(firstname , lastname ,middlename, credits){
        this.firstname = firstname
        this.lastname = lastname
        this.middlename = middlename
        this.credits = credits

    }
    getfullName(){
        let fullName = `${this.firstname} ${this.middlename}${this.lastname} is my fullname`
        return fullName
    }
    editName(newName)
    {
        const myName = newName.split(' ')
        this.firstname = myName[0]
        this.lastname = myName[1]
    }
    addMiddleName(middleName){
        const midName = middleName
        this.middlename = midName + " "
    }
}
//example of Inheritance
class Teacher extends User{
constructor(){
    super(firstname , lastname ,middlename, credits)
}
}

const john = new User('john','dalami',35)
// console.log(john.getfullName())
john.editName('roshan dalami')
john.addMiddleName('kumar')
console.log(john.getfullName())

