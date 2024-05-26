import React from 'react';
import { View, Text } from 'react-native';
import withSplashScreen from './withSplashScreen'; // withSplashScreen fonksiyonunu içeren dosyanın yolu

function MainScreen() {
  return (
    <View>
      <Text>Main Screen</Text>
    </View>
  );
}

export default withSplashScreen(MainScreen);