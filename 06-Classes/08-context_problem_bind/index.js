const isAuth = true;
const user = {
  favorites: [],
};

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    // BIND MAGIC
    this.favoriteProduct = this.favoriteProduct.bind(this);
  }

  handleFavoriteProduct() {
    if (isAuth) {
      // added time... change what this was binded to.
      // By making it a arrow function we aren't genreating a new This.
      setTimeout(this.favoriteProduct, 1000);
    } else {
      console.log('You must be signed in to favorite products!');
    }
  }

  favoriteProduct() {
    user.favorites.push(this.name);
    console.log(`${this.name} favorited!`);
  }
}

const product1 = new Product('Coaster', 89.99);

product1.handleFavoriteProduct();
