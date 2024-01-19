class Circle {
    constructor(r) {
        this.r = r;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.r, 2);
    }
    calculatePerimeter() {
        return Math.PI * 2 * this.r;
    }
}

module.exports = Circle;