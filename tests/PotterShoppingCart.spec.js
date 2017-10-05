var PotterShoppingCart = require("../scr/PotterShoppingCart");

var mocha = require('mocha');
var chai = require('chai');
chai.should();

describe('Buy Harry Potter Books', () => {
    describe('#CheckOut', () => {
        it('Test_checkout_0_books_amount_should_be_0', () => {
            var expected = 0;
            var potterBooks = [];

            amountShouldBe(expected, potterBooks);
        });

        it('Test_checkout_1_book_amount_should_be_100', () => {
            var expected = 100;
            var potterBooks = [
                ISBN = 1
            ];

            amountShouldBe(expected, potterBooks);
        });

        it('Test_checkout_2_books_amount_should_be_190', () => {
            var expected = 190;
            var potterBooks = [
                ISBN = 1,
                ISBN = 2
            ];

            amountShouldBe(expected, potterBooks);
        });

        it('Test_checkout_3_books_amount_should_be_270', () => {
            var expected = 270;
            var potterBooks = [
                ISBN = 1,
                ISBN = 2,
                ISBN = 3
            ];

            amountShouldBe(expected, potterBooks);
        });

        it('Test_checkout_4_books_amount_should_be_320', () => {
            var expected = 320;
            var potterBooks = [
                ISBN = 1,
                ISBN = 2,
                ISBN = 3,
                ISBN = 4
            ];

            amountShouldBe(expected, potterBooks);
        });

        it('Test_checkout_5_books_amount_should_be_375', () => {
            var expected = 375;
            var potterBooks = [
                ISBN = 1,
                ISBN = 2,
                ISBN = 3,
                ISBN = 4,
                ISBN = 5
            ];

            amountShouldBe(expected, potterBooks);
        });

        var amountShouldBe = function (expected, books) {
            var actual = 0;

            var cart = new PotterShoppingCart();
            actual = cart.Checkout(books);
            
            actual.should.equal(expected);
        }
    });
});