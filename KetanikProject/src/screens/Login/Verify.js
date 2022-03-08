import React, { useState,useEffect } from 'react';
import { myFontStyle } from "@assets/Constance";
import { View, Text , StyleSheet,Image, TouchableOpacity,TextInput} from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors} from "@assets/Colors";
import {CodeInput} from '@components/CodeInput';




 const Verify = ({navigation }) => {
  
 
  
return (
    <View style={{ flex: 1,padding:0}}>
      <Image source={require('@assets/images/login.png')} style={styles.loginImg} />
      <View style={styles.verifyBox}>
        <Text style={styles.verifyTitle}>
            دریافت کد تایید
        </Text>
        <Text style={styles.guideText}>
            کدی که برای شما ارسال شده را وارد کنید.
        </Text>
        <View style={styles.inputView}>
          <CodeInput/>
          <CodeInput/>
          <CodeInput/>
          <CodeInput/>
        </View>
        <View style={styles.timerInput}>
          <View style={{paddingRight:15,paddingLeft:15}}>
            <Text style={styles.timerText}>
              00:25 باقی مانده
            </Text>
          </View>
          <View  style={{paddingRight:15,paddingLeft:15,borderRightWidth:1,borderRightColor:Colors.borderColor}}>
            <TouchableOpacity>
              <Text style={styles.getPassText}>
              درخواست رمز جدید
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
  marginTop:responsiveHeight(6),
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
    width:responsiveWidth(31),
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
},inputView:{
  display:'flex',
  flexDirection:'row',
  marginTop:responsiveHeight(4),
},verifyInput:{
  width:20,
  borderWidth:0,
},timerInput:{
  display:'flex',
  flexDirection:'row-reverse',
  justifyContent:'center',
  alignContent:'center',
  textAlign:'center',
  marginRight:'auto',
  marginLeft:'auto',
  marginTop:responsiveHeight(5),

},timerText:{
  ...myFontStyle.largeRegular,
  color:'#111'
},getPassText:{
  ...myFontStyle.largeRegular,
  color:'#3495fe',
}
  });

  export default Verify;

//make this component available to the <app></app>
