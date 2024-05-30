import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';

const BreathScreen = () => {
  const navigation = useNavigation();
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundPosition, setSoundPosition] = useState(0);

  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync(); // Component kaldırıldığında sesi boşalt
      }
      : undefined;
  }, [sound]);

  // Ses dosyasını yükle
  const loadSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('/Users/cansuozdizlekli/AwesomeProject/assets/breath.mp3')
    );
    sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    setSound(sound);
  };

  // Ses dosyasını oynat veya durdur
  const toggleSound = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.stopAsync(); // Ses dosyasını durdur
      } else {
        await sound.playAsync(); // Ses dosyasını başlat
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Ses durum güncellemesi
  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded) {
      setSoundPosition(status.positionMillis / status.durationMillis);
    }
  };

  // Geri butonuna basıldığında
  const handleBackButton = async () => {
    if (sound) {
      await sound.stopAsync(); // Ses dosyasını durdur
    }
    navigation.goBack();
  };

  // Component ilk yüklendiğinde sesi yükle
  useEffect(() => {
    loadSound();
  }, []);

  return (
    <ImageBackground
      source={require('/Users/cansuozdizlekli/AwesomeProject/assets/playerbackground.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.textcontainer}>
          <Text style={styles.title}>Breath</Text>
          <Text style={styles.description}>
            Breathe deeply and let the rhythm of your breath guide you into a state of calm and centeredness.
          </Text>
        </View>

        <View style={styles.progressBar}>
          <TouchableOpacity style={[styles.progressButton, { left: `${soundPosition * 80}%` }]} >
            <View style={styles.buttonCircle} />
          </TouchableOpacity>
          <View style={[styles.progress, { width: `${soundPosition * 80}%` }]} />

        </View>
        <TouchableOpacity style={styles.button} onPress={toggleSound}>
          <Text style={styles.buttonText}>{isPlaying ? 'Stop Sound' : 'Play Sound'}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: '',
    alignItems: 'center',
  },
  textcontainer: {
    justifyContent: 'top',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    marginLeft: 20,
  },
  description: {
    fontSize: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    marginRight: 90,
  },
  progressBar: {
    width: '80%',
    height: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 200,
    position: 'relative',
  },
  progress: {
    height: '100%',
    backgroundColor: '#007bff',
    borderRadius: 5,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  progressButton: {
    position: 'absolute',
    top: -10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: '#007bff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    width: 50
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default BreathScreen;
