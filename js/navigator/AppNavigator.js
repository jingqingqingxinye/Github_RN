import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomePage from '../page/WelcomPage';
import HomePage from '../page/HomePage';
import MyPage from '../page/MyPage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import {MaterialCommunityIcons} from '@expo/vector-icons';

// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{title: '我的'}}
        />
        <Tab.Screen name="My" component={MyPage} options={{title: '我的'}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
