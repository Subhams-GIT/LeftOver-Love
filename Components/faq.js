import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const faqs = [
  {
    id: '1',
    question: 'How can I donate food?',
    answer: 'To donate food, go to the Donor Page, fill in the details of the food, and submit your donation.',
  },
  {
    id: '2',
    question: 'How can I request food?',
    answer: 'To request food, navigate to the Receiver Page, browse the available donations, and request the one you need.',
  },
  {
    id: '3',
    question: 'Is there any cost involved?',
    answer: 'No, the food waste management app is free to use. The goal is to reduce food waste by connecting donors with receivers.',
  },
   {
     id:'4',
    question: "What is LeftOver Love?",
    answer: "LeftOver Love is a food waste management app where users can donate excess food and receivers can collect it."
  },
  {
    id:'5',
    question: "How do I sign up?",
    answer: "You can sign up by going to the signup page and filling out the form with your details."
  },
  {
    id:'6',
    question: "How do I choose my role?",
    answer: "After signing up, you will be directed to the role page where you can choose to be a donor or a receiver."
  },
  {
    id:'7',
    question: "What information do I need to provide as a donor?",
    answer: "As a donor, you need to provide your details in the donor details form, including the type and amount of food you want to donate."
  },
  {
    id:'8',
    question: "How can I see the list of available donors?",
    answer: "As a receiver, you can see the list of available donors by navigating to the donor list page."
  },
  {
    id:'9',
    question: "What kind of incentives does the app provide?",
    answer: "The app provides a point system for donors as incentives, which can be redeemed for various rewards."
  },
  {
    id:'10',
    question: "How does the matching system work?",
    answer: "The app matches donors with receivers based on the type of food and the location to ensure efficient distribution."
  },
  {
    id:'11',
    question: "Is there any help desk available?",
    answer: "Yes, there is a help desk with frequently asked questions and support for any issues you may face."
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const handlePress = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => handlePress(item.id)} style={styles.questionContainer}>
        <Text style={styles.question}>{item.question}</Text>
        <Icon name={expanded === item.id ? 'chevron-up' : 'chevron-down'} size={20} color="#fff" />
      </TouchableOpacity>
      {expanded === item.id && <Text style={styles.answer}>{item.answer}</Text>}
    </View>
  );

  return (
    <FlatList
      data={faqs}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#000',
  },
  item: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 10,
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  answer: {
    fontSize: 16,
    color: '#ddd',
    marginTop: 5,
  },
});

export default FAQ;