import React, {useState,useEffect,useContext} from 'react';
import {View,Text, TouchableOpacity,Image,ScrollView,TextInput,FlatList} from 'react-native';

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
  const {  theme } = useContext(ThemeContext);

    const [data,setData]=useState([]);
    const [cost,setCost]=useState(0);
    const [discount,setDis]=useState("");
    const [discountID,setDisID]=useState(null);
    const [discountDisable,setDisable]=useState(false);
    useEffect(() => {
  
      mutLogin();
  
  
  }, []);
  const  mutLogin=async()=> {
    const state = await AsyncStorage.getItem("@user");

    
    axios.post(apiUrl+'ShoppingBasketView',{CustomerID:state})
    .then(function (response) {
      const message = response.data;
      const result = response.data.result;
      console.log(message);
    
      if(result == "true"){
          
        setData(response.data.Data)
    var ss=0;
    response.data.Data.map((item)=>{
        ss+=parseInt(item.Cost)
    })
    setCost(ss)
        // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                        }else{
      }
    })
    .catch(function (error) {
      console.log(error);
    })
   
      
          };
  const  mutDel=async(id)=> {

    
    axios.post(apiUrl+'ShoppingBasketDelete',{ShoppingBasketID:id})
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
  const  dis=async()=> {
    const state = await AsyncStorage.getItem("@user");

    console.log(discount);
    console.log(state);
    console.log(cost);

    axios.post(apiUrl+'SetDiscount',{CustomerID:state,CostTotal:cost,Text:discount})
    .then(function (response) {
      const message = response.data;
      const result = response.data.result;
      console.log(message);
    
      if(result == "true"){
          setCost(response.data.Data)
          setDisID(response.data.DiscountData)
          setDisable(true)
        // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                        }else{
    alert(response.data.message)
      }
    })
    .catch(function (error) {
      console.log(error);
    })
   
      
          };
  const  buy=async()=> {
    const state = await AsyncStorage.getItem("@user");

    console.log(discount);
    console.log(state);
    console.log(cost);
    console.log(discountID);

    axios.post(apiUrl+'InsertFactor',{CustomerID:state,Cost:cost,Status:2,DiscountID:discountID})
    .then(function (response) {
      const message = response.data;
      const result = response.data.result;
      console.log(message);
    
      if(result == "true"){
        navigation.navigate("Factor")        // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                        }else{
    alert(response.data.message)
      }
    })
    .catch(function (error) {
      console.log(error);
    })
   
      
          };
        const keyExtractor = item => {
            return item.BookID;
          };
  const _render = (item) => {
    console.log(item.item.BookName)
    return (
        <View style={styles(theme).bookRow}>
        <Image source={{uri:apiAsset+item.item.Pic}} style={styles(theme).bookImg}/>
        <View style={{marginRight:responsiveWidth(3)}}>
            <Text style={styles(theme).bookTitle}>
            {truncate(item.item.BookName,20)}
           {/* { item.item.BookName} */}
            </Text>
            <Text style={styles(theme).bookWriter}>
            {truncate(item.item.Writer,20)}
            </Text>
            <Text style={styles(theme).bookWriter}>
            {truncate("ناشر :"+item.item.Publisher,30)}
            </Text>
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
        <View style={{display:"flex",flexDirection:'column',alignContent:'flex-end',justifyContent:'space-between'}}>
        <TouchableOpacity onPress={()=>mutDel(item.item.ShoppingBasketID)}>
       <Image source={require('@assets/images/delete.png')} style={styles(theme).deleteImg}/>
       </TouchableOpacity>
            <View>
                <Text style={styles(theme).price}>
                    {item.item.Cost} تومان
                </Text>
            </View>
        </View>
    </View>
    );
  };
return (
    <View style={{backgroundColor:theme.backgroundColor,flex:1}}>




    <View style={styles(theme).customRow}>
        
    
    </View>
    <View style={styles(theme).topBar}>

    <View style={{flex : 2,textAlign:"right",display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
          <Text style={styles(theme).menuTitle}>سبد خرید</Text>
          <View style={styles(theme).badget}>
              <Text style={styles(theme).badgetText}>{data.length}</Text>
          </View>
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
<View style={styles(theme).takhfifRow}>
    <View>
        <Image source={require('@assets/images/discount.png')} style={styles(theme).discountImg}/>
    </View>
    <View>
        <Text style={styles(theme).discountText}>
            کد تخفیف : 
        </Text>
    </View>
    <View>
        <TextInput onChangeText={(ee)=>setDis(ee)} placeholder="" style={styles(theme).discountInput} />
    </View>
    <View>
    <TouchableOpacity onPress={()=>dis()} disabled={discountDisable} style={styles(theme).loginBtn}>
       <Text style={styles(theme).btnText}>ثبت</Text>
     </TouchableOpacity>
    </View>
</View>
<TouchableOpacity onPress={()=>{buy()}} style={styles(theme).purchaseBtn}>
       <Text style={styles(theme).purchaseBtnText}>پرداخت | {cost}</Text>
     </TouchableOpacity>
   </View>
  </ScrollView>
    </View>
);
};

const styles = (theme) => StyleSheet.create({
    container: {
        paddingRight:responsiveWidth(3),
        paddingLeft:responsiveWidth(3),
        paddingBottom:responsiveHeight(2),
        alignItems:"flex-end",
        marginTop:responsiveHeight(5),
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
      width:responsiveWidth(90),
      borderRadius:10,
      marginTop:responsiveHeight(4),
      paddingTop:responsiveHeight(0.5),
      paddingBottom:responsiveHeight(0.5),
      paddingLeft:responsiveWidth(1),
      paddingRight:responsiveWidth(4),
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
      ...myFontStyle.largBold,
  },deleteImg:{
      width:responsiveWidth(7),
      resizeMode:'contain',
      height:35,
  },discountImg:{
      width:30,
      height:30,
  },discountText:{
      ...myFontStyle.largBold,
      color:theme.textTitle,
      marginRight:responsiveWidth(2),
  },takhfifRow:{
      display:'flex',
      flexDirection:'row-reverse',
      alignItems:'center',
      marginTop:responsiveHeight(5),
      paddingBottom:responsiveHeight(2),
      paddingHorizontal:responsiveWidth(3),
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
    borderRadius:10,
    display:'flex',
  },btnText:{
    ...myFontStyle.largBold,
    color:'#fff',
  }
  ,purchaseBtn:{
    backgroundColor:Colors.darkGreen,
    width:responsiveWidth(75),
    marginTop:responsiveHeight(2),
    height:responsiveHeight(7),
    alignContent:'center',
    alignItems:'center',
justifyContent:'center',
    borderRadius:10,
    marginRight:'auto',
    marginLeft:'auto',
  },purchaseBtnText:{
    ...myFontStyle.bookTitle,
    color:'#fff',
  }
  });

  export default Cart;

//make this component available to the <app></app>
