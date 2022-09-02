class Product {
  constructor(name, price, discountable) {
    (this.name = name),
      (this.price = price),
      (this.discountable = discountable);
  }

  isDiscountable() {
    return this.discountable;
  }
}

// Inheritance

class SaleProduct extends Product {
  constructor(name, price, discountable, percentOff) {
    super(name, price, discountable);
    this.percentOff = percentOff;
  }

  getSalePrice() {
    if (super.isDiscountable()) {
      return this.price * ((100 - this.percentOff) / 100);
    } else {
      return `${this.name} is not eligible for a discount`;
    }
  }
}

const productOne = new Product('Coffee', 99, false);
console.log(productOne);

const saleProduct1 = new SaleProduct('Coffee maker', 99, true, 20);
console.log(saleProduct1.getSalePrice());

const saleProduct2 = new SaleProduct('Coffee maker', 99, false, 20);
console.log(saleProduct2.getSalePrice());
