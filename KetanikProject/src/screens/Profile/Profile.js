import React, {useState,useEffect,useContext} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView,FlatList} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from  '@react-native-async-storage/async-storage';

import { myFontStyle } from "@assets/Constance";
import { apiUrl ,apiAsset} from "@commons/inFormTypes";


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

 const Profile = ({navigation }) => {
  const  exit=async()=> {

    await   AsyncStorage.setItem('CustomerID',"")
   navigation.navigate('Login')
     }
     const [name, setName] = useState(false);
     const [family, setFamily] = useState(false);
     const [national, setNational] = useState(false);
     const [mobile, setMobile] = useState(false);
     const GetData=async()=>{
      const axios = require("axios");
    
      const state = await AsyncStorage.getItem("CustomerID");

      axios.post(apiUrl + "ReadCustomer",{CustomerID:state})
          .then(function (response) {
            if (response.data.result == "True") {
              console.log(777)
              console.log(response.data.Data)
              console.log(response.data.Data[0]?.Name)
           setMobile(response.data.Data[0]?.Mobile)
           setName(response.data.Data[0]?.Name)
           setFamily(response.data.Data[0]?.Family)
     

          
  
          }})
          .catch(function (error) {
            console.log(777)
            alert(error)
  
            console.log(error);
          });
    }
     useEffect(() => {
      GetData();
  
    }, []);
return (
  <View style={styles.container}>

 <View style={styles.profileBox}>
 <ScrollView>
  <View style={{display:'flex',alignItems:'center',borderBottomColor:'#BABABA8E',borderBottomWidth:0.5}}>
  <Image source={require('@assets/images/user.png')} resizeMode="contain" style={styles.profile} />
   {/* <TouchableOpacity style={[styles.editBtn,shadow]}>
   <Image source={require('@assets/images/EditImg.png')} style={styles.pencil} />
    </TouchableOpacity>      */}
    <Text style={styles.userName}>
{name} {family}    </Text>
    <Text style={styles.userNumber}>
      {mobile}
    </Text>
    <TouchableOpacity onPress={()=>navigation.navigate("EditProfile")}style={styles.editBtn2}>
    <Image source={require('@assets/images/pencil2.png')} style={styles.pencil2} />
    <Text style={styles.editText}>
      ویرایش حساب کاربری
    </Text>
    </TouchableOpacity>
  </View>
  <TouchableOpacity style={styles.bigBtn} onPress={()=>  navigation.navigate("FavoriteProduct")} >
  <Image source={require('@assets/images/pCart.png')} style={styles.bigBtnImg} />
  <Text style={styles.bigBtnText}>
    محصولات برگزیده
  </Text>
  </TouchableOpacity>
  <TouchableOpacity  style={styles.bigBtn} onPress={()=>  navigation.navigate("BestConsultant")}>
  <Image source={require('@assets/images/pHeadphone.png')} style={styles.bigBtnImg} />
  <Text style={styles.bigBtnText}>
    مشاوران برگزیده
  </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.bigBtn} onPress={()=>  navigation.navigate("FavoriteBlog")}>
  <Image source={require('@assets/images/pNews.png')} style={styles.bigBtnImg} />
  <Text style={styles.bigBtnText}>
    اخبار برگزیده
  </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.bigBtn}>
  <Image source={require('@assets/images/pHistory.png')} style={styles.bigBtnImg} />
  <Text style={styles.bigBtnText}>
    تاریخچه سفارشات
  </Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>navigation.navigate("ChatList")} style={styles.bigBtn}>
  <Image source={require('@assets/images/pHistory.png')} style={styles.bigBtnImg} />
  <Text style={styles.bigBtnText}>
    تاریخچه مشاوره های دریافتی
  </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.bigBtn} onPress={()=>  navigation.navigate("Wallet")}>
  <Image source={require('@assets/images/pWallete.png')} style={styles.bigBtnImg} />
  <Text style={styles.bigBtnText}>
    کیف پول
  </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.bigBtn}>
  <Image source={require('@assets/images/pHeadphone.png')} style={styles.bigBtnImg} />
  <Text style={styles.bigBtnText}>
    مشاوران برگزیده
  </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.bigBtn} onPress={()=>  navigation.navigate("TicketList")}>
  <Image source={require('@assets/images/pTicket.png')} style={styles.bigBtnImg} />
  <Text style={styles.bigBtnText}>
    تیکت ها و پشتیبانی
  </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.bigBtn}>
  <Image source={require('@assets/images/pLanguage.png')} style={styles.bigBtnImg} />
  <Text style={styles.bigBtnText}>
    انتخاب زبان
  </Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>exit()} style={styles.bigBtn}>
  <Image source={require('@assets/images/pExit.png')} style={styles.bigBtnImg} />
  <Text style={styles.bigBtnText}>
    خروج از حساب کاربری
  </Text>
  </TouchableOpacity>

 </ScrollView>
 </View> 
  
      
  </View>
   
);
};
const shadow = {
  shadowColor: Colors.Green1,
  shadowRadius: 100,
  shadowOpacity:10,
  elevation: 10,
  shadowOffset: {
    width: 10,
    height: 4
  }
}
const styles = StyleSheet.create({
  container:{
    alignContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    flex:1,
    display:'flex',
    padding:25,
   
  },profileBox:{
    paddingTop:responsiveHeight(2),
    backgroundColor:'#ffffff',
    width:responsiveWidth(90),
    shadowColor:'#000000',
    shadowRadius: 100,
    shadowOpacity:10,
    elevation: 10,
    shadowOffset: {
      width: 10,
      height: 6
    },
  
  },profile:{
    
    width:responsiveWidth(15),
    height:responsiveHeight(11),

    
  },editBtn:{
    backgroundColor:'#4BA064',
    borderRadius:50,
    height:40,
    width:40,
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    position:'absolute',
    top:60,
    left:130,
  },
  pencil:{
    height:30,
    width:30,
    resizeMode:'contain'
  },userName:{
    ...myFontStyle.registerText,
    color:'#000000',
    marginTop:responsiveHeight(1),
  },userNumber:{
    ...myFontStyle.checkBox2,
    color:'#7B808C',
  },editBtn2:{
    display:'flex',
    flexDirection:'row-reverse',
    alignItems:'center',
    marginBottom:responsiveHeight(1)
  },pencil2:{
    height:25,
    width:23,
    resizeMode:'contain',
    marginLeft:10,
  },editText:{
    ...myFontStyle.checkBox3,
    color:Colors.Green1,
  },bigBtn:{
    width:'100%',
    borderBottomColor:'#BABABA8E',
    borderBottomWidth:0.5,
    display:'flex',
    alignItems:'center',
    flexDirection:'row-reverse',
    paddingRight:responsiveWidth(4),
    paddingLeft:responsiveWidth(4),
    paddingTop:responsiveHeight(1),
    paddingBottom:responsiveHeight(1)
  },bigBtnImg:{
    height:25,
    width:25,
    resizeMode:'contain',
    marginLeft:responsiveWidth(2)

  },bigBtnText:{
    ...myFontStyle.checkBox3,
    color:'#000'
  }
  });

  export default Profile;


