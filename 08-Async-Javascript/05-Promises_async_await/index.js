// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// function getBlogPost() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Blog Post'), 1000);
//   });
//   promise
//     .then((value) => console.log(value))
//     .finally(() => console.log('done'));
// }

// getBlogPost();

// async function getBlogPost() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Blog Post'), 1000);
//   });
//   const result = await promise;
//   console.log(result);
//   console.log('done');
// }

// getBlogPost();

const fetchPost = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();
  console.log(data);
};

fetchPost();
