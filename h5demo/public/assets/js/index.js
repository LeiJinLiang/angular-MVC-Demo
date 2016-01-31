/**
 * Created by 桃子 on 2016/1/28.
 */
var mms=document.getElementById('test');
mms.addEventListener('input', function () {
    console.log(1);
},false);
var mouse=document.getElementById('nav');
mouse.addEventListener('mousewheel', function () {
    console.log(11111111);
},false);
function setValue(){
    var label=document.getElementById('label');
    var textcontrol=label.control;
    textcontrol.value="710065";
}
setValue();