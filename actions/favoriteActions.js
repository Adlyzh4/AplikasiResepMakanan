// actions/favoriteActions.js

export const addFavorite = (recipe) => {
    return {
      type: 'ADD_FAVORITE',
      payload: recipe,
    };
  };
  