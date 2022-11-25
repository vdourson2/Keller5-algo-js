//This fonction takes two arguments and return the product of the two arguments
function calcSurface(l, w){
    return l*w;
}

let width = Number(prompt("Enter the width of the rectangle","Width"));
let height = Number(prompt("Enter the height of the rectangle","Height"));
console.log("La surface du rectangle est "+ calcSurface(width, height));
