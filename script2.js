

// CREER UNE FONCTION QUI VA CREER UNE VARIABLE PRENOM ET QUI AFFICHE VOTRE PRENOM  !
function affiche_hello()  {
    let prenom="Yoel"
    console.log("Hello ! " + prenom);
}

// appel de fonction
affiche_hello();


function afficher_prenom( toto  )  {
    console.log("Hello ! " + toto);
}

// fonction qui va prendre un parametre une chaine de caractere qui sera un nom et qui l affichera
afficher_prenom("Axel");
afficher_prenom("Melki")


/**
 * 1/ FAIRE UNE FONCTION QUI PREND EN PARAMETRE UN NOMBRE et QUI AFFICHE CE NOMBRE + 1 . mafonction(5) => affiche 6
 * 2/ FAIRE UNE FONCTION QUI PREND EN PARAMETRE 2 NOMBRES et QUI AFFICHE la somme de ces nombres . mafonction(5,5) => affiche 10
 * 2/ FAIRE UNE FONCTION QUI PREND EN PARAMETRE 2 NOMBRES et QUI AFFICHE la multiplcation de ces nombres . mafonction(5,5) => affiche 25
 */


function affiche_nb(nb){
    nb2=nb+1;
    console.log(nb2);

}


affiche_nb(5);

function add(nb1,nb2){
    let somme=nb1+nb2;
    console.log(somme);

}

add(3,5);
add(3,55);


function mult(nb1,nb2){
    let mult=nb1*nb2;
    console.log(mult);

}

mult(3,5);
mult(3,55);



/** 
 * CREER LA FONCTION REPEAT2 ELLE VA AFFICHER LE PARAMETRE1 AUTANT DE FOIS QUE LE DEMANDE LE PRAMAETRE2
 * repeat2("Bonjour",5)
 */

function repeat2(  mot_repete   , nb       ){

    for (  let i = 0    ;  i < nb    ; i++   ) {

        console.log( mot_repete  );
  
    }

}

repeat2("TEST",10)
// ESSAYER WHILE



let age=35;
let sexe="M"

if (  (age > 17) && (sexe="M")    ){
    console.log("Cet homme à > 18 ans");
}
else {
    console.log("Cette femme a < 18 ans ")
}


if (  (age > 18) || (sexe="M")    ){
    console.log("SOIT UN  homme Soit  > 18 ans");
}