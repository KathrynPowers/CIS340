import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TouchableButton extends Component {
  _onPressButton(){
    alert('You tapped the button')
  }
  render(){
  return (
    <View style={styles.container}>
     
     <View style = {styles.containerButton}>
       <Button
       onPress ={this._onPressButton}
       title = 'Press Button 1'
      />
     </View>
       <View style = {styles.containerLayoutButton}>
       <Button
       onPress = {this._onPressButton}
       title = 'Press Button 2'
      />
        <Button
       onPress = {()=> {
         alert('You clicked the button 3!')
       }}
       title = 'Press Button 3'
       color = 'red'
      />


       </View>
       <View style= {styles.containerButton} > 
       <Button
       onPress = {this._onPressButton}
       title = 'Press Button 4'
       color = 'yellow'
      />
       
       </View>


    </View>
  );
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: 'center',
  },
  containerButton: {
    margin: 25, 

  },

  containerLayoutButton: {
margin: 20, 
flexDirection: 'row', 
justifyContent: 'space-between',
  }


})
}
