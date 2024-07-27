import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import HelpDesk from './components/HelpDesk'; 

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Help Desk</Text>
      <HelpDesk />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff', 
    marginVertical: 20,
  },
});

export default App;