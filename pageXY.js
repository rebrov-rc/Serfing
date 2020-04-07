var img = document.querySelector('.img-surf');
var dataCont = document.querySelector('.dataXY');
// dataCont.document.elementFromPoint(1000,2100);
img.onmouseover = function () { return dataCont.style.display = 'block'; };
img.onmouseout = function () { return dataCont.style.display = 'none'; };
img.onmousemove = function () {
    // console.log(event.clientX);
    dataCont.innerHTML = event.pageX + ':' + event.pageY;
    dataCont.style.left = "calc(" + event.pageX + "px - 500px)";
    dataCont.style.top = "calc(" + event.pageY + "px - 2000px)";
};
