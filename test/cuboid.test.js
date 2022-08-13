const { Cuboid } = require('../src/03-cuboid')

describe('Testing the cuboid class', () => {
    c1 = new Cuboid(2, 3, 4)
    test('return the cuboid volume', () => {
        expect(c1.volume()).toBe(24)
    })
    test('change cuboid colour', () => {
        c1.paint('red')
        expect(c1.colour).toBe('red')
    }) 
})
