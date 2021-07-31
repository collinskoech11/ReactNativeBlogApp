import React, {useState} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import {Card} from 'react-native-paper'
//props is used to send data from one component to another 

const mydata = [
    {id:1, title:"first Title", description:"first Description"},
    {id:2, title:"second Title", description:"second Description"},
    {id:3, title:"third Title", description:"third Description"},
]

function Home() {
    const [name, setName] = useState("collinskoech11")
    return (
        <Card style={styles.cardStyle}>  
            <View>     
                <Text style = {{fontSize:25}}>
                    {name}
                </Text>
                <Button title="Change Text" onPress = {() => setName("This is Changed")}/>
            </View> 
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
