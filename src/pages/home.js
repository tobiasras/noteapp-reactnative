import {Button, StyleSheet, View} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";



const HomeScreen = ({navigation}) => {












    return (
        <View style={styles.container}>

            <View>

                <Button
                    title="Note"
                    onPress={() =>
                        navigation.navigate('Note', {name: '@storage_Key'})
                    }
                />


            </View>



            <View style={styles.create}>
                <Button
                    title="Create new note"

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

    }
});
export default HomeScreen