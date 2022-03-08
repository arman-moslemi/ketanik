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

 const EpisodesList = ({navigation }) => {
  

return (
    <View style={{backgroundColor:'#fff',flex:1}}>




    <View style={styles.customRow}>
        
    
    </View>
    <View style={styles.topBar}>

    <View style={{flex : 2,textAlign:"right"}}>
          <Text style={styles.menuTitle}>سایه و استخوان (30 اپیزود)</Text>
          </View>
    
        
        <View style={{flex :0.5}}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{}}>
            <Icon name={"arrow-back"} color={'#111'} size={30}/>
          </TouchableOpacity>
          </View>
    </View>
  <ScrollView>
  <View style={styles.container}>
    <View style={styles.episodeList}>
       <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center',flex:1}}>
       <View>
            <Icon name={'headset'} color={'#111'} size={40}/>
        </View>
        <View style={{display:'flex',flexDirection:'column',marginRight:responsiveWidth(3)}}>
            <Text style={styles.episodeName}>
                مقدمه
            </Text>
            <Text style={styles.episodeTime}>
                2 دقیقه _3 مگابایت
            </Text>
        </View>
       </View>
      <TouchableOpacity>
      <View style={styles.downloadView}>
           <Icon name={'south'} color={Colors.darkGreen} size={20}/>
       </View>
      </TouchableOpacity>
    </View>
    <View style={styles.episodeList}>
       <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center',flex:1}}>
       <View>
            <Icon name={'headset'} color={'#111'} size={40}/>
        </View>
        <View style={{display:'flex',flexDirection:'column',marginRight:responsiveWidth(3)}}>
            <Text style={styles.episodeName}>
                فصل اول
            </Text>
            <Text style={styles.episodeTime}>
                2 دقیقه _3 مگابایت
            </Text>
        </View>
       </View>
      <TouchableOpacity>
      <View style={styles.downloadView}>
           <Icon name={'south'} color={Colors.darkGreen} size={20}/>
       </View>
      </TouchableOpacity>
    </View>
    <View style={styles.episodeList}>
       <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center',flex:1}}>
       <View>
            <Icon name={'headset'} color={'#111'} size={40}/>
        </View>
        <View style={{display:'flex',flexDirection:'column',marginRight:responsiveWidth(3)}}>
            <Text style={styles.episodeName}>
               فصل دوم
            </Text>
            <Text style={styles.episodeTime}>
                2 دقیقه _3 مگابایت
            </Text>
        </View>
       </View>
      <TouchableOpacity>
      <View style={styles.downloadView}>
           <Icon name={'south'} color={Colors.darkGreen} size={20}/>
       </View>
      </TouchableOpacity>
    </View>
    <View style={styles.episodeList}>
       <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center',flex:1}}>
       <View>
            <Icon name={'headset'} color={'#111'} size={40}/>
        </View>
        <View style={{display:'flex',flexDirection:'column',marginRight:responsiveWidth(3)}}>
            <Text style={styles.episodeName}>
                فصل سوم
            </Text>
            <Text style={styles.episodeTime}>
                2 دقیقه _3 مگابایت
            </Text>
        </View>
       </View>
      <TouchableOpacity>
      <View style={styles.downloadView}>
           <Icon name={'south'} color={Colors.darkGreen} size={20}/>
       </View>
      </TouchableOpacity>
    </View>
    <View style={styles.episodeList}>
       <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center',flex:1}}>
       <View>
            <Icon name={'headset'} color={'#111'} size={40}/>
        </View>
        <View style={{display:'flex',flexDirection:'column',marginRight:responsiveWidth(3)}}>
            <Text style={styles.episodeName}>
               فصل چهارم
            </Text>
            <Text style={styles.episodeTime}>
                2 دقیقه _3 مگابایت
            </Text>
        </View>
       </View>
      <TouchableOpacity>
      <View style={styles.downloadView}>
           <Icon name={'south'} color={Colors.darkGreen} size={20}/>
       </View>
      </TouchableOpacity>
    </View>
    <View style={styles.episodeList}>
       <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center',flex:1}}>
       <View>
            <Icon name={'headset'} color={'#111'} size={40}/>
        </View>
        <View style={{display:'flex',flexDirection:'column',marginRight:responsiveWidth(3)}}>
            <Text style={styles.episodeName}>
                فصل پنجم
            </Text>
            <Text style={styles.episodeTime}>
                2 دقیقه _3 مگابایت
            </Text>
        </View>
       </View>
      <TouchableOpacity>
      <View style={styles.downloadView}>
           <Icon name={'south'} color={Colors.darkGreen} size={20}/>
       </View>
      </TouchableOpacity>
    </View>
    <View style={styles.episodeList}>
       <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center',flex:1}}>
       <View>
            <Icon name={'headset'} color={'#111'} size={40}/>
        </View>
        <View style={{display:'flex',flexDirection:'column',marginRight:responsiveWidth(3)}}>
            <Text style={styles.episodeName}>
                فصل ششم
            </Text>
            <Text style={styles.episodeTime}>
                2 دقیقه _3 مگابایت
            </Text>
        </View>
       </View>
      <TouchableOpacity>
      <View style={styles.downloadView}>
           <Icon name={'south'} color={Colors.darkGreen} size={20}/>
       </View>
      </TouchableOpacity>
    </View>
    <View style={styles.episodeList}>
       <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center',flex:1}}>
       <View>
            <Icon name={'headset'} color={'#111'} size={40}/>
        </View>
        <View style={{display:'flex',flexDirection:'column',marginRight:responsiveWidth(3)}}>
            <Text style={styles.episodeName}>
                فصل هفتم
            </Text>
            <Text style={styles.episodeTime}>
                2 دقیقه _3 مگابایت
            </Text>
        </View>
       </View>
      <TouchableOpacity>
      <View style={styles.downloadView}>
           <Icon name={'south'} color={Colors.darkGreen} size={20}/>
       </View>
      </TouchableOpacity>
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
        marginTop:responsiveHeight(10),
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
  },episodeList:{
      display:'flex',
      flexDirection:'row-reverse',
      alignContent:'center',
      alignItems:'center',
      justifyContent:'space-between',
      borderBottomColor:'#c6c6c6',
      borderBottomWidth:1,
      paddingBottom:responsiveHeight(2),
      paddingTop:responsiveHeight(2)
  },episodeName:{
      ...myFontStyle.episodeName,
      color:Colors.darkGreen,
  },episodeTime:{
    ...myFontStyle.episodeName,
    color:'#929292',
  },downloadView:{
      borderColor:Colors.darkGreen,
      borderWidth:2,
      height:30,
      width:30,
      borderRadius:50,
      display:'flex',
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center',
  }
  });

  export default EpisodesList;

//make this component available to the <app></app>
