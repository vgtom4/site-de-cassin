function macopie1() {
  var copyText = document.getElementById("macopie1");
  copyText.select();
  document.execCommand("Copy");
  alert("L'adresse mail a été copié");   
}
