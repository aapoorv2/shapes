const Circle = require('./Circle');
const Rectangle = require('./Rectangle');
describe('Circle', () => {
    test('CalculateArea', () => {
        const circle = new Circle(5);
        expect(circle.calculateArea()).toBeCloseTo(78.54, 2);
    });
    test('CalculatePerimeter', () => {
        const circle = new Circle(5);
        expect(circle.calculatePerimeter()).toBeCloseTo(31.42, 2);
    });
});

describe('Rectangle', () => {
    test('CalculateArea', () => {
        const rectangle = new Rectangle(5, 10);
        expect(rectangle.calculateArea()).toBe(50);
    });
    test('CalculatePerimeter', () => {
        const rectangle = new Rectangle(5, 10);
        expect(rectangle.calculatePerimeter()).toBe(30);
    });
});