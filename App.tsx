import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import HamburgerMenu from './src/component/home/Humburger';
import SearchInput from './src/component/home/SearchInput';
import Select from './src/component/home/Dropdown';
import React, { useState } from 'react';

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Option 4', value: 'option4' },
  { label: 'Option 5', value: 'option5' },
];
export default function App() {
  const [selectedValue, setSelectedValue] = useState('Select an option');

  const handleSelect = (value) => {
    setSelectedValue(value);
  };
  return (
    <View style={styles.container}>
      <StatusBar
        style="light" // Set the text color (dark/light)
        backgroundColor="rgba(0, 0, 0, 0.8)" // Set the background color
        translucent={true} // Make it translucent
      />
      {/*  */}
      <View style={styles.header}>
        <HamburgerMenu />
        <Text style={styles.headerText}>Rudra</Text>
        <Image source={require('./assets/icon.png')} style={styles.image} />
      </View>
      <View>
        <SearchInput />
      </View>
      {/* <View style={styles.header}>
        <Text>
          <HamburgerMenu />
        </Text>
        <Text style={styles.headerText}>rudra</Text>
        <View>
          <Image source={require('./assets/icon.png')} style={styles.image} />{' '}
        </View>
      </View> */}
      {/*  */}
      <View style={styles.content}>
        <View style={styles.contentText}>
          <Text style={styles.contentText}>Top Doctor</Text>
          <View>
            <Select
              options={options}
              selectedValue={selectedValue}
              onSelect={handleSelect}
            />
          </View>
        </View>
        <Text style={styles.contentText}>Welcome to my app!</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Copyright © 2023</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    paddingTop: 70,
    paddingLeft: 15,
  },
  headerText: {
    fontSize: 20,
    color: 'white',
  },
  content: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  contentTop: { color: 'white' },
  contentText: {
    fontSize: 18,
    color: 'white',
  },
  footer: {
    backgroundColor: 'gray',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginRight: 10,
  },
});
