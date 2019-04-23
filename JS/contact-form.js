formFill = function(){
  var form = document.forms[0];

  document.getElementById("name").innerHTML = form.elements.name.value;

  document.getElementById("address").innerHTML = form.elements.address.value;

  document.getElementById("phone").innerHTML = form.elements.phone.value;

  document.getElementById("email").innerHTML = form.elements.email.value;
}
