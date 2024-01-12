const number = Math.floor(Math.random()*10+1);

document.getElementById("button").onclick = function(){

    let guess = document.getElementById("guess").value;

    if(guess == number){
        alert("it coract");
    }
    else if(guess > number){
        alert("it more");
    }
    else{
        alert("it less");
    }
}