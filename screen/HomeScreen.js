import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, TextInput, } from 'react-native';

const Home = (props) => {
  const [recipes, setRecipes] = useState([]); // variabel yang akan menampilkan resep
  const [searchText, setSearchText] = useState(''); // variabel input search ketika di isi menampilkan resep
  const [idRecipe, setIdRecipe] = useState(); // variabel yang akan menampilkan resep makanan sesuai ID

  const fetchRecipes = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=4649e4f0795a4e9d8edb30434f706b2b&query=${searchText}`);
    const data = await response.json();
    setRecipes(data.results); // simpan data resep ketika berhasil permintaan API ke server
  }

  const resep = (item) => {
    setIdRecipe(item.id);
    props.navigation.navigate('RecipeDetail', { recipeId: item.id });
  }

  useEffect(() => {
    fetchRecipes(); // efek setelah render API selesai ambil resep pencarian
  }, [searchText]);

  const renderRecipe = ({ item }) => {
    return (
      <TouchableOpacity style={styles.recipeContainer} onPress={() => resep(item)}>
        <Image source={{ uri: item.image }} style={styles.recipeImage} />
        <Text style={styles.recipeTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search Recipes</Text> 
      <View style={styles.searchContainer}> 
        <TextInput
          style={styles.searchInput}
          placeholder="Search Recipes"
          onChangeText={text => setSearchText(text)}
        />
        <TouchableOpacity style={styles.searchButton} onPress={() => fetchRecipes()}> 
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={recipes}
        renderItem={renderRecipe}
        keyExtractor={recipe => recipe.id.toString()}
        style={styles.recipeList}
        keyboardShouldPersistTaps="always"
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    paddingBottom: 0,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: '#008b8b',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  searchButtonText: {
    color: '#fff',
  },
  recipeList: {
    flex: 1,
    width: '100%',
  },
  recipeContainer: {
    marginBottom: 20,
  },
  recipeImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
