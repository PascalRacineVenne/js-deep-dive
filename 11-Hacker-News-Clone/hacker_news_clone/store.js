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
    case 'ADD_FAVORITE': {
      const addedFavorite = action.payload.favorite;
      const favorites = [...state.favorites, addedFavorite];
      return { favorites };
    }
    case 'REMOVE_FAVORITE': {
      const favoriteId = action.payload.favorite.id;
      const favorites = state.favorites.filter(
        (favorite) => favorite.id !== favoriteId
      );
      return { favorites };
    }
    default:
      return state;
  }
}

const store = createStore(favoritesReducer);
export default store;
