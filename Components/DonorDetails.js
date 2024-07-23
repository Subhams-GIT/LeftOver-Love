import {useState} from "react";
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
  Alert,Modal
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DonorDetails({navigation}) {
	const [modalVisible, setModalVisible] = useState(false);
  	const [userdata, setuserdata] = useState({
    bname: "",
    cname: "",
    mno: "",
    email: "",
    address: "",
    pincode: null,
    city: "",
    state: "",
  	});

  const handleChange = (name, value) => {
    setuserdata((prevData) => ({...prevData, [name]: value}));
  };

  async function submit() {
    if (
      !(
        userdata.address ||
        userdata.bname ||
        userdata.city ||
        userdata.email ||
        userdata.mno ||
        userdata.pincode ||
        userdata.state
      )
    )
      return Alert.alert("please give all info");
    const cleanedPhoneNumber = String(userdata.mno).trim();
    const cleanedPincode = String(userdata.pincode).trim();

    if (cleanedPhoneNumber.length !== 10 || isNaN(cleanedPhoneNumber)) {
      console.log(userdata.mno);
      return Alert.alert("Please give correct phone number");
    }

    if (cleanedPincode.length !== 6 || isNaN(cleanedPincode)) {
      return Alert.alert("Please give correct pincode");
    } else if (userdata.email.indexOf("@") < 0)
      return Alert.alert("please give correct emai");
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
      <ScrollView>
        <Text style={{fontSize: 30, marginBottom: 15, marginLeft: 20}}>
          Donor Details
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            justifyContent: "space-even",
          }}
        >
          <Pressable style={style1.divs}>
            <ImageBackground
              source={require("../assets/chef.png")}
              style={style1.logos}
            />
            <Text style={style1.text}>Restaurent</Text>
          </Pressable>
          <Pressable style={style1.divs}>
            <ImageBackground
              source={require("../assets/backeryrm.png")}
              style={style1.logos}
            />
            <Text style={style1.text}>Bakery</Text>
          </Pressable>
          <Pressable style={style1.divs}>
            <ImageBackground
              source={require("../assets/individual.png")}
              style={style1.logos}
            />
            <Text style={style1.text}>Individual</Text>
          </Pressable>
        </View>
        <View>
          <TextInput
            keyboardType="default"
            autoFocus={true}
            placeholder="Business Name"
            style={style1.textbox}
            value={userdata.bname}
            onChangeText={(value) => handleChange("bname", value)}
          />
          <TextInput
            keyboardType="default"
            autoFocus={true}
            placeholder="Contact Name (Optional)"
            style={style1.textbox}
            value={userdata.cname}
            onChangeText={(value) => handleChange("cname", value)}
          />
          <View style={{display: "flex", flexDirection: "row", width: "80%"}}>
            <TextInput
              placeholder="+91"
              keyboardType="number-pad"
              style={style1.pad}
            />
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
            keyboardType="text"
            style={[style1.textbox]}
            value={userdata.address}
            onChangeText={(value) => handleChange("address", value)}
          />
          <TextInput
            placeholder="Pin Code"
            keyboardType="Numberic"
            style={[style1.textbox]}
            value={userdata.pincode}
            onChangeText={(value) => handleChange("pincode", value)}
          />
          <TextInput
            placeholder="City"
            keyboardType="text"
            style={[style1.textbox]}
            value={userdata.city}
            onChangeText={(value) => handleChange("city", value)}
          />
          <TextInput
            placeholder="State"
            keyboardType="text"
            style={[style1.textbox]}
            value={userdata.state}
            onChangeText={(value) => handleChange("state", value)}
          />
          <Text style={{textAlign: "center"}}>or</Text>
          <Pressable>
            <Text style={{textAlign: "center"}}>Pin location By map</Text>
          </Pressable>
          <Pressable onPress={submit}>
            <Text
              style={[
                style1.textbox,
                {marginBottom: 30, backgroundColor: "#34e89e"},
              ]}
            >
              Submit
            </Text>
          </Pressable>
        </View>
      </ScrollView>
	  <Modal animationType="fade" transparent={true} visible={modalVisible} focusable={modalVisible}>
      <View style={{display: "flex", alignItems: "center",marginTop:"80%",marginLeft:"15%",borderRadius:20,paddingVertical:"20%",borderWidth:2,backgroundColor:"white",minHeight:300,width:300}}>
        <Text style={{textAlign: "center", fontWeight: 10,fontSize:30}}>
          Congrats Donor!
        </Text>
        <Text style={{textAlign: "center",fontSize:20}}>You Are All Set To Go</Text>
        <Pressable
          style={{height: "50", width: "80%",marginVertical:"5%"}}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={{textAlign: "center",backgroundColor:"#34e89e",marginLeft:"20%",height:50,width:200}}>Continue</Text>
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
  },
  divs: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 20,
  },
  text: {top: "80%", left: "20%"},
  textbox: {
    height: 60,
    width: "80%",
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 20,
  },
  pad: {
    height: 60,
    width: 40,
    marginLeft: 20,
    marginTop: 20,
    marginHorizontal: 5,
    borderWidth: 1,
  },
});
