import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useCallback } from "react";
import {
  Pressable,
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useDonor } from "../Context/donorcontext";
import Profile from "./profile";
import GettingStarted from "./gettingStarted";
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import vector icons
import FAQ from "./faq";
const Tab = createBottomTabNavigator();

export default function DonorPage({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="dashboard"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'dashboard') {
            iconName = 'dashboard';
          } else if (route.name === 'profile') {
            iconName = 'person';
          } else if (route.name === 'logout') {
            iconName = 'logout';
          }
          else if(route.name === 'faq')
            iconName='Question Mark'
          // Return the icon component
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="dashboard" component={Dashboard} />
      <Tab.Screen name="profile" component={Profile} />
      <Tab.Screen name="logout" component={LogOutScreen} options={{ headerShown: false }} />
      <Tab.Screen name="faq" component={FAQ}/>
    </Tab.Navigator>
  );
}

function LogOutScreen({ navigation }) {
  React.useEffect(() => {
    navigation.navigate('gettingstarted');
  }, [navigation]);

  return null; 
}

function Dashboard(){
  const navigation = useNavigation();
  const [donor, setDonor] = useState({});
  const [donationDetails, setDonationDetails] = useState({});
  const { points, numberOfDonations, incrementPoints, incrementDonations } = useDonor();

  const fetchUserCredentials = async () => {
    try {
      const details = await AsyncStorage.getItem("usercreds");
      const parsedDetails = JSON.parse(details);
      setDonor(parsedDetails);
    } catch (error) {
      console.error("Error fetching user credentials:", error);
    }
  };

  const fetchFoodDetails = async () => {
    try {
      const response = await fetch('http://:3000/form-data');
      const data = await response.json();
      setDonationDetails(data);
    } catch (error) {
      console.error("Error fetching food details:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchFoodDetails();
    }, [])
  );

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

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hi {donor.cname}</Text>
          <Text style={styles.title}>You Are A Donor</Text>
        </View>
        <View style={styles.statsContainer}>
          {[`No of Donations: ${numberOfDonations}`, `Points Earned: ${points}`].map((text, index) => (
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
              <Text>Type of food: {donationDetails.typeoffood}</Text>
              <Text>Item: {donationDetails.title}</Text>
              <Text>Quantity: {donationDetails.quantity}</Text>
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
    </ScrollView>
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
  item: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 5,
    minHeight: 150,
  },
});