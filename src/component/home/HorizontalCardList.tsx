import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

interface CardData {
  id: string;
  title: string;
}

const data: CardData[] = [
  { id: '1', title: 'Card 1' },
  { id: '2', title: 'Card 2' },
  { id: '3', title: 'Card 3' },
  { id: '4', title: 'Card 4' },
  { id: '5', title: 'Card 5' },
  // Add more cards as needed
];

const HorizontalCardList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>what do you need?</Text>
      <View style={styles.horizontalBar}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false} // Hide the horizontal scrollbar
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.cardTop}>
                <Text>{item.title}</Text>
              </View>
              <View style={styles.cardBottom}>
                <Text>{item.title}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: '800',
    fontSize: 18,
  },
  horizontalBar: {
    marginTop: 20,
  },
  container: {
    marginTop: 16,
    marginHorizontal: 20,
  },
  card: {
    width: 110, // Set the width of your card
    height: 125, // Set the height of your card
    backgroundColor: '#221136',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#221136',
  },
  cardTop: {
    flex: 3.5,
    flexDirection: 'column',
  },
  cardBottom: {
    flex: 1.5,
    flexDirection: 'column',
    backgroundColor: '#32075e',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
});

export default HorizontalCardList;
