

var titolo = document.getElementById("titolo");

titolo.addEventListener("mouseover", function() {
  titolo.style.color = "red";
});


titolo.addEventListener("mouseout", function() {
  titolo.style.color = "black";
});


////////////////////////////////////////////////////////////////

let immagine=document.getElementById("immagine")
let visibility = "none"
immagine.style.display = visibility
function mostraOrimuoviImmagine() {
    if (visibility=="block") {
        visibility="none"
        immagine.style.display = visibility
    }
    else {
        visibility="block"
        immagine.style.display = visibility
    }
}

//////////////////////////////////////////////////////////////

function cambiaTesto(stringa) {
  titolo.innerHTML = stringa
}

//////////////////////////////////////////////////////////////

function aggiungiAllaClasse(element_id, className) {
  let elemento = document.getElementById(element_id)
  if (elemento.classList.contains(className)) {
    elemento.classList.remove(className)
  }
  else {
    elemento.classList.add(className)
  }
} 



