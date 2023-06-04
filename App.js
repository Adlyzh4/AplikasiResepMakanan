import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import BottomNavBar from './components/BottomNavBar';
import WelcomeScreen from './screen/WelcomeScreen';
import HomeScreen from './screen/HomeScreen';
import RecommendationScreen from './screen/RecommendationScreen';
import RecipeDetail from './screen/RecipeDetail';
import FavoritesScreen from './screen/FavoritesScreen';
import store from './store';


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavBar {...props} />}>
      <Tab.Screen name="Recommendations" component={RecommendationScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorite" component={FavoritesScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
          <Stack.Screen name="RecipeDetail" component={RecipeDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
