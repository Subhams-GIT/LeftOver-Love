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
import { useDonor } from "../Context/donorcontext";

export default function ReceiverPage({ navigation }) {
  const { points, numberOfDonations } = useDonor();
  const [receiver, setReceiver] = useState({});
  const [lastDonation, setLastDonation] = useState({});

  useEffect(() => {
    const fetchUserCredentials = async () => {
      try {
        const details = await AsyncStorage.getItem("receivercreds");
        const parsedDetails = JSON.parse(details);
        setReceiver(parsedDetails);
      } catch (error) {
        console.error("Error fetching user credentials:", error);
      }
    };

    const fetchLastDonation = async () => {
      try {
        const response = await fetch('http://:3000/form-data');
        console.log(response);
        const data = await response.json();
        setLastDonation(data);
      } catch (error) {
        console.error("Error fetching last donation:", error);
      }
    };

    fetchUserCredentials();
    fetchLastDonation();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi {receiver.cname}</Text>
        <Text style={styles.title}>You Are A Receiver</Text>
      </View>
      <View style={styles.statsContainer}>
        {[`No of food request met: ${numberOfDonations}`, `Points Earned: ${points}`].map((text, index) => (
          <View key={index} style={styles.statsItem}>
            <Text>{text}</Text>
          </View>
        ))}
      </View>
      <View style={styles.postContainer}>
        <Pressable style={styles.myPostButton}>
          <Text style={styles.myPostText}>My Post</Text>
        </Pressable>
      </View>
      <View style={styles.donationHistoryContainer}>
        <View style={styles.donationHistoryHeader}>
          <Text style={styles.donationHistoryTitle}>Your History</Text>
          <Pressable>
            <Text style={styles.viewAllText}>View All</Text>
          </Pressable>
        </View>
        {lastDonation ? (
          <View style={styles.donationItem}>
            <Image source={require("../assets/chef.png")} style={styles.donationImage} />
            <View>
              <Text>Type of food: {lastDonation.typeoffood}</Text>
              <Text>Item: {lastDonation.title}</Text>
              <Text>Quantity: {lastDonation.quantity}</Text>
            </View>
          </View>
        ) : (
          <Text>No donations found</Text>
        )}
      </View>
      <View style={styles.ngoContainer}>
        <View style={styles.ngoHeader}>
          <Text style={styles.ngoTitle}>Donors</Text>
        </View>
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
  item: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 5,
    minHeight: 150,
  },
});
