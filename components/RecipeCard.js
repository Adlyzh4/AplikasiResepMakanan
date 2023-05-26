// components/RecipeCard.js

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteRecipe, removeFavoriteRecipe } from '../reducers/favoriteRecipesSlice';
import { useNavigation } from '@react-navigation/native';

const RecipeCard = ({ recipe }) => {
  // const dispatch = useDispatch();
  // const favoriteRecipes = useSelector(state => state.favoriteRecipes.recipes);

  const navigation = useNavigation();

  // const isFavorite = favoriteRecipes.some(favoriteRecipe => favoriteRecipe.id === recipe.id);

  // const toggleFavorite = () => {
  //   if (isFavorite) {
  //     dispatch(removeFavoriteRecipe(recipe.id));
  //   } else {
  //     dispatch(addFavoriteRecipe(recipe));
  //   }
  // };

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('RecipeDetail', { recipeId: recipe.id })}>
      <Image source={{ uri: recipe.image }} style={{ width: 300, height: 200 }} />
      <Text style={{ fontWeight: 'bold' }}>{recipe.title} </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={toggleFavorite}>
        <Text>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default RecipeCard;
