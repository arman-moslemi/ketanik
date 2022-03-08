import React, { useState,useEffect } from 'react';
import { myFontStyle } from "@assets/Constance";

import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors} from "@assets/Colors";

import { View, Text , StyleSheet,Image, TouchableOpacity} from 'react-native';


 const Splash = ({navigation }) => {
  
 
 
return (
    <View style={{ flex: 2,padding:0,alignItems:'center'}}>
      <Image source={require('@assets/images/splash.png')} style={styles.splashImg} />
      <View style={styles.overlay} />
      <Image source={require('@assets/images/logo.png')} style={styles.logo} />
    <Text style={styles.splashText} >مرجع دانلود کتاب های صوتی</Text>
    <TouchableOpacity style={styles.arrowRightBtn}>
    <Image source={require('@assets/images/right.png')} style={styles.rightImg}/>
    </TouchableOpacity>
  </View>
);
};

const styles = StyleSheet.create({
    splashImg:{
        resizeMode:'cover',
        height:responsiveHeight(102),
        width:responsiveWidth(100),
    },logo:{
        position:'absolute',
        width:responsiveWidth(80),
       top:responsiveHeight(-15),
        resizeMode:'contain',
    }  ,overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#000000',
        opacity:0.65,
       
      },splashText:{
        position:'absolute',
        bottom:responsiveHeight(25),
        color:Colors.darkGreen,
        ...myFontStyle.UltraBold,
        
      },arrowRightBtn:{
          position:'absolute',
          backgroundColor:Colors.darkGreen,
          height:responsiveHeight(10),
          width:responsiveWidth(20),
          bottom:responsiveHeight(10),
          borderRadius:50,
         alignContent:'center',
         justifyContent:'center',
         alignItems:'center',
         
      },rightImg:{
        width:responsiveWidth(10),
        resizeMode:"contain"
      }
  });

  export default Splash;

//make this component available to the <app></app>
