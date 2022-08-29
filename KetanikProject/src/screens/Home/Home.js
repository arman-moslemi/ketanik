import React, {useState,useRef ,useEffect} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView,FlatList,Spinner} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { myFontStyle } from "@assets/Constance";
import DrawerPage from '@components/drawerContent/DrawerPage';
import DrawerContent from '@components/drawerContent/DrawerContent';
import Drawer from 'react-native-drawer'
// create a component



 const Home = ({navigation }) => {
  const drawers = useRef(null);

  return (

  //     <DrawerPage navigation={navigation} Scene={<Draw/>} drawers={drawers}>
  // <Draw/>
  //   </DrawerPage>
  <Drawer
  // type="static"
  type="overlay"
  acceptDoubleTap ={true}
      ref={drawers}
      content={<DrawerContent navigation={navigation}/>}
      tapToClose={true}
      // open={true}
openDrawerOffset={0.4} // 20% gap on the right side of drawer
panCloseMask={0.2}
closedDrawerOffset={-3}
styles={styles.drawerStyles}
tweenHandler={(ratio) => ({
  main: { opacity:(2-ratio)/2 }
})}
      >

<DrawerPage drawers={drawers} name={"صفحه اصلی"} />
<View style={styles.container}>
    <View style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between'}}>
      <TouchableOpacity onPress={()=>navigation.navigate("Store")} style={styles.seeProducts}>
      <View style={{display:'flex',flexDirection:'column',alignContent:'center',alignItems:'center'}}>
      <Image source={require('@assets/images/store.png')} style={styles.btnImg} />
      <Text style={styles.btnText}>مشاهده محصولات</Text>
      </View>

      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("IotDashboard")} style={styles.iotProducts} >
      <View style={{display:'flex',flexDirection:'column',alignContent:'center',alignItems:'center'}}>
      <Image source={require('@assets/images/Iot.png')} style={styles.btnImg} />
      <Text style={styles.btnText}>کشاورزی هوشمند</Text>
      </View>
      </TouchableOpacity>
    </View>
    <View style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between',marginTop:20}}>
      <TouchableOpacity style={styles.consult1} onPress={()=>  navigation.navigate("ConsultantList")}>
      <View style={{display:'flex',flexDirection:'column',alignContent:'center',alignItems:'center'}}>
      <Image source={require('@assets/images/consulting.png')} style={styles.btnImg} />
      <Text style={styles.btnText}>لیست مشاوران</Text>
      </View>

      </TouchableOpacity>
      <TouchableOpacity style={styles.news}>
      <View style={{display:'flex',flexDirection:'column',alignContent:'center',alignItems:'center'}}>
      <Image source={require('@assets/images/newspaper.png')} style={styles.btnImg} />
      <Text style={styles.btnText}>اخبار و مقالات</Text>
      </View>
      </TouchableOpacity>
    </View>
  </View>
  
  </Drawer>
  );
};
 



  const styles = StyleSheet.create({
    container:{
      padding:25,
     
    },seeProducts:{
      backgroundColor:'#ffb921',
      height:170,
      width:170,
      borderRadius:10,
      display:'flex',
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center',
      flexDirection:'column',
      shadowColor:'#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      // shadowOpacity: 0.5,
      shadowRadius: 2,
      
      elevation: 10,
    },iotProducts:{
      backgroundColor:'#4BA064',
      height:170,
      width:170,
      borderRadius:10,
      display:'flex',
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center',
      shadowColor:'#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      // shadowOpacity: 0.5,
      shadowRadius: 2,
      
      elevation: 10,
    },btnImg:{
      width:70,
      resizeMode:"contain",
      marginTop:responsiveHeight(-8),
    },consult1:{
      backgroundColor:'#a20067',
      height:170,
      width:170,
      borderRadius:10,
      display:'flex',
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center',
      flexDirection:'column',
      shadowColor:'#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      // shadowOpacity: 0.5,
      shadowRadius: 2,
      
      elevation: 10,
    },news
      :{
        backgroundColor:'#FF6900',
        height:170,
        width:170,
        borderRadius:10,
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        flexDirection:'column',
        shadowColor:'#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      // shadowOpacity: 0.5,
      shadowRadius: 2,
      
      elevation: 10,
      },btnText:{
        ...myFontStyle.registerText,
        color:'#ffffff',
        marginTop:responsiveHeight(-10),
      }
    
  });

  export default Home;

//make this component available to the <app></app>
