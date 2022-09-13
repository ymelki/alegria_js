console.log("j'écris dans la log ! ");

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
recipTemp=SEL;
SEL=SUCRE; // SEL 120
SUCRE=recipTemp;


/***  Ne pas toucher a ce qui est en dessous   */


console.log("Nous avons du Sel  " + SEL);
console.log("Nous avons du Sucre  " + SUCRE);




