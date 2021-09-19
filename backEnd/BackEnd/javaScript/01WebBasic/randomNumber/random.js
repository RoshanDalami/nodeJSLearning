document.querySelector('#myForm').addEventListener('submit' , (event) =>{
    event.preventDefault()
  
    upperLimit = 6 
    lowerLimit = 1
    let randomNumber = Math.floor(Math.random() * (upperLimit - lowerLimit) + 1)
    let guess = document.getElementById('numberGuess').value 
    console.log(randomNumber)
    if(guess !== randomNumber)
    {
        document.getElementById('throwMessage').innerText = 'You guessed It wrong'
    }
    else
    {
        document.getElementById('throwMessage').innerText = 'Well , Congrats to you \n it is Correct'
    }
})


