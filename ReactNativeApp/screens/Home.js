import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {Card, FAB} from 'react-native-paper'
//props is used to send data from one component to another 


function Home() {
    const [data, setData] = useState([{title:"First title", description:"first description"}])
    
    const renderData = (item) => {
        return(
            <Card style={styles.cardStyle}> 
            <Text style = {{fontSize:25}}>{item.title}</Text>
            <Text style = {{fontSize:20}}>{item.description}</Text>
            </Card> 
        )
    }
    return (
        <View>
            <FlatList
                data = {data}
                renderItem = {({item}) => {
                    return renderData(item)
                }}
                keyExtractor = {item => `${item.id}`}
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
        position:'fixed',
        margin:16,
        right:0,
        bottom:0
    }
})
export default Home
