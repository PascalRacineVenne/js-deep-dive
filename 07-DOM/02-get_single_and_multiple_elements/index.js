const el = document.getElementById('home');
console.log(el);

const links = document.querySelectorAll('a');
console.log(links);

links.forEach((link) => {
  if (link.matches('[href="/login"]')) {
    const loginLink = link;
    console.log(loginLink);
  }
});

const firstLink = document.querySelector('a');

const div = document.getElementsByTagName('div');
// return HTML COLLECTION
// can't iterate over it.
