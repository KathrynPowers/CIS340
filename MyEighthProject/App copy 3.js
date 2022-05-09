//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default function App() {

 

  return (
    <View style={styles.container}>
    <Image source= {{uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/image/logo.png'}} />
      style = {styles.logo}
      <Text style = {styles.insts}>
        Press the button below to select an image on your phone!
      </Text>
    <TouchableOpacity 
    style = {styles.button} onPress = {() => alert('You have not selected an image yet')} >
      <Text style= {styles.buttonText}> Pick an image!</Text>
    </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'white'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0099cc',
    padding:10,
    borderRadius:5

  },
  insts: {
    fontSize: 18, 
    color:'888',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  logo: {
    width: 305,
    height: 300, 
    marginBottom: 20

  },

  buttonText:{
    fontSize: 20, 
    color: '#345'
  }

});