import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myCircle = new Circle(5, 8, 15);
let myRectangle = new Rectangle(5, 10, 12, 15);

// declare an array of shapes

let theShapes: Shape[] = [];

// add the shapes to the array
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShape of theShapes) {
    console.log(tempShape.getInfo());
    console.log(`Area = ${tempShape.calculateArea()}`);
    console.log("-------------------------------------------------")
}