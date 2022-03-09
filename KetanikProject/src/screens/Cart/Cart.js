import React, {useState,useRef} from 'react';
import {View,Text, TouchableOpacity,Image,ScrollView,TextInput} from 'react-native';

import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import Drawer from 'react-native-drawer'
// import DrawerContent from './drewerContent/DrawerContent';
import { myFontStyle } from "@assets/Constance";

// create a component


export const truncate = (str, len) => {
    // console.log("truncate", str, str.length, len);
    if (str.length > len && str.length > 0) {
      let new_str = str + " ";
      new_str = str.substr(0, len);
      new_str = str.substr(0, new_str.lastIndexOf(" "));
      new_str = new_str.length > 0 ? new_str : str.substr(0, len);
      return new_str + "...";
    }
    return str;
  };

 const Cart = ({navigation }) => {

return (
    <View style={{backgroundColor:'#fff',flex:1}}>




    <View style={styles.customRow}>
        
    
    </View>
    <View style={styles.topBar}>

    <View style={{flex : 2,textAlign:"right",display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
          <Text style={styles.menuTitle}>سبد خرید</Text>
          <View style={styles.badget}>
              <Text style={styles.badgetText}>5</Text>
          </View>
          </View>
    
        
        <View style={{flex :0.5}}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{}}>
            <Icon name={"arrow-back"} color={'#111'} size={30}/>
          </TouchableOpacity>
          </View>
    </View>
  <ScrollView>
  <View style={styles.container}>
  
    <View style={styles.bookRow}>
    <Image source={require('@assets/images/book1.jpg')} style={styles.bookImg}/>
    <View style={{marginRight:responsiveWidth(3),display:"flex",flexDirection:'column',flex:1}}>
        <Text style={styles.bookTitle}>
        {truncate("صد سال تنهایی",20)}
        </Text>
        <Text style={styles.bookWriter}>
        {truncate("گابریل گارسیا",20)}
        </Text>
        <Text style={styles.bookWriter}>
        {truncate("ناشر : انتشارات پندار تابان",30)}
        </Text>
        <View style={{display:'flex',flexDirection:'row-reverse'}}>
            <Icon name={'star'} size={20} color={'#ffc93d'} style={{marginLeft:2}}/>
            <Icon name={'star'} size={20} color={'#ffc93d'} style={{marginLeft:2}}/>
            <Icon name={'star'} size={20} color={'#ffc93d'} style={{marginLeft:2}}/>
            <Icon name={'star'} size={20} color={'#ffc93d'} style={{marginLeft:2}}/>
            <Icon name={'star'} size={20} color={'#ffc93d'} style={{marginLeft:2}}/>
        </View>
    </View>
    <View style={{display:"flex",flexDirection:'column',alignContent:'flex-end',justifyContent:'space-between'}}>
        
    <TouchableOpacity>
       <Image source={require('@assets/images/delete.png')} style={styles.deleteImg}/>
       </TouchableOpacity>
        <View>
            <Text style={styles.price}>
                25.000 تومان
            </Text>
        </View>
    </View>
</View>
<View style={styles.bookRow}>
    <Image source={require('@assets/images/book2.jpg')} style={styles.bookImg}/>
    <View style={{marginRight:responsiveWidth(3),display:"flex",flexDirection:'column',flex:1}}>
    <Text style={styles.bookTitle}>
        {truncate("صد سال تنهایی",20)}
        </Text>
        <Text style={styles.bookWriter}>
        {truncate("گابریل گارسیا",20)}
        </Text>
        <Text style={styles.bookWriter}>
        {truncate("ناشر : انتشارات پندار تابان",30)}
        </Text>
        <View style={{display:'flex',flexDirection:'row-reverse'}}>
            <Icon name={'star'} size={20} color={'#ffc93d'} style={{marginLeft:2}}/>
            <Icon name={'star'} size={20} color={'#ffc93d'} style={{marginLeft:2}}/>
            <Icon name={'star'} size={20} color={'#ffc93d'} style={{marginLeft:2}}/>
            <Icon name={'star'} size={20} color={'#ffc93d'} style={{marginLeft:2}}/>
            <Icon name={'star'} size={20} color={'#ffc93d'} style={{marginLeft:2}}/>
        </View>
    </View>
    <View style={{display:"flex",flexDirection:'column',alignContent:'flex-end',justifyContent:'space-between'}}>
    <TouchableOpacity>
       <Image source={require('@assets/images/delete.png')} style={styles.deleteImg}/>
       </TouchableOpacity>
        <View>
            <Text style={styles.price}>
                25.000 تومان
            </Text>
        </View>
    </View>
</View>
<View style={styles.bookRow}>
    <Image source={require('@assets/images/book3.jpg')} style={styles.bookImg}/>
    <View style={{marginRight:responsiveWidth(3),display:"flex",flexDirection:'column',flex:1}}>
    <Text style={styles.bookTitle}>
        {truncate("صد سال تنهایی",20)}
        </Text>
        <Text style={styles.bookWriter}>
        {truncate("گابریل گارسیا",20)}
        </Text>
        <Text style={styles.bookWriter}>
        {truncate("ناشر : انتشارات پندار تابان",30)}
        </Text>
        <View style={{display:'flex',flexDirection:'row-reverse'}}>
            <Icon name={'star'} size={20} color={'#ffc93d'} style={{marginLeft:2}}/>
            <Icon name={'star'} size={20} color={'#ffc93d'} style={{marginLeft:2}}/>
            <Icon name={'star'} size={20} color={'#ffc93d'} style={{marginLeft:2}}/>
            <Icon name={'star'} size={20} color={'#ffc93d'} style={{marginLeft:2}}/>
            <Icon name={'star'} size={20} color={'#ffc93d'} style={{marginLeft:2}}/>
        </View>
    </View>
    <View style={{display:"flex",flexDirection:'column',alignContent:'flex-end',justifyContent:'space-between'}}>
    <TouchableOpacity>
       <Image source={require('@assets/images/delete.png')} style={styles.deleteImg}/>
       </TouchableOpacity>
        <View>
            <Text style={styles.price}>
                25.000 تومان
            </Text>
        </View>
    </View>
</View>
<View style={styles.takhfifRow}>
    <View>
        <Image source={require('@assets/images/discount.png')} style={styles.discountImg}/>
    </View>
    <View>
        <Text style={styles.discountText}>
            کد تخفیف : 
        </Text>
    </View>
    <View>
        <TextInput placeholder="" style={styles.discountInput} />
    </View>
    <View>
    <TouchableOpacity style={styles.loginBtn}>
       <Text style={styles.btnText}>ثبت</Text>
     </TouchableOpacity>
    </View>
</View>
<TouchableOpacity style={styles.purchaseBtn}>
       <Text style={styles.purchaseBtnText}>پرداخت | 78.000</Text>
     </TouchableOpacity>
   </View>
  </ScrollView>
    </View>
);
};

const styles = StyleSheet.create({
    container: {
        paddingRight:responsiveWidth(5),
        paddingLeft:responsiveWidth(5),
        paddingBottom:responsiveHeight(2),
        alignItems:"flex-end",
        marginTop:responsiveHeight(5),
    },

    menuTitle:{
...myFontStyle.UltraBold,
      color:Colors.darkGreen,
      zIndex:10000,
    },

    page: {
    flexDirection: 'column',
  },customRow:{
    flex:1, flexDirection:"row",
    position:"absolute",
    top:responsiveHeight(0),
    paddingRight:responsiveWidth(5),
    paddingLeft:responsiveWidth(5),
    backgroundColor:'#fff',
    marginTop:responsiveHeight(-13),
    height : responsiveHeight(25),
    width : '100%',
    transform : [ { scaleX : 1.7 } ],
    borderBottomStartRadius : 800,
    borderBottomEndRadius : 800,
    overflow : 'hidden',
    shadowColor: '#b8b8b8', shadowOpacity: 0.5, shadowRadius: 50,
    elevation:120,
    zIndex:100,
  },
  topBar:{
      display:'flex',
      flexDirection:'row-reverse',
      paddingTop:responsiveHeight(2),
      paddingRight:responsiveWidth(7),
      paddingLeft:responsiveWidth(7),
      zIndex:1000,
  },pageTitle:{
      display:'flex',
      flexDirection:'row-reverse',
      marginTop:responsiveHeight(8),
      borderBottomColor:Colors.darkGreen,
      borderBottomWidth:1,
      width:responsiveWidth(35),
      paddingBottom:responsiveHeight(1),
    
  },pageTitleText:{
    color:'#343434',
    ...myFontStyle.largeRegular,
    marginRight:responsiveWidth(2)
  },viewPageTitle:{
      display:"flex",
     
  },bookRow:{
      display:'flex',
      flexDirection:'row-reverse',
      backgroundColor:Colors.lightGreen,
      height:responsiveHeight(15),
      width:"100%",
      borderRadius:10,
      marginTop:responsiveHeight(4),
      paddingTop:responsiveHeight(0.5),
      paddingBottom:responsiveHeight(0.5),
      paddingLeft:responsiveWidth(1),
      paddingRight:responsiveWidth(4),
  },bookImg:{
      width:100,
      resizeMode:'cover',
      height:120,
      borderRadius:15,
      marginTop:responsiveHeight(-2),
      marginRight:responsiveWidth(3),
  },bookTitle:{
      ...myFontStyle.bookWriter2,
      color:'#111',
  },bookWriter:{
    ...myFontStyle.bookWriter3,
    color:'#111',
  },headphone:{
      backgroundColor:'#fff',
      height:35,
      width:35,
      borderRadius:50,
      alignItems:'center',
      alignContent:'center',
      display:'flex',
      justifyContent:'center',
      marginTop:responsiveHeight(1),
  },price:{
      ...myFontStyle.largBold,
      color:Colors.darkGreen,
  },moreBtn:{
      width:'85%',
      backgroundColor:'#dce4e2',
      height:responsiveHeight(6),
      borderRadius:50,
      marginRight:'auto',
      marginLeft:'auto',
      display:'flex',
      flexDirection:'row-reverse',
      justifyContent:'center',
      textAlign:'center',
      alignContent:'center',
      alignItems:'center',
      marginTop:responsiveHeight(3),
      marginBottom:responsiveHeight(3)

  },moreText:{
      color:'#373635',
      ...myFontStyle.bookTitle,
  },badget:{
      height:30,
      width:30,
      backgroundColor:'#dc3545',
      borderRadius:50,
      marginRight:responsiveWidth(2),
      display:'flex',
      alignContent:'center',
      alignItems:'center'
  },badgetText:{
      color:'#fff',
      ...myFontStyle.UltraBold,
  },deleteImg:{
      width:responsiveWidth(7),
      resizeMode:'contain',
      height:35,
  },discountImg:{
      width:30,
      height:30,
  },discountText:{
      ...myFontStyle.bookWriter,
      color:'#343434',
      marginRight:responsiveWidth(2),
  },takhfifRow:{
      display:'flex',
      flexDirection:'row-reverse',
      alignItems:'center',
      marginTop:responsiveHeight(5),
      paddingBottom:responsiveHeight(2),
      borderBottomColor:'#e3e3e3',
      borderBottomWidth:1,
  },discountInput:{
      borderColor:Colors.darkGreen,
      borderWidth:1,
      borderRadius:10,
      width:responsiveWidth(38),
      marginRight:responsiveWidth(2),
      height:responsiveHeight(6),
      color:'#111',
  },loginBtn:{
    backgroundColor:Colors.darkGreen,
    width:responsiveWidth(20),
    marginRight:responsiveWidth(2),
    height:responsiveHeight(6),
    alignContent:'center',
    alignItems:'center',
   justifyContent:'center',
    borderRadius:15,
    display:'flex',
  },btnText:{
    ...myFontStyle.largBold,
    color:'#fff',
  }
  ,purchaseBtn:{
    backgroundColor:Colors.darkGreen,
    width:responsiveWidth(75),
    marginTop:responsiveHeight(2),
    height:responsiveHeight(8),
    alignContent:'center',
    alignItems:'center',
    paddingTop:responsiveHeight(2),
    borderRadius:15,
    marginRight:'auto',
    marginLeft:'auto',
  },purchaseBtnText:{
    ...myFontStyle.bookTitle,
    color:'#fff',
  }
  });

  export default Cart;

//make this component available to the <app></app>
