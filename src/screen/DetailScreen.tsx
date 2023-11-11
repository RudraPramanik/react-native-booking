import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const DetailScreen: React.FC<{ route: any }> = ({}) => {
  //   const { name, description, rating } = route.params;

  return (
    <View style={styles.container}>
      {/* <Text style={styles.name}>{name}</Text> */}
      <Text style={styles.name}>name</Text>
      <Text style={styles.description}>description</Text>
      <Text style={styles.rating}>rating</Text>

      {/* <Text style={styles.description}>{description}</Text> */}
      {/* <Text style={styles.rating}>{rating}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    marginVertical: 10,
  },
  rating: {
    fontSize: 16,
  },
});
export default DetailScreen;
