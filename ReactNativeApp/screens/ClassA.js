import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class ClassA extends Component {
    state = {
        name: "collinskoech11"
    }
    render() {
        return (
            <View>
                <Text style = {{fontSize:25}}>
                {this.state.name}
                </Text>
                <Button title="Click Me" onPress = {() => this.setState({name:"Text Changed"})}/>
            </View>
        )
    }
}

export default ClassA
