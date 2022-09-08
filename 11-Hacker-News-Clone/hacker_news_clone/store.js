// state management

function createStore(reducer) {
  // undefined gives access to initial state.
  let currentState = reducer(undefined, {});
  return {
    getState: () => currentState,
    dispath: (action) => {
      currentState = reducer(currentState, action);
    },
  };
}

const initialState = {
  favorites: [],
};

function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_FAVORITES':
      const addedFavorite = action.payload.favorite;
      const favorites = [...state.favorites, addedFavorite];
      return { favorites };
    case 'REMOVE_FAVORITES':
      const favoriteId = action.payload.favorite.id;
      const removeFavorites = state.favorites.filter(
        (favorite) => favorite.id !== favoriteId
      );
      return { removeFavorites };
    default:
      state;
  }
}

const action = {
  type: 'ADD_FAVORITES',
  payload: {
    favorite: {
      id: 1,
      title: 'story1',
    },
  },
};

const store = createStore(favoritesReducer);
store.dispath(action);
console.log(store.getState());

export default store;
