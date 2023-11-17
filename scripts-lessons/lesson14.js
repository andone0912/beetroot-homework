
let x='300px';
let y='300px';
let box = document.querySelector(".box")
let smallBox = document.querySelector(".smallBox")
box.style.width = x;
box.style.height = y;
smallBox.addEventListener("mousedown", down);
function down(){
    smallBox.addEventListener("mouseup", place);
    document.addEventListener("mousemove",  myFunction);
}
function place(){document.removeEventListener("mousemove",  myFunction);}
function myFunction(e) {
  x = e.clientX
  y = e.clientY
  box.style.width = x + 'px';
  box.style.height = y + 'px';
}