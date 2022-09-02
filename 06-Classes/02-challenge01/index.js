// 1. create a new constructor function, Book, which logs books in the school library (id, title, author, themes[]),
// 2. Add ids, titles and authors for your two favourite books.
// 3. Use the prototype keyword to add a theme property to the  books.
// 4. Add at least one theme to each of your books.

// Beginning:

function Book(id, title, author, themes = []) {
  (this.id = id),
    (this.title = title),
    (this.author = author),
    (this.themes = themes);
}

Book.prototype.addTheme = function (theme) {
  this.themes = [...this.themes, theme];
};
const foundation = new Book(1, 'Foundation', 'Isaac Azimov');
const ants = new Book(1, 'Ants', 'Bernard Werber');

console.log(foundation);
console.log(ants);

foundation.addTheme('Sci-fi');
console.log(foundation);
ants.addTheme('spiritual');
console.log(ants);
