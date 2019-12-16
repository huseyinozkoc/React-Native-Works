import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native';


// We can just react to navigation prop also :)
// We do not need to react all props for that reason we can use just single one
// like const HomeScreen = ({navigation}) => {...}
//this means we will just call navigation prop between all props of the HomeScreen.



const HomeScreen = (props) => {

    return(

      <View>
         <Text style={styles.Text}> Hi Hüsen Baba </Text>
         <Button
         //Inside of the homeScreen props, there are a lot of Props of the homeScreen
         //props.navigation.navigate() one of them 
         //If you want to learn all props
         // Use console.log(props)
          onPress={() => props.navigation.navigate('Components')}
          title="Go To Components"> </Button> 

            
            <View style={styles.ButtonStyle}> 
          <Button 
          style={styles.ButtonStyle}
          title="Go to List"
          onPress={()=> props.navigation.navigate('List') }/>
             </View>

             <View style={styles.ButtonStyle}> 
             <Button
             title="Go to Image Screen"
             onPress={()=>props.navigation.navigate('Image')}
             > 
                </Button>
                </View>

              <View style={styles.ButtonStyle}>

               <Button title="Go to Counter Page"
               onPress={() => props.navigation.navigate('Counter')}
               > 

               </Button>

              </View>


              <View style={styles.ButtonStyle}> 
              <Button title="Go to Color Page"
              onPress={()=> props.navigation.navigate('Color') }
              > 
                
                </Button>   
              
              </View>


              <View style={styles.ButtonStyle}> 
              <Button title="Go to Square Screen"
              onPress={()=> props.navigation.navigate('Square') }
              > 
                
                </Button>   
              
              </View>



              <View style={styles.ButtonStyle}> 
              <Button title="Go to Text Screen"
              onPress={()=> props.navigation.navigate('Text') }
              > 
                
                </Button>   
              
              </View>



              <View style={styles.ButtonStyle}> 
              <Button title="Go to Box Screen"
              onPress={()=> props.navigation.navigate('Box') }
              > 
                
                </Button>   
              
              </View>

              <View style={styles.ButtonStyle}> 
              <Button title="Go to Camera Screen"
              onPress={()=> props.navigation.navigate('Camera') }
              > 
                
                </Button>   
              
              </View>


          <TouchableOpacity onPress={()=> props.navigation.navigate('List')}> 
            <Text style={styles.ButtonStyle}> Go To List Demo </Text>
          </TouchableOpacity>


       </View>
    );
    
};

const styles = StyleSheet.create({

  Text: {
      fontSize:50
      
  }, 
  ButtonStyle: {
    marginTop:25
    
  }

});


export default HomeScreen;