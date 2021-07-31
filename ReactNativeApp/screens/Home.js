import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {Card} from 'react-native-paper'
//props is used to send data from one component to another 

function Home(props) {
    return (
        <Card style={styles.cardStyle}>        
            <Text>
                Hello from {props.name}
            </Text>
        </Card>

    )
}
const styles = StyleSheet.create({
    cardStyle: {
        padding:10,
        margin:10,
    }
})
export default Home
