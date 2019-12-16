//
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// For Navigation Between Page
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//İmport All Screen Here
import HomeScreen from './screens/HomeScreen';
import ComponentsScreen from './screens/ComponentsScreen';
import  ListScreen from './screens/ListScreen';
import ImageScreen from './screens/ImageScreen';
import CounterScreen from './screens/CounterScreen';
import ColorScreen from './screens/ColorScreen';
import SquareScreen from './screens/SquareScreen';
import TextScreen from './screens/TextScreen';
import BoxScreen from './screens/BoxScreen';
import CameraScreen from './screens/CameraScreen';



//https://babeljs.io/repl/
//This is a JSX code converter into JS 
// JSX is our codes which belong to react native components 
// Ex >> <Text> Hüseyin </Text>
// That is JSX code


// Function For Navigator Between Page
const navigator = createStackNavigator(


  //All Screen and their representatives
  {

    Home: HomeScreen,
    Components : ComponentsScreen,
    List : ListScreen,
    Image : ImageScreen,
    Counter : CounterScreen,
    Color: ColorScreen,
    Square : SquareScreen,
    Text: TextScreen,
    Box: BoxScreen,
    Camera:CameraScreen


  },

  // initialRouteName is first page 
  {
initialRouteName:'Home',
defaultNavigationOptions: {
  title:'Hüsen Baba '
}

  }

);


export default createAppContainer(navigator);


