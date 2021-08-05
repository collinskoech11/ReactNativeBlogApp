import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import {TextInput, Button } from 'react-native-paper';

function ArticleEdit(props) {

    const data = props.route.params.data;

    const [title, setTitle] = useState(data.title)
    const [description, setDescription] = useState(data.description)

    const updateData = () => {
        fetch(`http://192.168.0.104:8000/api/articles/${data.id}/`,{
            method:"PUT",
            headers: {
                'Content-Type':'appication/json'
            },
            body:JSON.stringify({title:title, description})
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
    }
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
                icon = "update"
                mode = "contained"
                onPress = {() => updateData()}
            >Update Article</Button>
        </View>
    )
}
const styles = StyleSheet.create({
    inputStyle:{
        padding:10,
        marginTop:30
    }
})

export default ArticleEdit
