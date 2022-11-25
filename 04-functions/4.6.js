//This function takes an integer as argument, 
//and returns the factorial of this number.
function factorial(a){
    if (a>1) {
        return a*factorial(a-1);
    }
    else {
        return 1
    }
}

let n=Number(prompt("Entrer a positive integer","Integer"));
console.log("The factorial of " + n +" is " + factorial(n));