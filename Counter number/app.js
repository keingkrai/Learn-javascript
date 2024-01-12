let count = 0;

document.getElementById("down").onclick = function(){
    count --;
    document.getElementById("counter").innerHTML = count;
}
document.getElementById("reset").onclick = function(){
    count =0;
    document.getElementById("counter").innerHTML = count;
}
document.getElementById("up").onclick = function(){
    count ++;
    document.getElementById("counter").innerHTML = count;
}