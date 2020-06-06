import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import AddScreen from './src/Screens/AddScreen';
import ListScreen from './src/Screens/ListScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  let isSigned = false;
  return (
    <NavigationContainer>
      {isSigned ? (
        <BottomTab.Navigator>
          <BottomTab.Screen name="Home" component={HomeScreen} />
          <BottomTab.Screen name="Add" component={AddScreen} />
          <BottomTab.Screen name="List" component={ListScreen} />
          <BottomTab.Screen name="Profile" component={ProfileScreen} />
        </BottomTab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
