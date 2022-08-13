const { Xwing, Spaceship } = require('../src/05-xwing')

describe('Testing the Spaceship and Xwing classes', () => {
    s1 = new Xwing(100, 100, 100)
    s2 = new Xwing(100, 100, 100)

    test('Testing ship collisions', () => {
        Spaceship.collide(s1, s2)
        expect([s1.health, s2.health]).toEqual([90, 90])
    })

    test('Testing ship level up', () => {
        s1.levelUp(10)
        expect([s1.health, s1.xp]).toEqual([100, 10])
    })

    test('Testing ship healing', () => {
        s1.heal()
        expect(s1.health).toBe(101)
    })

    test('Testing ship speed boost', () => {
        expect(s1.speed()).toBe(100)

        s1.takeDamage(100)
        expect(s1.speed()).toBe(200)
    })

    test('Testing ship damage and hangar', () => {
        s2.takeDamage(10)
        expect(s2.shield).toBe(90)
        expect(Spaceship.hangar.includes(s2)).toBe(false)

        s2.takeDamage(90)
        expect(Spaceship.hangar.includes(s2)).toBe(true)
        s2.takeDamage(90)
        expect([s2.health, s2.isDead]).toEqual([0, true])
    })

})