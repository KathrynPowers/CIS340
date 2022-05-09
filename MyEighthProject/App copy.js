//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App() {

  const[count, setCount] = useState(0);
  const onTap = ()=> setCount(count => count + 1);

  return (
    <View style={styles.container}>
    <View style={styles.counterText}>
      <Text> Tap counter: {count}</Text> 
    </View>
    <TouchableOpacity 
    style = {styles.button} onPress = {onTap}

    >
      <Text> Tap!</Text>
    </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0099cc',
    padding:10

  },
  counterText: {
    alignItems: 'center',
    padding: 10
  }
});
