// Challenge:
// 1. Update text in the Scrimba mini-browser to match the title of this cast
// 2. Create an h2 with class 'tagline' and text "I can create HTML elements!"
// Add it right under the modified text.

const title = document.querySelector('h1');
title.innerText = 'Creating and Modifying HTML Elements';

const h2 = document.createElement('h2');
h2.className = 'tagline';
h2.innerText = 'I can create HTML elements!';

document.body.append(h2);
