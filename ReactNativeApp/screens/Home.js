import React, {useState} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import {Card} from 'react-native-paper'
//props is used to send data from one component to another 

function Home() {
    const [name, setName] = useState("collinskoech11")
    return (
        <Card style={styles.cardStyle}>        
            <Text style = {{fontSize:25}}>
                {name}
            </Text>
            <Button title="Change Text" onPress = {() => setName("This is Changed")}/>
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
