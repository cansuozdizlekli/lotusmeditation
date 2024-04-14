import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Signup from './Signup';

const GetStarted = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', width: '100%', height: '100%' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: '80%', height: '50%', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('/Users/cansuozdizlekli/AwesomeProject/assets/getstarted-image.png')}
            style={{ width: '100%', height: '100%' }}
            resizeMode="contain"
          />
        </View>
        <Text style={{
          fontSize: 34, textAlign: 'center', fontWeight: '600',
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 3,
        }}>Guiding Your Journey to Inner Peace</Text>
        <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 30 }}>
          Embark on a Meditative Voyage for Stress Relief and Clarity of Mind
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#000000',
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 20,
            marginTop: 40,
          }}
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        >
          <Text style={{ color: 'white', fontSize: 17 }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default GetStarted;