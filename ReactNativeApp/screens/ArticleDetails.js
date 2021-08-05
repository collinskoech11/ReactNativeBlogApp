import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

function ArticleDetails(props) {

    const {id, title, description} = props.route.params.data;
    return (
        <View style = {styles.viewStyle}>
         <Text>{id}</Text>
         <Text style = {{fontSize:25}}>{title}</Text>
         <Text style = {{fontSize:20, marginTop:10}}>{description}</Text>
         <View style = {styles.btnStyle}>
             <Button
                style = {styles.buttonStyle}
                icon = "update"
                mode = "contained"
                onPress = {() => console.log("pressed")}
             >Edit</Button>
             <Button
                style = {styles.buttonStyle}
                icon = "delete"
                mode = "contained"
                onPress = {() => console.log("pressed")}
             >Delete</Button>
         </View>
        </View>
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
    }
})
export default ArticleDetails
