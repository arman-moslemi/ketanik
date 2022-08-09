import React, {useState,useRef ,useEffect} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView,FlatList,Spinner} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DrawerContent from './DrawerContent';
import Drawer from 'react-native-drawer'
import { myFontStyle } from "@assets/Constance";

// create a component



 const DrawerPage = (props) => {

  return (
    <View style={styles.customRow}>
    <View style={{paddingLeft:0}}>
     <TouchableOpacity onPress={()=>props.drawers.current.open()}>
     <Icon name={"notes"} style={styles.menuIcon} size={responsiveHeight(5)} color={"#fff"}/>

     </TouchableOpacity>
     </View>
    <View style={{flex : 2,textAlign:"right"}}>
      <Text style={styles.menuTitle}>{props.name}</Text>
      </View>
    <View style={{flex :0.5}}>
      <TouchableOpacity onPress={()=>navigation.navigate("FlashCardSearch")} style={styles.searchBTN}>
        <Icon name={"search"} color={"#16B2F5"} size={responsiveHeight(3.5)}/>
      </TouchableOpacity>
      </View>

</View>

  )
}
const styles = StyleSheet.create({
    container: {flex:3,backgroundColor:"#fff"},
    drawerStyles: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    customRow:{
      flexDirection:"row",
        // position:"absolute",
        marginTop:responsiveHeight(3),
        paddingRight:responsiveWidth(10),
        paddingLeft:responsiveWidth(10),
      },
      menuIcon:{
        transform: [{rotateY: '180deg'}]
      }
      ,menuTitle:{
        // fontFamily:"IRANSansBold",
        ...myFontStyle.largBold,
        color:"#fff",
        // fontSize:25,
        marginTop:responsiveHeight(1),
      }

})
export default DrawerPage;
