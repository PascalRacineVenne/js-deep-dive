const user1 = 'Reed';
const user2 = 'Doug';

// const message = `User (user) says: (text)`;

function sendUserMessage(user, text) {
  return `User ${user} says: ${text}`;
}

const message1 = sendUserMessage(user1, 'Hello world');
console.log(message1);
const message2 = sendUserMessage(user2, 'NOT Hello world');
console.log(message2);
