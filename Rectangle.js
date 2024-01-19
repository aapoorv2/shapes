class Rectangle {
    constructor(l, w) {
        this.l = l;
        this.w = w;
    }
    calculateArea() {
        return this.l * this.w;
    }
    calculatePerimeter() {
        return 2 * (this.l + this.w);
    }
}

module.exports = Rectangle;