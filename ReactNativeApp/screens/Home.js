import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {Card, FAB} from 'react-native-paper'
//props is used to send data from one component to another 

const mydata = [
    {id:1, title:"first Title", description:"first Description"},
    {id:2, title:"second Title", description:"second Description"},
    {id:3, title:"third Title", description:"third Description"},
    {id:4, title:"first Title", description:"first Description"},
    {id:5, title:"second Title", description:"second Description"},
    {id:6, title:"third Title", description:"third Description"},
    {id:7, title:"first Title", description:"first Description"},
    {id:8, title:"second Title", description:"second Description"},
    {id:9, title:"third Title", description:"third Description"},
]
const renderData = (item) => {
    return(
        <Card style={styles.cardStyle}> 
        <Text style = {{fontSize:25}}>{item.title}</Text>
        <Text style = {{fontSize:20}}>{item.description}</Text>
        </Card> 
    )
}
function Home() {
    return (
        <View>
            <FlatList
                data = {mydata}
                renderItem = {({item}) => {
                    return renderData(item)
                }}
                keyExtractor = {item => item.id}
            />
            <FAB
                style = {styles.fab}
                small = {false}
                icon = "plus"
                theme = {{colors:{accent:"blue"}}}
                onPress = {() => console.log("Pressed")}
            />
        </View>

    )
}
const styles = StyleSheet.create({
    cardStyle: {
        padding:10,
        margin:10,
    },
    fab: {
        position:'absolute',
        margin:16,
        right:0,
        bottom:0
    }
})
export default Home
