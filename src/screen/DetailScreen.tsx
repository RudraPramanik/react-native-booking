import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

const DetailScreen: React.FC<{ route: any }> = () => {
  // const { name, description, rating } = route.params;

  return (
    <View style={styles.container}>
      <StatusBar
        style="light" // Set the text color (dark/light)
        backgroundColor="black" // Set the background color
        translucent={true} // Make it translucent
      />
      <View style={styles.section1}>
        <ImageBackground
          source={require('../../assets/v_half.png')} // replace with your image path
          style={styles.backgroundImage}
        >
          <View style={styles.section1Content}>
            <View>
              <Image
                source={require('../../assets/doc.png')}
                style={styles.Image}
              />
            </View>
            <View style={styles.content1}>
              <Text style={styles.text}>Dr. Martin</Text>
              <Text style={styles.text}>Hello, this is on top</Text>
              <Text style={styles.text}>Hello, this is on top</Text>
              <Text style={styles.text}>Hello, this is on top</Text>
            </View>
          </View>
        </ImageBackground>
        {/* Content for the first section */}
      </View>
      {/* 2 */}
      <View style={styles.section2}>
        {/* Content for the second section */}
      </View>
      <View style={styles.section3}>
        {/* Content for the second section */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Default is 'column', which means vertical layout
    backgroundColor: '#32075e',
  },
  section1: {
    flex: 1, // Takes 1/3 of the available vertical space
    flexDirection: 'row',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain' 'cover'
    height: 300,
  },
  content1: {},
  section1Content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 16,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  Image: {
    marginTop: 50,
    height: 280,
    width: 130,
    marginBottom: -140,
    marginLeft: 50,
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
