let a;
let b;
let c;

document.getElementById("submitbutton").onclick = function(){
    a = document.getElementById("atext").value;
    a = Number(a);

    b = document.getElementById("btext").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    document.getElementById("cside").innerHTML = "Side C is" + c;
}