import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

import React, { useEffect, useState } from 'react';

const DaySelactor: React.FC = () => {
  const [daysOfWeek, setDaysOfWeek] = useState<{ day: string; date: string }[]>(
    []
  );
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  useEffect(() => {
    const currentDate = new Date();
    const days = [];
    // Set the first button as the current day
    days.push({
      day: getDayName(currentDate),
      date: getFormattedDate(currentDate),
    }); // Set the next 6 days
    for (let i = 1; i <= 6; i++) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i);
      days.push({
        day: getDayName(nextDate),
        date: getFormattedDate(nextDate),
      });
    }

    setDaysOfWeek(days);
  }, []);

  const handleDayPress = (index: number) => {
    setSelectedDay(index);
    // Add your logic for handling the selected day here
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: { day: string; date: string };
    index: number;
  }) => (
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
        {`${item.day}\n${item.date}`}
      </Text>
    </TouchableOpacity>
  );

  const getFormattedDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const getDayName = (date: Date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Select Date</Text>
      </View>
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
    marginHorizontal: 5,
  },
  dayButton: {
    padding: 8,
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
