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
    
      props.name=="صفحه اصلی"?

    <View style={styles.customRow2}>
    <View >
   

        
        <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{        marginTop:responsiveHeight(2)}}>
        <Image source={require('@assets/images/basket.png')} style={styles.basket} />

        </TouchableOpacity>
      
     </View>

    <View style={{textAlign:"right",flexDirection:'row',marginRight:5,marginBottom:5}}>
      <Text style={styles.menuTitle}>{props.name}</Text>
      </View>
    <View >
      <TouchableOpacity onPress={()=>props.drawers.current.open()} style={styles.iconBTN}>
        <Icon name={"notes"} color={"#000"} size={responsiveHeight(3)}/>
      </TouchableOpacity>
      </View>

</View>
:
<View  style={{backgroundColor:'#fff'}}>

    <View style={styles.customRow}>
    <View >
   

 
        
        <TouchableOpacity onPress={()=>props.navigation.goBack()}>
        <Icon name={"arrow-forward-ios"} style={styles.menuIcon} size={responsiveHeight(2)} color={"#000"}/>
   
        </TouchableOpacity>
      
     </View>
     <View style={{flexDirection:'row',alignItems:'center'}}>

    <View style={{textAlign:"right",flexDirection:'row',marginRight:5}}>
      <Text style={styles.menuTitle}>{props.name}</Text>
      </View>
    <View >
      <TouchableOpacity onPress={()=>props.drawers.current.open()} style={styles.iconBTN}>
        <Icon name={"notes"} color={"#000"} size={responsiveHeight(3)}/>
      </TouchableOpacity>
      </View>
     </View>

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
        marginTop:responsiveHeight(1.5),
        paddingRight:responsiveWidth(5),
        paddingLeft:responsiveWidth(5),
        alignItems:'baseline',
        justifyContent:'space-between',
        backgroundColor:"#fff"
      },
    customRow2:{
      flexDirection:"row",
        // position:"absolute",
        marginTop:responsiveHeight(1.5),
        paddingRight:responsiveWidth(5),
        paddingLeft:responsiveWidth(5),
        // alignItems:'baseline',
        justifyContent:'space-between',
        // backgroundColor:"#fff"
      },
      menuIcon:{
        transform: [{rotateY: '180deg'}]
      }
      ,menuTitle:{
        // fontFamily:"IRANSansBold",
        ...myFontStyle.largBold,
        color:"#000",
        // fontSize:25,
        marginTop:responsiveHeight(1),
      },
      iconBTN:{
        marginTop:responsiveHeight(1.2)
      },
      basket:{
width:20,
height:20      }

})
export default DrawerPage;
