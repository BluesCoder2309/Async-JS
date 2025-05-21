function greet (callback){
    setTimeout(() => {
        console.log('Hello');
        callback();
    }, 1000);

    
}

function message(){
    console.log('Welcome to the session!');
}

greet(message);
