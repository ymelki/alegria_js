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

