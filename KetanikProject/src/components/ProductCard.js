import React from 'react';
import {Text, TouchableOpacity, View,Image} from 'react-native';

import { StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
import { Colors } from '../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";


export const ProductCard = props => {
  return (
 <View style={styles.productCard}>

 </View>

  );
};

const styles = StyleSheet.create({
 productCard:{


marginTop:responsiveHeight(1),
marginBottom:responsiveHeight(1),
  height:160,
  backgroundColor:'#ffffff',
  borderRadius:5,
  shadowColor:'#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  // shadowOpacity: 0.5,
  shadowRadius: 2,
  
  elevation: 10,
 }
});

