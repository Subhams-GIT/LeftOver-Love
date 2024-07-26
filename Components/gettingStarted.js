import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const GettingStarted = () => {
  const navigation = useNavigation(); 

  const handleGetStarted = () => {
    navigation.navigate('signup'); 
  };

  const { width, height } = Dimensions.get('window');

  return (
    <ImageBackground 
      source={require('../assets/Background.jpeg')} 
      style={[styles.backgroundImage, { width, height:"100%" }]}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>→</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    marginTop: 'auto',
    marginBottom: 100, 
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'darkgreen',
    padding: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
});

export default GettingStarted;
