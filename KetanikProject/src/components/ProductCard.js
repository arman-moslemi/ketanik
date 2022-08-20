import React , { useState,useEffect } from 'react';
import {Text, TouchableOpacity, View,Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
import { Colors } from '../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { myFontStyle } from '../assets/Constance';

export const truncate = (str, len) => {
  if (str?.length > len && str?.length > 0) {
    let new_str = str + " ";
    new_str = str?.substr(0, len);
    new_str = str.substr(0, new_str.lastIndexOf(" "));
    new_str = new_str.length > 0 ? new_str : str?.substr(0, len);
    return new_str + "...";
  }
  return str;
};
export const ProductCard = (props) => {
  const[alternateImage, setAlternateImage] = useState(true);
  
  return (
 <View style={styles.productCard}>
  <TouchableOpacity style={styles.hBtn}>
    <Image source={require('@assets/images/heart.png')} style={styles.heartBtn}/>
  </TouchableOpacity>
    <Image source={require('@assets/images/p1.png')} style={styles.productCardImg} />
    {/* <View style={{display:'flex',flexDirection:'row-reverse',justifyContent:'flex-start',marginLeft:responsiveWidth(2)}}>
      <Icon name={"star"} color={'#ffb921'} size={15}/>
      <Icon name={"star"} color={'#ffb921'} size={15}/>
      <Icon name={"star"} color={'#ffb921'} size={15}/>
      <Icon name={"star-border"} color={'#000000'} size={15}/>
      <Icon name={"star-border"} color={'#000000'} size={15}/>
      </View> */}
      <Text style={styles.productName}>
      {truncate(props.Name,20)}
      </Text>
      <Text style={styles.productValue}>
      موجودی :{props.Number} {props.Unit}
      </Text>
      <View style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'row-reverse',marginRight:responsiveWidth(2),marginLeft:responsiveWidth(2),marginTop:responsiveHeight(1)}}>
        <View>
        <TouchableOpacity style={[styles.addBtn,shadow]}>
        <Image source={require('@assets/images/add.png')} style={styles.addImg} />
        </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.productPrice}>
            {props.Cost}تومان
            </Text>
            </View>
        </View>
 </View>

  );
};
const shadow = {
  shadowColor: Colors.Orange,
  shadowRadius: 1000,
  shadowOpacity:10,
  elevation: 10,
  shadowOffset: {
    width: 50,
    height: 6
  }
}
const styles = StyleSheet.create({
 productCard:{
position:'relative',
display:'flex',
padding:responsiveWidth(3),
marginTop:responsiveHeight(1),
marginBottom:responsiveHeight(1),
width:responsiveWidth(44),
  // height:160,
  backgroundColor:'#ffffff',
  borderRadius:5,
  margin:responsiveWidth(1),
  shadowColor:'#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  // shadowOpacity: 0.5,
  shadowRadius: 2,
  
  elevation: 10,
 },productCardImg:{
  width:responsiveWidth(20),
  height:responsiveHeight(12),
  marginRight:'auto',marginLeft:'auto',
 },heartBtn:{
  
  width:20,
  height:20,
  resizeMode:'contain',
  
 },hBtn:{
  position:'absolute',
  top:10,
  left:10,
 },productName:{
  ...myFontStyle.productNameText,
  color:'#000000',
  marginLeft:responsiveWidth(2),
  marginRight:responsiveWidth(2),
  marginTop:responsiveHeight(1),
 },productValue:{
  ...myFontStyle.productValueText,
  color:'#000000',
  marginLeft:responsiveWidth(2),
  marginRight:responsiveWidth(2),
  marginTop:responsiveHeight(0.5),
 },addBtn:{
  backgroundColor:'#ffb921',
  height:30,
  width:30,
  borderRadius:5,
  resizeMode:'contain',
  padding:5,
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
 },addImg:{
  width:20,
  height:20,
 },productPrice:{
  ...myFontStyle.productPriceText,
  color:'#000000',
 }
});

