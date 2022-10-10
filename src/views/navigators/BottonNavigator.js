import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import COLORS from '../../const/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

 
const BottomNavigator = () => {
 return (
    <Tab.Navigator screenOptions={{ headerShown:false }}>
         <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notification" component={HomeScreen} />
        <Tab.Screen name="Favourates" component={HomeScreen} />
         <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
 )
};

export default BottomNavigator;
