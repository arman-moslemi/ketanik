import React, { useState,useEffect } from 'react';
import { myFontStyle } from "@assets/Constance";
import { View, Text , StyleSheet,Image, TouchableOpacity} from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors} from "@assets/Colors";
import {Input} from '@components/Input';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";
import axios from 'axios';
import Spinner from '@components/Spinner';


// create a component
const Login = ({navigation }) => {
  const [user,setUser]=useState("");
const [pass,setPass]=useState("");
const [email,setEmail]=useState("");
const [name,setName]=useState("");
const [pass2,setPass2]=useState("");
const [isLoading,setLoading]=useState(false);
const [eror,SetEror]=useState(false);
const [eror2,SetEror2]=useState(false);
const [erorReg,SetErorReg]=useState(false);
const [erorReg2,SetErorReg2]=useState(false);
const [page,setPage]=useState(0);
const keyboardVerticalOffset = responsiveHeight(5)
  const  mutLogin=async()=> {
    setLoading(true);
if(user=="" || pass==""){
    // alert("Please fill input")
    SetEror(true)
    setLoading(false);

}

else{
console.log(545)
console.log(user)
    // if((user=="user1"&&pass=="pass1")||(user=="user2"&&pass=="pass2")){
      // console.log(await  AsyncStorage.getItem("userID") )
    // await  AsyncStorage.setItem("userID",3)
      setLoading(false);
            axios.post(apiUrl + 'Login',{Email:user,Password:pass})
            .then(function (response) {
              // await AsyncStorage.setItem("@user","true")
              const message = response.data.message;
              const result = response.data.result;
              console.log(result);
              console.log(message);
              if(result == "true"){
               console.log(22);
               console.log(response.data.Data);
                // storeData(response.data.CustomerID);
                // AsyncStorage.setItem('@user',response.data.Data[0].CustomerID.toString())
                // AsyncStorage.setItem('@userName',response.data.Data[0].Name.toString())
            //     if(response.data.Data[0].Photo)
            //     {

            //       AsyncStorage.setItem('@userPhoto',response.data.Data[0].Photo?.toString())
            //     }
            //     else{
            //       AsyncStorage.setItem('@userPhoto',"")

            //     }
            //     navigation.reset({
            //       index: 0,
            //       routes: [{ name: 'StackNavigatorsssss' }]
            //  })
            navigation.navigate("TabBar")
                                }else{
                 setLoading(false);
                 SetEror2(true);
              }
            })
            .catch(function (error) {
              console.log(error);
            });

    // }
// else{
//         setLoading(false);
//          SetEror2(true)



// }


}

    };
  const  register=async()=> {
    setLoading(true);
if(email=="" || pass2=="" || name==""){
    // alert("Please fill input")
    SetErorReg(true)
    setLoading(false);

}

else{
console.log(545)
console.log(user)
    // if((user=="user1"&&pass=="pass1")||(user=="user2"&&pass=="pass2")){
      // console.log(await  AsyncStorage.getItem("userID") )
    // await  AsyncStorage.setItem("userID",3)
      setLoading(false);
            axios.post(apiUrl + 'RegisterSMS',{Email:email})
            .then(function (response) {
              // await AsyncStorage.setItem("@user","true")
              const result = response.data.result;
              console.log(result);
              if(result == "true"){
               console.log(22);
               console.log(response.data.Data);
               console.log(response.data.Data.code);
               navigation.navigate("Verify",{email:email,name:name,pass:pass2,code:response.data.Data})
             
                                }
                                else if(result == "duplicate"){
alert("کاربر با این ایمیل وجود دارد")
                                }
                                else{
                 setLoading(false);
                 SetErorReg2(true);
              }
            })
            .catch(function (error) {
              console.log(error);
            });

    // }
// else{
//         setLoading(false);
//          SetEror2(true)



// }


}

    };
   const FirstRoute = () => (
     <View style={{ flex: 1}}>
        <View style={{flex:1,alignItems:'center'}}>
        <Input  placeholder="نام کاربری" inputStyle={{marginTop:responsiveHeight(5)}} />
        <Input  placeholder="yasaman@yahoo.com" inputStyle={{marginTop:responsiveHeight(2)}} />
        <Input  placeholder="رمز عبور" inputStyle={{marginTop:responsiveHeight(2)}} />
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.btnText}>ثبت نام</Text>
        </TouchableOpacity>
        </View>
            
     </View>
   );
   
   const SecondRoute = () => (
     <View style={{ flex: 1}}>
     <View style={{flex:1,alignItems:'center'}}>
     
     <Input onChangeText={(ss)=>setUser(ss)}  placeholder="yasaman@yahoo.com" inputStyle={{marginTop:responsiveHeight(5)}}  />
     <Input onChangeText={(ss)=>setPass(ss)} ErrorText={eror?"لطفا موارد را وارد نمایید":eror2?"نام کاربری یا رمز عبور درست نیست":""}    placeholder="رمز عبور" inputStyle={{marginTop:responsiveHeight(2)}} />
     <TouchableOpacity onPress={()=>navigation.navigate("ForgetPassword")} style={styles.forgetPassBtn}>
          <Text style={styles.forgetPassBtnText}>رمز عبور خود را فراموش کرده اید ؟</Text>
        </TouchableOpacity>
     <TouchableOpacity onPress={()=>mutLogin()} style={styles.loginBtn}>
          <Text style={styles.btnText}>ورود</Text>
        </TouchableOpacity>
     </View>
         
   </View>
   );
   
   const renderScene = SceneMap({
     signup: FirstRoute,
     login: SecondRoute,
   });
  
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'signup', title: 'ثبت نام' },
    { key: 'login', title: 'ورود'},
  ]);
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicatorStyle}
      style={styles.tabBar}
      getLabelText={({route}) => route.title}
      renderLabel={({route, focused, color}) =>
        focused ? (
          <Text style={styles.tabBarText}>{route.title}</Text>
        ) : (
          <Text style={styles.tabBarText2}>{route.title}</Text>
        )
      }
    />
  );
return (
    <View style={{ flex: 1,padding:0,alignItems:'center'}}>
      <Image source={require('@assets/images/login.png')} style={styles.loginImg} />
      <View style={styles.tabViewBox}>
      {/* <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width:responsiveWidth(90) }}
    /> */}
    <View style={styles.viwTab}>
      <TouchableOpacity onPress={()=>setPage(1)} style={page==1?styles.tab:styles.tabINActive}>
        <Text style={styles.tabBarText}>
          ثبت نام
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setPage(0)} style={page==0?styles.tab:styles.tabINActive}>
        <Text style={styles.tabBarText}>
          ورود
        </Text>
      </TouchableOpacity>
          </View>
{
  page==0?
          <View style={{ flex: 1}}>
     <View style={{flex:1,alignItems:'center'}}>
     
     <Input onChangeText={(ss)=>setUser(ss)}  placeholder="yasaman@yahoo.com" inputStyle={{marginTop:responsiveHeight(5)}}  />
     <Input onChangeText={(ss)=>setPass(ss)} ErrorText={eror?"لطفا موارد را وارد نمایید":eror2?"نام کاربری یا رمز عبور درست نیست":""}    placeholder="رمز عبور" inputStyle={{marginTop:responsiveHeight(2)}} />
     <TouchableOpacity onPress={()=>navigation.navigate("ForgetPassword")} style={styles.forgetPassBtn}>
          <Text style={styles.forgetPassBtnText}>رمز عبور خود را فراموش کرده اید ؟</Text>
        </TouchableOpacity>
     <TouchableOpacity onPress={()=>mutLogin()} style={styles.loginBtn}>
          
          {isLoading == true ?
          <Spinner size={50} color={"#fff"} />
        :<Text style={styles.btnText}>ورود</Text>}
        </TouchableOpacity>
     </View>
         
   </View>
  :
  <View style={{ flex: 1}}>
  <View style={{flex:1,alignItems:'center'}}>
  <Input onChangeText={(ss)=>setName(ss)}  placeholder="نام کاربری" inputStyle={{marginTop:responsiveHeight(5)}} />
  <Input onChangeText={(ss)=>setEmail(ss)} placeholder="yasaman@yahoo.com" inputStyle={{marginTop:responsiveHeight(2)}} />
  <Input onChangeText={(ss)=>setPass2(ss)} ErrorText={erorReg?"لطفا موارد را وارد نمایید":erorReg2?"نام کاربری یا رمز عبور درست نیست":""}  placeholder="رمز عبور" inputStyle={{marginTop:responsiveHeight(2)}} />
  {isLoading == true ?
          <Spinner size={50} color={"#fff"} />
        :   
        <TouchableOpacity onPress={()=>register()} style={styles.loginBtn}>
    <Text style={styles.btnText}>ثبت نام</Text>
  </TouchableOpacity>
      }
  </View>
      
</View>
}

      </View>
     
  
  </View>
);
};

const styles = StyleSheet.create({
loginImg:{
  width:responsiveWidth(100),
  resizeMode:'contain',
  marginTop:responsiveHeight(-10)
},
tabBar:{
  backgroundColor:"transparent",
  elevation: 0,
  paddingBottom:responsiveHeight(2),
  borderBottomColor:Colors.borderColor,
  borderBottomWidth:2
},
tabBarText:{
  color: Colors.darkGreen,
  ...myFontStyle.normalBold
},
tabBarText2:{
  color: "#000",
  ...myFontStyle.normalBold
},
indicatorStyle:{
  backgroundColor: Colors.darkGreen,
    marginBottom: responsiveHeight(-0.3),
    marginLeft: responsiveWidth(0),
    
    height:responsiveHeight(0.5),
    borderRadius:5
},tabViewBox:{
  flex:1,
  width:responsiveWidth(80),
  marginTop:responsiveHeight(-4),
},loginBtn:{
  backgroundColor:Colors.darkGreen,
  width:responsiveWidth(75),
  marginTop:responsiveHeight(2),
  height:responsiveHeight(8),
  alignContent:'center',
  alignItems:'center',
  // paddingTop:responsiveHeight(2),
  borderRadius:15,
  justifyContent:'center'
},btnText:{
  ...myFontStyle.textOnImg,
  
  color:'#fff',
},forgetPassBtn:{
  textAlign:'left',
  
  alignSelf:'flex-start',
  paddingLeft:responsiveWidth(3),
  marginTop:responsiveHeight(2),
  marginBottom:responsiveHeight(2),
},forgetPassBtnText:{
  color:'#3495fe',
  ...myFontStyle.normalBold,
},
viwTab:{flexDirection:'row',alignItems:'center',justifyContent:"center"},
tab:{borderBottomWidth:1,width:responsiveWidth(40),alignItems:'center',
justifyContent:"center",paddingBottom:responsiveHeight(3)}
 ,
  tabINActive:{borderBottomWidth:1,width:responsiveWidth(40),alignItems:'center',
justifyContent:"center",paddingBottom:responsiveHeight(3),borderBottomColor:"#f1f1f1"}
  }
  );

  export default Login;

//make this component available to the <app></app>
