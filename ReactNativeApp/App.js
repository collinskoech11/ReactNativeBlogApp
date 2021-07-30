import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Django and React!</Text>
      <Text>Hello World</Text>
     {/** <StatusBar style="auto" /> */}
    </View>
  );
}

{/**Hello world */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle :{
    fontSize:25,
    color:"red",
  }
});
