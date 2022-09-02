// Challenge:
// The JSON Placeholder API has /users endpoint,
// just like the one we saw in the tutorial for /posts
// Get the user with ID 3 and log their name and company they work for.
// Handle errors if something does not quite work.

// Here's the endpoint: https://jsonplaceholder.typicode.com/users/3

const user3 = fetch('https://jsonplaceholder.typicode.com/users/3')
  .then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  })
  .then((data) => {
    console.log(data.name), console.log(data.company.name);
  })
  .catch((err) => console.error(err));

console.log();
