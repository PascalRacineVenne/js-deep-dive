// API - Application Programming Interface: software to communicate with other software.
// API - helpful service

// REST API
// --- weather data
// --- network request === AJAX request
// --- CRUD actions

// create   POST
// read     GET
// update   PUT / PATCH
// delete   DELETE

// http://jsonplaceholder.typicode.com/posts
// JSON data

// GET /posts/1

fetch('http://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => {
    console.error(err);
  });

const supaPost = {
  user_id: 2,
  title: 'this great post',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aspernatur nam nesciunt, voluptate eos sed quis blanditiis officia dignissimos vel asperiores, voluptas nemo, earum ipsum omnis laudantium! Consectetur, incidunt atque.',
};

// POST /posts
// require a second argument!

fetch('http://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify(supaPost),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
