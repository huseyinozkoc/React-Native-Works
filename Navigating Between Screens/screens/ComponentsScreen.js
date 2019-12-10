import React from 'react';
import {Text,StyleSheet,View} from 'react-native';



const ComponentsScreen = function() {
 //We can refer JS variables inside of a JSX block by using curly braces
 const greeting='Hi Baba!'  
 const greetingSecond= <Text> Merhaba! </Text>;

    return( 
          <View>
         
          <Text> Deneme </Text>
          <Text> Deneme2  </Text>
          <Text> {greeting} </Text> 
           {greetingSecond}
          </View>

    );
       
};


const styles = StyleSheet.create({
textStyle: {
    fontSize:24,
    backgroundColor:'red'
}

});

export default ComponentsScreen;