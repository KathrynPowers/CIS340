//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text ,Image, View } from 'react-native';

export default function MyMap() {
  let pic = {
    uri: 'https://www.nationsonline.org/maps/Physical-World-Map-3360.jpg'};
  return (
    <View >
      <Image source = {pic}
    style = {{width:200, height: 200}}
    />
    <Text> Hello, this is my map!</Text>
    </View>
  );
}

