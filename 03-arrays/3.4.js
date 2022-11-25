let array = [];
let dimension = Number(prompt("Give the size of your array", "size"));
alert("Entrer les "+ dimension + " valeurs du tableau dans les fenêtres suivantes");
for (let i=1; i <= dimension; i++){
    array.push(Number(prompt("Valeur :","Nombre")));
}
console.log("The array you entered is: " + array);

// The required program that display the minimum and maximum elements of a given array
let min=array[0];
let max=array[0];
for (let i=1;i<=array.length;i++){
    if (array[i]<min){
        min=array[i];
    }
    else if (array[i]>max){
        max=array[i];
    }
}
console.log("L'élément minimum du tableau est "+ min +" et l'élément maximum du tableau est "+max);