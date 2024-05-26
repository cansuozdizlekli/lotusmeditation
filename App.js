import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import withSplashScreen from './src/components/withSplashScreen';
import GetStarted from './screens/GetStarted';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Home from './screens/Home';
import Yoga from './screens/Yoga';
import Blog from './screens/Blog';
import Meditation from './screens/Meditation';
import Breath from './screens/Breath';
import './utils/firebaseHelper'

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
        <Stack.Screen
          name="Yoga"
          component={Yoga}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Blog"
          component={Blog}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Meditation"
          component={Meditation}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Breath"
          component={Breath}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
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