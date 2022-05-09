//import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class myApp extends Component{

 constructor(props){
  super(props);
  this.state = {count: 0};
  
 }

 onTap = () => {
   this.setState({
    count: this.state.count +1
   });
 }
render(){
  const {count} = this.state;
  return (
    <View style={styles.container}>
    <View style={styles.counterText}>
      <Text> Tap counter: {count}</Text> 
    </View>
    <TouchableOpacity 
    style = {styles.button} onPress = {this.onTap}

    >
      <Text> Tap!</Text>
    </TouchableOpacity>


    </View>
  );
}
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
