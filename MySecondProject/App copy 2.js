import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, TextInput, View} from 'react-native';

export default function MyApp() {
  return (
    <View>
      <Text>
      {"\n\n\n\n"} 
        Hello!
       
        </Text>
        <TextInput 
        style = {{
          height: 40,
          borderColor: "green",
          borderWidth: 1,
        }}
        defaultValue = "Enter your Input" />
        </View>
   
  );
}

