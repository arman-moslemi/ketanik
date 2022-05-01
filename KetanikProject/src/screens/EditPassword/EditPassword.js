import React, {useState,useRef} from 'react';
import {View,Text, TouchableOpacity,Image,ScrollView,TextInput} from 'react-native';

import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import Drawer from 'react-native-drawer'
// import DrawerContent from './drewerContent/DrawerContent';
import { myFontStyle } from "@assets/Constance";
import { Input } from '@components/Input';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";
import axios from 'axios';
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

 const EditPassword = ({navigation }) => {
  const [oldPass,setOldPass]=useState("");
  const [newPass,setNewPass]=useState("");
  const [againPass,setAginPass]=useState("");

  const  mutEdit=async()=> {
    const state = await AsyncStorage.getItem("@user");
if(againPass==""|| oldPass==""|| newPass==""){
  alert("همه موارد را وارد نمایید")
}
else if(againPass!=newPass){
  alert("تکرار درست نیست")
}
 else{   console.log(state)
        axios.post(apiUrl+'ChangePassword',{CustomerID :state,OldPassword:oldPass,NewPassword:newPass})
        .then(function (response) {
          const message = response.data;
          const result = response.data.result;
          console.log(message);
    
          if(result == "true"){
            alert("رمز با موفقیت تغییر کرد")

             navigation.navigate("UserProfile")
                            }else{
                              alert("رمز عبور درست نیست")
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    
      }

  }
return (
    <View style={{backgroundColor:'#fff',flex:1}}>




    <View style={styles.customRow}>
        
    
    </View>
    <View style={styles.topBar}>

    <View style={{flex : 2,textAlign:"right",display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
          <Text style={styles.menuTitle}>تغییر رمز عبور</Text>
          
          </View>
    
        
        <View style={{flex :0.5}}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{}}>
            <Icon name={"arrow-back"} color={'#111'} size={30}/>
          </TouchableOpacity>
          </View>
    </View>
  <ScrollView>
  <View style={styles.container}>
  
<View style={styles.takhfifRow}>
  
    <View>
        <Input onChangeText={(ss)=>setOldPass(ss)} placeholder="رمز عبور فعلی" style={styles.discountInput} />
    </View>
    <View>
        <Input onChangeText={(ss)=>setNewPass(ss)} placeholder="رمز عبور جدید" style={styles.discountInput} />
    </View>
    <View>
        <Input onChangeText={(ss)=>setAginPass(ss)} placeholder="تکرار رمز عبور جدید" style={styles.discountInput} />
    </View>
    <View>
   
    </View>
</View>
<View style={styles.btnRow}>
    <View style={styles.btnBox}>
    <TouchableOpacity onPress={()=>mutEdit()} style={styles.purchaseBtn}>
       <Text style={styles.purchaseBtnText}>ذخیره تغییرات</Text>
     </TouchableOpacity>
    </View>
    <View style={styles.btnBox}>
    <TouchableOpacity style={styles.purchaseBtn2}>
       <Text style={styles.purchaseBtnText2}>انصراف</Text>
     </TouchableOpacity>
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
        alignItems:"center",
        marginTop:responsiveHeight(12),
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
  },discountInput:{
      borderColor:'#bbbbbb',
      borderWidth:1,
      borderRadius:10,
      width:responsiveWidth(85),
      marginRight:'auto',
      marginLeft:'auto',
      height:responsiveHeight(7),
      color:'#bbbbbb',
      ...myFontStyle.normalRegular,
    
      padding:10,
      marginBottom:responsiveHeight(3),
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
    flex:0.5,
    width:'100%',
    marginTop:responsiveHeight(2),
    height:responsiveHeight(6),
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    marginLeft:5,
    
  },purchaseBtnText:{
    ...myFontStyle.episodeName,
    color:'#fff',
  },btnRow:{
      flex:1,
      display:'flex',
      flexDirection:'row-reverse',
      width:responsiveWidth(85),
      marginRight:'auto',
      marginLeft:'auto',
  },purchaseBtn2:{
    backgroundColor:'#fff',
    flex:0.5,
    marginTop:responsiveHeight(2),
    height:responsiveHeight(6),
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    marginRight:5,
    borderColor:Colors.darkGreen,
    borderWidth:1,
  },purchaseBtnText2:{
    ...myFontStyle.episodeName,
    color:Colors.darkGreen,
  },btnBox:{
      display:'flex',
      flex:0.5,
  }
  });

  export default EditPassword;

//make this component available to the <app></app>
