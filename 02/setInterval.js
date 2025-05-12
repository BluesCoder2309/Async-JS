const textElement = document.querySelector('#text');

let seconds = 0;
textElement.textContent= `${seconds}`;

const timer = setInterval(()=>{
seconds++;
textElement.textContent= `${seconds}`;
if(seconds === 5){
    clearInterval(timer);
};
}, 1000)                                           // This will keep executing, to to make this stop, we've stored it in a variable

