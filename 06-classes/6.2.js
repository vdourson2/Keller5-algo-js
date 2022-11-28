class Rectangle {
    constructor(topLeftXPos, topLeftYpos, width, height){
        this.x = topLeftXPos;
        this.y = topLeftYpos;
        this.width = width;
        this.height = height;
    }
    collides(otherRectangle){
        if ((this.x < otherRectangle.x + otherRectangle.width) &&
            (this.x + this.width > otherRectangle.x) &&
            (this.y < otherRectangle.y + otherRectangle.height) &&
            (this.height + this.y > otherRectangle.y)){
            return "There is a collision";
        }
        else {
            return "There is no collision";
        }
    }
}
let rectangle1 = new Rectangle(0,0,3,10);
let xpos = Number(prompt("Top left x position?"));
let ypos = Number(prompt("Top left y position?"));
let w = Number(prompt("Width?"));
let h = Number(prompt("Height?"));
let otherRectangle = new Rectangle(xpos,ypos,w,h);
let coll = rectangle1.collides(otherRectangle);
console.log(coll);5