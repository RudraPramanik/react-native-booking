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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={AppScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="booking" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
