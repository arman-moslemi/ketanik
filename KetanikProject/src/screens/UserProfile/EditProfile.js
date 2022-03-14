import React, { useState,useEffect } from 'react';
import { myFontStyle } from "@assets/Constance";

import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors} from "@assets/Colors";

import { View, Text , StyleSheet,Image, TouchableOpacity,ScrollView,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
 const EditProfile = ({navigation }) => {
  
 
 
return (
    <View style={{ padding:0,justifyContent:'flex-start',alignContent:'flex-start',alignSelf:'flex-start',backgroundColor:'#fff'}}>
       <Image source={require('@assets/images/userProfileTop.png')} style={styles.topImg}/>
  
     <View style={styles.backView}>
     <TouchableOpacity>
     <Icon name={'west'} size={40} color={'#111'} style={{}}/>
   
     </TouchableOpacity>
      
     </View>
     <Image source={require('@assets/images/profile.jpg')} style={styles.profile2}/>
     <TouchableOpacity style={styles.loginBtn}>
       <Text style={styles.btnText}>ویرایش تصویر</Text>
     </TouchableOpacity>
     <View style={{padding:15,borderBottomColor:'#E8EAE6',borderBottomWidth:20,}}>
</View>

 

  <ScrollView>
  <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center',width:responsiveWidth(90),marginRight:'auto',marginLeft:'auto',marginBottom:responsiveHeight(2),marginTop:responsiveHeight(2),justifyContent:'space-between'}}>
  <Text style={styles.inputText}>
نام کاربری
  </Text>
  <TextInput placeholder="نام کاربری" style={styles.discountInput} placeholderTextColor={'#111'} />
</View>
<View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center',width:responsiveWidth(90),marginRight:'auto',marginLeft:'auto',marginBottom:responsiveHeight(2),marginTop:responsiveHeight(2),justifyContent:'space-between'}}>
  <Text style={styles.inputText}>
ایمیل
  </Text>
  <TextInput placeholder="ایمیل" style={styles.discountInput} placeholderTextColor={'#111'} />
</View>
<View style={{padding:15,borderBottomColor:'#E8EAE6',borderBottomWidth:20,}}>
</View>
<Text style={styles.inputText}>
رادیو باتن اینجا قرار میگیرد
  </Text>
  
<View style={{padding:15,borderBottomColor:'#E8EAE6',borderBottomWidth:20,}}>
</View>
<TouchableOpacity style={styles.editProfileBtn}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        
        <Text style={styles.btnText2}>تغییر رمزعبور</Text>
      </View>
      <View>
        <Icon name={'chevron-left'} size={20} color={'#111'}/>
      </View>
    </TouchableOpacity>
    <View style={styles.btnRow}>
    <View style={styles.btnBox}>
    <TouchableOpacity style={styles.purchaseBtn}>
       <Text style={styles.purchaseBtnText}>ذخیره تغییرات</Text>
     </TouchableOpacity>
    </View>
    <View style={styles.btnBox}>
    <TouchableOpacity style={styles.purchaseBtn2}>
       <Text style={styles.purchaseBtnText2}>انصراف</Text>
     </TouchableOpacity>
    </View>
</View>
 
   
  </ScrollView>
  </View>
);
};

const styles = StyleSheet.create({
  topImg:{
        resizeMode:'stretch',
        height:responsiveHeight(16),
        width:responsiveWidth(100),
    }
    ,backView:{
    position:'absolute',
    top:responsiveHeight(2),
    left:responsiveWidth(9),
      display:'flex',
      flex:1,
    },profile2:{
     borderRadius:150,
      height:100,
      width:100,
      resizeMode:'cover',
      marginRight:'auto',
      marginLeft:'auto',
      marginTop:responsiveHeight(-8),
      borderWidth:4,
      borderColor:'#fd9e43',
      padding:5,
    },btnEdit:{
      ...myFontStyle.largeRegular,
      color:'#007bff',
      marginRight:5,
    },edit:{
      marginTop:responsiveHeight(1),
      marginLeft:responsiveWidth(5),
    },userName:{
      ...myFontStyle.bookTitle,
      color:'#111',
      textAlign:'center',
    },userEmail:{
      ...myFontStyle.bookWriter,
      color:'#111',
      textAlign:'center',
    },btnImg:{
      width:40,
      height:40,
    },editProfileBtn:{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row-reverse',
      paddingRight:responsiveWidth(5),
      paddingLeft:responsiveWidth(5),
      paddingTop:responsiveHeight(1),
      paddingBottom:responsiveHeight(1),
      borderBottomColor:'#eaeaea',
      borderBottomWidth:2,
    },btnText:{
      ...myFontStyle.episodeName,
      color:'#111',
      marginRight:responsiveWidth(2),
    },btnImg2:{
      resizeMode:'contain',
      width:35,
      height:40,
    },loginBtn:{
      backgroundColor:Colors.darkGreen,
      width:responsiveWidth(70),
      marginTop:responsiveHeight(4),
      height:responsiveHeight(7),
      alignContent:'center',
      alignItems:'center',
      paddingTop:responsiveHeight(1.5),
      borderRadius:10,
      marginRight:'auto',
      marginLeft:'auto',
    },btnText:{
      ...myFontStyle.UltraBold,
      color:'#fff',
    },discountInput:{
      borderColor:'#bbbbbb',
      borderWidth:1,
      borderRadius:10,
      width:responsiveWidth(60),
      marginRight:'auto',
      marginLeft:'auto',
      height:responsiveHeight(7),
      color:'#111',
      ...myFontStyle.episodeName,
    
      padding:10,
      
  },inputText:{
    color:'#111',
    ...myFontStyle.episodeName,
    width:responsiveWidth(15),
  },editProfileBtn:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row-reverse',
    paddingRight:responsiveWidth(5),
    paddingLeft:responsiveWidth(5),
    paddingTop:responsiveHeight(1),
    paddingBottom:responsiveHeight(1),
   marginTop:responsiveHeight(1),
   marginBottom:responsiveHeight(1),
  },btnText2:{
    ...myFontStyle.episodeName,
    color:'#111',
    marginRight:responsiveWidth(2),
  }
  ,purchaseBtn:{
    backgroundColor:Colors.darkGreen,
    flex:0.5,
    width:'100%',
    marginTop:responsiveHeight(2),
    height:responsiveHeight(6),
    alignContent:'center',
    alignItems:'center',
    paddingTop:responsiveHeight(1),
    borderRadius:10,
    marginLeft:5,
    
  },purchaseBtnText:{
    ...myFontStyle.episodeName,
    color:'#fff',
  },btnRow:{
      flex:1,
      display:'flex',
      flexDirection:'row-reverse',
      width:responsiveWidth(85),
      marginRight:'auto',
      marginLeft:'auto',
  },purchaseBtn2:{
    backgroundColor:'#fff',
    flex:0.5,
    marginTop:responsiveHeight(2),
    height:responsiveHeight(6),
    alignContent:'center',
    alignItems:'center',
    paddingTop:responsiveHeight(1),
    borderRadius:10,
    marginRight:5,
    borderColor:Colors.darkGreen,
    borderWidth:1,
  },purchaseBtnText2:{
    ...myFontStyle.episodeName,
    color:Colors.darkGreen,
  },btnBox:{
      display:'flex',
      flex:0.5,
  }
  });

  export default EditProfile;

//make this component available to the <app></app>
