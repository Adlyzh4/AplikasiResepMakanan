import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // library untuk menambahkan icon menarik
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteRecipe, removeFavoriteRecipe } from '../reducers/favoriteRecipesSlice'; // import sebuah variabel dari halaman recipeslice untuk tombol menambahkan dan menghapus favorit

const RecipeDetail = (props) => {
  const { recipeId } = props.route.params;
  const [recipeDetail, setRecipeDetail] = useState(null);
  const dispatch = useDispatch();
  const favoriteRecipes = useSelector(state => state.favoriteRecipes.recipes);

  const isFavorite = favoriteRecipes.some(favoriteRecipe => favoriteRecipe.id === recipeId);

  const handleToggleFavorite = () => { // function untuk tombol tambahkan dan menghapus dari favorit
    if (isFavorite) {
      dispatch(removeFavoriteRecipe(recipeDetail.id));
    } else {
      dispatch(addFavoriteRecipe(recipeDetail));
    }
  };

  const fetchRecipeDetail = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=4649e4f0795a4e9d8edb30434f706b2b`);
    const data = await response.json();
    setRecipeDetail(data); // simpan data resep ketika permintaan API ke server
  }

  useEffect(() => {
    fetchRecipeDetail();
  }, []);

  if (!recipeDetail) { // Jika resep detail masih memuat atau belum muncul akan menampilkan sebuah loading
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
      >
      <Image source={{ uri: recipeDetail.image }} style={styles.recipeImage} /> 
      <Text style={styles.recipeTitle}>{recipeDetail.title}</Text> 
      <TouchableOpacity onPress={handleToggleFavorite} style={styles.button}> 
          <Text style={styles.buttonText}>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</Text>
        </TouchableOpacity>
      <Text style={styles.recipeInfo}><Icon name="users" size={16} /> Serving Size: {recipeDetail.servings}</Text> 
      <Text style={styles.recipeInfo}><Icon name="clock-o" size={16} /> Preparation Time: {recipeDetail.readyInMinutes} minutes</Text> 
      <Text style={styles.recipeInfo}><Icon name="list-ul" size={16} /> Ingredients:</Text> 
      {recipeDetail.extendedIngredients.map((ingredient, index) => (
        <Text style={styles.recipeIngredient} key={`ingredient-${index}`}><Icon name="circle" size={8} /> {ingredient.original}</Text>
      ))}
      <Text style={styles.recipeInfo}><Icon name="list-ol" size={16} /> Instructions:</Text> 
      {recipeDetail.analyzedInstructions[0].steps.map((step, index) => (
        <Text style={styles.recipeInstruction} key={`step-${index}`}><Icon name="chevron-right" size={16} /> {step.number}. {step.step}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    paddingBottom: 50,
  },
  loading: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  recipeImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 20,
  },
  recipeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recipeInfo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  recipeIngredient: {
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 25,
    flexDirection: 'row',
    alignItems: 'center'
  },
  recipeInstruction: {
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 25,
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 0,
    marginBottom: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default RecipeDetail;
