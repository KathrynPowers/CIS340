import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, TextInput, View} from 'react-native';

function MyApp() {
  return (
    <View>
      <Text>
      {"\n\n\n\n"} 
        Hello!
       
        </Text>
        </View>
   
  );
}
export default function MultiComp(){
  return(
    <View style= {{
      flex: 1,
      justifyContent: "Center",
      alignItems: "center",
    }}>
      <Text>{"\n\n\n\n\n\n\n"} Welcome to my app! </Text>
      <MyApp/>
      <MyApp/>
      <MyApp/>
      <MyApp/>
    </View>

  )
}
