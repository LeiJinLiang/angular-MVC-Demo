/**
 * Created by 桃子 on 2016/1/29.
 */
function showFileName(){
    var file;
    for(var i=0;i<document.getElementById('file').files.length;i++){
        file=document.getElementById('file').files[i];
        alert(file.name);
    }
}
var ele=document.getElementById('btn');
ele.addEventListener('click', function () {
        ShowFileType();
},false);
function ShowFileType(){
    var file;
    file=document.getElementById('file').files[0];
    var size=document.getElementById('size');
    size.innerHTML=file.size;
    var type=document.getElementById('type');
    type.innerHTML=file.type;
}
























