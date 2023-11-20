import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HamburgerMenu from './src/component/home/Humburger';
import SearchInput from './src/component/home/SearchInput';
import React, { useState } from 'react';
import Select, { Option } from './src/component/home/Dropdown';
import DocList from './src/component/DocList';
import HorizontalCardList from './src/component/home/HorizontalCardList';
import AppScreen from './src/screen/AppScreen';
import DetailScreen from './src/screen/DetailScreen';
import store from './src/store/store';
import { Provider } from 'react-redux';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDZ4709_2LmOTVSdha8zYwi3Z5HOibkJ4c',
  authDomain: 'tracking-app-608fc.firebaseapp.com',
  databaseURL:
    'https://tracking-app-608fc-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'tracking-app-608fc',
  storageBucket: 'tracking-app-608fc.appspot.com',
  messagingSenderId: '536142387831',
  appId: '1:536142387831:web:78e84a1cc274161e3c4472',
  measurementId: 'G-X5ZQ8FEJ53',
};

const app = initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={AppScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{
              headerStyle: {
                backgroundColor: 'black', // Set the background color to black
                marginTop: 0, // Set margin top to 0
              },
              headerTintColor: 'white', // Set the text color to white
            }}
          />
          {/* <Stack.Screen
          name="booking"
          component={DetailScreen}
          options={{ headerShown: false }}
        /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
