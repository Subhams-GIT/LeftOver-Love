import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Modal,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Donor } from "../Backend/Donors";
const { width } = Dimensions.get('window');

export default function ReceiverDetails({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [userdata, setuserdata] = useState({
    bname: "",
    cname: "",
    mno: "",
    email: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
  });

  const handleChange = (name, value) => {
    setuserdata((prevData) => ({ ...prevData, [name]: value }));
  };

  async function submit() {
    if (
      !userdata.address ||
      !userdata.bname ||
      !userdata.city ||
      !userdata.email ||
      !userdata.mno ||
      !userdata.pincode ||
      !userdata.state
    ) {
      return Alert.alert("Please provide all required information.");
    }

    const cleanedPhoneNumber = String(userdata.mno).trim();
    const cleanedPincode = String(userdata.pincode).trim();

    if (cleanedPhoneNumber.length !== 10 || isNaN(cleanedPhoneNumber)) {
      return Alert.alert("Please provide a valid phone number.");
    }

    if (cleanedPincode.length !== 6 || isNaN(cleanedPincode)) {
      return Alert.alert("Please provide a valid pincode.");
    } else if (userdata.email.indexOf("@") < 0) {
      return Alert.alert("Please provide a valid email address.");
    }
    
    try {
        await AsyncStorage.setItem("receivercreds", JSON.stringify(userdata));
        setModalVisible(true);
      }
     catch (error) {
      console.error('Error submitting form:', error);
      Alert.alert('Error', 'Failed to submit form');
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Receiver Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Business Name"
          value={userdata.bname}
          onChangeText={(value) => handleChange("bname", value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contact Name (Optional)"
          value={userdata.cname}
          onChangeText={(value) => handleChange("cname", value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          keyboardType="numeric"
          value={userdata.mno}
          onChangeText={(value) => handleChange("mno", String(value))}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Id"
          keyboardType="email-address"
          value={userdata.email}
          onChangeText={(value) => handleChange("email", value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={userdata.address}
          onChangeText={(value) => handleChange("address", value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Pin Code"
          keyboardType="numeric"
          value={userdata.pincode}
          onChangeText={(value) => handleChange("pincode", value)}
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          value={userdata.city}
          onChangeText={(value) => handleChange("city", value)}
        />
        <TextInput
          style={styles.input}
          placeholder="State"
          value={userdata.state}
          onChangeText={(value) => handleChange("state", value)}
        />
        <TouchableOpacity style={styles.pinLocationButton} onPress={() => console.log('Pin Location pressed')}>
          <Text style={styles.pinLocationText}>Pin Location by map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={submit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>Congrats Receiver!</Text>
          <Text style={styles.modalText}>You Are All Set To Go</Text>
          <TouchableOpacity style={styles.modalButton} onPress={() => {setModalVisible(false); navigation.navigate("receiver")}}>
            <Text style={styles.modalButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#00123d',
  },
  scrollContainer: {
    flexGrow: 1,
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
    width: width * 0.9,
    alignSelf: 'center',
  },
  pinLocationButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
    alignSelf: 'center',
    width: width * 0.9,
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
    alignSelf: 'center',
    width: width * 0.9,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#00c6ab',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    width: width * 0.8,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
