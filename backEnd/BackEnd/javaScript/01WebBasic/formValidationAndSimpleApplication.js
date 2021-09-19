// //track input form
// document.querySelector('#myForm').addEventListener('change', ()=>{
//     console.log(event.target.value) // value holds the value whatever in the form
// })


// function myValidation(){
//     let myValue = document.getElementById('myForm').value

//     if(isNaN(myValue) || myValue < 1 || myValue >20){
//         console.log('Not a valid Input')

//     }
//     else{
//         console.log('This is valid Input')
//     }
//     console.clear()
// }
// document.getElementById('JSchange').innerHTML = myValidation()

//Advance Validation form

document.querySelector('.myForm').addEventListener('submit', (event)=>{
    event.preventDefault() //prevent default behaviour of browser
console.log(event.target.userName.value)
event.target.userName.value = ''
})