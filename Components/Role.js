import React, { useState, useCallback } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	SafeAreaView,
	Alert,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Role({ navigation }) {
	const [isDonorChecked, setDonorChecked] = useState(false);
	const [isReceiverChecked, setReceiverChecked] = useState(false);

	const navigatorFunc = useCallback(() => {
		if (isDonorChecked === isReceiverChecked) {
			Alert.alert("Incorrect input! Please select either Donor or Receiver.");
		} else if (isDonorChecked) {
			navigation.navigate("DonorDetails");
		} else if (isReceiverChecked) {
			navigation.navigate("receiverdet");
		} else {
			console.log("No role selected");
		}
	}, [isDonorChecked, isReceiverChecked, navigation]);

	return (
		<SafeAreaView style={{ flex: 1 ,backgroundColor:"#1e2a38"}}>
			<View style={{ marginLeft: "10%", marginTop: "50%",borderColor:"white" }}>
				<Text style={{ fontSize: 30, borderBottomWidth: 1 ,color:"white",borderColor:"white",}}>Want To Share Your Food?</Text>
				<Text style={{ fontSize: 30, marginTop: 20,color:"white" }}>Choose Your Role</Text>
			</View>
			<View
				style={{
					borderWidth: 1,
					borderColor:"white",
					borderRadius: 10,
					marginVertical: 20,
					paddingBottom: 30,
					width: "80%",
					alignSelf: "center",
				}}
			>
				<View style={{ marginLeft: "10%", marginTop: "10%", flexDirection: "row" }}>
					<BouncyCheckbox
						size={25}
						fillColor="green"
						unFillColor="#FFFFFF"
						innerIconStyle={{ borderWidth: 2 }}
						onPress={(checked) => setDonorChecked(checked)}
					/>
					<Text style={{ fontSize: 30, marginLeft: 10,color:"white" }}>Donor</Text>
				</View>
				<Text style={{ marginLeft: "10%", fontSize: 20 ,color:"white"}}>
					Donate Some Food To The Needful
				</Text>
			</View>
			<View
				style={{
					borderWidth: 1,
					borderColor:"white",
					borderRadius: 10,
					marginVertical: 20,
					paddingBottom: 30,
					width: "80%",
					alignSelf: "center",
				}}
			>
				<View style={{ marginLeft: "10%", marginTop: "10%", flexDirection: "row" }}>
					<BouncyCheckbox
						size={25}
						fillColor="green"
						unFillColor="#FFFFFF"
						innerIconStyle={{ borderWidth: 2 }}
						onPress={(checked) => setReceiverChecked(checked)}
					/>
					<Text style={{ fontSize: 30, marginLeft: 10,color:"white" }}>Receiver</Text>
				</View>
				<Text style={{ marginLeft: "10%", fontSize: 20,color:"white" }}>
					Pick Up and Deliver Food To The Needful
				</Text>
			</View>
			<TouchableOpacity
				style={{
					borderWidth: 1,
					
					borderRadius: 10,
					marginVertical: 20,
					padding: 20,
					width: "80%",
					alignSelf: "center",
					backgroundColor: "#34e89e",
					alignItems: "center",
				}}
				onPress={navigatorFunc}
			>
				<Text style={{ fontSize: 20 }}>Continue</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}
