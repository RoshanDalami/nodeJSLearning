const convertToRS = (dollar) =>
{
    if(typeof dollar === 'number')
    {
        return dollar*120
    }
    else{
        throw Error('Amount needs to be in number')
    }
}
// console.log(convertToRS('five'))
try {
    console.log(convertToRS('five'))
    
} catch (error) {
    console.log(error) 
}
console.log('I will not run if program crashes')
