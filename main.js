
var a= 0;
var b= setInterval(Anim,500);
function Anim()
{
    a = a+10;
    if(a == 200){
        clearInterval(b);
    }else{
        var target = document.getElementById("test");
   target.style.width = a + "px";
    }
}

//
var id=setTimeout(out, 5000);
function out(){
    var target = document.getElementById("test1");
    target.style.width = "500px";
}

function stopAnimation(){
    clearTimeout(id);
}