import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {Card} from 'react-native-paper'

function Home() {
    return (
        <Card>        
            <Text>
                Hello from home 
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
