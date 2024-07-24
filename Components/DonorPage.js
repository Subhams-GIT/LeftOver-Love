import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useMemo, useState} from "react";
import {Pressable, View, Image, Text, FlatList, StyleSheet, ScrollView,VirtualizedList} from "react-native";
import { faqData } from "./faq";
export default function DonorPage({navigation}) {
  const [donor, setDonor] = useState({});
  const [expandedIndex, setExpandedIndex] = useState(null);
  useEffect(() => {
    const fetchUserCredentials = async () => {
      try {
        const details = await AsyncStorage.getItem("usercreds");
        console.log("Retrieved user credentials:", details);
        setDonor(details);
         console.log(donor);
        // console.log(donor.cname);
      } catch (error) {
        console.error("Error fetching user credentials:", error);
      }
    };

    fetchUserCredentials(); // Call the function within useEffect
  }, []);

  const data = [
    {id: 1, title: "Item 1"},
    {id: 2, title: "Item 2"},
    {id: 3, title: "Item 3"},
    {id: 4, title: "Item 4"},
  ];
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );
  const renderFAQS = ({ item, index }) => {

    return (
    <View style={styles.items}>
      <Pressable onPress={() => setExpandedIndex(expandedIndex === index ? null : index)}>
        <Text style={styles.question}>{item.question}</Text>
      </Pressable>
      {expandedIndex === index && <Text style={styles.answer}>{item.answer}</Text>}
    </View>
    )
  }
  const getItemCount = (data) => 2;
  const getItem = (data, index) => data[index]; 
  return (
    <ScrollView>

   
    <View style={{marginLeft: "5%", marginTop: "10%"}}>
      <Text style={{fontSize: 20, fontWeight: 1000}}>Hi {donor.cname}</Text>
      <Text style={{fontSize: 30}}>You Are A Donor</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          rowGap: 20,
          borderWidth: 1,
          backgroundColor: "#c3cfe2",
          justifyContent:"space-between",
          gap: 20,
          width: "95%",
          minHeight: 60,
        }}
      >
        <View style={{display: "flex", flexDirection: "column"}}>
          <Text>No of Donations</Text>
        </View>
        <View style={{display: "flex", flexDirection: "column"}}>
          <Text>FeedBack</Text>
        </View>
        <View style={{display: "flex", flexDirection: "column"}}>
          <Text>Points Earned</Text>
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <Pressable
          style={{borderBottomWidth: 1, marginBottom: 10, width: "95%"}}
        >
          <Text style={{textAlign: "center"}}>My Post</Text>
        </Pressable>
        <View
          style={{
            height: 120,
            width: "95%",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#c3cfe2",
          }}
        >
          <Text style={{textAlign: "left", paddingTop: 30}}>
            Do you have some food to Donate?
          </Text>
          <Pressable
            style={{
              backgroundColor: "#396afc",
              height: 50,
              width: 200,
              marginBottom: 20,
              borderRadius: 10,
            }}
          >
            <Text style={{textAlign: "center", paddingVertical: "5%"}}>
              create donation post
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={{display: "flex", flexDirection: "column", marginTop: 10}}>
        <View
          style={{
            display: "flex",
            width: "95%",
            flexDirection: "row",
            rowGap: 80,
            marginRight: "50%",
          }}
        >
          <Text style={{marginRight: "60%", fontSize: 15}}>
            Donation History
          </Text>
          <Pressable>
            <Text style={{fontSize: 15}}>View All</Text>
          </Pressable>
        </View>

        <View style={{display: "flex", flexDirection: "row", marginTop: 10}}>
          <Image
            source={require("../assets/chef.png")}
            style={{height: 60, width: 60, marginRight: "35%"}}
          />
          <View style={{display: "flex", flexDirection: "column"}}>
            <Text>ID</Text>
            <Text>Item</Text>
            <Text>Quantity</Text>
            <Text>status</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            width: "95%",
            flexDirection: "column",
            marginTop: 10,
          }}
        >
          <View
            style={{display: "flex", flexDirection: "row", marginBottom: 10}}
          >
            <Text style={{marginRight: "55%"}}>NGOS NEAR YOU</Text>
            <Pressable>
              <Text>View All</Text>
            </Pressable>
          </View>
          <FlatList
            data={data}
            renderItem={renderItem}
            numColumns={2}
            keyExtractor={(item) => item.id}
          />
          <View />
          <View>
            <View style={{borderWidth:1,margin:10}}>
              <Text style={{borderBottomWidth:1,width:"35%",marginBottom:10}}>FAQS</Text>
              <VirtualizedList
            data={faqData}
            getItemCount={getItemCount}
            getItem={getItem}
            renderItem={renderFAQS}
            keyExtractor={(item, index) => index.toString()}
          />
            </View>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}




const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 5,
    minHeight:150
  },
  container: {
    flex: 1,
    padding: 20,
  },
  items: {
    marginBottom: 10,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    backgroundColor:"#c3cfe2",
    width:"85%",
    borderRadius:10,
  },
  answer: {
    marginTop: 5,
    fontSize: 16,
    color: '#666',
  },
});
