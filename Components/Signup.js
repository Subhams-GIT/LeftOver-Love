import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loginTextColor, setLoginTextColor] = useState('white');

  const navigation = useNavigation();

  const handleSignUp = async () => {
    // if (!mobileNumber || !password || !confirmPassword) {
    //   Alert.alert('All fields are required!');
    //   return;
    // }

    // if (password !== confirmPassword) {
    //   Alert.alert('Passwords do not match!');
    //   return;
    // }

    // try {
    //   await AsyncStorage.setItem('userCredentials', JSON.stringify({ mobileNumber, password }));
    //   navigation.navigate('login');
    // } catch (error) {
    //   console.error('Error saving data', error);
    //   Alert.alert('Failed to save data');
    // }
    navigation.navigate('login');
  };

  const handleLoginPressIn = () => {
    setLoginTextColor('#4CAF50');
  };

  const handleLoginPressOut = () => {
    setLoginTextColor('white');
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
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          placeholderTextColor="#ccc"
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('login')}
          onPressIn={handleLoginPressIn}
          onPressOut={handleLoginPressOut}
        >
          <Text style={[styles.linkText, { color: loginTextColor }]}>
            Already have an account? <Text style={styles.underlineText}>Login</Text>
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

export default SignUp;
