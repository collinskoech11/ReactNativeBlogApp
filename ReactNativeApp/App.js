import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import {Constants} from 'expo-constants';
import ClassA from  './screens/ClassA';
import Create from './screens/Create';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator()

function App() {
  return (
    <View style={styles.container}>
     <Stack.Navigator>
       <Stack.Screen name = "Home" component = {Home}/>
       <Stack.Screen name = "Create" component = {Create}/>
     </Stack.Navigator>
    </View>
  );
}

export default() => {
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eddfdf',
    marginTop:20
  },
  textStyle :{
    fontSize:25,
    color:"red",
  }
});
