const getMixedMessage = () =>{
    const topic = Math.floor(Math.random()*2);
    let message = undefined;
    switch(topic){
        case 0:
            message = jokeMessage();
            break;
        case 1:
            message = fortuneMessage();
            break;
    }
    return message;
}

