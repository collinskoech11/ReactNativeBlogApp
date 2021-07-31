import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {Card} from 'react-native-paper'
//props is used to send data from one component to another 

const mydata = [
    {id:1, title:"first Title", description:"first Description"},
    {id:2, title:"second Title", description:"second Description"},
    {id:3, title:"third Title", description:"third Description"},
]
const renderData = (item) => {
    return(
        <Card style={styles.cardStyle}> 
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
        </Card> 
    )
}
function Home() {
    return (
        
            <FlatList
                data = {mydata}
                renderItem = {({item}) => {
                    return renderData(item)
                }}
                keyExtractor = {item => item.id}
            />
        

    )
}
const styles = StyleSheet.create({
    cardStyle: {
        padding:10,
        margin:10,
    }
})
export default Home
