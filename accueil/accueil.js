//copy mail
function macopie1() {
  var copyText = document.getElementById("macopie1");
  copyText.select();
  document.execCommand("Copy");
  alert("L'adresse mail a été copié");   
}


//button up
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}