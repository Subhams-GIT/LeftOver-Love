import React, { useState ,useMemo, useEffect,memo, useCallback} from "react";
import {
	View,
	Text,
	TouchableOpacity,
	SafeAreaView,
	StyleSheet,
	Alert,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Role({ navigation }) {
	const [isDonorChecked, setDonorChecked] = useState(false);
	const [isReceiverChecked, setReceiverChecked] = useState(false);

	const navigatorFunc=useCallback(()=> {
		if(isDonorChecked===isReceiverChecked){
			Alert.alert("incorrect input!")
		}
		else if(isDonorChecked) 
		navigation.navigate("DonorDetails");
		else if(isReceiverChecked) navigation.navigate("receiverdet")
		else 
		console.log("no");
	},[isDonorChecked,isReceiverChecked]);

	return (
		<SafeAreaView style={{ height: "100%" }}>
			<View style={{ marginLeft: "10%", marginTop: "50%", display: "flex" }}>
				<Text style={{ fontSize: 30,borderBottomWidth:1 }}>Want To Share Your Food?</Text>
				
				<Text style={{ fontSize: 30 }}>Choose Your Role</Text>
			</View>
			<View
				style={{
					borderWidth: 1,
					borderRadius: 10,
					marginVertical: 20,
					paddingBottom: 30,
					width: "80%",
					marginLeft: "10%",
				}}
			>
				<View
					style={{
						marginLeft: "10%",
						marginTop: "10%",
						display: "flex",
						flexDirection: "row",
					}}
				>
					<BouncyCheckbox
						
						size={25}
						fillColor="green"
						unFillColor="#FFFFFF"
						innerIconStyle={{ borderWidth: 2 }}
						onPress={(checked) => setDonorChecked(checked)}
					/>
					<Text style={{ fontSize: 30 }}>Donor</Text>
				</View>
				<Text style={{ marginLeft: "10%", fontSize: 20 }}>
					Donate Some Food To The NeedFul
				</Text>
			</View>
			<View
				style={{
					borderWidth: 1,
					borderRadius: 10,
					marginVertical: 20,
					paddingBottom: 30,
					width: "80%",
					marginLeft: "10%",
				}}
			>
				<View
					style={{
						marginLeft: "10%",
						marginTop: "10%",
						display: "flex",
						flexDirection: "row",
					}}
				>
					<BouncyCheckbox
						size={25}
						fillColor="green"
						unFillColor="#FFFFFF"
						innerIconStyle={{ borderWidth: 2 }}
						onPress={(checked) => setReceiverChecked(checked)}
					/>
					<Text style={{ fontSize: 30 }}>Receiver</Text>
				</View>
				<Text style={{ marginLeft: "10%", fontSize: 20 }}>
					PickUp and Deliver Food To The NeedFul
				</Text>
			</View>
			<TouchableOpacity
				style={{
					borderWidth: 1,
					borderRadius: 10,
					marginVertical: 20,
					paddingBottom: 30,
					width: "80%",
					marginLeft: "10%",
					backgroundColor: "#34e89e",
				}}
				onPress={navigatorFunc}
			>
				<Text style={{ paddingHorizontal: "40%", paddingTop: "10%" }}	>
					Continue
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}
