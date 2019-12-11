import React from 'react';
import { View,Text,StyleSheet,FlatList} from 'react-native';

const ListScreen = function() {

const friends = [
    {name:'Hüsen',key:'1'},
    {name:'Hasan',key:'2'},
    {name:'Batuhan',key:'3'},
    {name:'orkun',key:'4'},
    {name:'İrfan',key:'5'},
    {name:'Nahit',key:'6'},
    {name:'Mohsen',key:'7'},
        
];

//FlastList has 2 important prob which are DATA and RENDERITEM
// If you do not determine key of list, when you delete something from list
// That lead to deleting of all list.. Be careful.
//Key must be STRİNG be careful.
//Aynı anda 2 keyin aynı olmasıda hataya yol açacaktır.

return(
 <FlatList 
 //horizontal make our list to order horizontaly
 horizontal
 //That function make horizontal scroll bar invisible.
 showsHorizontalScrollIndicator={false}

 //That is also way to put key value to list 
 // Now our key values are name of the list values.
 //keyExtractor={(friends => friends.name)}
 data={friends}
 renderItem={({item}) => {
//Element contain more object inside of itself first name of item then index of item
// element === {item:{name'Hüsen'},index:0}
//if we just write item inside of the renderItem, that will call just item name

 return (
 <Text style={styles.textStyle}> {item.name}</Text>
// We should call name from renderItem objebt for that reason it is item.name

 );

 }} > </FlatList>
   
); //end of the return

} //end of the function 


const styles = StyleSheet.create({
textStyle: {
    marginVertical:50
}

});


export default ListScreen;