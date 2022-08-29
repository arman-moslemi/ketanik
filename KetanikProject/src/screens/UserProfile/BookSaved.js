import React, {useState,useContext,useEffect} from 'react';
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
import AsyncStorage from  '@react-native-async-storage/async-storage';
import { ThemeContext } from '../../../theme/theme-context';
import { getTranslation } from '@i18n/i18n';

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

 const BookSaved = ({navigation,route }) => {
    const [data,setData]=useState([]);
    const {  theme } = useContext(ThemeContext);

    useEffect(() => {
  
      mutLogin();
  
  
  }, []);
  const  mutDel=async(id)=> {

    const state = await AsyncStorage.getItem("@user");

    axios.post(apiUrl+'SaveBookDelete',{BookID:id,CustomerID:state})
    .then(function (response) {
      const message = response.data;
      const result = response.data.result;
      console.log(message);
    
      if(result == "true"){
mutLogin()    
        // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                        }else{
    
      }
    })
    .catch(function (error) {
      console.log(error);
    })
   
      
          };
    const  mutLogin=async()=> {
      const state = await AsyncStorage.getItem("@user");
      const lang = await AsyncStorage.getItem("@langs");

      axios.post(apiUrl+'SaveBookShow',{CustomerID:state},{ headers: {
        lang: lang
      }})
      .then(function (response) {
        const message = response.data;
        const result = response.data.result;
        console.log(666);
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
          <TouchableOpacity onPress={()=>navigation.navigate("EachBook",{id:item.item.BookID})}  style={styles(theme).bookRow}>
            <Image source={{uri:apiAsset+item.item.Pic}} style={styles(theme).bookImg}/>
            <View style={{marginRight:responsiveWidth(-20)}}>
                <Text style={styles(theme).bookTitle}>
                {truncate(item.item.BookName,20)}
               {/* { item.item.BookName} */}
                </Text>
                <Text style={styles(theme).bookWriter}>
                {truncate(item.item.Writer,20)}
                </Text>
                <Text style={styles(theme).bookWriter}>
                {truncate(getTranslation("ناشر :")+item.item.Publisher,30)}
                </Text>
                <View style={{display:'flex',flexDirection:'row-reverse'}}>
                {[...new Array(5)].map((index)=>{
                        return(
index+1>item.item.Rate?
<Icon name={'star'} color={'#ffb921'} size={15}/>
:
<Icon name={'star'} color={Colors.darkGreen} size={15}/>

)
})
}
                </View>
            </View>
            <View style={{display:"flex",flexDirection:'column',alignContent:'flex-end',justifyContent:'space-between'}}>
                {/* <View style={styles(theme).headphone}>
                <Icon name={'headset'} color={'#111'} size={22}/>
                </View> */}
                  <TouchableOpacity onPress={()=>mutDel(item.item.BookID)}>
       <Image source={require('@assets/images/delete.png')} style={styles(theme).deleteImg}/>
       </TouchableOpacity>
                <View>
                {
          item.item.SpecialCost?
<>
      <Text style={styles(theme).priceRed}>
      {item.item.SpecialCost}sek
    </Text>
    <Text style={styles(theme).priceStroke}>
    {item.item.Cost}sek
    </Text>
    </>
          :
<Text style={styles(theme).bookName}>
      {item.item.Cost}sek
      </Text>
        }
                </View>
            </View>
        </TouchableOpacity>
        );
      };

return (
    <View style={{backgroundColor:'#fff',flex:1}}>




    <View style={styles(theme).customRow}>
        
    
    </View>
    <View style={styles(theme).topBar}>

    <View style={{flex : 2,textAlign:"right"}}>
          <Text style={styles(theme).menuTitle}>{getTranslation('کتاب های ذخیره شده')}</Text>
          </View>
    
        
        <View style={{flex :0.5}}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{}}>
            <Icon name={"arrow-back"} color={'#111'} size={30}/>
          </TouchableOpacity>
          </View>
    </View>
  <ScrollView>
  <View style={styles(theme).container}>
 

<FlatList

          keyExtractor={keyExtractor}
          data={data}
          renderItem={_render}
          // style={{marginTop:responsiveHeight(7),marginLeft:responsiveWidth(2),marginBottom:responsiveHeight(20)}}
                    // ListFooterComponent={listFooter}
          // onEndReached={fetchNextCharityPage}
        />
{/* <TouchableOpacity style={styles(theme).moreBtn}>
    <Text style={styles(theme).moreText}>
        بیشتر
    </Text>
    <Icon name={'expand-more'} color={'#373635'} size={25}/>
</TouchableOpacity> */}
   </View>
  </ScrollView>
    </View>
);
};

const styles = (theme) =>  StyleSheet.create({
  container: {
      paddingRight:responsiveWidth(5),
      paddingLeft:responsiveWidth(5),
      paddingBottom:responsiveHeight(2),
      alignItems:"flex-end",
      marginTop:responsiveHeight(4),

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
  color:theme.textTitle,
  ...myFontStyle.largeRegular,
  marginRight:responsiveWidth(2)
},viewPageTitle:{
    display:"flex",
   
},bookRow:{
    display:'flex',
    flexDirection:'row-reverse',
    justifyContent:'space-between',
    backgroundColor:Colors.lightGreen,
    height:responsiveHeight(14),
    marginTop:responsiveHeight(4),
    width:responsiveWidth(90),
    borderRadius:10,
    paddingTop:responsiveHeight(0.5),
    paddingBottom:responsiveHeight(0.5),
    paddingLeft:responsiveWidth(0),
    paddingRight:responsiveWidth(3),
},bookImg:{
  height:responsiveHeight(14.25),
  width:responsiveWidth(28),
  marginLeft:responsiveWidth(13),

    resizeMode:'cover',
    borderRadius:15,
    marginTop:responsiveHeight(-2),
    marginRight:responsiveWidth(1),
},bookTitle:{
    ...myFontStyle.largBold,
    color:'#111',
    textAlign:'right',
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
,priceRed:{
  color:'#dc3545',
  ...myFontStyle.normalRegular,
  marginTop:responsiveHeight(0.5),
},priceStroke:{
...myFontStyle.normalRegular,
color:'#111',
textDecorationLine: 'line-through',
marginTop:responsiveHeight(0.5),
marginRight:4,
},deleteImg:{
  width:responsiveWidth(7),
  resizeMode:'contain',
  height:35,
},
});

  export default BookSaved;

//make this component available to the <app></app>
