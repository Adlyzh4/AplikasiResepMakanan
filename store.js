// store.js

import { configureStore } from '@reduxjs/toolkit';
import favoriteRecipesReducer from './reducers/favoriteRecipesSlice';

const store = configureStore({
  reducer: {
    favoriteRecipes: favoriteRecipesReducer,
  },
});

export default store;
