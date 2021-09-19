// const myPElement = document.querySelector('p')
// myPElement.textContent = 'I am  changed using js'


//Changing element in DOM on HTML
const myPElements = document.querySelectorAll('p')
myPElements.forEach((p)=>{
    p.textContent = 'I am changed using JavaScript loop'
    //to remove element p.remove 

})
//end of changing element in html

// Creating new element
const myNewPara = document.createElement('p')
myNewPara.textContent = 'I was added via JavaScript'

document.querySelector('body').appendChild(myNewPara)

// End of creating new element