import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MeditationScreen = () => {
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.goBack()
  };

  return (
    <ImageBackground
      source={require('/Users/cansuozdizlekli/AwesomeProject/assets/playerbackground.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Breath</Text>
        <Text style={styles.description}>Breathe deeply and let the rhythm of your breath guide you into a state of calm and centeredness.</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'leading',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    marginLeft: 20
  },
  description: {
    fontSize: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    marginRight: 90
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

export default MeditationScreen;
