// What is the DOM ?
// Browser side magic

// JS -> HTML, CSS (DOM - Document Object Model)

// Each element(object) in the tree are nodes.

// console.log(document.body);

const p = document.createElement('p');
p.innerText = 'Hello World';
document.body.append(p);

document.body.style.background = 'palegoldenrod';
p.style.color = '#f00';

p.addEventListener('click', () => console.log('clicked MOFOS'));
