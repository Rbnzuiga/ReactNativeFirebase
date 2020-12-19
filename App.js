import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import VideojuegosProvider from './Context/VideojuegosContext';
import Formulario from './Screens/Formulario';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator1 from './Navigations/StackNavigator1';
import BottomTabNavigator1 from './Navigations/BottomTabNavigator1'



export default function App() {
  return (
 <VideojuegosProvider>

    <NavigationContainer>
    <BottomTabNavigator1/>  
    </NavigationContainer>

 </VideojuegosProvider>
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
