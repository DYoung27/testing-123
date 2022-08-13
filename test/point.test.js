const { Point } = require('../src/02-point')

describe('Testing the point class', () => {
    p1 = new Point(2, 3)
    
    test('moves the point', () => {
        p1.move(1, 1)
        expect([p1.x, p1.y]).toEqual([3, 4])
    })

    test('reflect the point', () => {
        p1.reflect()
        expect([p1.x, p1.y]).toEqual([4, 3])
    })

    test('stretch the point', () => {
        p1.stretch(2)
        expect([p1.x,p1.y]).toEqual([8, 6])
    })

})