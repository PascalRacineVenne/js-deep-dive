const user = {
  firstName: 'Pascal',
  username: 'Pedro',
  email: 'pascal@gmail.com',
  details: {
    title: 'Programmer',
  },
};
// const { username, email, name } = user;

// function displayUser() {
//   console.log(`name: ${name}, username: ${username}, email: ${email}`);
// }

// displayUser();

// const {
//   firstName,
//   details: { title },
// } = user;

// function displayUserBio() {
//   console.log(title);
// }

// displayUserBio();

function displayUserBio({ firstName, details: { title } }) {
  console.log(`${firstName} is a ${title}`);
}

displayUserBio(user);
