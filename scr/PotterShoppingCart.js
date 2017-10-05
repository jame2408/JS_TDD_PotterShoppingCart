class PotterShoppingCart {
    constructor() {
        this.unitPrice = 100;
        this.discount = {
            '0': 0,
            '1': 1,
            '2': 0.95,
            '3': 0.9,
            '4': 0.8
        }
    }
    Checkout(books) {
        let qty = books.length;
        let amount = qty * this.unitPrice * this.discount[qty];
        return amount;
    };
}

module.exports = PotterShoppingCart;