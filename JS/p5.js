var body = document.getElementsByTagName("BODY") [0];

function modifyPage() {
  console.log("run");
  var circle = document.getElementById("circle");
  if(circle.style.dispaly == "none") {
    circle.style.dispaly = "block";
  } else {
    circle.style.display = "none";
  }
}

body.addEventListener("click", modifyPage);
