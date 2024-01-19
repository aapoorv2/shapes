class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
        if (length <= 0 || width <= 0) {
            throw new Error('All sides must be greater than 0');
        }
    }
    area() {
        return this.length * this.width;
    }
    perimeter() {
        return 2 * (this.length + this.width);
    }
}

module.exports = Rectangle;