const post = document.querySelector('.post');

post.addEventListener('click', (event) => {
  // console.log(event);
  // console.log(event.target);
  // console.log('Do you want to edit this post?');
});

const posts = document.querySelectorAll('.post');

posts.forEach((post) => {
  post.addEventListener('click', (e) => {
    // console.log('Do you want to edit this post?');
  });
});

// problem is that if we create a new post afterend with JS,
// it won't pick up in the posts variable

// let's fix this

document.body.addEventListener('click', (event) => {
  // only work for an exact match
  // need to get the closest element

  // if (event.target.matches('.post')) {

  if (event.target.closest('.post')) {
    console.log('Do you want to edit this post?');
    return;
  }
});

// events

// click
// mouseover
// mouseout
// keyup
// keydown
// keypress
