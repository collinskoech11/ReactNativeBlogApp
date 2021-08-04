import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {TextInput, Button } from 'react-native-paper';

function Create() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return (
        <View>
            <TextInput
                style = {styles.inputStyle}
                label = "title"
                value = {title}
                mode = "outlined"
                onChangeText = {text => setTitle(text)}
            />
            <TextInput
                style = {{margin:10}}
                label = "Description"
                value = {description}
                mode = "outlined"
                multiline
                numberOfLines = {10}
                onChangeText = {text => setDescription(text)}
            />
            <Button
                style = {{margin:10}}
                icon = "pencil"
                mode = "contained"
                onPress = {() => console.log("Button Pressed")}
            >Insert Article</Button>
        </View>
    )
}
const styles = StyleSheet.create({
    inputStyle:{
        padding:10,
        marginTop:30
    }
})
export default Create
