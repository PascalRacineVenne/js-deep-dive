// const runAsync = async () => {
//   await Promise.reject();
//   // we don't catch error nothing is displayed
// };

// runAsync();

// ***** Failed Promise ***** //

// const runAsync = async () => {
//   try {
//     return await Promise.reject(Error('oops'));
//     // *** grab also synchronous
//     // await Promise.resolve('hello');
//     // null.someProperty = true;
//   } catch (error) {
//     console.error(error);
//   }
// };

// runAsync();

// async function runAsync() {
//   return await Promise.reject(Error('Oops'));
// }

// runAsync().catch((error) => console.error(error));

// *** request to REAT API (github)

// const userName = 'asasdfad';
const userName = 'PascalRacineVenne';

const fetchGithubUser = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    alert('Could not fetch user, try resetting your connection');
    console.error(error);
  }
};

fetchGithubUser();
// const user = fetchGithubUser();
// console.log(user);

// const div = document.createElement('div');

// WHY IS NOT CATCHING A PROMISE A PROBLEM ???

// If it doesn't operate as expected we want to tell the user that the request was unsuccessfull.
