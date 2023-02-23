import {Button, StyleSheet, Text, TextInput, View} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import React from "react";
import {collection, addDoc, getDocs} from "firebase/firestore";
import {db} from "../config/firebase";

const HomeScreen = ({navigation}) => {
    const [notes, setNote] = React.useState([]);
    const [name, setName] = React.useState("");

    // loads notes in
    React.useEffect(getNotes,[])

    async function getNotes() {
        console.log("Getting alle notes")
        const snapshot = await getDocs(collection(db, "notes"));
        snapshot.forEach(note => {
            const newNote = note.data();
            newNote["key"] = note.id
            setNote(prevState => [...prevState, newNote]);
        })
    }

    function createNote() {
        // name comes from useState
        const title = name

        let newNote = {
            title: title,
            note: ""
        }


        if (name.length !== 0) {
            addDoc(collection(db, "notes"), newNote).then(r => {
                newNote["id"] = r.id;
                setNote(prevState => [...prevState, newNote]);
            })
        } else {
            console.log("dont create a note with no title");
        }
    }

    return (
        <View style={styles.container}>
            <View>
                {
                    notes.map((note, index) => (
                        <View key={index} style={styles.create}>
                            <Button title={note.title}
                                    onPress={() => navigation.navigate('Note', {name: note.key})}/>
                        </View>
                    ))
                }
            </View>
            <View style={styles.create}>
                <TextInput style={styles.textbox} onChangeText={setName} value={name}/>
                <Button title="add new note firsbae" onPress={createNote}/>
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