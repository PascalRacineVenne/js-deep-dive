// The *** THIS *** keyword
// it is dynamic data.

// PRIMARY USE of the THIS keyword.

const userData = {
  username: 'Reed',
  title: 'JavaScript Programmer',
  getBio() {
    console.log(`User ${this.username} is a ${this.title}`);
  },
  askToFriend() {
    setTimeout(() => {
      console.log(`Would you like to friend ${this.username}`);
    }, 2000);
  },
};
// console.log(userData.getBio());
console.log(userData.askToFriend());

// *** Arrow function don't have a lexical THIS value *** //
