import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

import React, { useState } from 'react';

const DaySelactor: React.FC = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const handleDayPress = (index: number) => {
    setSelectedDay(index);
    // Add your logic for handling the selected day here
  };

  const renderItem = ({ item, index }: { item: string; index: number }) => (
    <TouchableOpacity
      style={[
        styles.dayButton,
        selectedDay === index && styles.selectedDayButton,
      ]}
      onPress={() => handleDayPress(index)}
    >
      <Text
        style={[
          styles.dayText,
          selectedDay === index && styles.selectedDayText,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={daysOfWeek}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};
export default DaySelactor;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 10,
    marginLeft: 20,
  },
  container: {
    marginVertical: 20,
  },
  dayButton: {
    padding: 10,
    borderRadius: 8,
    margin: 5,
    backgroundColor: '#3498db',
  },
  selectedDayButton: {
    backgroundColor: '#2ecc71', // Change the color for the selected day
  },
  dayText: {
    color: 'white',
    fontSize: 16,
  },
  selectedDayText: {
    fontWeight: 'bold', // Change the style for the selected day
  },
});
