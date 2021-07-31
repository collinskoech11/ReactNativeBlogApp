import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {Card} from 'react-native-paper'
//props is used to send data from one component to another 

function Home() {
    const [name, setName] = useState("collinskoech11")
    return (
        <Card style={styles.cardStyle}>        
            <Text>
                Hello from {name}
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
