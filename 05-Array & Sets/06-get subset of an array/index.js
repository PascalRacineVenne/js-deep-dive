const restaurants = [
  { name: 'Cap City Diner', milesAway: 2.2 },
  { name: 'Chop Shop', milesAway: 4.1 },
  { name: 'Northstar Cafe', milesAway: 0.9 },
  { name: 'City Tavern', milesAway: 0.5 },
  { name: 'Shake Shack', milesAway: 5.3 },
];

// Filter => only element returning true

const cRestaurants = restaurants.filter((restaurant) => {
  // return restaurant.name.charAt(0) === 'C';
  return restaurant.name.startsWith('C');
});

console.log(cRestaurants);
// starts with C and less than 3miles away
const cRestaurantsLessThan3 = restaurants.filter((restaurant) => {
  return restaurant.name.startsWith('C') && restaurant.milesAway < 3;
});

// just the first one find()
const northRestaurantsLessThan3 = restaurants.find((restaurant) => {
  return (
    restaurant.name.toLowerCase().includes('north') && restaurant.milesAway < 3
  );
});

console.log(northRestaurantsLessThan3);
