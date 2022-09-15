// evenement qui lance une fonction
document.getElementById("monbouton").addEventListener("click" , mafonction);

// fonction affichant l'information
function mafonction(){
document.getElementById("madiv").innerHTML= parseInt(document.getElementById("madiv").innerHTML) + 1;
}

// EXO : dans la div par defaut on a 1 . 
// bouton GO => dans la div 2 .. 3 .. 4. ..