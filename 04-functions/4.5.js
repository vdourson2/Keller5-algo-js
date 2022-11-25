//This function takes the x and y coordinates of two different points as arguments, in the form of two arrays,
//and return the distance between those two points.
function calcDistance (A, B){
    return Math.sqrt(Math.pow(B[0]-A[0],2)+Math.pow(B[1]-A[1],2)).toFixed(2);
}

let pointA=[];
let pointB=[];
pointA[0]=Number(prompt("Coordonnée en x du point A", "Ax"));
pointA[1]=Number(prompt("Coordonnée en y du point A", "Ay"));
pointB[0]=Number(prompt("Coordonnée en x du point B", "Bx"));
pointB[1]=Number(prompt("Coordonnée en y du point B", "By"));

console.log("La distance entre les points A et B est de "+ calcDistance(pointA,pointB))
