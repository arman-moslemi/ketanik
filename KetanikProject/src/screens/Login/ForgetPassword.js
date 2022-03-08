import React, { useState,useEffect } from 'react';
import { myFontStyle } from "@assets/Constance";
import { View, Text , StyleSheet,Image, TouchableOpacity} from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors} from "@assets/Colors";
import {Input} from '@components/Input';
// create a component




 const ForgetPassword = ({navigation }) => {
  

return (
    <View style={{ flex: 1,padding:0,alignItems:'center'}}>
      <Image source={require('@assets/images/login.png')} style={styles.loginImg} />
      <View style={styles.verifyBox}>
        <Text style={styles.verifyTitle}>
           فراموشی رمز عبور
        </Text>
        <Input  placeholder="رمز عبور" inputStyle={{marginTop:responsiveHeight(8)}} />
        <TouchableOpacity style={styles.loginBtn}>
       <Text style={styles.btnText}>ورود</Text>
     </TouchableOpacity>
    

</View>
     
  
  </View>
);
};

const styles = StyleSheet.create({
loginImg:{
  width:responsiveWidth(100),
  resizeMode:'contain',
  marginTop:responsiveHeight(-10)
},loginBtn:{
  backgroundColor:Colors.darkGreen,
  width:responsiveWidth(75),
  marginTop:responsiveHeight(4),
  height:responsiveHeight(8),
  alignContent:'center',
  alignItems:'center',
  paddingTop:responsiveHeight(2.5),
  borderRadius:15,
},btnText:{
  ...myFontStyle.largBold,
  color:'#fff',
},forgetPassBtn:{
  textAlign:'left',
  
  alignSelf:'flex-start',
  paddingLeft:responsiveWidth(3),
  marginTop:responsiveHeight(2),
  marginBottom:responsiveHeight(2),
},forgetPassBtnText:{
  color:'#3495fe',
  ...myFontStyle.largBold,
},verifyTitle:{
  ...myFontStyle.UltraBold,
  color:'#111',
  textAlign:'right',
  borderBottomColor:Colors.darkGreen,
  borderBottomWidth:3,
  width:responsiveWidth(38),
  paddingBottom:10,
},verifyBox:{
  flex:1,
  justifyContent:'flex-start',
  paddingRight:responsiveWidth(15),
  paddingLeft:responsiveWidth(15),
  alignItems:'flex-end'
},guideText:{
  ...myFontStyle.largeRegular,
  color:'#111',
  marginTop:responsiveHeight(2),
},
  });

  export default ForgetPassword;

//make this component available to the <app></app>
