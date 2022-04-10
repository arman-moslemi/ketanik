import React, {useState,useRef} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Drawer from 'react-native-drawer'
// import DrawerContent from './drewerContent/DrawerContent';
import { myFontStyle } from "@assets/Constance";

// create a component


// export const truncate = (str, len) => {
//     // console.log("truncate", str, str.length, len);
//     if (str.length > len && str.length > 0) {
//       let new_str = str + " ";
//       new_str = str.substr(0, len);
//       new_str = str.substr(0, new_str.lastIndexOf(" "));
//       new_str = new_str.length > 0 ? new_str : str.substr(0, len);
//       return new_str + "...";
//     }
//     return str;
//   };

 const Category = ({navigation }) => {
  

return (
    <View style={{backgroundColor:'#fff',flex:1}}>

<View style={styles.customRow}>
        
    
        </View>
    <View style={styles.topBar}>

    <View style={{flex : 2,textAlign:"right"}}>
          <Text style={styles.menuTitle}>دسته بندی</Text>
          </View>
    
        
        <View style={{flex :0.5}}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{}}>
            <Icon name={"arrow-back"} color={'#111'} size={30}/>
          </TouchableOpacity>
          </View>
    </View>
     
  <ScrollView>
 <View style={styles.container}>
     <View style={styles.categoryRow}>
         <View style={styles.categoryBox}>
         <Image source={require('@assets/images/book1.jpg')} style={styles.bookImg}/>
          <Text style={styles.cateTitle}>
            کتاب های صوتی
          </Text>
         </View>
         <View style={styles.categoryBox2}>
         <Image source={require('@assets/images/book2.jpg')} style={styles.bookImg}/>
         <Text style={styles.cateTitle}>
            کتاب های رایگان
          </Text>
         </View>
     </View>
     <View style={styles.categoryRow}>
         <View style={styles.categoryBox3}>
         <Image source={require('@assets/images/book1.jpg')} style={styles.bookImg}/>
          <Text style={styles.cateTitle}>
           داستان و رمان
          </Text>
         </View>
         <View style={styles.categoryBox4}>
         <Image source={require('@assets/images/book2.jpg')} style={styles.bookImg}/>
         <Text style={styles.cateTitle}>
            ادبیات
          </Text>
         </View>
     </View>
     <View style={styles.categoryRow}>
         <View style={styles.categoryBox5}>
         <Image source={require('@assets/images/book1.jpg')} style={styles.bookImg}/>
          <Text style={styles.cateTitle}>
            اقتصاد و مدیریت
          </Text>
         </View>
         <View style={styles.categoryBox6}>
         <Image source={require('@assets/images/book2.jpg')} style={styles.bookImg}/>
         <Text style={styles.cateTitle}>
           روانشناسی
          </Text>
         </View>
     </View>
     <View style={styles.categoryRow}>
         <View style={styles.categoryBox7}>
         <Image source={require('@assets/images/book1.jpg')} style={styles.bookImg}/>
          <Text style={styles.cateTitle}>
            کودک و نوجوان
          </Text>
         </View>
         <View style={styles.categoryBox8}>
         <Image source={require('@assets/images/book2.jpg')} style={styles.bookImg}/>
         <Text style={styles.cateTitle}>
            تاریخ،فلسفه خودشناسی و هنر
          </Text>
         </View>
     </View>
     <View style={styles.categoryRow}>
         <View style={styles.categoryBox9}>
         <Image source={require('@assets/images/book1.jpg')} style={styles.bookImg}/>
          <Text style={styles.cateTitle}>
            سیاسی
          </Text>
         </View>
         <View style={styles.categoryBox10}>
         <Image source={require('@assets/images/book2.jpg')} style={styles.bookImg}/>
         <Text style={styles.cateTitle}>
         تاریخ،فلسفه خودشناسی و هنر
          </Text>
         </View>
     </View>
     <View style={styles.categoryRow}>
         <View style={styles.categoryBox11}>
         <Image source={require('@assets/images/book1.jpg')} style={styles.bookImg}/>
          <Text style={styles.cateTitle}>
            استارت اپ
          </Text>
         </View>
         <View style={styles.categoryBox12}>
         <Image source={require('@assets/images/book2.jpg')} style={styles.bookImg}/>
         <Text style={styles.cateTitle}>
            علمی
          </Text>
         </View>
     </View>
     <View style={styles.categoryRow}>
         <View style={styles.categoryBox13}>
         <Image source={require('@assets/images/book1.jpg')} style={styles.bookImg}/>
          <Text style={styles.cateTitle}>
           فانتزی
          </Text>
         </View>
         <View style={styles.categoryBox14}>
         <Image source={require('@assets/images/book2.jpg')} style={styles.bookImg}/>
         <Text style={styles.cateTitle}>
           بیوگرافی
          </Text>
         </View>
     </View>
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
        marginTop:responsiveHeight(7),
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
    shadowColor: '#c1c1c1',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 50,
    elevation: 100,
    zIndex:100,
  },
  topBar:{
      display:'flex',
      flexDirection:'row-reverse',
      paddingTop:responsiveHeight(2),
      paddingRight:responsiveWidth(7),
      paddingLeft:responsiveWidth(7),
      zIndex:1000,
  },categoryRow:{
      display:'flex',
      flexDirection:'row-reverse',
    marginTop:responsiveHeight(1),
    marginBottom:responsiveHeight(1),
      flex:1,
  },categoryBox:{
      height:responsiveHeight(11),
      flex:0.5,
      backgroundColor:'#e43299',
      borderRadius:10,
      marginRight:5,
      overflow:'hidden',
      display:'flex',
      flexDirection:'row-reverse',
      alignContent:'center',
      alignItems:'center',
  },categoryBox2:{
    height:responsiveHeight(11),
      flex:0.5,
    backgroundColor:'#e0ad5c',
    borderRadius:10,
    marginLeft:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },categoryBox3:{
    height:responsiveHeight(11),
      flex:0.5,
    backgroundColor:'#bad259',
    borderRadius:10,
    marginRight:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },categoryBox4:{
    height:responsiveHeight(11),
      flex:0.5,
    backgroundColor:'#e35831',
    borderRadius:10,
    marginLeft:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },
  categoryBox5:{
    height:responsiveHeight(11),
      flex:0.5,
    backgroundColor:'#dfab58',
    borderRadius:10,
    marginRight:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },
  categoryBox6:{
    height:responsiveHeight(11),
      flex:0.5,
    backgroundColor:'#6c6263',
    borderRadius:10,
    marginLeft:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },
  categoryBox7:{
    height:responsiveHeight(11),
      flex:0.5,
    backgroundColor:'#262d5b',
    borderRadius:10,
    marginRight:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },
  categoryBox8:{
    height:responsiveHeight(11),
      flex:0.5,
    backgroundColor:'#b1cfad',
    borderRadius:10,
    marginLeft:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },
  categoryBox9:{
    height:responsiveHeight(11),
      flex:0.5,
    backgroundColor:'#95a8b6',
    borderRadius:10,
    marginRight:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },
  categoryBox10:{
    height:responsiveHeight(11),
      flex:0.5,
    backgroundColor:'#a485ae',
    borderRadius:10,
    marginLeft:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },
  categoryBox11:{
    height:responsiveHeight(11),
      flex:0.5,
    backgroundColor:'#6e6365',
    borderRadius:10,
    marginRight:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },
  categoryBox12:{
    height:responsiveHeight(11),
      flex:0.5,
    backgroundColor:'#e48921',
    borderRadius:10,
    marginLeft:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },
  categoryBox13:{
    height:responsiveHeight(11),
      flex:0.5,
    backgroundColor:'#4f86d6',
    borderRadius:10,
    marginRight:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },
  categoryBox14:{
    height:responsiveHeight(11),
      flex:0.5,
    backgroundColor:'#d91c2e',
    borderRadius:10,
    marginLeft:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },
  bookImg:{
      width:50,
      resizeMode:'contain',
      height:responsiveHeight(13),
      marginTop:responsiveHeight(-5),
      transform: [{rotate: '20deg'}],
   
  },cateTitle:{
    color:'#fff',
    ...myFontStyle.largBold,
    marginRight:responsiveWidth(5),
    width:responsiveWidth(30),
  }
  });

  export default Category;

//make this component available to the <app></app>
