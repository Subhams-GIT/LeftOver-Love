import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Alert,
  Modal,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DonorDetails({ navigation }) {
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
  const [selectedRole, setSelectedRole] = useState(""); // State for managing selected role

  const handleChange = (name, value) => {
    setuserdata((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  async function submit() {
    const {bname,
      cname,
      mno,
      email,
      address,
      pincode,
      city,
      state,}=userdata;
    if (!(bname && mno && email&&address&& pincode&&city&&state )) {
      return Alert.alert("Please provide all information");
    }

    const cleanedPhoneNumber = String(userdata.mno).trim();
    const cleanedPincode = String(userdata.pincode).trim();

    if (cleanedPhoneNumber.length !== 10 || isNaN(cleanedPhoneNumber)) {
      return Alert.alert("Please provide a correct phone number");
    }

    if (cleanedPincode.length !== 6 || isNaN(cleanedPincode)) {
      return Alert.alert("Please provide a correct pincode");
    } else if (userdata.email.indexOf("@") < 0) {
      return Alert.alert("Please provide a correct email");
    }

    try {
      await AsyncStorage.setItem("usercreds", JSON.stringify(userdata));
      setModalVisible(true);
    } catch (error) {
      console.error("Error saving data", error);
      Alert.alert("Failed to save data");
    }
    navigation.navigate("DonorPage")
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Please Fill The Form!</Text>
        <View style={styles.formContainer}>
          <TextInput
            keyboardType="default"
            placeholder="Business Name (Optional)"
            style={styles.textbox}
            value={userdata.bname}
            onChangeText={(value) => handleChange("bname", value)}
          />
          <TextInput
            keyboardType="default"
            placeholder="Contact Name "
            style={styles.textbox}
            value={userdata.cname}
            onChangeText={(value) => handleChange("cname", value)}
          />
          <TextInput
            placeholder="Mobile Number"
            keyboardType="numeric"
            style={styles.textbox}
            value={userdata.mno}
            onChangeText={(value) => handleChange("mno", String(value))}
          />
          <TextInput
            placeholder="Email Id"
            keyboardType="email-address"
            style={styles.textbox}
            value={userdata.email}
            onChangeText={(value) => handleChange("email", value)}
          />
          <TextInput
            placeholder="Address"
            keyboardType="default"
            style={styles.textbox}
            value={userdata.address}
            onChangeText={(value) => handleChange("address", value)}
          />
          <TextInput
            placeholder="Pin Code"
            keyboardType="numeric"
            style={styles.textbox}
            value={userdata.pincode}
            onChangeText={(value) => handleChange("pincode", value)}
          />
          <TextInput
            placeholder="City"
            keyboardType="default"
            style={styles.textbox}
            value={userdata.city}
            onChangeText={(value) => handleChange("city", value)}
          />
          <TextInput
            placeholder="State"
            keyboardType="default"
            style={styles.textbox}
            value={userdata.state}
            onChangeText={(value) => handleChange("state", value)}
          />
        
    
          <Pressable style={styles.submitButton} onPress={submit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </Pressable>
        </View>
      </ScrollView>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Congrats Donor!</Text>
            <Text style={styles.modalText}>You Are All Set To Go</Text>
            <Pressable
              style={styles.modalButton}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("DonorPage");
              }}
            >
              <Text style={styles.modalButtonText}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1e2a38',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 15,
    color: "white",
  },
  roleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  roleButton: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    height: "100%",
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackgroundImage: {
    borderRadius: 10,
  },
  roleText: {
    color: "#000",
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 10,
  },
  formContainer: {
    width: "100%",
    paddingBottom: 20,
    alignItems: 'center',
  },
  textbox: {
    fontSize: 20,
    height: 60,
    width: "80%",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  orText: {
    textAlign: "center",
    color: "#fff",
    marginVertical: 10,
  },
  mapText: {
    textAlign: "center",
    color: "#fff",
    marginVertical: 10,
  },
  submitButton: {
    marginBottom: 30,
    backgroundColor: "#34e89e",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  submitButtonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
  },
  modalTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: '#000',
  },
  modalText: {
    textAlign: "center",
    fontSize: 20,
    color: '#000',
  },
  modalButton: {
    backgroundColor: "#34e89e",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 20,
  },
  modalButtonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});