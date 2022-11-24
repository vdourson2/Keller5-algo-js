let array = [];
let dimension = Number(prompt("Give the size of your array", "size"));
alert("Entrer les "+ dimension + " valeurs du tableau dans les fenêtres suivantes");
for (let i=1; i <= dimension; i++){
    array.push(Number(prompt("Valeur :","Nombre")));
}
console.log(array);

// The required program that calculate the average value of an array
let sum=0
for (let elem of array){
    sum=sum+elem;
}
console.log("The average value of the given array is "+ sum/(array.length));