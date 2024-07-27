import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from '@react-navigation/native';

export default function Profile({ navigation, route }) {
  const [userdata, setuserdata] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const storedData = await AsyncStorage.getItem("usercreds");
          if (storedData) {
            setuserdata(JSON.parse(storedData));
          } else {
            setuserdata(null);
          }
        } catch (error) {
          console.error("Error retrieving data", error);
        }
      };

      fetchData();
    }, [route.params?.updated]) // Dependency array includes route.params?.updated
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile Information</Text>
      {userdata ? (
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Business Name:</Text>
          <Text style={styles.value}>{userdata.bname}</Text>
          <Text style={styles.label}>Contact Name:</Text>
          <Text style={styles.value}>{userdata.cname || "N/A"}</Text>
          <Text style={styles.label}>Mobile Number:</Text>
          <Text style={styles.value}>{userdata.mno}</Text>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{userdata.email}</Text>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{userdata.address}</Text>
          <Text style={styles.label}>Pin Code:</Text>
          <Text style={styles.value}>{userdata.pincode}</Text>
          <Text style={styles.label}>City:</Text>
          <Text style={styles.value}>{userdata.city}</Text>
          <Text style={styles.label}>State:</Text>
          <Text style={styles.value}>{userdata.state}</Text>
        </View>
      ) : (
        <Text style={styles.noData}>No user data available.</Text>
      )}
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
        color="#34e89e"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00123d",
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "white",
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
  },
  noData: {
    color: "white",
    textAlign: "center",
    marginTop: 20,
  },
});