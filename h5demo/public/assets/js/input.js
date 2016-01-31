/**
 * Created by 桃子 on 2016/1/28.
 */
function value_change(){
    var number=document.getElementById('range').value;
    document.getElementById('output1').value=number;
}
function detail_ontoggle(detail){
    var p=document.getElementById('p');
    if(detail.open)
        p.style.visibility="visible";
    else
        p.style.visibility="hidden";
}
var ele=document.getElementById('detail1');
ele.addEventListener('toggle', function () {
    detail_ontoggle(this);
});
var btn=document.getElementById('btn');
btn.addEventListener('click', function () {
    btn_click();
},false);

function btn_click(){
    var progroessBar=document.getElementById('progress');
    progroessBar.getElementsByTagName('span')[0].textContent="0";
    for(var i=0;i<=100;i++){
        updateProgress(i);
    }
}
function updateProgress(newValue){
    var progressBar = document.getElementById('progress');
    progressBar.value = newValue;
    progressBar.getElementsByTagName('span')[0].textContent = newValue;
}































