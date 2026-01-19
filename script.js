let count = 1;
let count1 = 4;
document.getElementById("radio1").checked = true

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