import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Role from './Components/Role';
import DonorDetails from './Components/DonorDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack=createNativeStackNavigator();
export default function App() {
  return (
   <NavigationContainer >
    <Stack.Navigator initialRouteName='Role'>
      <Stack.Screen name="Role" component={Role} />
      <Stack.Screen name="DonorDetails" component={DonorDetails} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
