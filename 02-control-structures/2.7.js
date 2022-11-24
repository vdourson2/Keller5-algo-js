let number = Number(window.prompt("Give me a number","Number"));
let sum=0;
for (let i=1;i<=number;i+=1){
    sum=sum+Number(window.prompt("Enter a new number","Number"));
}
console.log("The sum of all the " + number + " numbers you gave me is " + sum);