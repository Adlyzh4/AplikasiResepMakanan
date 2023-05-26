import { createSlice } from '@reduxjs/toolkit';

const favoriteRecipesSlice = createSlice({
  name: 'favoriteRecipes',
  initialState: {
    recipes: [],
  },
  reducers: {
    addFavoriteRecipe: (state, action) => {
      const recipe = action.payload;
      state.recipes.push(recipe);
    },
    removeFavoriteRecipe: (state, action) => {
      const recipeId = action.payload;
      state.recipes = state.recipes.filter(recipe => recipe.id !== recipeId);
    },
    removeAllFavoriteRecipes: state => {
      state.recipes = [];
    },
  },
});

export const { addFavoriteRecipe, removeFavoriteRecipe, removeAllFavoriteRecipes } = favoriteRecipesSlice.actions;

export default favoriteRecipesSlice.reducer;
