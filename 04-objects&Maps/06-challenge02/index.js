// Challenge: The recommendations object contains a set of of nice places to visit in Brighton, UK,
// organized by what you'd like to do (eat pancakes, drink coffee etc).

// 1. Destructure the places to drink (coffee and beer) from recommendations
// 2. Destructure the places to listen to music
// 3. Write a function that takes the recommendations object as an argument and that
//      a) Logs out the music venues in recommendations when invoked
//      b) Uses object descructuring to get the "traditional" and "jazz" keys from the argument

const recommendations = {
  pancakes: 'Nowhere Man',
  riceBowls: 'Pompoko',
  beer: 'The Craft Beer Co.',
  coffee: 'Coffee Roasters',
  small_plates: 'Venetian Plates',
  music: {
    traditional: "Fiddler's Elbow",
    jazz: 'The Paris House',
  },
};

const {
  coffee,
  beer,
  music: { traditional, jazz },
} = recommendations;

// console.log(coffee, beer, traditional, jazz);

const getMusicVenues = ({ music: { traditional, jazz } }) => {
  console.log(
    `You can listen to traditional music at ${traditional} and jazz at ${jazz}`
  );
};

getMusicVenues(recommendations);
