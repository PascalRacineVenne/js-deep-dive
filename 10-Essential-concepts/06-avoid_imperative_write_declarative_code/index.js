// imperative - code for a computer / declarative - code for people

const people = ['Pascal', 'Mayline', 'Arthur'];
// const invitations = [];

// IMPERATIVE

// for (let i = 0; i < people.length; i++) {
//   invitations[i] = `Hi ${people[i]}, come to my party!`;
// }

// console.log(invitations);

// DECLARATIVE

// people.forEach((person) => invitations.push(`Hi ${person}, come to my party!`));
const invitations = people.map((person) => `Hi ${person}, come to my party!`);
console.log(invitations);
