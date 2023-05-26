import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavoriteRecipe, removeAllFavoriteRecipes } from '../reducers/favoriteRecipesSlice';
import RecipeCard from '../components/RecipeCard';
import { useNavigation } from '@react-navigation/native';

const FavoritesScreen = () => {
  const favoriteRecipes = useSelector(state => state.favoriteRecipes.recipes);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleRemoveFavorite = (recipeId) => {
    dispatch(removeFavoriteRecipe(recipeId));
  };

  const handleRemoveAllFavorites = () => {
    dispatch(removeAllFavoriteRecipes());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Recipes</Text>
      {favoriteRecipes.length === 0 ? (
        <Text style={styles.emptyText}>No favorite recipes yet.</Text>
      ) : (
        <FlatList
          data={favoriteRecipes}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('RecipeDetail', { recipeId: item.id })}>
            <View style={styles.recipeContainer}>
              <RecipeCard recipe={item} />
              <TouchableOpacity onPress={() => handleRemoveFavorite(item.id)} style={styles.button}>
                <Text style={styles.buttonText}>Remove from Favorites</Text>
              </TouchableOpacity>
            </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      )}
      <TouchableOpacity onPress={handleRemoveAllFavorites} style={styles.removeAllButton}>
        <Text style={styles.removeAllButtonText}>Remove All Favorites</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  recipeContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  removeAllButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  removeAllButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FavoritesScreen;
