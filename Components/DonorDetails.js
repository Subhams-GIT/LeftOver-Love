import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
  Image,
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
      return Alert.alert("Please give all info");
    }

    const cleanedPhoneNumber = String(userdata.mno).trim();
    const cleanedPincode = String(userdata.pincode).trim();

    if (cleanedPhoneNumber.length !== 10 || isNaN(cleanedPhoneNumber)) {
      console.log(userdata.mno);
      return Alert.alert("Please give correct phone number");
    }

    if (cleanedPincode.length !== 6 || isNaN(cleanedPincode)) {
      return Alert.alert("Please give correct pincode");
    } else if (userdata.email.indexOf("@") < 0) {
      return Alert.alert("Please give correct email");
    }

    try {
      await AsyncStorage.setItem("usercreds", JSON.stringify(userdata));
      setModalVisible(true);
    } catch (error) {
      console.error("Error saving data", error);
      Alert.alert("Failed to save data");
    }
  }

  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "#00123d" }}>
        <Text
          style={{
            fontSize: 30,
            marginBottom: 15,
            marginLeft: 25,
            color: "white",
          }}
        >
          Donor Details
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Pressable style={style1.divs}>
            <ImageBackground
              source={require("../assets/backeryrm.png")}
              style={style1.logos}
            />
            <Text style={[style1.text, { color: "black" }]}>Restaurant</Text>
          </Pressable>
          <Pressable style={style1.divs}>
            <ImageBackground
              source={require("../assets/res.png")}
              style={style1.logos}
            />
            <Text style={[style1.text, { color: "black" }]}>Individual</Text>
          </Pressable>
        </View>
        <View style={{ width: "100%" }}>
          <TextInput
            keyboardType="default"
            placeholder="Business Name"
            style={style1.textbox}
            value={userdata.bname}
            onChangeText={(value) => handleChange("bname", value)}
          />
          <TextInput
            keyboardType="default"
            placeholder="Contact Name (Optional)"
            style={style1.textbox}
            value={userdata.cname}
            onChangeText={(value) => handleChange("cname", value)}
          />
          <View style={{ display: "flex", flexDirection: "row" }}>
            <TextInput
              placeholder="Mobile Number"
              keyboardType="numeric"
              style={[style1.textbox]}
              value={userdata.mno}
              onChangeText={(value) => handleChange("mno", String(value))}
            />
          </View>
          <TextInput
            placeholder="Email Id"
            keyboardType="email-address"
            style={[style1.textbox]}
            value={userdata.email}
            onChangeText={(value) => handleChange("email", value)}
          />
          <TextInput
            placeholder="Address"
            keyboardType="default"
            style={[style1.textbox]}
            value={userdata.address}
            onChangeText={(value) => handleChange("address", value)}
          />
          <TextInput
            placeholder="Pin Code"
            keyboardType="numeric"
            style={[style1.textbox]}
            value={userdata.pincode}
            onChangeText={(value) => handleChange("pincode", value)}
          />
          <TextInput
            placeholder="City"
            keyboardType="default"
            style={[style1.textbox]}
            value={userdata.city}
            onChangeText={(value) => handleChange("city", value)}
          />
          <TextInput
            placeholder="State"
            keyboardType="default"
            style={[style1.textbox]}
            value={userdata.state}
            onChangeText={(value) => handleChange("state", value)}
          />
          <Text style={{ textAlign: "center", color: "#fff" }}>or</Text>
          <Pressable>
            <Text style={{ textAlign: "center", color: "#fff" }}>
              Pin location By map
            </Text>
          </Pressable>
          <Pressable onPress={submit}>
            <Text
              style={[
                style1.textbox,
                {
                  marginBottom: 30,
                  backgroundColor: "#34e89e",
                  textAlign: "center",
                },
              ]}
            >
              Submit
            </Text>
          </Pressable>
        </View>
      </ScrollView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "80%",
            marginLeft: "15%",
            borderRadius: 20,
            paddingVertical: "20%",
            borderWidth: 2,
            backgroundColor: "white",
            minHeight: 300,
            width: 300,
          }}
        >
          <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 30 }}>
            Congrats Donor!
          </Text>
          <Text style={{ textAlign: "center", fontSize: 20 }}>
            You Are All Set To Go
          </Text>
          <Pressable
            style={{ height: 50, width: "80%", marginVertical: "5%" }}
            onPress={() => navigation.navigate("DonorPage")}
          >
            <Text
              style={{
                textAlign: "center",
                backgroundColor: "#34e89e",
                marginLeft: "20%",
                height: 50,
                width: 200,
                lineHeight: 50,
              }}
            >
              Continue
            </Text>
          </Pressable>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const style1 = StyleSheet.create({
  logos: {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: "white",
  },
  divs: {
    color: "#fff",
    height: 100,
    width: 100,
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 30,
  },
  text: { top: "80%", left: "22%", color: "#fff" },
  textbox: {
    fontSize: 20,
    height: 60,
    width: "80%",
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 40,
    marginTop: 20,
    backgroundColor: "#fff",
  },
  pad: {
    backgroundColor: "#fff",
    color: "#fff",
    height: 60,
    width: 40,
    marginLeft: 27,
    marginTop: 20,
    marginHorizontal: 5,
    borderWidth: 1,
  },
});
