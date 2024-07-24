import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const GettingStarted = () => {
  const navigation = useNavigation(); 

  const handleGetStarted = () => {
    navigation.navigate('signup'); 
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://media.istockphoto.com/id/1169630303/photo/blue-textured-background.webp?b=1&s=170667a&w=0&k=20&c=tI2xFhXqXFqMM0IvxSYY3F7LIwv450h2ch3yD-lZ9HU=' }} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <Image 
            source={{ uri: 'https://st4.depositphotos.com/36569202/41002/i/450/depositphotos_410029090-stock-photo-wooden-clothespin-white-sheet-paper.jpg' }} 
            style={styles.cardImage} 
          />
          <Text style={styles.cardText}>
            Be the change you want to see in this world
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, 
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 300,
    padding: 20,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: 250,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00c6ab',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default GettingStarted;