import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Good Morning</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.dayCount}>Day 38</Text>
        <Text style={styles.message}>Every day is a step closer</Text>
      </View>
      <Image source={require('/Users/cansuozdizlekli/AwesomeProject/assets/home1.png')} style={styles.image} />
      <MaterialCommunityIcons name="calendar" size={24} color="black" style={styles.calendarIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  dayCount: {
    fontSize: 18,
    marginBottom: 5,
  },
  message: {
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  calendarIcon: {
    position: 'absolute',
    left: 20,
    bottom: 20,
  },
});

export default HomeScreen;
