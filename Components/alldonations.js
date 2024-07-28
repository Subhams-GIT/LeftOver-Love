import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, SafeAreaView } from "react-native";

export default function AllDonationsPage() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchAllDonations = async () => {
      try {
        const response = await fetch('http://192.168.29.12:3000/form-data'); // Ensure this endpoint returns all donations
        const data = await response.json();
        setDonations(data);
      } catch (error) {
        console.error("Error fetching all donations:", error);
      }
    };

    fetchAllDonations();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.donationItem}>
      <Image source={require("../assets/chef.png")} style={styles.donationImage} />
      <View>
        <Text>Type of food: {item.typeoffood}</Text>
        <Text>Item: {item.title}</Text>
        <Text>Quantity: {item.quantity}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={donations}
        renderItem={renderItem}
        keyExtractor={(item) => item._id.toString()} // Assuming each donation has a unique _id
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  donationItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  donationImage: {
    height: 60,
    width: 60,
    marginRight: 20,
  },
});
