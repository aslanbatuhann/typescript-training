import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 8, 15);
let myRectangle = new Rectangle(5, 10, 12, 15);

console.log(myShape.getInfo());
console.log(myCircle.getInfo());
console.log(myRectangle.getInfo());