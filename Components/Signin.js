import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const LoginScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Role');
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://media.istockphoto.com/id/1403121168/vector/3d-isometric-flat-vector-conceptual-illustration-of-reducing-food-waste.jpg?s=612x612&w=0&k=20&c=TkU3FcZHtx892qnphIey_g-zdTFz4QFmBANpK8k1RQU=' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Ionicons name="leaf-outline" size={64} color="white" style={styles.icon} />
        <Text style={styles.title}>LeftOver-Love</Text>
        <TextInput
          label="Mobile Number"
          value={mobileNumber}
          onChangeText={text => setMobileNumber(text)}
          mode="outlined"
          style={styles.input}
          theme={{ colors: { placeholder: 'white', text: 'white', primary: 'white' } }}
          outlineColor="white"
          keyboardType="phone-pad"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          mode="outlined"
          secureTextEntry
          style={styles.input}
          theme={{ colors: { placeholder: 'white', text: 'white', primary: 'white' } }}
          outlineColor="white"
        />
        <Button 
          mode="contained" 
          onPress={handleLogin} 
          style={styles.button}
        >
          Login
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
          <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
    backgroundColor: 'transparent',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#4CAF50',
  },
  signupText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default LoginScreen;