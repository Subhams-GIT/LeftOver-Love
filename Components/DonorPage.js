import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  Pressable,
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";


export default function DonorPage({ navigation }) {
  const [donor, setDonor] = useState({});

  useEffect(() => {
    const fetchUserCredentials = async () => {
      try {
        const details = await AsyncStorage.getItem("usercreds");
        const parsedDetails = JSON.parse(details);
        setDonor(parsedDetails);
      } catch (error) {
        console.error("Error fetching user credentials:", error);
      }
    };

    fetchUserCredentials();
  }, []);

  const data = [
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" },
    { id: 3, title: "Item 3" },
    { id: 4, title: "Item 4" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );


  const getItemCount = (data) => data.length;
  const getItem = (data, index) => data[index];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi {donor.cname}</Text>
        <Text style={styles.title}>You Are A Donor</Text>
      </View>
      <View style={styles.statsContainer}>
        {["No of Donations", "FeedBack", "Points Earned"].map((text, index) => (
          <View key={index} style={styles.statsItem}>
            <Text>{text}</Text>
          </View>
        ))}
      </View>
      <View style={styles.postContainer}>
        <Pressable style={styles.myPostButton}>
          <Text style={styles.myPostText}>My Post</Text>
        </Pressable>
        <View style={styles.createPostContainer}>
          <Text style={styles.createPostText}>Do you have some food to Donate?</Text>
          <Pressable
            style={styles.createPostButton}
            onPress={() => navigation.navigate("donorlist")}
          >
            <Text style={styles.createPostButtonText}>Create Donation Post</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.donationHistoryContainer}>
        <View style={styles.donationHistoryHeader}>
          <Text style={styles.donationHistoryTitle}>Donation History</Text>
          <Pressable>
            <Text style={styles.viewAllText}>View All</Text>
          </Pressable>
        </View>
        <View style={styles.donationItem}>
          <Image source={require("../assets/chef.png")} style={styles.donationImage} />
          <View>
            <Text>ID</Text>
            <Text>Item</Text>
            <Text>Quantity</Text>
            <Text>Status</Text>
          </View>
        </View>
      </View>
      <View style={styles.ngoContainer}>
        <View style={styles.ngoHeader}>
          <Text style={styles.ngoTitle}>NGOS NEAR YOU</Text>
          <Pressable>
            <Text style={styles.viewAllText}>View All</Text>
          </Pressable>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginLeft: "5%",
    marginTop: "10%",
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 30,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#c3cfe2",
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  statsItem: {
    flex: 1,
    alignItems: "center",
  },
  postContainer: {
    marginBottom: 20,
  },
  myPostButton: {
    borderBottomWidth: 1,
    marginBottom: 10,
    width: "95%",
  },
  myPostText: {
    textAlign: "center",
  },
  createPostContainer: {
    height: 120,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c3cfe2",
    borderRadius: 10,
    padding: 20,
  },
  createPostText: {
    textAlign: "left",
  },
  createPostButton: {
    backgroundColor: "#396afc",
    height: 50,
    width: 200,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  createPostButtonText: {
    color: "white",
  },
  donationHistoryContainer: {
    marginTop: 20,
  },
  donationHistoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  donationHistoryTitle: {
    fontSize: 15,
  },
  viewAllText: {
    fontSize: 15,
    color: "#396afc",
  },
  donationItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  donationImage: {
    height: 60,
    width: 60,
    marginRight: 20,
  },
  ngoContainer: {
    marginTop: 20,
  },
  ngoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  ngoTitle: {
    fontSize: 15,
  },
  faqContainer: {
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
  },
  faqTitle: {
    borderBottomWidth: 1,
    width: "35%",
    marginBottom: 10,
  },
  items: {
    marginBottom: 10,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    backgroundColor: "#c3cfe2",
    padding: 10,
    borderRadius: 10,
  },
  answer: {
    marginTop: 5,
    fontSize: 16,
    color: "#666",
    paddingHorizontal: 10,
  },
  item: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 5,
    minHeight: 150,
  },
});
