const Circle = require('../src/circle');
const Rectangle = require('../src/rectangle');
const Triangle = require('../src/triangle');

describe('Circle', () => {
    test('Creating a circle with a negative radius', () => {
        expect(() => new Circle(-2)).toThrowError('Radius must be greater than 0');
    });
    test('CalculateArea', () => {
        const circle = new Circle(5);
        expect(circle.area()).toBeCloseTo(78.54, 2);
    });
    test('CalculatePerimeter', () => {
        const circle = new Circle(5);
        expect(circle.perimeter()).toBeCloseTo(31.42, 2);
    });
});

describe('Rectangle', () => {
    test('Creating a rectangle with negative sides', () => {
        expect(() => new Rectangle(-2, 2)).toThrowError('All sides must be greater than 0');
    });
    test('CalculateArea', () => {
        const rectangle = new Rectangle(5, 10);
        expect(rectangle.area()).toBe(50);
    });
    test('CalculatePerimeter', () => {
        const rectangle = new Rectangle(5, 10);
        expect(rectangle.perimeter()).toBe(30);
    });
});

describe('Triangle', () => {
    test('Creating a triangle with negative sides', () => {
        expect(() => new Triangle(-2, 2, -1)).toThrowError('All sides must be greater than 0');
    });
    test('area', () => {
        const triangle = new Triangle(5, 4, 5);
        expect(triangle.area()).toBeCloseTo(9.165, 2);
    });
    test('CalculatePerimeter', () => {
        const triangle = new Triangle(5, 3, 5);
        expect(triangle.perimeter()).toBe(13);
    });
});