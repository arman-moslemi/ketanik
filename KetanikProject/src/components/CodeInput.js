import React, {useRef, useState, useImperativeHandle} from 'react';
import {View,StyleSheet,TextInput} from 'react-native';
import { Colors } from '@assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { myFontStyle } from "@assets/Constance";
export const CodeInput = props => {
  return (
    <View style={{flex:1,justifyContent:'center'}}>
        
    

 

        <TextInput
          style={styles.verifyInput}
          
  
        />
     

     

    </View>
  );
};

const styles = StyleSheet.create({

  verifyInput:{
    width:responsiveWidth(13),
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    borderColor: Colors.borderColor,
    marginLeft:responsiveWidth(2),
    marginRight:responsiveWidth(2),
    textAlign:"center",
  }
});

export default CodeInput;
