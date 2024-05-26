import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BreathScreen = () => {
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.goBack()
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breath Screen</Text>
      <Text style={styles.description}>Welcome to the Breath Screen! This is where you can find information about breathing exercises and techniques.</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
});

export default BreathScreen;
