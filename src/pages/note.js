import {StyleSheet, Text, TextInput, View} from "react-native";
import React, {useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Note = ({navigation, route}) => {
    const noteKey = route.params.name;

    React.useEffect(() => {
        console.log(noteKey)
    }, [])



    const savedState = () => {
        AsyncStorage.getItem(noteKey).then(savedNote => {
            if (savedNote !== undefined) {
                setText(savedNote);
            } else {
                setText("");
            }
        });

    };

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem(noteKey, value)
        } catch (e) {
            // saving error
        }
    };

    // UseStateHook
    const [text, setText] = React.useState();

    useEffect(() => {
        storeData(text).then();
    });

    useEffect(savedState, []);


    return (
        <View style={styles.noteContainer}>
            <TextInput
                onChangeText={setText}
                multiline
                value={text}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    noteContainer: {
        margin: 10
    },
});


export default Note