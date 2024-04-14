import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import withSplashScreen from './src/components/withSplashScreen';
import GetStarted from './screens/GetStarted';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Home from './screens/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ headerShown: false }} // Navigasyon çubuğunu gizle
        />
        <Stack.Screen
          name="SignUp"
          component={Signup}
          options={{ headerShown: false }} // Navigasyon çubuğunu gizle
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} // Navigasyon çubuğunu gizle
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} // Navigasyon çubuğunu gizle
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withSplashScreen(App);  