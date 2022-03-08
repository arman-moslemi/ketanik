import React, { useState,useEffect } from 'react';
import { myFontStyle } from "@assets/Constance";
import { View, Text , StyleSheet,Image, TouchableOpacity} from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors} from "@assets/Colors";
import {Input} from '@components/Input';
// create a component
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
  
  <Input  placeholder="yasaman@yahoo.com" inputStyle={{marginTop:responsiveHeight(5)}}  />
  <Input  placeholder="رمز عبور" inputStyle={{marginTop:responsiveHeight(2)}} />
  <TouchableOpacity style={styles.forgetPassBtn}>
       <Text style={styles.forgetPassBtnText}>رمز عبور خود را فراموش کرده اید ؟</Text>
     </TouchableOpacity>
  <TouchableOpacity style={styles.loginBtn}>
       <Text style={styles.btnText}>ورود</Text>
     </TouchableOpacity>
  </View>
      
</View>
);

const renderScene = SceneMap({
  signup: FirstRoute,
  login: SecondRoute,
});
 const Login = ({navigation }) => {
  
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'signup', title: 'ثبت نام' },
    { key: 'login', title: 'ورود' },
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
      <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width:responsiveWidth(90) }}
    />
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
  color: "#000",
  ...myFontStyle.mediumBold
},
tabBarText2:{
  color: "#000",
  ...myFontStyle.mediumRegular
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
  paddingTop:responsiveHeight(2.5),
  borderRadius:15,
},btnText:{
  ...myFontStyle.largBold,
  color:'#fff',
},forgetPassBtn:{
  textAlign:'left',
  
  alignSelf:'flex-start',
  paddingLeft:responsiveWidth(3),
  marginTop:responsiveHeight(2),
  marginBottom:responsiveHeight(2),
},forgetPassBtnText:{
  color:'#3495fe',
  ...myFontStyle.largBold,
}
  });

  export default Login;

//make this component available to the <app></app>
