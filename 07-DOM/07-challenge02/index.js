// Challenge:
// 1. Select h1 and add a click event listener.
// Log the text from the element to the console.
const h1 = document.querySelector('h1');
h1.addEventListener('click', (event) => {
  // console.log(event.target.innerHTML);
  // console.log(`This is the text for the title: ${event.target.innerHTML}`);
  console.log(`This is the text for the title: ${event.target.textContent}`);
});

// If you're not sure how to get text, feel free to check out hint.js

// 2. Add the same functionality to all the elements displayed
// in Scrimba web browser. Finally, try to trigger the event when you
// hover the mouse over the elements, instead of when clicking on them
const body = document.body;
body.addEventListener('mouseover', () => {
  console.log("I'm in the body");
});
