import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useDonor } from '../Context/donorcontext';

const DonorList = ({ navigation }) => {
  const { points, numberOfDonations, incrementPoints, incrementDonations } = useDonor();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [foodType, setFoodType] = useState('Veg');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async () => {
    if (!title || !description || !quantity) {
      Alert.alert('Please fill all the fields');
      return;
    }

    const data = {
      title,
      description,
      typeoffood: foodType,
      quantity,
    };

    try {
      const response = await fetch('http://:3000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        incrementPoints(100);
        incrementDonations();
        Alert.alert("Form submitted!");
        navigation.navigate("DonorPage");
      } else {
        const errorText = await response.text();
        Alert.alert('Failed to submit form', errorText);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to submit form');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Add Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Add food title"
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Describe the food"
        multiline
      />

      <Text style={styles.label}>Type of Food</Text>
      <Picker
        selectedValue={foodType}
        style={styles.picker}
        onValueChange={(itemValue) => setFoodType(itemValue)}
      >
        <Picker.Item label="Veg" value="Veg" />
        <Picker.Item label="Non-Veg" value="Non-Veg" />
      </Picker>

      <Text style={styles.label}>Food Quantity</Text>
      <TextInput
        style={styles.input}
        value={quantity}
        onChangeText={setQuantity}
        placeholder="Enter quantity"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#007bff',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DonorList;
