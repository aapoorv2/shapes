class Circle {
    constructor(radius) {
        if (radius <= 0) {
            throw new Error('Radius must be greater than 0');
        }
        this.radius = radius;
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    perimeter() {
        return Math.PI * 2 * this.radius;
    }
}

module.exports = Circle;