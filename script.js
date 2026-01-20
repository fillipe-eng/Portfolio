let count = 1;
let count1 = 4;
document.getElementById("radio1").checked = true
let slide1 = document.getElementById("sButton1")
let modal1 = document.getElementById("modal1")
let eButton1 = document.getElementById("eButton1")

setInterval( function(){
nextImage1()
}, 3000)
setInterval( function(){
nextImage2()
}, 3000)


function nextImage1(){
    count++;
    if(count>3){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}
function nextImage2(){
    count1++;
    if(count1>6){
        count1 = 4;
    }
    document.getElementById("radio"+count1).checked = true;
}


slide1.onclick = function (){
    modal1.show()
}
eButton1.onclick = function (){
    modal1.close()
}