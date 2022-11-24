let array = [];
let dimension = Number(prompt("Give the size of your array", "size"));
alert("Entrer les "+ dimension + " valeurs du tableau dans les fenêtres suivantes");
for (let i=1; i <= dimension; i++){
    array.push(Number(prompt("Valeur :","Nombre")));
}
console.log("The array you entered is: " + array);

// The required program that create a duplicate of a given array
let duplicateArray = [];
for (let elem of array){
    duplicateArray.push(elem);
}
console.log("The duplicate array is: " + duplicateArray);