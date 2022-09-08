const checkFavorite = (favorites, story) => {
  // check if the story in includes in the favorites array.
  return favorites.some((favorite) => favorite.id === story.id);
};

export default checkFavorite;
