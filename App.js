import {Button, StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import * as React from 'react';
const Stack = createNativeStackNavigator();
import {NavigationContainer} from '@react-navigation/native';


import HomeScreen from "./src/pages/home";
import Note from "./src/pages/note";



export default function App() {
  return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Note App'}}/>
          <Stack.Screen name="Note" component={Note} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}


