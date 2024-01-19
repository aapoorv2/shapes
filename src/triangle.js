class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a <= 0 || b <= 0 || c <= 0) {
            throw new Error('All sides must be greater than 0');
        }
    }
    area() {
        var s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
    perimeter() {
        return this.a + this.b + this.c;
    }
}

module.exports = Triangle;