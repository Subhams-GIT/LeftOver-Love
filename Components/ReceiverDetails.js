import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ReceiverDetails = () => {
  const [receiverName, setReceiverName] = useState('');
  const [contactName, setContactName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [city, setCity] = useState('');

  const handlePinLocation = () => {
    console.log('Pin Location pressed');
  };

  const handleSubmit = () => {
    console.log('Submit pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Receiver Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Receiver Name"
        value={receiverName}
        onChangeText={setReceiverName}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Name (Optional)"
        value={contactName}
        onChangeText={setContactName}
      />
      <TextInput
        style={styles.input}
        placeholder="+91 Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Id"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Pin Code"
        value={pinCode}
        onChangeText={setPinCode}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      <TouchableOpacity style={styles.pinLocationButton} onPress={handlePinLocation}>
        <Text style={styles.pinLocationText}>Pin Location by map</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#00123d',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  pinLocationButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  pinLocationText: {
    color: '#000',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#00c6ab',
    borderRadius: 5,
    padding: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ReceiverDetails;