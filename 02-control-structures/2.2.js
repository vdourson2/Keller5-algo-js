let petit = Number(prompt("Entrer un nombre","Nombre"));
let grand = Number(prompt("Entrer un nombre supérieur au nombre précédent","Nombre supérieur"));
if (grand <= petit){
    console.log("Le deuxième nombre que vous avez entré est plus petit ou égal au premier, ce programme ne peut donc pas s'exécuter correctement");
}
else {
    let courant = Number(prompt("Entrer un troisième nombre au hasard","Nombre au hasard"));
if ((courant>petit)&&(courant<grand)) {
    console.log("Votre troisième nombre est compris entre les deux premiers");
}
else{
    console.log("Votre troisième nombre n'est pas compris entre les deux premiers");
}
}