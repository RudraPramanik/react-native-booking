import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

interface DataType {
  id: string;
  name: string;
  username: string;
  email: string;

  // rating: number;
}

const DocList: React.FC<{ data: DataType[] }> = ({ data }) => {
  const [data, setData] = useState<DataType[]>([]);
  const navigation = useNavigation();
  useEffect(() => {
    // Fetch data from your API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <View style={styles.flatContainer}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardItem item={data} />}
        contentContainerStyle={styles.flatlistBody}
        windowSize={3} // Set the window size to 3 to display three cards at a time
        initialNumToRender={3} // Render 3 items initially
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const CardItem: React.FC<{ item: (typeof data)[0] }> = ({ item }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Navigate to the DetailScreen with the item details
    navigation.navigate('Detail', item);
  };
  console.log(item);
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        <View style={styles.cardContainer}>
          <View style={styles.leftSection}>
            <Image
              source={require('../../assets/icon.png')}
              style={styles.image}
            />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.email}</Text>
            </View>
          </View>
          <View style={styles.rightSection}>
            <Text style={styles.verticalText}>4.4</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DocList;

const styles = StyleSheet.create({
  flatContainer: {
    height: 370, // Specify the height you want
    marginHorizontal: 14,
    zIndex: -1,
  },
  flatlistBody: {
    marginHorizontal: 14,
    marginTop: 15,
    zIndex: -1,
  },
  cardContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#4d3c5e',
    // borderColor: '#221136',
    borderRadius: 18,
    marginTop: 8,
    marginBottom: 14,
    backgroundColor: '#221136',
  },
  leftSection: {
    flex: 4.3, // 80% of the width
    marginRight: 10,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  rightSection: {
    flex: 0.7, // 20% of the width
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 14,
    borderTopRightRadius: 14,
    backgroundColor: '#32075e',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 100,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    color: '#d2beeb',
  },
  card: {
    borderColor: '#4d3c5e',
    margin: 2,
    border: 8,
  },
  description: {
    fontSize: 14,
    color: '#d2beeb',
  },
  verticalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d2beeb',
    alignItems: 'center',
  },
});
