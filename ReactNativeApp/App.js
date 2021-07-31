import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import {Constants} from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Home name="coko"/>
      {/** <StatusBar style="auto" /> */}
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
