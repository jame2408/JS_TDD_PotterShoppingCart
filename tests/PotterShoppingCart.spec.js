var PotterShoppingCart = require("../scr/PotterShoppingCart");

var mocha = require('mocha');
var chai = require('chai');
chai.should();

describe('Buy Harry Potter Books', () => {
    describe('#CheckOut', () => {
        it('Test_checkout_0_books_amount_should_be_0', () => {
            // Arrange
            var expected = 0;
            var actual = 0;
            var cart = new PotterShoppingCart();
            var potterBooks = [];

            // Act
            actual = cart.Checkout(potterBooks);
            
            // Assert
            actual.should.equal(expected);
        });
    });
});