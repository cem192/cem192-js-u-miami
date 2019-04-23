// nyan Cat
var down = document.getElementById("down");
function nyanCatMoveDown() {
  document.getElementById("box").style.top = parseInt(document.getElementById("box").style.top) + 50 + 'px';
}
down.addEventListener("click", nyanCatMoveDown());

var up = document.getElementById("up");
function nyanCatMoveUp() {
  document.getElementById("box").style.top = parseInt(document.getElementById("box").style.top) - 50 + 'px';

}
down.addEventListener("click", nyanCatMoveUp());

var right = document.getElementById("right");
function nyanCatMoveRight() {
  document.getElementById("box").style.left = parseInt(document.getElementById("box").style.left) + 50 + 'px';
}
down.addEventListener("click", nyanCatMoveRight());

var down = document.getElementById("left");
function nyanCatMoveLeft() {
  document.getElementById("box").style.left = parseInt(document.getElementById("box").style.left) - 50 + 'px';
}
down.addEventListener("click", nyanCatMoveLeft());
