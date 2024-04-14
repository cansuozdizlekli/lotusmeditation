// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from './SplashScreen'; // Splash ekranı bileşeni
// import GetStarted from './GetStarted'; // getStarted ekranı bileşeni
// import { View } from 'react-native';

// const Stack = createStackNavigator();

// const MainStack = () => {
//   return (
//     <View>x</View>
//     // <NavigationContainer>
//     //   <Stack.Navigator initialRouteName="GetStarted" headerMode="none">
//     //     <Stack.Screen name="GetStarted" component={GetStarted} />
//     //   </Stack.Navigator>
//     // </NavigationContainer>
//   );
// }

// export default MainStack;
import { View, Text } from 'react-native'
import React from 'react'

const MainStack = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}

export default MainStack