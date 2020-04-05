
var right: number = 0;
var calc: number = -322;


// var calc = calc((-17.4em + -2vw) + -2rem);
// var calc = calc((16.4em + 2vw) + 2rem);


function scrollRight(): void {
    var esc: HTMLElement = document.getElementById('prod-wrap');
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

 let leftLine: HTMLElement = document.querySelector('.line-left');
 leftLine.onclick = scrollLeft;
 let rightLine: HTMLElement = document.querySelector('.line-right');
 rightLine.onclick = scrollRight;

// ==================================================================

var top: HTMLElement = document.getElementById("pad-hide");
var bottom: HTMLElement = document.getElementById("pad-move");
var close1: HTMLElement = document.getElementById("close-btn");
var btn: HTMLElement = document.querySelector('.read-more-move');
close1.onclick = clossing;
btn.onclick = padding;

function padding() {
    bottom.style.display = "block";
}
function clossing() {
    bottom.style.display = "none";   
}

// =========================================
for( let i = 0; i<1; i++) {
    // bottom.style.display = "block";

    if (btn < 1) {

    }
}
// }
function hide() {
    top.style.display = "none";

}
