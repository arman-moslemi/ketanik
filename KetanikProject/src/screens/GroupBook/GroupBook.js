import React, {useState,useRef,useEffect} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView,FlatList} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Drawer from 'react-native-drawer'
// import DrawerContent from './drewerContent/DrawerContent';
import { myFontStyle } from "@assets/Constance";
import axios from 'axios';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";

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

 const GroupBook = ({navigation,route }) => {
    const [data,setData]=useState([]);
    useEffect(() => {
  
      mutLogin();
  
  
  }, []);
  const {GroupID,Name} = route?.params ?? {};

    const  mutLogin=async()=> {
      axios.post(apiUrl+'RelatedBook',{GroupID:GroupID})
      .then(function (response) {
        const message = response.data;
        const result = response.data.result;
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
    const keyExtractor = item => {
        return item.BookID;
      };
      const _render = (item) => {
        console.log(item.item.BookName)
        return (
            <View style={styles.bookRow}>
            <Image source={{uri:apiAsset+item.item.Pic}} style={styles.bookImg}/>
            <View style={{marginRight:responsiveWidth(3)}}>
                <Text style={styles.bookTitle}>
                {truncate(item.item.BookName,20)}
               {/* { item.item.BookName} */}
                </Text>
                <Text style={styles.bookWriter}>
                {truncate(item.item.Writer,20)}
                </Text>
                <Text style={styles.bookWriter}>
                {truncate("ناشر :"+item.item.Publisher,30)}
                </Text>
                <View style={{display:'flex',flexDirection:'row-reverse'}}>
                    <Icon name={'star'} size={18} color={'#ffc93d'} style={{marginLeft:2}}/>
                    <Icon name={'star'} size={18} color={'#ffc93d'} style={{marginLeft:2}}/>
                    <Icon name={'star'} size={18} color={'#ffc93d'} style={{marginLeft:2}}/>
                    <Icon name={'star'} size={18} color={'#ffc93d'} style={{marginLeft:2}}/>
                    <Icon name={'star'} size={18} color={'#ffc93d'} style={{marginLeft:2}}/>
                </View>
            </View>
            <View style={{display:"flex",flexDirection:'column',alignContent:'flex-end',justifyContent:'space-between'}}>
                <View style={styles.headphone}>
                <Icon name={'headset'} color={'#111'} size={22}/>
                </View>
                <View>
                    <Text style={styles.price}>
                        {item.item.Cost} یورو
                    </Text>
                </View>
            </View>
        </View>
        );
      };

return (
    <View style={{backgroundColor:'#fff',flex:1}}>




    <View style={styles.customRow}>
        
    
    </View>
    <View style={styles.topBar}>

    <View style={{flex : 2,textAlign:"right"}}>
          <Text style={styles.menuTitle}>{Name}</Text>
          </View>
    
        
        <View style={{flex :0.5}}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{}}>
            <Icon name={"arrow-back"} color={'#111'} size={30}/>
          </TouchableOpacity>
          </View>
    </View>
  <ScrollView>
  <View style={styles.container}>
 

<FlatList

          keyExtractor={keyExtractor}
          data={data}
          renderItem={_render}
          // style={{marginTop:responsiveHeight(7),marginLeft:responsiveWidth(2),marginBottom:responsiveHeight(20)}}
                    // ListFooterComponent={listFooter}
          // onEndReached={fetchNextCharityPage}
        />
<TouchableOpacity style={styles.moreBtn}>
    <Text style={styles.moreText}>
        بیشتر
    </Text>
    <Icon name={'expand-more'} color={'#373635'} size={25}/>
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
        marginTop:responsiveHeight(4),

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
     
  },
  bookRow:{
      display:'flex',
      flexDirection:'row-reverse',
      backgroundColor:Colors.lightGreen,
      height:responsiveHeight(14),
      marginTop:responsiveHeight(4),
      width:"100%",
      borderRadius:10,
      paddingTop:responsiveHeight(0.5),
      paddingBottom:responsiveHeight(0.5),
      paddingLeft:responsiveWidth(0),
      paddingRight:responsiveWidth(3),
  },bookImg:{
      width:100,
      resizeMode:'cover',
      height:120,
      borderRadius:15,
      marginTop:responsiveHeight(-2),
      marginRight:responsiveWidth(3),
  },bookTitle:{
      ...myFontStyle.largBold,
      color:'#111',
  },bookWriter:{
    ...myFontStyle.mediumRegular,
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
  }
  });

  export default GroupBook;

//make this component available to the <app></app>
