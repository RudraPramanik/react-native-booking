import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const DocList: React.FC = () => {
  return (
    <View style={styles.flatlistBody}>
      <View style={styles.cardContainer}>
        <View style={styles.leftSection}>
          <Image
            source={require('../../assets/icon.png')}
            style={styles.image}
          />
          <View>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.description}>Software Engineer</Text>
          </View>
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.verticalText}>4.9</Text>
        </View>
      </View>
      {/*  */}
      <View style={styles.cardContainer}>
        <View style={styles.leftSection}>
          <Image
            source={require('../../assets/icon.png')}
            style={styles.image}
          />
          <View>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.description}>Software Engineer</Text>
          </View>
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.verticalText}>4.9</Text>
        </View>
      </View>
      {/*  */}
      <View style={styles.cardContainer}>
        <View style={styles.leftSection}>
          <Image
            source={require('../../assets/icon.png')}
            style={styles.image}
          />
          <View>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.description}>Software Engineer</Text>
          </View>
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.verticalText}>4.9</Text>
        </View>
      </View>
      {/*  */}
    </View>
  );
};

export default DocList;

const styles = StyleSheet.create({
  flatlistBody: {
    marginHorizontal: 14,
    marginTop: 15,
    zIndex: -1,
  },
  cardContainer: {
    flexDirection: 'row',
    borderWidth: 4,
    borderColor: '#221136',
    borderRadius: 18,
    marginBottom: 10,
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
  //   cardBody: {
  //     marginTop: 15,
  //     marginHorizontal: 10,
  //   },
  //   cardContainer: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     borderColor: '#221136',
  //     borderWidth: 4,
  //     borderRadius: 17,
  //     zIndex: -1,
  //   },
  //   cardMain: {
  //     flexDirection: 'row',
  //     backgroundColor: '#221136',
  //     marginHorizontal: 0,
  //     paddingVertical: 15,
  //     paddingLeft: 10,
  //   },
  //   rightSide: {
  //     backgroundColor: '#32075e',
  //     paddingRight: 5,
  //   },
  //   roundedImage: {
  //     width: 100,
  //     height: 100,
  //     borderRadius: 50,
  //     marginRight: 10,
  //   },
  //   textContainer: {
  //     flex: 1,
  //     marginLeft: 16,
  //     color: '#d2beeb',
  //   },
  //   name: {
  //     fontSize: 18,
  //     fontWeight: 'bold',
  //     color: '#d2beeb',
  //   },
  //   description: {
  //     fontSize: 14,
  //     color: '#d2beeb',
  //   },
  //   divider: {
  //     width: 1,
  //     height: '100%',
  //     backgroundColor: 'gray',
  //     marginLeft: 10,
  //   },
  //   image: {
  //     height: 70,
  //     width: 70,
  //     borderRadius: 100,
  //     marginRight: 10,
  //   },
});

{
  /* <View style={styles.cardContainer}>
<Image source={require('../../assets/icon.png')} style={styles.image} />

<View style={styles.textContainer}>
  <Text style={styles.name}>John Doe</Text>
  <Text style={styles.description}>Software Engineer</Text>
</View>
<View style={styles.divider} />
</View> */
}
