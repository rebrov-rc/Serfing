
var right = 0;
var calc = -322;


// var calc = calc((-17.4em + -2vw) + -2rem);
// var calc = calc((16.4em + 2vw) + 2rem);


function scrollRight() {
    var esc = document.getElementById('prod-wrap');
    right = right - -calc;
    if(right < -680){
        right = 0;
    }
    esc.style.left = right +'px';
}
// =======================================================>
function scrollLeft() {  
    var esc = document.getElementById('prod-wrap');
    right = right - calc;
    if(right < 680){
        right = 0;
    }
    esc.style.left = right +'px';
}

document.querySelector('.line-left').onclick = scrollLeft;
document.querySelector('.line-right').onclick = scrollRight;

