import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView ,Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';

const DonorList = () => {
  const navigation = useNavigation(); 

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [foodType, setFoodType] = useState('Veg');
  const [quantity, setQuantity] = useState('');
  const [photo,setPhoto]=useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const { uri, type } = result.assets[0];
      const fileType = type || (uri.endsWith('.png') ? 'image/png' : 'image/jpeg');
      setPhoto({ uri, type: fileType, name: `photo.${fileType.split('/')[1]}` });
    }
  };

  const handleSubmit = async () => {
    console.log(title);
    console.log(description);
    console.log(quantity);
    console.log(foodType);
     if (!title || !description || !quantity) {
      Alert.alert('Please fill all the fields');
      return;
    }
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('typeoffood', foodType);
    formData.append('quantity', quantity);
    if (photo) {
      formData.append('photo', {
        uri: photo,
        type: 'image/png', // Adjust the type based on the file
        name: 'photo.png', // Name of the file
      });
    }

      await axios.post('http://192.168.29.12:3000/submit-form', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      Alert.alert("Form submitted!");
      navigation.navigate("DonorPage");
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

      <Text style={styles.label}>Photos</Text>
      <TouchableOpacity style={styles.photoButton} onPress={pickImage}>
        <Text style={styles.photoButtonText}>+ Add more</Text>
      </TouchableOpacity>

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
  photoButton: {
    backgroundColor: '#eee',
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  photoButtonText: {
    color: '#007bff',
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