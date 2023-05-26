import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import axios from 'axios';

const CategoriesScreen = () => {
  const [categories, setCategories] = useState([]);
  // Fetch categories from API
  const fetchCategories = async () => {
    // API endpoint to fetch categories
    const endpoint = 'https://api.spoonacular.com/recipes/categories?apiKey=4649e4f0795a4e9d8edb30434f706b2b';
    const response = await fetch(endpoint);
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <ScrollView>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryCard}
            onPress={() =>
              props.navigation.navigate('RecipeDetail', {
                categoryId: category.id,
              })
            }>
            <Image
              source={{ uri: category.image }}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryTitle}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryCard: {
    width: '100%',
    height: 150,
    borderRadius: 5,
    marginBottom: 20,
    overflow: 'hidden',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  categoryTitle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    color: '#fff',
    fontWeight: 'bold',
    width: '100%',
  },
});


export default CategoriesScreen;
