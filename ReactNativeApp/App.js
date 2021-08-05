import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import {Constants} from 'expo-constants';
import ClassA from  './screens/ClassA';
import Create from './screens/Create';
import ArticleDetails from './screens/ArticleDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator()
const myStyles = {
  title:"Article list",
  headerTintColor:"white",
  headerStyle : {
    backgroundColor:"blue"
  }
}

function App() {
  return (
    <View style={styles.container}>
     <Stack.Navigator>
       <Stack.Screen 
        name = "Home" 
        component = {Home}
        options = {myStyles}
       />
       <Stack.Screen 
        name = "Create" 
        component = {Create}
        options = {{...myStyles, title:"Create"}}
      />
      <Stack.Screen 
        name = "Details" 
        component = {ArticleDetails}
        options = {{...myStyles, title:"Details"}}
      />
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
