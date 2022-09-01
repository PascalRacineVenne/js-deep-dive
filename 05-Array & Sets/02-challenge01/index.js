const favoriteSongs = [];

const song1 = {
  title: 'Are you gonna go my Way',
  artist: 'Lenny Kravitz',
};
const song2 = {
  title: 'Airbag',
  artist: 'Radiohead',
};
const song3 = {
  title: 'Fire',
  artist: 'Jimi Hendrix',
};
favoriteSongs.push(song1, song2, song3);

const lastIndex = favoriteSongs.length - 1;
console.log(favoriteSongs[lastIndex]);

favoriteSongs.pop();
console.log(favoriteSongs);
