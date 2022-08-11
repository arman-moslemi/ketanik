import React, { useState,useEffect } from 'react';
import { myFontStyle } from "@assets/Constance";
import { View, Text , StyleSheet,Image, TouchableOpacity,KeyboardAvoidingView,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors} from "@assets/Colors";
import {Input} from '@components/Input';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";
import axios from 'axios';
import Spinner from '@components/Spinner';
import AsyncStorage from  '@react-native-async-storage/async-storage';
import { Button } from 'react-native-paper';

// create a component
const FogetPassword = ({navigation }) => {
 
  const keyboardVerticalOffset = responsiveHeight(1);
  const [text, setText] = useState('');
  const [mobile,setMobile]=useState()

  const [passwordVisible, setPasswordVisible] = useState(true);
  const login=()=>{
    const axios = require("axios");
    if(!mobile)
    {
        
        alert("موبایل را وارد نمائید")
        
    }
    else{

    axios.post(apiUrl + "Forgetting",{Mobile:mobile})
    .then(function (response) {
      console.log(response.data)
      if (response.data.result == "True") {
        console.log(777)
        console.log(response.data.Data)
        // auth.login(response.data.Data.CustomerID);
        console.log(88)
        navigation.navigate("Verify",{
    Mobile:mobile,
    VerifyCode:response.data.Data
});

        // console.log("auth", auth.isLoggedIn);
        // localStorage.setItem("guest","");
        // history.push("/EditInformation/"+response.data.Data.CustomerID)

    }
    else{
      alert("موبایل با این شماره وجود دارد")

    }})
    .catch(function (error) {
      console.log(777)
      alert(error)

      console.log(error);
    });
  }



  }
  return (
  <View style={{backgroundColor:'#f4f4f4',height:'100%',width:'100%'}}>
    
<KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
    <Image source={require('@assets/images/LogoGreen.png')} style={styles.loginLogo} />
    <View style={styles.greenBack}>
    <Image source={require('@assets/images/LoginBack.png')} style={styles.loginBack} />
    <View style={{position:'absolute',height:'100%',top:responsiveHeight(15),width:'100%'}}>
      <Text style={styles.loginTitle}>
فراموشی رمز عبور      </Text>
      <View style={{position:'absolute',top:responsiveHeight(10),display:'flex',alignContent:'center',alignSelf:'center'}}>
      <View style={styles.inputIcon}>
      <Icon name={"phone-iphone"} color={'#CECECE'} size={30}/>
      <TextInput onChangeText={(ss)=>setMobile(ss)} style={styles.textInputIcon}  placeholder="شماره تلفن همراه"/>
      </View>
     
      <TouchableOpacity onPress={()=>login()} style={styles.yellowBtn}>
        <Text style={styles.yellowBtnTxt}>ثبت</Text>
      </TouchableOpacity>
      <View style={{display:'flex',flexDirection:'row-reverse',textAlign:'center',justifyContent:'center',alignContent:'center',marginTop:responsiveHeight(2)}}>
      <Text style={styles.registerText}>
        حساب کاربری دارید ؟
        </Text>
        <TouchableOpacity onPress={()=>  navigation.navigate("Login")}>
          <Text style={styles.registerText2}>
            وارد شوید
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
    </View>
    </KeyboardAvoidingView>
  </View>
);

    };

 
   





const styles = StyleSheet.create({
  loginLogo:{
    width:responsiveWidth(50),
    resizeMode:'contain',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:responsiveHeight(-10)
  },
  greenBack:{
   
    width:'100%',
    height:responsiveHeight(70),
    marginTop:responsiveHeight(-15),
    
   
  }
  ,loginBack:{
    height:responsiveHeight(80),
    width:'100%',
    resizeMode:'contain'
  },loginTitle:{
    color:Colors.White,
    ...myFontStyle.SplashText,
    textAlign:'center',
    flex:1,
    justifyContent:'center'
  },
  inputIcon:{
    alignItems:'center',
    display:'flex',
    flexDirection:'row-reverse',
    backgroundColor:'#ffffff',
    borderRadius:5,
    width:responsiveWidth(80),
    marginRight:'auto',
    marginLeft:'auto',
    height:responsiveHeight(6),
    paddingLeft:responsiveWidth(2),
  },
  inputIcon2:{
    alignItems:'center',
    display:'flex',
    flexDirection:'row-reverse',
    backgroundColor:'#ffffff',
    borderRadius:5,
    width:responsiveWidth(80),
    marginRight:'auto',
    marginLeft:'auto',
    height:responsiveHeight(6),
    paddingLeft:responsiveWidth(2),
    marginTop:responsiveHeight(3),
    
  },eyeIcon:{
    right:responsiveScreenWidth(2),
    position:'absolute',
  },textInputIcon:{
    textAlign:'right',
    ...myFontStyle.largUltraLight
  },yellowBtn:{
    backgroundColor:Colors.Yellow,
    height:responsiveHeight(6),
    display:'flex',
    alignContent:'center',
    justifyContent:'center',alignItems:'center',
    borderRadius:5,
    marginTop:responsiveHeight(5),
    shadowColor: "#ffd200",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.5,
shadowRadius: 3.84,

elevation: 5,
  },yellowBtnTxt:{
    color:'#ffffff',
  
    ...myFontStyle.btnBold,
  },registerText:{
    color:Colors.White,
    ...myFontStyle.registerText,
  },registerText2:{
    color:Colors.White,
    ...myFontStyle.registerText,
    marginRight:responsiveWidth(2),
    borderBottomColor:'#fff',
    borderBottomWidth:1,
    borderStyle:"dashed",
  }

  }
  );

  export default FogetPassword;

//make this component available to the <app></app>
