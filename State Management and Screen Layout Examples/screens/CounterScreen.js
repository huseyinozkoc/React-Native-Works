import React,{useState,useReducer} from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';



const reducer = (state,action) =>  {

  //state count:number
  // action  changeToValue, payload: 1
     
    if(action.type==='increase') {
        return {...state, count:state.count + action.payload};
    }

    if(action.type ==='decrement') {
        return {...state, count:state.count - action.payload};
    }

 }; 


    



const CounterScreen = () => {
 
    const [state,dispatch] = useReducer(reducer,{count:0});
  


return(

    <View>

        <Button title="Increase" 
        onPress={() => {
           dispatch({type:'increase',payload:1})
         

        } }
        />

        <Button title="Decrease"
        onPress={() => {
            dispatch({type:'decrement',payload:1})
            
        }}
        />
        
        <Text>  Current Component: {state.count} </Text> 

         </View>
);


};


const styles = StyleSheet.create({


});


export default CounterScreen;