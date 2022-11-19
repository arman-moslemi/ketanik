import React, {useState,useRef,useContext} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Drawer from 'react-native-drawer'
// import DrawerContent from './drewerContent/DrawerContent';
import { myFontStyle } from "@assets/Constance";
import { ThemeContext } from '../../../theme/theme-context';
import AsyncStorage from  '@react-native-async-storage/async-storage';

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

 const EachSelectedNews = ({navigation }) => {
    const {  theme } = useContext(ThemeContext);

return (
    <View style={{backgroundColor:theme.backgroundColor,flex:1}}>




    <View style={styles(theme).customRow}>
        
    
    </View>
    <View style={styles(theme).topBar}>

    <View style={{flex : 2,textAlign:"right"}}>
          <Text style={styles(theme).menuTitle}>تازه های برگزیده</Text>
          </View>
    
        
        <View style={{flex :0.5}}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{}}>
            <Icon name={"arrow-back"} color={'#111'} size={30}/>
          </TouchableOpacity>
          </View>
    </View>
    <View style={styles(theme).container}>
 
    <View style={styles(theme).bookRow}>
    <Image source={require('@assets/images/book1.jpg')} style={styles(theme).bookImg}/>
    <View style={{marginRight:responsiveWidth(3),display:"flex",flexDirection:'column',flex:1}}>
        <Text style={styles(theme).bookTitle}>
        {truncate("صد سال تنهایی",20)}
        </Text>
        <Text style={styles(theme).bookWriter}>
        {truncate("گابریل گارسیا",20)}
        </Text>
        <Text style={styles(theme).bookWriter}>
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
        <View style={styles(theme).headphone}>
        <Icon name={'headset'} color={'#111'} size={22}/>
        </View>
        <View>
            <Text style={styles(theme).price}>
                25.000 sek
            </Text>
        </View>
    </View>
</View>

   </View>
  <ScrollView>
 <View style={styles(theme).container}>
 <View style={styles(theme).episodeList}>
      <Text style={styles(theme).episodeText}>
          جلد
      </Text>
  </View>
  <View style={styles(theme).episodeList}>
      <Text style={styles(theme).episodeText}>
          تحسین های اثر مرکب
      </Text>
  </View>
  <View style={styles(theme).episodeList}>
      <Text style={styles(theme).episodeText}>
          پیام ویژه از آنتونی رابینز
      </Text>
  </View>
  <View style={styles(theme).episodeList}>
      <Text style={styles(theme).episodeText}>
         مقدمه
      </Text>
  </View>
  <View style={styles(theme).episodeList}>
      <Text style={styles(theme).episodeText}>
         فصل اول : اثر مرکب در عمل
      </Text>
  </View>
  <View style={styles(theme).episodeList}>
      <Text style={styles(theme).episodeText}>
          فصل دوم : انتخاب ها
      </Text>
  </View>
  <View style={styles(theme).episodeList}>
      <Text style={styles(theme).episodeText}>
         فصل سوم : عادت ها
      </Text>
  </View>
  <View style={styles(theme).episodeList}>
      <Text style={styles(theme).episodeText}>
          فصل چهارم : تکانش
      </Text>
  </View>
  <View style={styles(theme).episodeList}>
      <Text style={styles(theme).episodeText}>
         فصل پنجم : تاثیرات
      </Text>
  </View>
  <View style={styles(theme).episodeList}>
      <Text style={styles(theme).episodeText}>
          فصل ششم : تاب بخشی
      </Text>
  </View>
  <View style={styles(theme).episodeList}>
      <Text style={styles(theme).episodeText}>
         نتیجه گیری
      </Text>
  </View>
  <View style={styles(theme).episodeList}>
      <Text style={styles(theme).episodeText}>
         ضمیمه ها
      </Text>
  </View>
  <View style={styles(theme).episodeList}>
      <Text style={styles(theme).episodeText}>
         ضمیمه 1 : پرسشنامه ارزیابی قدردانی
      </Text>
  </View>
 </View>
  </ScrollView>
    </View>
);
};

const styles = (theme) => StyleSheet.create({
    container: {
        paddingRight:responsiveWidth(5),
        paddingLeft:responsiveWidth(5),
        paddingBottom:responsiveHeight(2),
        alignItems:"flex-end"
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
    backgroundColor:theme.topRowBack,
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
  },bookRow:{
      display:'flex',
      flexDirection:'row-reverse',
      backgroundColor:Colors.lightGreen,
      height:120,
      width:"100%",
      borderRadius:10,
      marginTop:responsiveHeight(10),
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
      ...myFontStyle.bookTitle,
      color:theme.textTitle,
  },bookWriter:{
    ...myFontStyle.bookWriter,
    color:theme.textTitle,
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
      color:theme.textTitle2,
  },episodeList:{
    borderBottomColor:'#c6c6c6',
    borderBottomWidth:1,
    paddingBottom:responsiveHeight(2),
    paddingTop:responsiveHeight(2),
    width:'100%',
  },episodeText:{
      ...myFontStyle.UltraBold,
      color:theme.textTitle,
  }
  });

  export default EachSelectedNews;

//make this component available to the <app></app>
