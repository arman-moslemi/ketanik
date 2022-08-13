import React, {useState,useEffect,useContext} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView,FlatList} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { myFontStyle } from "@assets/Constance";


export const truncate = (str, len) => {
  // console.log("truncate", str, str.length, len);
  if (str.length > len && str.length > 0) {
    let new_str = str + " ";
    new_str = str.substr(0, len);
    new_str = str.substr(0, new_str.lastIndexOf(" "));
    new_str = new_str.length > 0 ? new_str : str.substr(0, len);
    return new_str + "...";
  }
  return str;
};

 const Search = ({navigation }) => {

return (
  <View style={styles.container}>
      
      <View style={{display:'flex',flexDirection:'row-reverse',alignContent:'center',alignItems:'center'}}>
      <View style={styles.inputIcon}>
      <Icon name={"search"} color={'#CECECE'} size={30}/>
      <TextInput style={styles.textInputIcon}  placeholder="جستجو کنید ..."/>
      </View>
      <View style={{width:"14%",marginRight:"1%"}}>
        <TouchableOpacity style={[styles.search,shadow]}>
        <Image source={require('@assets/images/searchIcon.png')} style={styles.searchIcon} />

        </TouchableOpacity>
      </View>
  
     
      </View> 
    
      <Image source={require('@assets/images/searchEmpty.png')} style={styles.searchEmpty} />
      <Text style={styles.serachText}>
        هنوز مطلبی جستجو نکرده اید !
      </Text>
      
  </View>
   
);
};
const shadow = {
  shadowColor: Colors.Orange,
  shadowRadius: 100,
  shadowOpacity:10,
  elevation: 10,
  shadowOffset: {
    width: 10,
    height: 6
  }
}
const styles = StyleSheet.create({
  container:{
    alignContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    flex:1,
    display:'flex',
    padding:25,
   
  },    inputIcon:{
    alignItems:'center',
    display:'flex',
    flexDirection:'row-reverse',
    backgroundColor:'#ffffff',
    borderRadius:5,
    width:"83%",
    marginLeft:'1%',
    marginTop:5,
    marginBottom:5,
    marginRight:'auto',
    marginLeft:'auto',
    height:45,
    paddingLeft:responsiveWidth(2),
    borderRadius:50,
    shadowColor:'#00000055',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius:0.5,
    
    elevation: 10,
  },textInputIcon:{
    textAlign:'right',
 ...myFontStyle.mediumRegular,
 width:"100%",
  },search:{
     
    height:45,
    borderRadius:15,
    backgroundColor:'#ffb921',
    justifyContent:'center',    
    
  },searchIcon:{
    width:25,
    height:25,
    resizeMode:'contain',
    alignSelf:'center',
    alignContent:'center',
    alignItems:'center',display:'flex',
  },searchEmpty:{
    width:"80%",
   marginTop:responsiveHeight(-15),
    resizeMode:'contain'
  }
  ,serachText:{
    ...myFontStyle.btnBold,
    color:'#000000',
    marginTop:responsiveHeight(-32),
  }
  });

  export default Search;


