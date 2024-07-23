import React, {useState} from "react";
import {View, Text, TouchableOpacity, SafeAreaView,StyleSheet,Alert} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Role() {
  const [isDonorChecked, setDonorChecked] = useState(false);
  const [isReceiverChecked, setReceiverChecked] = useState(false);
	if(isDonorChecked==isReceiverChecked) Alert.alert("you can select only one at a time")
  return (
    <SafeAreaView style={{height:"100%"}}>
      <View style={{marginLeft:"10%",marginTop:"50%",display:'flex'}}>
        <Text style={{fontSize:30}}>Want To Share Your Food?</Text>
        <Text>-----------------------------</Text>
        <Text  style={{fontSize:30}}>Choose Your Role</Text>
      </View>
      <View style={{borderWidth:1,borderRadius:10,marginVertical:20,paddingBottom:30,width:"80%",marginLeft:"10%"}}>
        <View  style={{marginLeft:"10%",marginTop:"10%",display:'flex',flexDirection:"row"}} >
          <BouncyCheckbox
            size={25}
            fillColor="green"
            unFillColor="#FFFFFF"
            innerIconStyle={{borderWidth: 2}}
            onPress={(checked)=>setDonorChecked(!checked)}
          />
          <Text style={{fontSize:30}}>Donor</Text>
        </View>
        <Text style={{marginLeft:"10%",fontSize:20}}>Donate Some Food To The NeedFul</Text>
      </View>
      <View style={{borderWidth:1,borderRadius:10,marginVertical:20,paddingBottom:30,width:"80%",marginLeft:"10%"}}>
        <View style={{marginLeft:"10%",marginTop:"10%",display:'flex',flexDirection:"row"}} >
		<BouncyCheckbox
            size={25}
            fillColor="green"
            unFillColor="#FFFFFF"
            innerIconStyle={{borderWidth: 2}}
            onPress={(checked)=>setReceiverChecked(!checked)}
          />
          <Text  style={{fontSize:30}}>Receiver</Text>
        </View>
        <Text style={{marginLeft:"10%",fontSize:20}}>PickUp and Deliver Food To The NeedFul</Text>
      </View>
		<TouchableOpacity style={{borderWidth:1,borderRadius:10,marginVertical:20,paddingBottom:30,width:"80%",marginLeft:"10%",backgroundColor:"#34e89e"}} >
			<Text style={{paddingHorizontal:"40%",paddingTop:"10%"}}>Continue</Text>
		</TouchableOpacity>
    </SafeAreaView>
  );
}

