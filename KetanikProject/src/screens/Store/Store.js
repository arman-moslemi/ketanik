import React, {useState,useContext ,useEffect} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView,FlatList,Spinner} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ProductCard } from '@components/ProductCard';
import { myFontStyle } from "@assets/Constance";

// create a component



 const Store = ({navigation }) => {
  
  return (
    <View style={styles.container}>
    <ScrollView>
      <View style={{display:'flex',flexDirection:'row-reverse',alignContent:'center',alignItems:'center'}}>
      <View style={styles.inputIcon}>
      <Icon name={"search"} color={'#CECECE'} size={30}/>
      <TextInput style={styles.textInputIcon}  placeholder="جستجو کنید ..."/>
      </View>
      <View style={{width:"14%",marginRight:"1%"}}>
        <TouchableOpacity style={[styles.sort,shadow]}>
        <Image source={require('@assets/images/upDown.png')} style={styles.logo} />

        </TouchableOpacity>
      </View>
      <View style={{width:"14%",marginRight:"1%"}}>
        <TouchableOpacity style={[styles.sort2,shadow2]}>
        <Image source={require('@assets/images/filter.png')} style={styles.logo} />

        </TouchableOpacity>
      </View>
      </View>
     <View style={{display:'flex',flexDirection:'row'}}>
      <View style={{width:'46%',marginRight:'1%',marginLeft:'1%'}}>
        <ProductCard/>
      </View>
      <View style={{width:'46%',marginRight:'1%',marginLeft:'1%'}}>
        <ProductCard/>
      </View>
     </View>
    </ScrollView>
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
const shadow2 = {
  shadowColor: Colors.Green1,
  shadowRadius: 100,
  shadowOpacity:10,
  elevation: 10,
  shadowOffset: {
    width: 10,
    height: 4
  }
}

  const styles = StyleSheet.create({
    container:{
      padding:25,
     
    },
    inputIcon:{
      alignItems:'center',
      display:'flex',
      flexDirection:'row-reverse',
      backgroundColor:'#ffffff',
      borderRadius:5,
      width:"69%",
      marginLeft:'1%',
      marginTop:5,
      marginBottom:5,
      marginRight:'auto',
      marginLeft:'auto',
      height:responsiveHeight(6),
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
    },sort:{
     
      height:responsiveHeight(6),
      borderRadius:15,
      backgroundColor:'#ffb921',
      justifyContent:'center',    
      
    },sort2:{
      borderRadius:15,
      height:responsiveHeight(6),
      backgroundColor:Colors.Green1,
      display:'flex',
      alignContent:'center',
      alignItems:'center',
      justifyContent:'center',
      
  
    },logo:{
      width:20,
      height:20,
      resizeMode:'contain',
      alignSelf:'center',
      alignContent:'center',
      alignItems:'center',display:'flex',
      
    }
    
  });

  export default Store;

//make this component available to the <app></app>
