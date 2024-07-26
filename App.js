
import { StyleSheet, Text, View } from 'react-native';
import Role from './Components/Role';
import DonorDetails from './Components/DonorDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DonorPage from './Components/DonorPage';
import GettingStarted from './Components/gettingStarted';
import SignUp from './Components/Signup';
import LoginScreen from './Components/Signin';
import ReceiverDetails from './Components/ReceiverDetails';
import DonorList from './Components/Donorlist';
import ReceiverPage from './Components/ReceiverPage';
const Stack=createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer >
    <Stack.Navigator initialRouteName='gettingstarted'>
      <Stack.Screen name="gettingstarted" component={GettingStarted} options={{headerShown:false}}/>
      <Stack.Screen name="signup" component={SignUp}/>
      <Stack.Screen name="login" component={LoginScreen}/>
      <Stack.Screen name="Role" component={Role}  />
      <Stack.Screen name="DonorDetails" component={DonorDetails} />
      <Stack.Screen name='DonorPage' component={DonorPage} options={{headerShown:false}}/>
      <Stack.Screen name="receiverdet" component={ReceiverDetails}/>
      <Stack.Screen name="donorlist" component={DonorList}/>
      <Stack.Screen name="receiver" component={ReceiverPage}/>
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
