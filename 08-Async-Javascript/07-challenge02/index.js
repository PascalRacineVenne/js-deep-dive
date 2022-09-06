// Challenge:
// Rewrite the GET API call from the previous challenge using async-await

// Challenge:
// fetch('https://jsonplaceholder.typicode.com/users/3')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   })
//   .then((person) =>
//     console.log(`${person.name} works for ${person.company.name}`)
//   )
//   .catch((err) => console.error(err));

const fetchData = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/3'
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(`${data.name} works for ${data.company.name}`);
  } catch (error) {
    alert("Couldn't make it happen mate");
    console.error(error);
  }
};

fetchData();
