import React, { useState,useEffect,useContext  } from 'react';
import { myFontStyle } from "@assets/Constance";
import Modal from "react-native-modal";
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors} from "@assets/Colors";
import { Switch } from 'react-native-paper';
import { View, Text , StyleSheet,Image, TouchableOpacity,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";
import axios from 'axios';
import Spinner from '@components/Spinner';
import AsyncStorage from  '@react-native-async-storage/async-storage';
import { ThemeContext } from '../../../theme/theme-context';
import { getTranslation } from '@i18n/i18n';

 const UserProfile = ({navigation }) => {
  
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [data,setData]=useState([]);
  const [name,setName]=useState();
  const [pic,setPic]=useState();
  const [email,setEmail]=useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [lang, setlang] = useState("فارسی");
  const [refresh, setRefresh] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const changelang=async(langs)=>{
await AsyncStorage.setItem("@langs",langs);
toggleModal();
if(langs=="fa"){
  setlang("فارسی")

}else{

  setlang("English")
}
setRefresh(!refresh)
navigation.reset({
  index: 0,
  routes: [{ name: 'TabBar' }]
})  }

  useEffect(() => {
  
    mutLogin();


}, [refresh]);
const  LogOut=async()=> {
  AsyncStorage.setItem('@user',"")

  navigation.reset({
    index: 0,
    routes: [{ name: 'Login' }]
})

}
  const  mutLogin=async()=> {
    const state = await AsyncStorage.getItem("@user");
    const ss = await AsyncStorage.getItem("@langs");
    if(ss==""||ss==null||ss.length>5){
setlang("فارسی")
    }
    else{
      if(ss=="fa"){
        setlang("فارسی")
      
      }else{
        setlang("English")
      }
    }
      console.log(state)
    axios.post(apiUrl+'OneCustomer',{CustomerID :state})
    .then(function (response) {
      const message = response.data;
      const result = response.data.result;
      console.log(message);

      if(result == "true"){
        setData(response.data.Data)
console.log(response.data.Data)
setName(response.data.Data.Username)
setPic(response.data.Data.Pic)
setEmail(response.data.Data.Email)
        // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                        }else{

      }
    })
    .catch(function (error) {
      console.log(error);
    });


    };
    const { dark, theme, toggle } = useContext(ThemeContext);

return (
    <View style={{ padding:0,justifyContent:'flex-start',alignContent:'flex-start',alignSelf:'flex-start',backgroundColor:theme.backgroundColor}}>
     
     
     <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)} >
 <View style={styles(theme).moreModal}>
 

<TouchableOpacity onPress={()=>changelang("fa")} style={{borderTopWidth:0.5,borderTopColor:'#c1c1c1',display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'row-reverse',paddingTop:responsiveHeight(2),paddingBottom:responsiveHeight(2)}}>
<View>
<Text style={styles(theme).eachBookDetail3}>
فارسی    </Text>
</View>

</TouchableOpacity>
{/* <TouchableOpacity style={{borderTopWidth:0.5,borderTopColor:'#c1c1c1',display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'row-reverse',paddingTop:responsiveHeight(2),paddingBottom:responsiveHeight(2)}}>
<View>
<Text style={styles(theme).eachBookDetail3}>
     ارسال هدیه
    </Text>
</View>
<View>
  <Image source={require('@assets/images/gift.png')} style={styles(theme).miniIcon}/>
</View>
</TouchableOpacity> */}
<TouchableOpacity  onPress={()=>changelang("en")} style={{borderTopWidth:0.5,borderTopColor:'#c1c1c1',display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'row-reverse',paddingTop:responsiveHeight(2),paddingBottom:responsiveHeight(2)}}>
<View>
<Text style={styles(theme).eachBookDetail3}>
English    </Text>
</View>

</TouchableOpacity>

 </View>
 </Modal>
       <Image source={require('@assets/images/userProfileTop.png')} style={styles(theme).topImg}/>
  
     {/* <View style={styles(theme).backView}>
     <TouchableOpacity>
     <Icon name={'west'} size={40} color={'#111'} style={{}}/>
   
     </TouchableOpacity>
      
     </View> */}
     <Image source={pic?{uri:apiAsset+pic}:require('@assets/images/profile.jpg')} style={styles(theme).profile2}/>
    <View style={{padding:15,borderBottomColor:theme.borderB,borderBottomWidth:20}}>

    <View style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
      <Text style={styles(theme).userName}>{name}</Text>
      <Text style={styles(theme).userEmail}>{email}</Text>
    </View>
    <View style={styles(theme).edit}>
      <TouchableOpacity onPress={()=>navigation.navigate("EditProfile")} style={{display:'flex',flexDirection:'row-reverse',alignItems:'center',justifyContent:'flex-end'}}>
      <Icon name={'mode-edit'} size={20} color={'#007bff'} />
      <Text style={styles(theme).btnEdit}>{getTranslation('ویرایش حساب کاربری')}</Text>
      </TouchableOpacity>
    </View>
   
    </View>
  <ScrollView>
  <TouchableOpacity style={styles(theme).editProfileBtn} onPress={()=>navigation.navigate("Wallet")}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        <Image source={require('@assets/images/wallet.png')} style={styles(theme).btnImg2}/>
        <Text style={styles(theme).btnText}>{getTranslation("کیف پول")}</Text>
      </View>
      <View>
        <Icon name={'chevron-left'} size={20} color={theme.textTitle}/>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles(theme).editProfileBtn}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        <Image source={require('@assets/images/takhfif.png')} style={styles(theme).btnImg}/>
        <Text style={styles(theme).btnText}>{getTranslation("بن های تخفیف")}</Text>
      </View>
      <View>
        <Icon name={'chevron-left'} size={20} color={theme.textTitle}/>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate("BookSaved")} style={styles(theme).editProfileBtn}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        <Image source={require('@assets/images/bookmark.png')} style={styles(theme).btnImg}/>
        <Text style={styles(theme).btnText}>{getTranslation("کتاب های نشان شده")}</Text>
      </View>
      <View>
        <Icon name={'chevron-left'} size={20} color={theme.textTitle}/>
      </View>
    </TouchableOpacity>
    {/* <TouchableOpacity style={styles.editProfileBtn}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        <Image source={require('@assets/images/comment.png')} style={styles(theme).btnImg}/>
        <Text style={styles(theme).btnText}>نظرات من</Text>
      </View>
      <View>
        <Icon name={'chevron-left'} size={20} color={theme.textTitle}/>
      </View>
    </TouchableOpacity> */}
    <TouchableOpacity style={styles(theme).editProfileBtn}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        <Image source={require('@assets/images/night.png')} style={styles(theme).btnImg}/>
        <Text style={styles(theme).btnText}>{getTranslation("حالت شب")}</Text>
      </View>
      <View>
      {/* <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={Colors.darkGreen} /> */}
      <Switch 
                 trackColor={{ false: "#767577", true: "#ccc" }}
                 thumbColor={dark ? "#fff" : "#f4f3f4"}
                 onChange={toggle} value = {dark} />
                       </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles(theme).editProfileBtn} onPress={toggleModal}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        <Image source={require('@assets/images/language.png')} style={styles(theme).btnImg}/>
        <Text style={styles(theme).btnText}>{getTranslation("زبان")}</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
      <Text style={styles(theme).btnText}>{lang}</Text>
        <Icon name={'chevron-left'} size={20} color={theme.textTitle}/>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles(theme).editProfileBtn}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        <Image source={require('@assets/images/guide.png')} style={styles(theme).btnImg}/>
        <Text style={styles(theme).btnText}>{getTranslation("راهنمایی و پشتیبانی")}</Text>
      </View>
      <View>
        <Icon name={'chevron-left'} size={20} color={theme.textTitle}/>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles(theme).editProfileBtn} onPress={()=>navigation.navigate("AboutUs")}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        <Image source={require('@assets/images/about.png')} style={styles(theme).btnImg}/>
        <Text style={styles(theme).btnText}>{getTranslation("درباره ما")}</Text>
      </View>
      <View>
        <Icon name={'chevron-left'} size={20} color={theme.textTitle}/>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate("Share")} style={styles(theme).editProfileBtn}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        <Image source={require('@assets/images/friend.png')} style={styles(theme).btnImg}/>
        <Text style={styles(theme).btnText}>{getTranslation("دعوت از دوستان")}</Text>
      </View>
   
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> LogOut()} style={styles(theme).editProfileBtn}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        <Image source={require('@assets/images/exit.png')} style={styles(theme).btnImg}/>
        <Text style={styles(theme).btnText}>{getTranslation("خروج از حساب")}</Text>
      </View>
      
    </TouchableOpacity>
  </ScrollView>
  </View>
);
};

const styles =(theme) => StyleSheet.create({
  topImg:{
        resizeMode:'stretch',
        height:responsiveHeight(16),
        width:responsiveWidth(100),
    }
    ,backView:{
    position:'absolute',
    top:responsiveHeight(2),
    left:responsiveWidth(9),
      display:'flex',
      flex:1,
    },profile2:{
     borderRadius:150,
      height:100,
      width:100,
      resizeMode:'cover',
      marginRight:'auto',
      marginLeft:'auto',
      marginTop:responsiveHeight(-8),
      borderWidth:4,
      borderColor:'#fd9e43',
      padding:5,
    },btnEdit:{
      ...myFontStyle.largeRegular,
      color:'#007bff',
      marginRight:5,
    },edit:{
      marginTop:responsiveHeight(1),
      marginLeft:responsiveWidth(5),
    },userName:{
      ...myFontStyle.bookTitle,
      color:theme.textTitle,
      textAlign:'center',
    },userEmail:{
      ...myFontStyle.bookWriter,
      color:theme.textTitle,
      textAlign:'center',
    },btnImg:{
      width:30,
      height:30,
    },editProfileBtn:{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row-reverse',
      paddingRight:responsiveWidth(5),
      paddingLeft:responsiveWidth(5),
      paddingTop:responsiveHeight(1),
      paddingBottom:responsiveHeight(1),
      borderBottomColor:theme.borderB,
      borderBottomWidth:2,
    },btnText:{
      ...myFontStyle.largeRegular,
      color:theme.textTitle,
      marginRight:responsiveWidth(2),
    },btnImg2:{
      resizeMode:'contain',
      width:25,
      height:35 ,
    },moreModal:{
      // backgroundColor:Colors.lightGreen,
      backgroundColor:Colors.white,
      bottom:0,
      borderRightColor:Colors.darkGreen,
      borderRightWidth:5,
      borderRadius:10,
      padding:responsiveHeight(2),
      display:'flex',
      justifyContent:'flex-start',
    },
  });

  export default UserProfile;

//make this component available to the <app></app>
