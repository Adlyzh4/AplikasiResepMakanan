// reducers/favoriteReducer.js

const initialState = {
    favoriteRecipes: [],
  };
  
  const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FAVORITE':
        return {
          ...state,
          favoriteRecipes: [...state.favoriteRecipes, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default favoriteReducer;
  