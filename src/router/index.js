/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/login';
import NEARAccountScreen from '../screens/NEAR_account';
import GiftNFTScreen from '../screens/gift_nft';
import HomeScreen from '../screens/home';
import {Icon} from 'native-base';

enableScreens();
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="NEARAccount" component={NEARAccountScreen} />
        <Stack.Screen name="GiftNFT" component={GiftNFTScreen} />
        <Stack.Screen name="Home" component={TabBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {height: 90},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home" style={{color, fontSize: 30}} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={() => null}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="add-circle"
              type="Ionicons"
              style={{color, fontSize: 35}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={() => null}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="arrowsalt"
              type="AntDesign"
              style={{color, fontSize: 25}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigator;
