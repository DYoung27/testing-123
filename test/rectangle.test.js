const { Rectangle } = require('../src/01-rectangle.js')


describe('Testing the rectangle class', () => {
    r1 = new Rectangle(5, 2)
    
    test('Returns the area of rectangle', () => {
        expect(r1.area()).toBe(10)
    })
    
    test('Return the perimeter of rectangle', () => {
        expect(r1.perimeter()).toBe(14)
    })
})
