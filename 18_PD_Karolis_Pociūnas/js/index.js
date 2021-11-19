var vardas = window.prompt('Įveskite savo vardą');

if(!vardas){
    window.close();
} else {
    var skaicius = window.prompt("Įveskite patinkantį skaičių")
    if(!skaicius){
        alert("Neįvedus skaičiaus, nematysite turinio");
        window.close();
    } else {
        alert("Parodysime Jums nurodytą skaičių motociklų.")
    }
}

document.getElementById('greet').innerHTML = "Sveiki, " + vardas;



var i = 0;

var parent = document.getElementById('moto'),
    img;

for (var i = 0; i <= skaicius-1; i++) {
    img = new Image();
    img.src = "img/1.jpeg";
    parent.appendChild(img);
}



var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

