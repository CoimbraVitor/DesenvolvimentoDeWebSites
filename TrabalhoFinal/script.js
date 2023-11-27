
function aparece(){
  var texto = document.getElementById("segredo");
  var sei = document.getElementById("sei");
  sei.style.display = "none";
  texto.style.display = "block";
}

function desaparece(){
  var sumir = document.getElementById("segredo");
  var sei = document.getElementById("sei");
  sei.style.display = "block";
  sumir.style.display = "none";
}