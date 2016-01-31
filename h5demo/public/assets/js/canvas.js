/**
 * Created by 桃子 on 2016/1/29.
 */
function draw(id){
    var canvas=document.getElementById(id);
    if(canvas==null){
        return false;
    }
    var context=canvas.getContext('2d');
    context.fillStyle="#fff";

    context.fillRect(0,0,400,300);
    context.fillStyle = "red";
    context.strokeStyle = "blue";
    context.lineWidth=1;
    context.beginPath();
    context.arc(150,80,50,25,Math.PI*0.5,true);
    context.closePath();
    context.fillStyle='rgba(255,0,0,1)';
    context.fill();
}
-function () {
    draw('canvas');
}();

function clear(id){
    var canvas=document.getElementById(id);
    if(canvas==null){
        return false;
    }
    var context=canvas.getContext('2d');
    context.clearRect(10,10,100,100);
}
var ele=document.getElementById('btn');
ele.addEventListener('click',function(){
    clear('canvas');
},false);



























