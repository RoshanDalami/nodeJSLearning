document.querySelector('#submitForm').addEventListener('submit' ,(event) =>{
    event.preventDefault()
    console.log(event.target.firstName.value)
    console.log(event.target.lastName.value)
    console.log(event.target.password.value)
    console.log(event.target.re-password.value)
    event.target.value = ""

})
function validationCheck(){
    let password = document.getElementById('password').value

    let re_password = document.getElementById('re-password').value
    
    if(password !== re_password){
       document.createElement('p').textContent = 'Password Doesnot Matched'
       document.querySelector('body').appendChild(document.createElement('p').textContent)
    }
    else
    {
        document.createElement('p').textContent = 'password Matched'
        document.querySelector('body').appendChild(document.createElement('p').textContent)
    }


}
