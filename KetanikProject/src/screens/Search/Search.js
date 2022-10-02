import React, {useState,useEffect,useContext} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView,FlatList} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Drawer from 'react-native-drawer'
// import DrawerContent from './drewerContent/DrawerContent';
import { myFontStyle } from "@assets/Constance";
import { RadioButton } from 'react-native-paper';
import axios from 'axios';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";
import { Input } from '@components/Input';
import { ThemeContext } from '../../../theme/theme-context';
import { getTranslation } from '@i18n/i18n';
import AsyncStorage from  '@react-native-async-storage/async-storage';


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

 const Search = ({navigation }) => {
  const {  theme } = useContext(ThemeContext);
  const [name,setName]=useState("");

   
  const [checked, setChecked] = React.useState('first');

  const keyExtractor = item => {
    return item.BookID;
  };
  const [data,setData]=useState([]);
    useEffect(() => {
  
      mutLogin();
  
  
  }, [name]);

    const  mutLogin=async()=> {
      const lang = await AsyncStorage.getItem("@langs");

    name.length!=0?
      axios.post(apiUrl+'SearchBook',{Search:name},{ headers: {
        lang: lang
      }})
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
      })
:
null
    }
  const _render = (item) => {
    console.log(item.item.BookName)
    return (
      <TouchableOpacity onPress={()=>navigation.navigate("EachBook",{id:item.item.BookID})}  style={styles(theme).bookRow}>
        <Image source={{uri:apiAsset+item.item.Pic}} style={styles(theme).bookImg}/>
        <View style={{marginRight:responsiveWidth(3),width:responsiveWidth(35)}}>
            <Text style={styles(theme).bookTitle}>
            {truncate(item.item.BookName,20)}
           {/* { item.item.BookName} */}
            </Text>
            <Text style={styles(theme).bookWriter}>
            {truncate(item.item.Writer,20)}
            </Text>
            {item.item.Publisher?
            <Text style={styles(theme).bookWriter}>
            {truncate("ناشر :"+item.item.Publisher,30)}
            </Text>
            :null}
            <View style={{display:'flex',flexDirection:'row-reverse'}}>
            {[...new Array(5)].map((index)=>{
                    return(
index+1>item.item.Rate?
<Icon name={'star'} color={Colors.darkGreen} size={15}/>
:
<Icon name={'star'} color={"#fff"} size={15}/>

)
})
}
            </View>
        </View>
        <View style={{display:"flex",flexDirection:'column',alignContent:'flex-end',justifyContent:'flex-end'}}>
            {/* <View style={styles(theme).headphone}>
            <Icon name={'headset'} color={'#111'} size={22}/>
            </View> */}
            <View>
            {
          item.item.SpecialCost?
<>
      <Text style={styles(theme).priceRed}>
      {item.item.SpecialCost} sek
    </Text>
    <Text style={styles(theme).priceStroke}>
    {item.item.Cost} sek
    </Text>
    </>
          :
<Text style={styles(theme).bookName}>
      {item.item.Cost} sek
      </Text>
        }
            </View>
        </View>
    </TouchableOpacity>
    );
  };
return (
    <View style={{backgroundColor:theme.backgroundColor,flex:1}}>

<View style={styles(theme).customRow}>
        
    
    </View>
    <View style={styles(theme).topBar}>

    <View style={{flex : 2,textAlign:"right"}}>
          <Text style={styles(theme).menuTitle}>{getTranslation('جستجو')}</Text>
          </View>
    
        
        <View style={{flex :0.5}}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{}}>
            <Icon name={"arrow-back"} color={'#111'} size={30}/>
          </TouchableOpacity>
          </View>
    </View>
     
  <ScrollView>
 <View style={styles(theme).container}>
 
  <View style={styles(theme).aboutView}>
    <View style={styles(theme).lightGreenBack}>
<View>
  <Icon name={'search'} size={40} color={'#c1c1c1'}/>
</View>
<View>
  <Input onChangeText={(ss)=>setName(ss)} placeholder={getTranslation('جستجو')} inputStyle={styles(theme).searchInput} />
</View>
    </View>
    {/* <View style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'row-reverse',marginTop:responsiveHeight(3),marginBottom:responsiveHeight(3)}}>
      <View>
        <Text style={styles(theme).headText}>
          تاریخچه
        </Text>
      </View>
      <View>
        <TouchableOpacity style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
          <Text style={styles(theme).delText}>پاک کردن</Text>
          <Icon name={'delete'} size={25} color={'#dc3545'}/>
        </TouchableOpacity>
      </View>
    </View> */}
   <ScrollView>
   <FlatList

keyExtractor={keyExtractor}
data={data}
renderItem={_render}
// style={{marginTop:responsiveHeight(7),marginLeft:responsiveWidth(2),marginBottom:responsiveHeight(20)}}
          // ListFooterComponent={listFooter}
// onEndReached={fetchNextCharityPage}
/>
   {/* <View style={{display:'flex',flexDirection:'column'}}>
      
      <View style={styles(theme).searchList}>
        <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
          <TouchableOpacity>
            <Icon name={'clear'} color={'#c1c1c1'} size={20}/>
          </TouchableOpacity>
          <Text style={styles(theme).searchResult}>
            صد سال تنهایی
          </Text>
        </View>
        <View style={{}}>
          <Image source={require('@assets/images/book1.jpg')} style={styles(theme).imageSearch}/>
        </View>
      </View>
      <View style={styles(theme).searchList}>
        <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
          <TouchableOpacity>
            <Icon name={'clear'} color={'#c1c1c1'} size={20}/>
          </TouchableOpacity>
          <Text style={styles(theme).searchResult}>
            صد سال تنهایی
          </Text>
        </View>
        <View style={{}}>
          <Image source={require('@assets/images/book1.jpg')} style={styles(theme).imageSearch}/>
        </View>
      </View>
  
      </View> */}
   </ScrollView>
  </View>

 </View>
  </ScrollView>
    </View>
);
};

const styles = (theme) => StyleSheet.create({
  priceRed:{
    color:'#dc3545',
    ...myFontStyle.normalRegular,
    marginTop:responsiveHeight(0.5),
},priceStroke:{
...myFontStyle.normalRegular,
color:'#111',
textDecorationLine: 'line-through',
marginTop:responsiveHeight(0.5),
marginRight:4,
},
    container: {
        paddingRight:responsiveWidth(3),
        paddingLeft:responsiveWidth(3),
        paddingBottom:responsiveHeight(2),
        alignItems:"flex-end",
        marginTop:responsiveHeight(4),
    },

    menuTitle:{
...myFontStyle.UltraBold,
color:theme.menuTitle,
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
  },lightGreenBack:{
    backgroundColor:theme.cardBack,
    height:responsiveHeight(8),
    padding:10,
    borderRadius:10,
    width:responsiveWidth(90),
    display:'flex',
    flexDirection:'row-reverse',
    marginRight:'auto',
    marginLeft:'auto',
    marginTop:responsiveHeight(7),
    alignItems:'center'
  },aboutView:{
    display:'flex',
    
    alignSelf:'center'
  },searchInput:{
    // ...myFontStyle.normalRegular,
    borderWidth:0,
    // backgroundColor:theme.cardBack
  },headText:{
    ...myFontStyle.textOnImg,
    color:'#1a1a1a',
  },delText:{
    ...myFontStyle.largeRegular,
    color:'#dc3545',
  },searchList:{
    display:'flex',
    flexDirection:'row-reverse',
    paddingBottom:responsiveHeight(1),
    borderBottomColor:'#c1c1c1',
    borderBottomWidth:0.5,
    justifyContent:'space-between',
    paddingTop:responsiveHeight(1),
  },searchResult:{
    ...myFontStyle.largeRegular,
    color:'#111',
    marginRight:responsiveWidth(5),
  },imageSearch:{
    width:responsiveWidth(15),
    borderRadius:5,
    resizeMode:'cover',
    height:responsiveHeight(8),
    
  },bookRow:{
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
  height:responsiveHeight(14.25),
  width:responsiveWidth(28),
    resizeMode:'cover',
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
}
  });

  export default Search;


