console.log('Loaded!');
//

var element = document.getElementById( 'main-text'
);

element.innerHTML='Caroline';

//move the image
var img=document.getElementById('madi');

var marginLeft=0;

function moveRight(){
    marginLeft = marginLeft + 5;
    img.stlye.marginLeft = marginLeft + 'px';
}

//var element=document.getElementById('main-text');
//element.innerHTMl='roses'

img.onclick = function () {
    var interval = setInterval(moveRight, 50);
//    img.style.marginLeft = '100px'
};