import React from 'react';
import  {Text,View,StyleSheet,Image} from 'react-native';


const ImageDetail = (props) => {

    return(
        <View>

         <Image style={styles.ImageStyler} source={props.ImageSource}/> 
        <Text>{props.ImageName} </Text>

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

export default ImageDetail;