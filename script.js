console.log("j'écris dans la log ! ");
const monProgramme="jeu";
// monProgramme="Jeu 2";

let maVariable="Je teste";
maVariable="je test 2";

console.log(maVariable);


console.log(monProgramme)
// du commentaire

/*

Les variables :
stocké de l'information
variable numerique

concatenation : 
*/
prix_telephone=1200; // affectation de variable
prix_ttc_telephone=prix_telephone*1.2;
console.log(prix_telephone);
console.log(prix_ttc_telephone);

// AFFICHER DANS LA LOG LE MONTANT DE LA TVA DE LA VARIABLE prix_telephone
TVA=prix_ttc_telephone-prix_telephone;
console.log(TVA);

console.log("Le prix du Téléphone est de " + prix_telephone);


// inversion de variables
SEL  =100;
SUCRE=120;

console.log("Nous avons du Sel  " + SEL);
console.log("Nous avons du Sucre  " + SUCRE);

/***  Ne pas toucher a ce qui est au dessus   */

// votre code qui va inverser les variables
recipTemp=SEL; // RECIPTEMP CONTIENT 100
SEL=SUCRE; // SEL 120
SUCRE=recipTemp;


/***  Ne pas toucher a ce qui est en dessous   */


console.log("Nous avons du Sel  " + SEL);
console.log("Nous avons du Sucre  " + SUCRE);


// CONDITIONS
let age = 5;

 if (age > 18) {  // SI AGE  > 17 ALORS 
      console.log("Vous etes majeurs ");  // AFFICHE MAJEUR
     
 }  // FIN DU SI
 else {  // SI NON
    console.log("Vous etes mineurs ");  // AFFICHE MAJEUR
   
}  // FIN DU SI


// BOUCLES


// 1. initialiser une variable numerique et afficher dans la log si la variable est un nombre positif ou negatif
let nb = 10;
if (nb === 0 ) {
    console.log(" = 0");  // AFFICHE MAJEUR
   
}
if (nb > 0) {  // SI AGE  > 17 ALORS 
    console.log("Nombre positif ");  // AFFICHE MAJEUR
   
}  // FIN DU SI
else {  // SI NON
  console.log("Nombre négatif ");  // AFFICHE MAJEUR
 
} // FIN DU SI



// 2. initialiser une variable numerique et afficher dans la log si la variable est un nombre pair ou impair
let nbpair=4;
if ((nbpair % 2) == 0) {
    console.log("le nombre est pair ! ");
}
else {
    console.log("Le nombre est impair !")
}

let maChaine="voici ma chaine de caractere";
let longueur=maChaine.length;
console.log(longueur);


let tab=[ 13, "test", 343, "dfdsf", maChaine   ];

console.table(tab);

console.log(tab[2]);  // 343

console.log(maChaine[3]); // 

let nom="Yoel";

for (let i=0   ;   i <10 ;   i++    ) {   // BOUCLE : INITIALISON LA VAR I = 0 ; ARRETONS a 100 ; INCREMENTER DE 1
    console.log(i);      // ECRIRE DANS LA LOG LES CHIFFRES DE 1 A 100
  
  
  }
for (let i=0   ;   i <nom.length ;   i++    ) {   // BOUCLE : INITIALISON LA VAR I = 0 ; ARRETONS a 100 ; INCREMENTER DE 1
  console.log(i);      // ECRIRE DANS LA LOG LES CHIFFRES DE 1 A 100


}

for (let i=1   ;   i <10 ;   i++    ) {   // BOUCLE : INITIALISON LA VAR I = 0 ; ARRETONS a 100 ; INCREMENTER DE 1
    let result=i*2;
    console.log("2 * " + i + " = " + result);      // ECRIRE DANS LA LOG LES CHIFFRES DE 1 A 100
  
  
  }

  for (let i=1   ;   i <10 ;   i++    ) {   // BOUCLE : INITIALISON LA VAR I = 0 ; ARRETONS a 100 ; INCREMENTER DE 1
    let result=i*8;
    console.log("8 * " + i + " = " + result);      // ECRIRE DANS LA LOG LES CHIFFRES DE 1 A 100
  
  
  }

  for (let i=1   ;   i <10 ;   i++    ) {   // BOUCLE : INITIALISON LA VAR I = 0 ; ARRETONS a 100 ; INCREMENTER DE 1
    console.log("Table de "  + i )
    for (let j=1   ;   j <10 ;   j++    ) {   // BOUCLE : INITIALISON LA VAR I = 0 ; ARRETONS a 100 ; INCREMENTER DE 1
        let result=i*j;
        console.log(j  + " * " +  i + " = " + result);      // ECRIRE DANS LA LOG LES CHIFFRES DE 1 A 100
      }
  }

  // CREER UNE VARIABLE = 5 . CALCULER LA FACTORIELLE 5 * 4 * 3 * 2 * 1
  console.table(tab);

  console.log(tab[3]);
  let maChaine2="ce que je veux";
  console.log(maChaine2[3]);

 let salutation = "hello";
  salutation[0]="x";
  console.log(salutation);

  const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(0, 3);
console.table(citrus);

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfDog = paragraph.indexOf(searchTerm);
console.log(indexOfDog)
// output: 40


const searchNewTerm = "cat";
const indexOfCat = paragraph.indexOf(searchNewTerm)
console.log(indexOfCat);
// output: -1

const chorus = 'Hello everyone ';
console.log(chorus.repeat(3));
// output: Hello everyone Hello everyone Hello everyone

let ages=35;
let sexe="M";

if ( (ages > 17)  || (sexe="M")  ) {
     console.log("Homme majeur");
}

if (ages != 10){
    console.log("Vous n'avez pas 10 ans");
}

let monPrenom=prompt("Quel est ton prénom");

for(var x=2; x < 100; x=x*2) {
	console.log(x)
}


// BOUCLE WHILE 0 A 10
for (let i=0   ;   i <10 ;   i++    ) {   // BOUCLE : INITIALISON LA VAR I = 0 ; ARRETONS a 100 ; INCREMENTER DE 1
    console.log(i);      // ECRIRE DANS LA LOG LES CHIFFRES DE 1 A 100
  
  
  }

// WHILE
let k = 0; // initialisation
while( k <10  ) {
  console.log(k);      // ECRIRE DANS LA LOG LES CHIFFRES DE 1 A 100
  k++; //incrementation
  
}

/**EXO 1
 * 
 * FAIRE UNE INVITE EN JAVASCRIPT QUI DEMANDE DECIRE UN NOMBRE
 * VOUS ALLEZ AFFICHER DANS LA LOG LES CHIFFRE DE 0 A CE NOMBRE
 * ESSAYER FOR ET WHILE
 * 
 * EXO 2
 * 
 * CREER UNE VARIABLE N = 50
 * VOUS ALLER FAIRE UNE INVITE EN JAVASCRIPT QUI DEMANDE DECIRE UN NOMBRE
 * SI CE NOMBRE= A LA VARIABLE N QUI EST 50 ALORS CA ECRIT DANS LA CONSOLE " JEU GAGNE "
 * SI NON CA REPOSE LA QUESTION AVEC L INVITE
 * 
 * EXO 3
 * FACTORIELLE
 * N=5
 * 5*4*3*2*1
 * 
 */
// EXO 1
let monNombre=prompt("Quel est votre nonmbre ?");

for (let i=0;i<monNombre; i++){
    console.log(i);
}
let i=0;
while ( i<monNombre ){
    console.log(i);
    i++;
}


// EXO 2
 let n=50;

 let chiffre=prompt("Quel est ton chiffre ?");
 while (chiffre != n){
    console.log(n); 
   chiffre=prompt("Quel est ton chiffre ?");

 }

 console.log("BRAVO ! ")


 let q3= prompt ("selon vous, quel est le nombre magique ?");
let ns=50 ; //conditions à verifier
while (ns!=q3){ // si la condition n estr différente du résultat à q3
    if (q3 > ns ) { console.log(" C'est trop haut ! "); } else { console.log("c'est trop bas ! ") }
    q3= prompt ("Essaye encore "); // pas besoin d'incrémenter
}
console.log ("Jeu gagné");


// FOR 
for (let n=0; n<q3; n++    ){
    q3= prompt ("Essaye encore "); // pas besoin d'incrémenter

}
console.log ("Jeu gagné");

/**EXO FACTORIEELLE
 * CREER UNE VARIABLE CONTENANT UN NOMBRE
 * PAR EX : 5
 * FAIRE LE CALCUL 1 * 2 * 3 * 4 * 5
 * 
 * 
 * N=50
 * 1*2*3....*50
 * 
 * 
 */
let monNombré3=50;
// BOUCLE de 1 à 50
// STOCKER LE RESULTAT DANS UNE VARIABLE D ACCUMULATION 1*2
// RESULTAT + 2*3...

// Factorielle
let NB5=10;

// 1*2*3*4*10
// BOUCLE de 1 à NB5


let RESULTAT=1; // VARIABLE D ACCUMULATION
// BOUCLE 
    RESULTAT=RESULTAT * i;
// FIN BOUCLE


for (let i=1; i < NB5; i++ ){
    console.log("Le resultat est :"  + RESULTAT);
    console.log(i);
    RESULTAT = RESULTAT * i;
    /**      RESULT      i 
      * 1 TOUR1: 1       * 1
     * 2 TOUR2:  1 * 2 
     * 2 TOUR3:  2 * 3
     */
    // 1 * 2 * 3...
}

// PAREIL AVEC LA SOMME
// VAR = 5
// 1+2+3+4+5
let unNom="Yoel";
let last_c=UnNom[unNom.length].toUpper(); // dernier caractere en maj
let deb=substr(unNom,0,unNom.length-1); // Tout les caracteres sauf le denier
let chaine=deb+last_c;

let sprenom="Yoel";
let snom="Melki"
let sdeb=substr(sprenom,2,sprenom.length); // Tout les caracteres sauf le denier
  // une chaine du prenom sans le premiere caractere
// uine chaine du nom avec uniqument le premiere caractere


// Inverser les lettres du nom (par exemple Henri devient irneH) avec un boucle
bprenom="Yoel";
  // Nouveau tableau / chaine de caractere qui va contenir les meme infos avec les indices inverse

let  machaine="";
  let indice=0;
for (let i = bprenom.length ; i  >= 0 ; i-- ) {
    console.log(i);
    machaine[indice] = bprenom[i];
    indice++;
}

// 7. Supprimer toutes les voyelles dans la phrase suivante 
let tchaine="Alegria Academy Rocks";

for (  let i=0; i < tchaine.length; i++    ){
    // si la lettre contient une voyelle je la supprime
    if (  tchaine[i]  == "a"      ) { // on la supprime 
    }
    if (  tchaine[i]  == "e"      ) { // on la supprime 
    }
    if (  tchaine[i]  == "i"      ) { // on la supprime 
    }
    // .. 
}












