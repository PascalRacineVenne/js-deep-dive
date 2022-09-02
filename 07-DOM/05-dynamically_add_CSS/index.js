const post = document.querySelector('.post');
post.style.display = 'flex';
post.style.backgroundColor = '#ca0';

// no more green text
post.classList.remove('post');
post.classList.add('post');
post.classList.toggle('post');
