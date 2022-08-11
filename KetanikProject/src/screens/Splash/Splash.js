import React, { useState,useEffect } from 'react';
import { myFontStyle } from "@assets/Constance";

import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors} from "@assets/Colors";

import { View, Text , StyleSheet,Image, TouchableOpacity} from 'react-native';
import NetInfo  from "@react-native-community/netinfo";
import AsyncStorage from  '@react-native-async-storage/async-storage';


 const Splash = ({navigation }) => {
  const  mutLogin=async()=> {

    const state = await AsyncStorage.getItem("@user");
  

   
    if(state!=null && state!="" && state!="false"){

    console.log(state)
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }]
 })    }
    else{

      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }]
   })

    }

    // navigation.navigate('Login');

    };
  useEffect(() => {
    //   NetInfo.fetch().then(state => {
    //     console.log("Connection type", state.type);
    //     console.log("Is connected?", state.isConnected);
    //     Alert.alert("","اینترنت را بررسی کنید")
    // });
    const unsubscribe = NetInfo.addEventListener(state => {
    !state.isConnected?
    Alert.alert("","اینترنت را بررسی کنید")
    :
  null
  });
  
  // Unsubscribe
  unsubscribe();
  
   
      setTimeout(() => {
        mutLogin();
     // BadgeAndroid.setBadge(10);
  
      //  ShortcutBadge.setCount(28);
     // navigation.navigate('SliderPage')
     // navigation.push('Signup')
  
      }, 2000)
  
    }, []);
 
return (
    <View style={{ flex: 2,padding:0,alignItems:'center',backgroundColor:'#009959'}}>
      
      <View style={styles.overlay} />
      <Image source={require('@assets/images/LogoWhite.png')} style={styles.logo} />
    <Text style={styles.splashText} >اسم اپلیکیشن</Text>
    {/* <TouchableOpacity style={styles.arrowRightBtn}>
    <Image source={require('@assets/images/right.png')} style={styles.rightImg}/>
    </TouchableOpacity> */}
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
        width:responsiveWidth(70),
       top:responsiveHeight(10),
        resizeMode:'contain',
    } ,splashText:{
        position:'absolute',
        bottom:responsiveHeight(25),
        color:Colors.White,
        ...myFontStyle.SplashText,
        
      }
  });

  export default Splash;

//make this component available to the <app></app>
