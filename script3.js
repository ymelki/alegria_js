


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

// GENERER UN NOMBRE ALEATOIRE AVANT
// BOUCLE TANT QUE < 6 CHANCES
/** IF LE NOMBRE EST = , > ou < 
 * sortie de la boucle
 * reboucler si c'est plus ou moins
 * 
 * 
 */