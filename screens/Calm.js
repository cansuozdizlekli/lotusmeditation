import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';

const CalmScreen = () => {
  const navigation = useNavigation();
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundPosition, setSoundPosition] = useState(0);
  const [soundDuration, setSoundDuration] = useState(0);
  const [soundRemaining, setSoundRemaining] = useState(0);

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
      require('/Users/cansuozdizlekli/AwesomeProject/assets/calm.mp3')
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
      setSoundDuration(status.durationMillis);
      setSoundRemaining(status.durationMillis - status.positionMillis);
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

  const formatTime = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = Math.floor((millis % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <ImageBackground
      source={require('/Users/cansuozdizlekli/AwesomeProject/assets/playerbackground.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.textcontainer}>
          <Text style={styles.title}>Calm</Text>
          <Text style={styles.description}>
            The feeling of "calm" is about finding inner peace and soothing the mind. Practices like deep breathing, being in a tranquil environment, and mindfulness exercises can enhance the sense of calm.
          </Text>
        </View>

        <View style={styles.progressBarContainer}>

          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: `${soundPosition * 100}%` }]} />
            <TouchableOpacity style={[styles.progressButton, { left: `${soundPosition * 100}%` }]}>
              <View style={styles.buttonCircle} />
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.soundContainer}>
          <Text style={styles.timeText}>{formatTime(soundPosition * soundDuration)}</Text>
          <TouchableOpacity style={styles.button} onPress={toggleSound}>
            <Image
              source={isPlaying ? require('/Users/cansuozdizlekli/AwesomeProject/assets/play.png') : require('/Users/cansuozdizlekli/AwesomeProject/assets/pause.png')}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
          <Text style={styles.timeText}>{formatTime(soundRemaining)}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textContainer: {
    justifyContent: 'flex-start',
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
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 100,
    paddingHorizontal: 20,
    paddingBottom: 30
  },
  progressBar: {
    flex: 1,
    height: 5,
    backgroundColor: '#000',
    borderRadius: 5,
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
    width: 20,
    height: 20,
    paddingBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    borderWidth: 1,
  },
  timeText: {
    color: '#000000',
    fontSize: 14,
    paddingHorizontal: 110
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  soundContainer: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 50,
  },
  buttonIcon: {
    width: 30,
    height: 30,
  },
});

export default CalmScreen;