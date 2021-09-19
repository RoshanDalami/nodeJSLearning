document.querySelector('#myform').addEventListener('submit' , (event)=>{
  event.preventDefault()
  console.log(event.target.passWord.value)
 console.log( event.target.passWord2.value)

let password1 = event.target.passWord
let password2 = event.target.passWord2

if(password1.value !== password2.value){
    document.getElementById('throwMessage').innerText = 'Password Doesnot Matched'
}
else
{
    document.getElementById('throwMessage').innerText = 'password Matched'
}

})