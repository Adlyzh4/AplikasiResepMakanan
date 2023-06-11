import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomNavBar = () => {
  const navigation = useNavigation();

  const navigateToHomeScreen = () => {
    navigation.navigate('Search');
  };

  const navigateToRecommendations = () => {
    navigation.navigate('Home');
  };

  const navigateToCategories = () => {
    navigation.navigate('Favorite');
  };
  
  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToRecommendations} style={styles.tab}>
        <Icon name="restaurant-outline" size={24} color="#6c757d" />
        <Text style={styles.tabTitle}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToHomeScreen} style={styles.tab}>
        <Icon name="search-outline" size={24} color="#6c757d" />
        <Text style={styles.tabTitle}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToCategories} style={styles.tab}>
        <Icon name="grid-outline" size={24} color="#6c757d" />
        <Text style={styles.tabTitle}>Favorites</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToProfile} style={styles.tab}>
        <Icon name="person-outline" size={24} color="#6c757d" />
        <Text style={styles.tabTitle}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    elevation: 8, // Add elevation for a shadow effect (Android)
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  tabTitle: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#6c757d',
    textAlign: 'center',
  },
});

export default BottomNavBar;
