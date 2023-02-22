import {Button, StyleSheet, Text, TextInput, View} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import React from "react";

const HomeScreen = ({navigation}) => {

    const [notes, setNote] = React.useState([]);
    const [name, setName] = React.useState("");


    // deletes all notes
    const jsonNote = JSON.stringify([]);
    AsyncStorage.setItem('@myNotes', jsonNote);

    const getData = async () => {
        const jsonValue = await AsyncStorage.getItem('@myNotes')
        return jsonValue != null ? JSON.parse(jsonValue) : null
    }
    // sets list of notes from storage
    getData().then(listOfNotes => {
        if (listOfNotes !== null) {
            setNote(prevState => [
                ...prevState, ...listOfNotes
            ]);
        }
    })
    async function createNewNote() {
        if (name !== "") {
            // lazy but it works for this small task
            const newNote = {
                title: name,
                key: "@" + Math.floor(Math.random() * 100000)
            }
            const notesToBeSaved = notes.push(newNote)
            // sets storage
            const jsonNote = JSON.stringify(notesToBeSaved);
            await AsyncStorage.setItem('@myNotes', jsonNote);
        }
    }

    return (
        <View style={styles.container}>
            <View>
                {
                    notes.map((note, index) => (
                        <View key={index} style={styles.create}>
                            <Button key={index} title={note.title}
                                    onPress={() => navigation.navigate('Note', {name: note.key})}/>
                        </View>
                    ))
                }
            </View>
            <View style={styles.create}>
                <TextInput
                    style={styles.textbox}
                    onChangeText={setName}
                    value={name}
                />

                <Button
                    title="Create new note"
                    onPress={createNewNote}
                />
            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },

    create: {
        marginBottom: 20,

    },
    textbox: {
        borderWidth: 1,
        marginBottom: 20,
        padding: 10
    },

});
export default HomeScreen