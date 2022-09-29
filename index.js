class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    area() {
      return this.height * this.width;
    }
    circuit() {
        return 2 * (this.height + this.width);
    }
    diagonal() {
      return Math.sqrt(this.height * this.height + this.width * this.width);
    }
    circleOutlinedInARectangle() {
      return new Circle(this.diagonal() / 2);
    }
    circleInscribedInARectangle() {
        return new Circle(Math.min(this.height, this.width) / 2);
    }
    info()
    {
        console.log("constructor(height, width), 1 - One side of figure, 2 - Second side of figure");
    }
}
class Square{
    constructor(side) {
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
    circuit() {
        return 4 * this.side;
    }
    diagonal() {
        return Math.sqrt(2) * this.side;
    }
    circleOutlinedInASquare() {
        return new Circle(this.diagonal() / 2);
    }
    circleInscribedInASquare() {
        return new Circle(this.side / 2);
    }
    info() {
        console.log("constructor(side), 1 - One side of figure");
    }
}
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
    circuit() {
        return 2 * Math.PI * this.radius;
    }
    circleOutlinedInACircle() {
        return new Circle(this.radius * Math.sqrt(2));
    }
    circleInscribedInACircle() {
        return new Circle(this.radius / Math.sqrt(2));
    }
    info() {
        console.log("constructor(radius), 1 - Radius of figure");
    }
}
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    area() {
        let p = this.circuit() / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }
    circuit() {
        return this.a + this.b + this.c;
    }
    circleOutlinedInATriangle() {
        return new Circle(2 * this.area() / this.circuit());
    }
    circleInscribedInATriangle() {
        return new Circle(this.area() / (this.circuit() / 2));
    }
    height() {
        return 2 * this.area() / this.a;
    }
    angles() {
        let alpha = Math.acos((this.b * this.b + this.c * this.c - this.a * this.a) / (2 * this.b * this.c));
        let beta = Math.acos((this.a * this.a + this.c * this.c - this.b * this.b) / (2 * this.a * this.c));
        let gamma = Math.acos((this.a * this.a + this.b * this.b - this.c * this.c) / (2 * this.a * this.b));
        return [alpha, beta, gamma];
    }
    info() {
        console.log("constructor(a, b, c), 1 - First side of figure, 2 - Second side of figure, 3 - Third side of figure");
        console.log("angles() - returns array of angles in radians");
    }
}
class TriangleEquilateral {
    constructor(a) {
        this.a = a;
    }
    area() {
        return this.a * this.a * Math.sqrt(3) / 4;
    }
    circuit() {
        return 3 * this.a;
    }
    circleOutlinedInATriangleEquilateral() {
        return new Circle(2 * this.area() / this.circuit());
    }
    circleInscribedInATriangleEquilateral() {
        return new Circle(this.area() / (this.circuit() / 2));
    }
    height() {
        return 2 * this.area() / this.a;
    }
    angles() {
        return [Math.PI / 3, Math.PI / 3, Math.PI / 3];
    }
    info() {
        console.log("constructor(a), 1 - One side of figure");
        console.log("angles() - returns array of angles in radians");
    }
}
class TriangleRectangular {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    area() {
        return this.a * this.b / 2;
    }
    circuit() {
        return this.a + this.b + Math.sqrt(this.a * this.a + this.b * this.b);
    }
    circleOutlinedInATriangleRectangular() {
        return new Circle(2 * this.area() / this.circuit());
    }
    circleInscribedInATriangleRectangular() {
        return new Circle(this.area() / (this.circuit() / 2));
    }
    diagonal() {
        return Math.sqrt(this.a * this.a + this.b * this.b);
    }
    height() {
        return 2 * this.area() / this.a;
    }
    angles() {
        return [Math.PI / 2, Math.atan(this.b / this.a), Math.atan(this.a / this.b)];
    }
    info() {
        console.log("constructor(a, b), 1 - First side of figure, 2 - Second side of figure");
        console.log("angles() - returns array of angles in radians");
    }
}
class Diamond {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    area() {
        return this.a * this.b / 2;
    }
    circuit() {
        return 2 * (this.a + this.b);
    }
    circleOutlinedInADiamond() {
        return new Circle(2 * this.area() / this.circuit());
    }
    circleInscribedInADiamond() {
        return new Circle(this.area() / (this.circuit() / 2));
    }
    info() {
        console.log("constructor(a, b), 1 - First diagonal of figure, 2 - Second diagonal of figure");
    }
}

module.exports = {Rectangle, Square, Circle, Triangle, Diamond, TriangleEquilateral, TriangleRectangular};