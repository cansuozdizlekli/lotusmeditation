import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        navigation.navigate('Home');
        Alert.alert('Register', `Welcome!! ${user.email}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

  };

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sign Up</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your first name"
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your last name"
          value={lastName}
          onChangeText={text => setLastName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.buttonRegister} onPress={handleRegister}>
        <Text style={styles.RegisterButtonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonLogin} onPress={handleLoginPress}>
        <Text style={styles.LoginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff'
  },
  header: {
    alignSelf: 'flex-start',
    marginBottom: 70,
    marginTop: 100,
  },
  title: {
    fontSize: 33,
    fontWeight: 'thin',
  },
  inputContainer: {
    width: '100%',
  },
  inputLabel: {
    position: 'absolute',
    zIndex: 1,
    top: -10,
    marginLeft: 25,
    marginBottom: 400,
    color: '#999',
    backgroundColor: '#fff',
    padding: 2
  },
  input: {
    width: '100%',
    padding: 18,
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 13,
    marginBottom: 30,
  },
  buttonRegister: {
    width: '100%',
    backgroundColor: 'FEF9F8',
    padding: 20,
    borderRadius: 13,
    alignItems: 'center',
    marginTop: 50,
  },
  buttonLogin: {
    width: '100%',
    backgroundColor: '#F0C2AC',
    padding: 20,
    borderRadius: 13,
    alignItems: 'center',
    marginTop: 20,
  },
  RegisterButtonText: {
    color: '#F0C2AC',
    fontSize: 18,
    fontWeight: 'bold'
  },
  LoginButtonText: {
    color: '#FEF9F8',
    fontSize: 18,
    fontWeight: 'bold'
  },
});

export default Signup;
