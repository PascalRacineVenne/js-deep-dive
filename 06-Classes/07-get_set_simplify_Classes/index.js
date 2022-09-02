// No private property by default

// Getters and Setters

class Product {
  constructor(name, price, discountable) {
    this._name = name;
    this._price = price;
    this.discountable = discountable;
  }

  // GETTER
  get price() {
    return this._price;
  }

  get name() {
    return this._name;
  }

  // SETTER
  set price(price) {
    if (typeof price !== 'number') {
      return this._price;
    } else {
      this._price = price;
    }
  }

  set name(name) {
    if (typeof name !== 'string') {
      return this._name;
    } else {
      this._name = name;
    }
  }
}

const product1 = new Product('Coffee Maker', 99.95, false);

product1.price = {};
console.log(product1.price);

product1.price = 80;
console.log(product1.price);

product1.name = 100;
console.log(product1.name);

product1.name = 'Drum';
console.log(product1.name);
