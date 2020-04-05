var right = 0;
var calc = -322;
// var calc = calc((-17.4em + -2vw) + -2rem);
// var calc = calc((16.4em + 2vw) + 2rem);
function scrollRight() {
    var esc = document.getElementById('prod-wrap');
    right = right - -calc;
    if (right < -680) {
        right = 0;
    }
    esc.style.left = right + 'px';
}
// =======================================================>
function scrollLeft() {
    var esc = document.getElementById('prod-wrap');
    right = right - calc;
    if (right < 680) {
        right = 0;
    }
    esc.style.left = right + 'px';
}
var leftLine = document.querySelector('.line-left');
leftLine.onclick = scrollLeft;
var rightLine = document.querySelector('.line-right');
rightLine.onclick = scrollRight;
// ==================================================================
var top = document.getElementById("pad-hide");
var bottom = document.getElementById("pad-move");
var close1 = document.getElementById("close-btn");
var btn = document.querySelector('.read-more-move');
close1.onclick = clossing;
btn.onclick = padding;
function padding() {
    bottom.style.display = "block";
}
function clossing() {
    bottom.style.display = "none";
}
// =========================================
for (var i = 0; i < 1; i++) {
    // bottom.style.display = "block";
    if (btn < 1) {
    }
}
// }
function hide() {
    top.style.display = "none";
}
