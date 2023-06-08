import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios'; 

const API_KEY = '4649e4f0795a4e9d8edb30434f706b2b';  

const CategoriesScreen = ({ navigation }) => {
  const [ingredients, setIngredients] = useState([]); 
  const [selectedIngredient, setSelectedIngredient] = useState('Chicken'); 
  const [recommendations, setRecommendations] = useState([]); 

  useEffect(() => {
    fetchRecommendations(); 
  }, []);

  const fetchIngredients = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${selectedIngredient}&apiKey=${API_KEY}`
      );
      setIngredients(response.data); 
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRecommendations = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random?number=5&apiKey=${API_KEY}`
      );
      setRecommendations(response.data.recipes); 
    } catch (error) {
      console.log(error);
    }
  };

  const navigateToRecipeDetail = (recipeId) => {
    navigation.navigate('RecipeDetail', { recipeId });
  }; 

  const handleIngredientSelect = (ingredient) => {
    setSelectedIngredient(ingredient);
    fetchIngredients(); 
  };

  useEffect(() => {
    fetchIngredients(); 
  }, [selectedIngredient]); 

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Image
        source={require('../images/book.jpg')}
        style={styles.welcomeImage}
      />

      <Text style={styles.title}>Select Ingredient</Text> 
      <ScrollView horizontal={true} style={styles.ingredientsContainer}>
        <TouchableOpacity
          style={[
            styles.ingredientButton,
            selectedIngredient === 'Chicken' && styles.selectedIngredientButton,
          ]}
          onPress={() => handleIngredientSelect('Chicken')}
        >
          <Text style={styles.ingredientButtonText}>Chicken</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.ingredientButton,
            selectedIngredient === 'Beef' && styles.selectedIngredientButton,
          ]}
          onPress={() => handleIngredientSelect('Beef')}
        >
          <Text style={styles.ingredientButtonText}>Beef</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.ingredientButton,
            selectedIngredient === 'Fish' && styles.selectedIngredientButton,
          ]}
          onPress={() => handleIngredientSelect('Fish')}
        >
          <Text style={styles.ingredientButtonText}>Fish</Text>
        </TouchableOpacity>
        
      </ScrollView>

      <Text style={styles.title}>Recipes by Ingredients</Text> 
      <ScrollView horizontal={true} style={styles.recipesContainer}>
        {ingredients.map((recipe) => (
          <TouchableOpacity
            key={recipe.id}
            onPress={() => navigateToRecipeDetail(recipe.id)}
            style={styles.recipeCard}
          >
            <Image
              source={{ uri: recipe.image }}
              style={styles.recipeImage}
            />
            <Text style={styles.recipeTitle}>{recipe.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.title}>You May Also Like</Text> 
      <ScrollView horizontal={true} style={styles.recommendationsContainer}>
        {recommendations.map((recipe) => (
          <TouchableOpacity
            key={recipe.id}
            onPress={() => navigateToRecipeDetail(recipe.id)}
            style={styles.recipeCard}
          >
            <Image
              source={{ uri: recipe.image }}
              style={styles.recipeImage}
            />
            <Text style={styles.recipeTitle}>{recipe.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ingredientsContainer: {
    marginBottom: 20,
  },
  ingredientButton: {
    backgroundColor: '#ddd',
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    borderRadius: 5,
  },
  selectedIngredientButton: {
    backgroundColor: 'green',
  },
  ingredientButtonText: {
    fontSize: 15,
  },
  recipesContainer: {
    marginBottom: 20,
  },
  recipeCard: {
    width: 200,
    marginRight: 20,
  },
  recipeImage: {
    width: '100%',
    height: 120,
    borderRadius: 5,
    marginBottom: 10,
  },
  recipeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  recommendationsContainer: {
    marginBottom: 0,
  },
  welcomeImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
    borderRadius: 5,
  },
  scrollContent: {
    paddingBottom: 50,
  },
});

export default CategoriesScreen;