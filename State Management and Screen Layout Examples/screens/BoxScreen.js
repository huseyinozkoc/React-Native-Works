import React from 'react';
import {Text,View,StyleSheet} from 'react-native';


const BoxScreen = () => {

  return(

        <View style={styles.viewStyle} >  
        
        <Text style={styles.textStyle1}> Child1</Text>
        <Text style={styles.textStyle2}> Child1 </Text>
        <Text style={styles.textStyle3}> Child1 </Text>

        </View>

  );


};


const styles = StyleSheet.create({

    viewStyle: {
        borderWidth:3,
        borderColor:'black',
        //align olan tüm herşey yatayda(horizontal) dizilişleri etkiliyor.
        //alignItems:'center',

        // flexDirection:'row',
        
        //flexdirection standart olarak colums ama eğer bunu row yaparsan
        //alignitem gidişide dikey hale gelir yatay davranışı bırakır.

        height:200,

        //justifyContent  ise alignItem gibi lakin sadece dikeyde çalışır.
        //jusfityContentte flex directionu standarttan değiştirirsen
        // tersine yani yatayda harekete geçmeye başlar
        //justifyContent:'space-between'

        
    },

    textStyle: {
         borderWidth:3,
         borderColor:'red',
         margin:20
         //marginHorizontal ve MarginVertical'ın birleşmiş hali direkt 
         //yukarda margin:20 yazdığımız şey oluyor ikisnin birleşimi yani
    },



    //Üstte bahsedilen alignItems, JustfiyContent, FlexDirection
    //Gibi özellikler Parent Classlarda kullanılır.
    //---------------------------------------------
    //Child classlar için
    //Flex ve alignSelf Kullanılır.



    // Sadece Flex özelliğini kullanırsak
    // Flex Özelliği Boxların Parentları altında ne kadar yer kaplamasını istediğimzile
    //Alakalı Mesela 3 texten 1 tanesine flex verirsek verdiğimiz element
    // Diğer ikisinin normal boyutu dışındaki olan tüm yerleri kaplar
    // Flex 10luk sistemle yönetilir %100 yani
    // Mesela 4 4 2 lik flex verirsen %40 %40 %20 lik yer kaplar bileşenler
    //Hepsine Flex: 1 verirsen hepsi eşit bir şekilde yayılır bunu unutma
    //Ayrıca bu flex  flexDirection:'row' dan etkilenir ve tersien döner


    //-----------------------------------------
    // alignSelfte child classlarının yatayda yerlerini değiştirmek için 
    // sağlanmış bir özelliktir aynı şekilde  flexDirection:'row'dan
    //tersine etkilenir ve parent classında herhangi bir alignitemdan
    //child classlarda tanımlandığı için etkilenmez özelliğini korur.

    textStyle1: {
        borderWidth:3,
        borderColor:'red',
       //flex:4
       // alignSelf:'flex-end'
   },

   textStyle2: {
    borderWidth:3,
    borderColor:'red',
    //flex:4
},

textStyle3: {
    borderWidth:3,
    borderColor:'red',
    //flex:2
},


});

export default BoxScreen;