import React from 'react';
import  {Text,View,StyleSheet,Image,Button, Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


const CameraScreen = (props) => {

    const ImgPckr = props => {

        const verifyPermissions = async () => {
            const result=await Permissions.askAsync(Permissions.CAMERA,Permissions.CAMERA_ROLL);
          if(result.status !== 'granted') {
             Alert.alert(
            'Insuffienct Permission!',
            'You need to grant camera permissions to use this app',
            [{text:'Okay'}]

             );
             return false;
          }
          return true;
        }
    }
    
     
    const takeImageHandler = async () => {
        const hasPer= await verifyPermissions();
      if(!hasPer) {
          return;
      }


        ImagePicker.launchCameraAsync();
        
        };


    return(
        <View>

      <Button 
      title="Baba"
      onPress={takeImageHandler}
      
      > 

      </Button>
          
        </View> 
    );
}

const styles = StyleSheet.create({
    ImageStyler: {
        marginTop:10,
         width:200,
         height:200
    }
    
    });

export default CameraScreen;