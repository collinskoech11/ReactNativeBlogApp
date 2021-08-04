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
                style = {styles.inputStyle}
                label = "Description"
                value = {description}
                mode = "outlined"
                multiline
                numberOfLines = {10}
                onChangeText = {text => setDescription(text)}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    inputStyle:{
        padding:10,
        margin:10
    }
})
export default Create
