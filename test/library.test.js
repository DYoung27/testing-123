const { Book, User } = require('../src/04-library')

describe('Testing the Book and User classes', () => {
    u1 = new User('siidro', 'qwerty27')
    b1 = new Book('harry potter', '123456789', 'JK')

    test('update a username with password check', () => {

        u1.updateUsername('pedrali', 'TopG')
        expect(u1.username).toBe('siidro')

        u1.updateUsername('pedrali', 'qwerty27')
        expect(u1.username).toBe('pedrali')
    })

    test('check out a book', () => {
        u1.checkoutBook(b1)
        expect(u1.books.includes(b1)).toBe(true)
    })

    test('return a book', () => {
        u1.returnBook(b1)
        expect(u1.books.includes(b1)).toBe(false)
    })

})