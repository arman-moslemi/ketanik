import React, {useState,useContext ,useEffect} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView,FlatList,Spinner} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { myFontStyle } from "@assets/Constance";

// create a component



 const Home = ({navigation }) => {
  
  return (
    <View style={styles.container}>
      <View style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between'}}>
        <TouchableOpacity style={styles.seeProducts}>
        <View style={{display:'flex',flexDirection:'column',alignContent:'center',alignItems:'center'}}>
        <Image source={require('@assets/images/store.png')} style={styles.btnImg} />
        <Text style={styles.btnText}>مشاهده محصولات</Text>
        </View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.iotProducts}>
        <View style={{display:'flex',flexDirection:'column',alignContent:'center',alignItems:'center'}}>
        <Image source={require('@assets/images/Iot.png')} style={styles.btnImg} />
        <Text style={styles.btnText}>کشاورزی هوشمند</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between',marginTop:20}}>
        <TouchableOpacity style={styles.consult1}>
        <View style={{display:'flex',flexDirection:'column',alignContent:'center',alignItems:'center'}}>
        <Image source={require('@assets/images/consulting.png')} style={styles.btnImg} />
        <Text style={styles.btnText}>لیست مشاوران</Text>
        </View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.news}>
        <View style={{display:'flex',flexDirection:'column',alignContent:'center',alignItems:'center'}}>
        <Image source={require('@assets/images/newspaper.png')} style={styles.btnImg} />
        <Text style={styles.btnText}>اخبار و مقالات</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
 



  const styles = StyleSheet.create({
    container:{
      padding:25,
     
    },seeProducts:{
      backgroundColor:'#ffb921',
      height:170,
      width:170,
      borderRadius:10,
      display:'flex',
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center',
      flexDirection:'column',
    },iotProducts:{
      backgroundColor:'#4BA064',
      height:170,
      width:170,
      borderRadius:10,
      display:'flex',
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center',
    },btnImg:{
      width:70,
      resizeMode:"contain",
      marginTop:responsiveHeight(-8),
    },consult1:{
      backgroundColor:'#a20067',
      height:170,
      width:170,
      borderRadius:10,
      display:'flex',
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center',
      flexDirection:'column',
    },news
      :{
        backgroundColor:'#FF6900',
        height:170,
        width:170,
        borderRadius:10,
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        flexDirection:'column',
      },btnText:{
        ...myFontStyle.registerText,
        color:'#ffffff',
        marginTop:responsiveHeight(-10),
      }
    
  });

  export default Home;

//make this component available to the <app></app>
