import React,{useState,useReducer} from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import  ColorCounter from '../components/ColorCounter';


const COLOR_INCREMENT = 35;


const reducer = (state, action) => {

   //state === {red:number, green:number,blue:number};
   //action === {colorToChange:'red' || 'green' || 'blue', amount:15 || -15}

   switch(action.colorToChange) {
      case 'Red':
         /*
         if(state.red + action.amount> 255 || state.red + action.amount<0){
            return state;
         }
     return {...state,red: state.red + action.amount };

     */  //Or we can write like that 

       return state.red + action.amount> 255 || state.red + action.amount<0 
       ? state
       :{...state,red: state.red + action.amount };

      case 'Green':

         return state.green + action.amount> 255 || state.green + action.amount<0 
         ? state
         :{...state,green: state.green + action.amount };

      case 'Blue' : 
      return state.blue + action.amount> 255 || state.blue + action.amount<0 
      ? state
      :{...state,blue: state.blue + action.amount };

      default: 
      return state;
   }

};



const SquareScreen = () => {

const [state,dispatch] = useReducer(reducer,{red:0,green:0,blue:0});
    
  return (
     <View> 
        
        <ColorCounter
         onIncrease={() => dispatch({ colorToChange:'Red', amount:COLOR_INCREMENT}) }
         onDecrease={() => dispatch({ colorToChange:'Red', amount:-1*COLOR_INCREMENT}) }
         color="Red" />


        <ColorCounter
          onIncrease={() =>dispatch({ colorToChange:'Blue', amount:COLOR_INCREMENT})}
          onDecrease={() =>dispatch({ colorToChange:'Blue', amount:-1*COLOR_INCREMENT}) }
           color="Blue" />


        <ColorCounter
        onIncrease={() =>dispatch({ colorToChange:'Green', amount:COLOR_INCREMENT})}
        onDecrease={() =>dispatch({ colorToChange:'Green', amount:-1*COLOR_INCREMENT}) }
        color="Green" />


        <View
        
        style={ {
         height:150,
         width:150,
         backgroundColor:`rgb(${state.red},${state.green},${state.blue})`,       
         alignContent:"center" ,
         left:110,
         marginTop:35,
         

         
         
        }}
        > 
        </View>
        

          
     </View>


  );

};



const styles =StyleSheet.create({

  


});

export default SquareScreen;