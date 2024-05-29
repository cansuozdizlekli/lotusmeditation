import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const YogaScreen = () => {
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.goBack()
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>Yoga exercises combine controlled movements, breathing techniques, and mindfulness to improve flexibility, strength, and mental well-being. </Text>
      <Image
        source={require('/Users/cansuozdizlekli/AwesomeProject/assets/yoga-image.png')}
        style={{ width: '100%', height: '85%' }}
        resizeMode="contain"
      />
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
  description: {
    fontSize: 16,
    textAlign: 'left',
    marginHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200
  },
});

export default YogaScreen;
