import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import {Constants} from 'expo-constants';
import ClassA from  './screens/ClassA';
import Create from './screens/Create';

export default function App() {
  return (
    <View style={styles.container}>
      {/**<Home/>*/}
      {/** <StatusBar style="auto" /> */}
      <Create/>
    </View>
  );
}

{/**Hello world */}

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
