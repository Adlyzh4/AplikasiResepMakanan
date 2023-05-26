import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomNavBar = () => {
  const navigation = useNavigation();

  const navigateToHomeScreen = () => {
    navigation.navigate('Home');
  };

  const navigateToRecommendations = () => {
    navigation.navigate('Recommendations');
  };

  const navigateToCategories = () => {
    navigation.navigate('Favorite');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToHomeScreen} style={styles.tab}>
        <Icon name='home-outline' size={24} color='#6c757d' />
        <Text style={styles.tabTitle}>Beranda</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToRecommendations} style={styles.tab}>
        <Icon name='restaurant-outline' size={24} color='#6c757d' />
        <Text style={styles.tabTitle}>Rekomendasi</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToCategories} style={styles.tab}>
        <Icon name='grid-outline' size={24} color='#6c757d' />
        <Text style={styles.tabTitle}>Favorit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
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
