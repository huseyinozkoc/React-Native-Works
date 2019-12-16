import React, {useState} from 'react';
import {StyleSheet,Text,View,TextInput} from 'react-native';




const TextScreen = () => {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');

    return(

        <View> 
 
         <Text>Enter A Name : </Text>
            <TextInput
             style={styles.input}
             autoCapitalize="none"
             autoCorrect={false} 
             value={name}
             onChangeText={(newValue) => setName(newValue) }

            />

            <Text>My Name İS {name} </Text>

           
 
<Text>Enter Password : </Text>
   <TextInput
    style={styles.input}
    autoCapitalize="none"
    autoCorrect={false} 
    value={password}
    onChangeText={(newValue1) => setPassword(newValue1) }
   />
   
   {password.length <4 ? <Text> Password must be greater than 4 </Text> : null }
  

   </View>



    );
};


const styles = StyleSheet.create({

    input: {
        margin:15,
        borderColor:'black',
        borderWidth:2

    }
});

export default TextScreen;