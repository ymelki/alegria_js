


/*
let var1="Magnifique ! ";
result="";
console.log(var1);
for (let i=var1.length-1; i >= 0; i--){
    console.log(i);
    console.log(var1[i]);
    result=result+var1[i]

}
console.log(result);


/*
console.log(var1);
result="";
for (let i=var1.length-1; i >= 0; i--){
    console.log(i);
    result=result+var1[i]


}
console.log(result);
*/


let text = "Hello world, welcome to the universe.";
let result = text.indexOf("welcome");
console.log(result);

function affiche_hello()  {
    
    console.log("Hello ! ");
}

function affiche_hello2()  {
    
    return "BLABLA  ! ";
}


affiche_hello();
let mavar=affiche_hello2();

// nombre aleatoire entre 1 et 100
let alea=Math.floor(Math.random() * 100); 



// creer une fonction qui renvoie vrai ou faux 
/*
function isequal(nb){
    if (nb == alea){
        return true;
    }
    else {
        return false;
    }
}
console.log(alea)
console.log(isequal(10))

let compteur = O;

function niveau(nb_chance){
    while( compteur < nb_chance ){
        if (isequal(nb)) { 
            break 
        } 
        else {
            if (nb > alea) { 
                console.log("cest plus ! ")
            }
            else {
                console.log("cest moins ! ")
            }
        }
        compteur++;
    }
}

niveau(10);
niveau(3);
*/

// PIERRE CISEAU 

let tableau = ["pierre", "ciseau", "papier"];
// Joueur 1
let j1=Math.floor(Math.random() * 3);

// joueur 2
let j2=Math.floor(Math.random() * 3);
console.log(j1);
console.log(j2);

function test(tab){
    console.table(tab);
    return tab;
} 

function check(tableau){
    tableau[0]
    
}

//parametre tableau[valeurj1 , valeurj2]

// on envoie deux indices 
let joueur = [j1,j2]
test(joueur); 

let var1="Magnifique ! ";
result="";
console.log(var1);
for (let i=var1.length-1; i >= 0; i--){
    console.log(i);
    console.log(var1[i]);
    result=result+var1[i]

}
/*
function reverse2(variable){
    result="";
    console.log(variable);
    for (let i=variable.length-1; i >= 0; i--){
        console.log(i);
        console.log(variable[i]);
        result=result+variable[i]

    }

}
reverse2("Henri !")
reverse2("Pierre !")
reverse2("Jean !")
reverse2("??? !")
// GENERER UN NOMBRE ALEATOIRE AVANT
// BOUCLE TANT QUE < 6 CHANCES
/** IF LE NOMBRE EST = , > ou < 
 * sortie de la boucle
 * reboucler si c'est plus ou moins
 * 
 * 
 */

let ages = [14,13,34,34,23];
let resultat=0;
for (let i = 0; i < ages.length; i++) {
    console.log(ages[i]);
    resultat=resultat+ages[i];
  }
console.log(resultat);

let resultat2=0;
ages.forEach(function(element) {
    resultat2=resultat2+element;
	console.log(element)
});
console.log(resultat2);


function sommet(tab){

    let resultat=0;
   for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
    resultat=resultat+tab[i];
   }
  return resultat;
}
console.log(   sommet(  [10,10,10]   )   );



// appliquer la somme de mon tableau
// diviser la somme / le nombre d elements
function laMoyenne(tab) {
    let masomme=sommet(  tab );
    let moyenne = masomme / tab.length;
    return moyenne;
}


console.log(   laMoyenne(  [10,10,10]   ));


let mavariable="test"; // VARIABLE GLOBAL
function mafonctiontest(){
    let mavariable="ce que je veux";
    return mavariable;
}
console.log(mavariable);
let info=mafonctiontest();
console.log(info);
console.log(mafonctiontest());
// console.log(mavariable); // AFFICHE  ... 
/**
 * 4. Cr??er un tableau ???prenom??? comprenant 5 ??l??ments diff??rents de type String.
    5. Ecrire une fonction pour d??finir l'??l??ment le plus petit du tableau prenom (celui comportant le moins de lettres)
 */
let prenom=[ "Axelle", "Richardtest", "YoelL","Pierretrsfddsfds", "Jeansdfdsfdsfdsfds"];


function affichertab(tab) {
    tab.forEach(function(element) {
        console.log(element)
    });
}
affichertab(prenom);
// le prenom qui a le moins de caractere
// .length : le nombre de caractere
// min=0;
// si la variable qu on lit > min alors min = 9999 le nombre de caractere de la variable lu

function nb_min_tab(tab){
    let nb_min=99999; 
    let ind=0;
    
    tab.forEach(function(element,index) {
        
        
        if (element.length < nb_min ){ 
            nb_min = element.length;  
           ind=index;
        }
        
    });
    return ind;

}

console.log(nb_min_tab(prenom));