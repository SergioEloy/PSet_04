var Pizza = /** @class */ (function () {
    function Pizza(size, extraCheese, pepperoniToppings, hamToppings, pineappleToppings) {
        this._size = size;
        this._extraCheese = extraCheese;
        this._pepperoniToppings = pepperoniToppings;
        this._hamToppings = hamToppings;
        this._pineappleToppings = pineappleToppings;
    }
    Object.defineProperty(Pizza.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (size) {
            this._size = size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "extraCheese", {
        get: function () {
            return this._extraCheese;
        },
        set: function (extraCheese) {
            this._extraCheese = extraCheese;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "pepperoniToppings", {
        get: function () {
            return this._pepperoniToppings;
        },
        set: function (pepperoniToppings) {
            this._pepperoniToppings = pepperoniToppings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "hamToppings", {
        get: function () {
            return this._hamToppings;
        },
        set: function (hamToppings) {
            this._hamToppings = hamToppings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "pineappleToppings", {
        get: function () {
            return this._pineappleToppings;
        },
        set: function (pineappleToppings) {
            this._pineappleToppings = pineappleToppings;
        },
        enumerable: false,
        configurable: true
    });
    Pizza.prototype.genCost = function () {
        var cost = 0;
        if (this._size === 'small') {
            cost += 10 + 2 * (this._pepperoniToppings + this._hamToppings + this._pineappleToppings);
            if (this._extraCheese) {
                cost += 2;
            }
        }
        else if (this._size === 'medium') {
            cost += 12 + 2 * (this._pepperoniToppings + this._hamToppings + this._pineappleToppings);
            if (this._extraCheese) {
                cost += 4;
            }
        }
        else if (this._size === 'large') {
            cost += 14 + 3 * (this._pepperoniToppings + this._hamToppings + this._pineappleToppings);
            if (this._extraCheese) {
                cost += 6;
            }
        }
        else if (this._size === 'extra-large') {
            cost += 18 + 4 * (this._pepperoniToppings + this._hamToppings + this._pineappleToppings);
            if (this._extraCheese) {
                cost += 6;
            }
        }
        return cost;
    };
    return Pizza;
}());
var pizza = new Pizza('medium', true, 1, 0, 2);
console.log("Size: ".concat(pizza.size));
console.log("Extra cheese: ".concat(pizza.extraCheese));
console.log("Pepperoni toppings: ".concat(pizza.pepperoniToppings));
console.log("Ham toppings: ".concat(pizza.hamToppings));
console.log("Pineapple toppings: ".concat(pizza.pineappleToppings));
var cost = pizza.genCost();
console.log("Cost: $".concat(cost));
