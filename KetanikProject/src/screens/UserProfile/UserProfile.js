import React, { useState,useEffect } from 'react';
import { myFontStyle } from "@assets/Constance";

import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors} from "@assets/Colors";

import { View, Text , StyleSheet,Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
 const UserProfile = ({navigation }) => {
  
 
 
return (
    <View style={{ padding:0,justifyContent:'flex-start',alignContent:'flex-start',alignSelf:'flex-start'}}>
       <Image source={require('@assets/images/userProfileTop.png')} style={styles.topImg}/>
  
     <View style={styles.backView}>
     <TouchableOpacity>
     <Icon name={'west'} size={40} color={'#111'} style={{}}/>
   
     </TouchableOpacity>
      
     </View>
     <Image source={require('@assets/images/profile.jpg')} style={styles.profile2}/>
    <View style={styles.edit}>
      <TouchableOpacity>
      <Icon name={''} size={40} color={'#111'} style={{}}/>
   
      </TouchableOpacity>
    </View>
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
      marginTop:responsiveHeight(-5),
      borderWidth:4,
      borderColor:'#fd9e43',
      padding:5,
    }
  });

  export default UserProfile;

//make this component available to the <app></app>
