const prompt = require('prompt')



let Add = () => {

    prompt.start();

    prompt.get(['FirstNumber', 'SecondNumber'], function(err, res) {

if (err) {
    
    console.log('Error please stay good');

}
else {

    let Sum = () => parseFloat(res.FirstNumber) + parseFloat(res.SecondNumber);
    
        
    let Multi = () => parseFloat(res.FirstNumber) * parseFloat(res.SecondNumber);
     

    let Divi = () => parseFloat(res.FirstNumber) / parseFloat(res.SecondNumber);
     

    let Subs = () => parseFloat(res.FirstNumber) - parseFloat(res.SecondNumber);
    
    console.log(`The addition is : ${Sum()}`);
    console.log(`The multiplication is: ${Multi()}`);
    console.log(`The division is: ${Divi()}`);
    console.log(`The substraction is: ${Subs()}`);
         
}
} );
}

Add();