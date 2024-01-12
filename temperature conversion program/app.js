let mytem = document.getElementById("tem").value;
mytem = Number(mytem);

document.getElementById("button").onclick = function(){
    if(document.getElementById("cel").checked){
        return document.getElementById("ans").innerHTML = (mytem - 32)*(5/9) +" cel";
    }
    else if(document.getElementById("fah").checked){
        return document.getElementById("ans").innerHTML = mytem * 9 / 5 +32 +" fah";
    }
}