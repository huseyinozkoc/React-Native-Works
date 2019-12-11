import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = function() {
    
     return(
          //In this place, we determine random prob from our mind which refer to ImageName
          //Then we use that prob in the ImageDetail Page to write inside of the Text
          //We also created a ImageSource prop for determine source of the our images
          //After the determining we should go child class and assign the prop name and source there.
          // Yukarıdaki çok önemli. Be careful.
        <View> 
            <ImageDetail ImageName="Hüsen" ImageSource={require('../assets/2.jpg')} > </ImageDetail>
            <ImageDetail ImageName="HüsenVefa" ImageSource={require('../assets/1.jpg')}> </ImageDetail>
            <ImageDetail ImageName="HüsenBaba" ImageSource={require('../assets/1.jpg')}> </ImageDetail>
            

        </View>

     );

}

const styles = StyleSheet.create({


});

export default ImageScreen;