const Circle = require('./shapes');
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