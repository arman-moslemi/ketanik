import React, {useState,useEffect,useContext} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Drawer from 'react-native-drawer'
// import DrawerContent from './drewerContent/DrawerContent';
import { myFontStyle } from "@assets/Constance";
import AsyncStorage from  '@react-native-async-storage/async-storage';
import axios from 'axios';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";
// create a component
import { ThemeContext } from '../../../theme/theme-context';
import TrackPlayer, { usePlaybackState } from "react-native-track-player";
import { getTranslation } from '@i18n/i18n';


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

 const EpisodesList = ({navigation,route }) => {
  const {  theme } = useContext(ThemeContext);
    const [data,setData]=useState([]);
    useEffect(() => {
  
      mutLogin();
  
  
  }, []);
  const {id} = route?.params ?? {};

    const  mutLogin=async()=> {
      await TrackPlayer.destroy()
      const lang = await AsyncStorage.getItem("@langs");

      axios.post(apiUrl+'SubBookShow',{BookID:id},{ headers: {
        lang: lang
      }})
      .then(function (response) {
        const message = response.data;
        const result = response.data.result;
        console.log(777);
        console.log(message);
   
        if(result == "true"){
          setData(response.data.GroupData)
  
          // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                          }else{
  
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  
  
      };

return (
    <View style={{backgroundColor:theme.backgroundColor,flex:1}}>




    <View style={styles(theme).customRow}>
        
    
    </View>
    <View style={styles(theme).topBar}>

    <View style={{flex : 2,textAlign:"right"}}>
          <Text style={styles(theme).menuTitle}>{data[0]?.BookName} ({data.length} {getTranslation('اپیزود')})</Text>
          </View>
    
        
        <View style={{flex :0.5}}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{}}>
            <Icon name={"arrow-back"} color={'#111'} size={30}/>
          </TouchableOpacity>
          </View>
    </View>
  <ScrollView>
  <View style={styles(theme).container}>
      {
          data.map((item,index)=>{
              return(

    <TouchableOpacity onPress={()=>
    // navigation.navigate("ListenBookMain",{id:id,num:index})
    navigation.reset({
      index: 0,
      routes: [{ name: 'ListenBookMain',params:{id:id,num:index} }]
 })
    } style={styles(theme).episodeList}>
       <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center',flex:1}}>
       <View>
            <Icon name={'headset'} color={'#111'} size={40}/>
        </View>
        <View style={{display:'flex',flexDirection:'column',marginRight:responsiveWidth(3)}}>
            <Text style={styles(theme).episodeName}>
                {item.Title}
            </Text>
            <Text style={styles(theme).episodeTime}>
            {item.Time} {getTranslation('دقیقه')} _{item.Size} {getTranslation('مگابایت')}
            </Text>
        </View>
       </View>
      <TouchableOpacity>
      <View style={styles(theme).downloadView}>
           <Icon name={'south'} color={Colors.darkGreen} size={20}/>
       </View>
      </TouchableOpacity>
    </TouchableOpacity>
              )
          })
      }
    
   </View>
  </ScrollView>
    </View>
);
};

const styles =  (theme) => StyleSheet.create({
    container: {
        paddingRight:responsiveWidth(5),
        paddingLeft:responsiveWidth(5),
        paddingBottom:responsiveHeight(2),
        alignItems:"flex-end",
        marginTop:responsiveHeight(10),
    },

    menuTitle:{
...myFontStyle.UltraBold,
      color:theme.textTitle2,
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
      paddingTop:responsiveHeight(5),
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
      color:theme.textTitle2,
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
