var img: HTMLElement = document.querySelector('.img-surf');
var dataCont: HTMLElement = document.querySelector('.dataXY');
// dataCont.document.elementFromPoint(1000,2100);



img.onmouseover = () => dataCont.style.display = 'block';
img.onmouseout = () => dataCont.style.display = 'none';
img.onmousemove = () => {
// console.log(event.clientX);
dataCont.innerHTML = event.pageX + ':' + event.pageY;
dataCont.style.left = `calc(${event.pageX}px - 500px)`;
dataCont.style.top = `calc(${event.pageY}px - 2000px)`;

}