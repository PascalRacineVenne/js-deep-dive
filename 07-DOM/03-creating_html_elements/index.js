// create elements
const newPost = document.createElement('div');
newPost.className = 'top-post';
newPost.innerHTML = '<strong>This is a new post</strong>';

// at the end
// document.body.append(newPost);
// at the end
// document.body.prepend(newPost);

// OR query whre we want o put it

const post = document.querySelector('.post');
post.prepend(newPost);
