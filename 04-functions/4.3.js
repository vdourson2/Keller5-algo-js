//This function takes no argument and return a random integer between 1 and 10
let rand10 = () => Math.floor((Math.random() * 10) + 1);

//This function takes an integer n as argument, 
//and returns an array of n random numbers between 0 and 10
function multiRand(n){
    let array=[];
    for (let i=0;i<n;i++){
        array.push(rand10());
    }
    return array;
}
let taille = Number(prompt("Entrer la taille du tableau"));
console.log(multiRand(taille));