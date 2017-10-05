class PotterShoppingCart {
    Checkout(books) {
        const unitPrice = 100;
        
        let qty = books.length;
        let amount = qty * unitPrice;
        return amount;
    };
}

module.exports = PotterShoppingCart;