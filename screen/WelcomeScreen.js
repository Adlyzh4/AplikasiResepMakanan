import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {

  const handlePress = () => {
    navigation.navigate('HomeTabs'); // ganti 'Home' dengan nama halaman utama Anda
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        style={styles.backgroundImage} 
        source={require('../images/WelcomeScreen.jpg')}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Welcome to RecipeApp!</Text>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <Text style={styles.copyright}>© Copyright 2023 by AhmadDiaz</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  copyright: {
    fontSize: 10,
    color: 'white',
    marginTop: 20,
  },
});

export default WelcomeScreen;
