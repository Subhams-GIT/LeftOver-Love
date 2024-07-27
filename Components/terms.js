import React, { useState } from 'react';
import { View, Text, CheckBox, Button, ScrollView, StyleSheet } from 'react-native';

const TermsAndConditions = ({ navigation }) => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    if (accepted) {
      navigation.navigate('DonorDetails');
    } else {
      alert("Please accept the terms and conditions to proceed.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Terms and Conditions</Text>
      <Text style={styles.text}>
        Welcome to our food waste management app. As a donor, you agree to the following terms and conditions:
      </Text>

      <Text style={styles.subHeading}>1. Food Quality</Text>
      <Text style={styles.text}>
        You agree to donate only food that is safe for consumption and meets the standards set by local health authorities. Providing spoiled, expired, or harmful food is strictly prohibited.
      </Text>

      <Text style={styles.subHeading}>2. Legal Liability</Text>
      <Text style={styles.text}>
        If you donate food that causes harm to the recipient due to spoilage, contamination, or any other reason, you may be subject to legal proceedings and liable for any damages.
      </Text>

      <Text style={styles.subHeading}>3. Accurate Information</Text>
      <Text style={styles.text}>
        You must provide accurate and truthful information regarding the type, quantity, and condition of the food being donated.
      </Text>

      <Text style={styles.subHeading}>4. No Compensation</Text>
      <Text style={styles.text}>
        You understand that the donation is voluntary and you will not receive any monetary compensation for the food donated.
      </Text>
      <Text style={styles.subHeading}>5. Right to Refuse</Text>
      <Text style={styles.text}>
        The app administrators reserve the right to refuse any donation if the food does not meet the required standards or if there are any doubts about its safety.
      </Text>

      <Text style={styles.subHeading}>6. Indemnity</Text>
      <Text style={styles.text}>
        You agree to indemnify and hold harmless the app developers, administrators, and any associated parties from any claims, damages, or legal actions arising from your food donation.
      </Text>

      <Text style={styles.subHeading}>7. Compliance with Laws</Text>
      <Text style={styles.text}>
        You agree to comply with all local, state, and federal laws and regulations regarding food donation.
      </Text>

      <View style={styles.checkboxContainer}>
        <CheckBox value={accepted} onValueChange={setAccepted} />
        <Text style={styles.checkboxText}>I accept the terms and conditions</Text>
      </View>

      <Button title="Proceed" onPress={handleAccept} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default TermsAndConditions;