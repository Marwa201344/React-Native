import React from 'react';
import { Box, Button, Text, NativeBaseProvider, StatusBar, View } from "native-base";
import {StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './components/home';
import Details from './components/details';
import UsersProvider from './components/context'

const Default = createNativeStackNavigator();
export default function App() {
  return (
    
    
    <UsersProvider>
    <NativeBaseProvider>
    <Box style={styles.box}>
    <StatusBar hidden />
      <NavigationContainer>
      <Default.Navigator initialRouteName="home">
            <Default.Screen name="home" component={Home} />
            <Default.Screen name="details" component={Details} />
          </Default.Navigator>
      </NavigationContainer>
      </Box>
    </NativeBaseProvider>
    </UsersProvider>

  );
}
const styles = StyleSheet.create({
  box:{
    height: "100%"
  },
 
});
