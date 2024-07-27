import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [signUpTextColor, setSignUpTextColor] = useState('white');
  const navigation = useNavigation();

  const handleLogin = async () => {

    // if (!mobileNumber || !password) {
    //   Alert.alert('Both fields are required!');
    //   return;
    // }

    // try {

    //   const storedData = await AsyncStorage.getItem('userCredentials');
    //   if (storedData) {
    //     const { mobileNumber: storedMobileNumber, password: storedPassword } = JSON.parse(storedData);

    //     if (mobileNumber === storedMobileNumber && password === storedPassword) {
    //       navigation.navigate('Role');
    //     } else {
    //       Alert.alert('Invalid credentials!');
    //     }
    //   } else {
    //     Alert.alert('No user data found!');
    //   }
    // } catch (error) {
    //   console.error('Error retrieving data', error);
    //   Alert.alert('Failed to retrieve data');
    // }
    navigation.navigate('Role');
  };

  const handleSignUpPressIn = () => {
    setSignUpTextColor('#4CAF50');
  };

  const handleSignUpPressOut = () => {
    setSignUpTextColor('white');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Ionicons name="leaf-outline" size={64} color="white" style={styles.icon} />
        <Text style={styles.title}>LeftOver Love</Text>
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="phone-pad"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#ccc"
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('signup')}
          onPressIn={handleSignUpPressIn}
          onPressOut={handleSignUpPressOut}
        >
          <Text style={[styles.linkText, { color: signUpTextColor }]}>
            Don't have an account? <Text style={styles.underlineText}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1e2a38', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width:200,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    color: 'white',
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: '100%', 
    maxWidth: 300, 
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  linkText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  underlineText: {
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
