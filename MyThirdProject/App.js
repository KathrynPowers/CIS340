//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text,TextInput, View } from 'react-native';

export default function Student(props) {
  return (
    <View >
      <Text>Hey, my name is {props.name}, I am a CIS340 student!</Text>
    </View>
  );
}


export default function MultiComp(){
  return(
    <View style={{
      flex: 1,
      justifyContent:'center',
      alignItems: 'center'
    }}>
    <Text> Welcome to CIS340!</Text>
    <Student name = "Katie Powers"/> 
    <Student name = "John Doe"/>
    <Student name = "Sylvia Plath"/>
    </View>
  );


}