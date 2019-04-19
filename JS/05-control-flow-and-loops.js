// Control Flow

//Problem #1
var txt;
var user = confirm("Click Okay or cancel.");
if (user == true) {
  txt = "Congratulations, you selected Okay!";
}  else {
  txt = "So sorry, you selected Cancel";
}
window.alert(txt);
