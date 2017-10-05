var _ = require("lodash");

class PotterShoppingCart {
    constructor() {
        this.unitPrice = 100;
        this.discount = {
            '0': 0,
            '1': 1,
            '2': 0.95,
            '3': 0.9,
            '4': 0.8,
            '5': 0.75
        }
    }
    Checkout(books) {

        let groupByBooks = _(books)
            .groupBy()
            .map((group, key) => group.length)
            .value();

        let amount = 0;
        while (typeof groupByBooks !== 'undefined' && groupByBooks.length > 0) {
        
            let qty = groupByBooks.length;
            amount += qty * this.unitPrice * this.discount[qty];

            for (var index = 0; index < groupByBooks.length; index) {
                if (groupByBooks[index] > 0) {
                    groupByBooks[index] = groupByBooks[index] - 1;
                    if (groupByBooks[index] === 0) {
                        groupByBooks.splice(index, 1);
                    }
                    else {
                        index++;
                    }
                }
            }
        }

        return amount;
    };


}

module.exports = PotterShoppingCart;