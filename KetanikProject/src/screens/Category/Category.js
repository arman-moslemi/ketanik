import React, {useState,useRef} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Drawer from 'react-native-drawer'
// import DrawerContent from './drewerContent/DrawerContent';
import { myFontStyle } from "@assets/Constance";

// create a component


// export const truncate = (str, len) => {
//     // console.log("truncate", str, str.length, len);
//     if (str.length > len && str.length > 0) {
//       let new_str = str + " ";
//       new_str = str.substr(0, len);
//       new_str = str.substr(0, new_str.lastIndexOf(" "));
//       new_str = new_str.length > 0 ? new_str : str.substr(0, len);
//       return new_str + "...";
//     }
//     return str;
//   };

 const Category = ({navigation }) => {
  

return (
    <View style={{backgroundColor:'#fff',flex:1}}>

{/* 
    <View style={styles.topBar}>

    <View style={{flex : 2,textAlign:"right"}}>
          <Text style={styles.menuTitle}>دسته بندی</Text>
          </View>
    
        
        <View style={{flex :0.5}}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{}}>
            <Icon name={"arrow-back"} color={'#111'} size={30}/>
          </TouchableOpacity>
          </View>
    </View>
     */}
  <ScrollView>
 <View style={styles.container}>
     <View style={styles.categoryRow}>
         <View style={styles.categoryBox}>
         <Image source={require('@assets/images/book1.jpg')} style={styles.bookImg}/>
   
         </View>
         <View style={styles.categoryBox2}>
         <Image source={require('@assets/images/book2w.jpg')} style={styles.bookImg}/>
   
         </View>
     </View>
 </View>
  </ScrollView>
    </View>
);
};

const styles = StyleSheet.create({
    container: {
        paddingRight:responsiveWidth(5),
        paddingLeft:responsiveWidth(5),
        paddingBottom:responsiveHeight(2),
        alignItems:"flex-end"
    },

    menuTitle:{
...myFontStyle.UltraBold,
      color:Colors.darkGreen,
      zIndex:10000,
    },

    page: {
    flexDirection: 'column',
  },customRow:{
    flex:1, flexDirection:"row",
    position:"absolute",
    top:responsiveHeight(0),
    paddingRight:responsiveWidth(5),
    paddingLeft:responsiveWidth(5),
    backgroundColor:'#fff',
    marginTop:responsiveHeight(-13),
    height : responsiveHeight(25),
    width : '100%',
    transform : [ { scaleX : 1.7 } ],
    borderBottomStartRadius : 800,
    borderBottomEndRadius : 800,
    overflow : 'hidden',
    shadowColor: '#b8b8b8', shadowOpacity: 0.5, shadowRadius: 50,
    elevation:120,
    zIndex:100,
  },
  topBar:{
      display:'flex',
      flexDirection:'row-reverse',
      paddingTop:responsiveHeight(2),
      paddingRight:responsiveWidth(7),
      paddingLeft:responsiveWidth(7),
      zIndex:1000,
  },categoryRow:{
      display:'flex',
      flexDirection:'row-reverse',
      marginTop:100,
      flex:1,
  },categoryBox:{
      height:responsiveHeight(13),
      flex:0.5,
      backgroundColor:'#e43299',
      borderRadius:10,
      marginLeft:5,
      overflow:'hidden',
      display:'flex',
      flexDirection:'row-reverse',
  },categoryBox2:{
    height:responsiveHeight(13),
      flex:0.5,
    backgroundColor:'#e0ad5c',
    borderRadius:10,
    marginLeft:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
  },bookImg:{
      width:50,
      resizeMode:'contain',
      height:responsiveHeight(13),
      marginTop:responsiveHeight(-3),
      transform: [{rotate: '30deg'}],
    //   shadowColor: '#470000',
    //     shadowOffset: {width: 0, height: 1},
    //     shadowOpacity: 0.2,
    //     elevation: 1,
  }
  });

  export default Category;

//make this component available to the <app></app>
