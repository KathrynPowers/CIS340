import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.yellow}>Just Yellow Text</Text>
     <Text style = {styles.largeGreen}> This is big green</Text>
    < Text style = {[styles.largeGreen, styles.yellow]}> Yellow Text, then Big Green text</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60, 

  }, 

  largeGreen:{
    color: 'green',
    fontWeight: 'bold',
    fontSize: 80,
  }, 

  yellow: {
    color: 'yellow',
    fontSize: 10, 
  }
});
