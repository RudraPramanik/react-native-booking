import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';

const DetailScreen: React.FC<{ route: any }> = () => {
  // const { name, description, rating } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <ImageBackground
          source={require('../../assets/black-bg.png')} // replace with your image path
          style={styles.backgroundImage}
        >
          <View style={styles.container1}>
            {/* Your component content goes here */}
            <Text style={styles.text}>
              Hello, this is on top of the background image!
            </Text>
          </View>
        </ImageBackground>
        {/* Content for the first section */}
      </View>
      <View style={styles.section2}>
        {/* Content for the second section */}
      </View>
      <View style={styles.section3}>{/* Content for the third section */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Default is 'column', which means vertical layout
  },
  section1: {
    flex: 1, // Takes 1/3 of the available vertical space
    backgroundColor: 'lightblue', // Customize as needed
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  section2: {
    flex: 1, // Takes 1/3 of the available vertical space
    backgroundColor: 'lightgreen', // Customize as needed
  },
  section3: {
    flex: 1, // Takes 1/3 of the available vertical space
    backgroundColor: 'lightcoral', // Customize as needed
  },
  section4: {
    flex: 1, // Takes 1/3 of the available vertical space
    backgroundColor: 'blue', // Customize as needed
  },
});
export default DetailScreen;