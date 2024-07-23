import AsyncStorage from "@react-native-async-storage/async-storage"
import { Pressable, View ,Image, Text} from "react-native"

function DonorPage(){

		const details=AsyncStorage.getItem("usercreds",userdetails);
		const res=JSON.parse(details);
		const   username=res.bname;
		console.log(username);

	return (
		<View>
			<Text>Hi {username}</Text>
			<Text style={{fontsize:30}}>You Are A Donor</Text>
			<View>
				<View style={{display:'flex',flexDirection:"column"}}>
				<Text>No of Donations</Text>
				</View>
				<View style={{display:'flex',flexDirection:"column"}}>
				<Text>FeedBack</Text>
				</View>
				<View style={{display:'flex',flexDirection:"column"}}>
				<Text>Points Earned</Text>
				</View>
			</View>
			<View>
				<Pressable>
					<Text>My Post</Text>
				</Pressable>
				<View>
					<Text>Do you have some food to Donate?</Text>
					<Pressable>
						<Text>create donation post</Text>
					</Pressable>
				</View>
			</View>
			<View>
				<Text>Donation History</Text>
				<Text>View All</Text>
				<View>
					<Image/>
					<View>
						<Text>ID</Text>
						<Text>Item</Text>
						<Text>Quantity</Text>
						<Text>status</Text>
					</View>
				</View>
				<View>
					<Text>NGOS Near You</Text>
				</View>
			</View>
		</View>
	)
}