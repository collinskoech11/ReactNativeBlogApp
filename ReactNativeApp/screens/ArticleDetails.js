import React from 'react';
import { StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import {Button} from 'react-native-paper';

function ArticleDetails(props) {

    const data = props.route.params.data;

    const deletedData = () => {
        fetch(`http://192.168.0.104:8000/api/articles/${data.id}/`,{
            method:"DELETE",
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(data => {
           props.navigation.navigate("Home")
        })
        .catch(error => Alert.alert("Error", error))
        //hello
    }
    return (
        <ScrollView>
        <View style = {styles.viewStyle}>
         <Text>{data.id}</Text>
         <Text style = {{fontSize:25}}>{data.title}</Text>
         <Text style = {{fontSize:20, marginTop:10}}>{data.description}</Text>
         <View style = {styles.btnStyle}>
             <Button
                style = {styles.buttonStyle}
                icon = "update"
                mode = "contained"
                onPress = {() => props.navigation.navigate("Edit", {data:data})}
             >Edit</Button>
             <Button
                style = {styles.buttonStyle}
                icon = "delete"
                mode = "contained"
                onPress = {() => deletedData(data)}
             >Delete</Button>
         </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        padding:10,
        margin:10
    },
    buttonStyle: {
        marginTop:20
    },
    btnStyle: {
        flexDirection:"row",
        justifyContent:"space-around",
        padding: 10
    }
})
export default ArticleDetails
