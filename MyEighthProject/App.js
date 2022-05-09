//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker' // import imagePicker
import * as Sharing from 'expo-sharing'; // import image sharing
import { Touchable } from 'react-native-web';

export default function App() {

  const [selectedImage, setSelectedImage] = React.useState(null)
let openImagePickerAsync = async ()=> {
let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
if(permissionResult.granted == false){
  alert('Permission is required.');
  return;

}
let pickerResult = await ImagePicker.launchImageLibraryAsync();

if(pickerResult.cancelled == true){
  return;
}
setSelectedImage({localUri: pickerResult.uri});
};
let openSharingDialogAsync = async () => {
  if ( !(await Sharing.isAvailableAsync())){
    alert('sharing is not available');
    return;
  }
  Sharing.shareAsync(selectedImage.localUri);
};
// display selected image
if(selectedImage!== null){
  return(
    <View styl = {styles.container}> 
    <Image source = {{uro:selectedImage.localUri}} style = {styles.selectedImage}/> 

<Text style = {styles.buttonText} > Share My Photos </Text>
    <TouchableOpacity onPress={openSharingDialogAsync} style = {styles.button}> 

    </TouchableOpacity>
    </View>
  )
}

 // end of code

  return (
    <View style={styles.container}>

      <Text style = {styles.insts}>
        Press the button below to select an image on your phone!
      </Text>
    <TouchableOpacity  style = {styles.button} onPress = {openImagePickerAsync} >
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
    color:'#888',
    marginHorizontal: 15,
    marginBottom: 10,
  },
 /* logo: {
    width: 305,
    height: 300, 
    marginBottom: 20
  
  },*/

  buttonText:{
    fontSize: 20, 
    color: '#345'
  }, 

 selectedImage:{
   width: 300,
   height: 300, 
   resizeMode: 'contain'
 }
});