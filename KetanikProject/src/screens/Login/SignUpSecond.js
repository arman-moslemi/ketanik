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
import { Button,Checkbox } from 'react-native-paper';


// create a component
const SignUpSecond = ({navigation }) => {
 
  const keyboardVerticalOffset = responsiveHeight(1);
  const [text, setText] = useState('');
  const [checked, setChecked] = React.useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [passwordVisible2, setPasswordVisible2] = useState(true);


  return (
  <View style={{backgroundColor:'#f4f4f4',height:'100%',width:'100%'}}>
    
<KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
    <Image source={require('@assets/images/LogoGreen.png')} style={styles.loginLogo} />
    <View style={styles.greenBack}>
    <Image source={require('@assets/images/LoginBack.png')} style={styles.loginBack} />
    <View style={{position:'absolute',height:'100%',top:responsiveHeight(8),width:'100%'}}>
      <Text style={styles.loginTitle}>
       تکمیل ثبت نام
      </Text>
      <View style={{position:'absolute',top:responsiveHeight(8),display:'flex',alignContent:'center',alignSelf:'center'}}>
      <View style={styles.inputIcon}>
      <Icon name={"person"} color={'#CECECE'} size={30}/>
      <TextInput style={styles.textInputIcon}  placeholder="نام"/>
      </View>
      <View style={styles.inputIcon2}>
      <Icon name={"person"} color={'#CECECE'} size={30}/>
      <TextInput style={styles.textInputIcon}  placeholder="نام خانوادگی"/>
      </View>
      <View style={styles.inputIcon2}>
      <Icon name={"lock"} color={'#CECECE'} size={30} />
      <TextInput style={styles.textInputIcon} secureTextEntry={passwordVisible} placeholder="رمز عبور"/>
      <Icon style={styles.eyeIcon} name={passwordVisible ? "remove-red-eye": "remove-red-eye"} color={'#CECECE'} size={30} onPress={() => setPasswordVisible(!passwordVisible)}/>
      </View>
      <View style={styles.inputIcon2}>
      <Icon name={"lock"} color={'#CECECE'} size={30} />
      <TextInput style={styles.textInputIcon} secureTextEntry={passwordVisible2} placeholder="رمز عبور"/>
      <Icon style={styles.eyeIcon} name={passwordVisible2 ? "remove-red-eye": "remove-red-eye"} color={'#CECECE'} size={30} onPress={() => setPasswordVisible2(!passwordVisible2)}/>
      </View>
      <View style={{display:'flex',flexDirection:'row-reverse',alignContent:'center',alignItems:'center',marginTop:15}}>
          
      <Checkbox
      color={Colors.Yellow
      }
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    <Text style={styles.consult}>ثبت نام به عنوان مشاور</Text>
      </View>
      <TouchableOpacity style={styles.yellowBtn} onPress={()=>  navigation.navigate("Home")}>
        <Text style={styles.yellowBtnTxt}>ایجاد حساب کاربری</Text>
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
    marginTop:responsiveHeight(-20),
    
   
  }
  ,loginBack:{
    height:'100%',
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
    marginTop:responsiveHeight(2),
    
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
    marginTop:responsiveHeight(2),
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
  },consult:{
    ...myFontStyle.checkBox,
    color:'#ffffff',
  }

  }
  );

  export default SignUpSecond;

//make this component available to the <app></app>
