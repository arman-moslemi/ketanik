import React, {useState,useRef ,useEffect} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView,FlatList,KeyboardAvoidingView} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ProductCard } from '@components/ProductCard';
import { myFontStyle } from "@assets/Constance";
import Modal from "react-native-modal";
import {RadioButton ,Switch,List} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";
import DrawerPage from '@components/drawerContent/DrawerPage';
import DrawerContent from '@components/drawerContent/DrawerContent';
import Drawer from 'react-native-drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
 const FavoriteBlog = ({navigation }) => {
  const [data, setData] = useState([]);
  const [type, setType] = useState([]);
  const [active, setActive] = useState(0);
  const drawers = useRef(null);

  const GetData=async()=>{
    const axios = require("axios");
  

    var ss=await AsyncStorage.getItem("CustomerID")
    
    axios.post(apiUrl + "CustomerFavorite",{CustomerID:ss})
    .then(function (response) {
      if (response.data.result == "True") {
        console.log(777)

        console.log(response.data.Data.filter(x=>x.BlogID!=null));
        setData(response.data.Data.filter(x=>x.BlogID!=null))

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

    const DeleteFavorite=async(mm)=>{
      var ss=await AsyncStorage.getItem("CustomerID")
    

      
      const axios = require("axios");
      axios.post(apiUrl + "DeleteFavorite",{CustomerID:ss,BlogID:mm})
      .then(function (response) {
        if (response.data.result == "True") {
          alert("با موفقیت حذف شد")
GetData()              
          }})
          .catch(function (error) {
              console.log(777)
              alert(error)
              
              console.log(error);
          });
        ;
  }
  

    useEffect(() => {
      GetData();

    }, [active]);
  return (
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
  
  <DrawerPage drawers={drawers} name={"اخبار و مقالات"} navigation={navigation} />
    <View style={styles.container}>
    <ScrollView>
    <View style={{display:'flex',flexDirection:'row-reverse',alignContent:'center',alignItems:'center'}}>
      <View style={[styles.inputIcon]}>
      <TextInput style={styles.textInputIcon} onChangeText={(aa)=>_handleKeyDownAuto(aa)}  placeholder="جستجو کنید ..."/>
      </View>
      <View style={{width:"14%",marginRight:"1%"}}>
        <TouchableOpacity style={[styles.sort,shadow]} >
        <Icon name={"search"} color={'#fff'} size={40}/>

        </TouchableOpacity>
      </View>
  
  
      </View>
     <ScrollView horizontal={true} style={{display:'flex',flexDirection:'row-reverse'}}>
  
   </ScrollView>
   {
    data?.map((item)=>{
      return(
   <View style={styles.historyBox}>
    <View style={{display:'flex',flexDirection:'row-reverse',paddingBottom:responsiveHeight(0),justifyContent:'space-between'}}>
  <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
  <Image source={{uri:apiAsset+item.Pic}} style={styles.profilePic} />
  <View style={{alignItems:'flex-end'}}>
    <Text style={styles.ConsultantName2}>
    {item.Date}</Text>
    <Text style={styles.ConsultantName}>
    {item.Title}</Text>
    {/* <Text style={styles.des}>
   {truncate(item.Text,70)}

    </Text> */}
  </View>
  </View>

  <View style={{flexDirection:'column',alignItems:'flex-start',justifyContent:'space-between'}}>
 
      <TouchableOpacity onPress={()=>DeleteFavorite(item.BlogID)} style={{display:'flex',flexDirection:'row-reverse',marginLeft:responsiveWidth(2),marginBottom:responsiveHeight(2)}}>
      <Icon name={"favorite-border"} color={'#FF2525'} size={15}/>
        <Text style={styles.heartBtnText}>
          حذف از برگزیده ها
        </Text>
      </TouchableOpacity>
  </View>
  </View>
  <View style={{justifyContent:'space-between',flexDirection:'row',padding:responsiveWidth(1)}}>
 
    <View style={{flexDirection:'row-reverse'}}>
      <TouchableOpacity onPress={()=>navigation.navigate("SingleBlog",{params:item.BlogTitle})}>

    <Text style={styles.TypeCallText}>
ادامه مطلب        </Text>
      </TouchableOpacity>


    </View>
  </View>
</View>
      )
    })
   }

    </ScrollView>

    </View>
     </Drawer>
  );
};
 

const shadow = {
  shadowColor: Colors.Orange,
  shadowRadius: 100,
  shadowOpacity:10,
  elevation: 10,
  shadowOffset: {
    width: 10,
    height: 6
  }
}


  const styles = StyleSheet.create({
    container:{
      padding:25,
     backgroundColor:'#fff',flex:1,
    },
    inputIcon:{
      alignItems:'center',
      display:'flex',
      flexDirection:'row-reverse',
      backgroundColor:'#ffffff',
      borderRadius:5,
      width:"84%",
      marginLeft:'1%',
      marginTop:5,
      marginBottom:5,
      marginRight:'auto',
      marginLeft:'auto',
      height:responsiveHeight(6),
      paddingLeft:responsiveWidth(2),
      borderRadius:50,
      shadowColor:'#00000055',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius:0.5,
      
      elevation: 10,
    },textInputIcon:{
      textAlign:'right',
   ...myFontStyle.mediumRegular,
   backgroundColor:'#fff',
   width:"100%",
   borderRadius:3,
   shadowColor: "#000",
   shadowRadius: 100,
   shadowOpacity:10,
   elevation: 10,
   shadowOffset: {
     width: 10,
     height: 6
   }
    },sort:{
     
      height:responsiveHeight(6),
      borderRadius:15,
      backgroundColor:'#ffb921',
      justifyContent:'center',    
      alignItems:'center'
    },logo:{
      width:25,
      height:25,
      resizeMode:'contain',
      alignSelf:'center',
      alignContent:'center',
      alignItems:'center',display:'flex',
      
    },modalHeader:{
      display:'flex',
      alignItems:'center',

      borderStyle:'solid',
      justifyContent:'flex-start',
      flexDirection:'row-reverse',
      paddingTop:responsiveHeight(1),
      paddingBottom:responsiveHeight(1),
      paddingLeft:responsiveWidth(2),
      paddingRight:responsiveWidth(2),
    }
    ,modalHeaderIcon:{
      width:25,
      height:25,
      resizeMode:'contain',
      marginLeft:10,
    },modalHeaderText:{
      ...myFontStyle.registerText,
      color:'#000000',
    },
    radioLable:{
      ...myFontStyle.productNameText,
      color:'#000000',
    },
    radioLable2:{
      ...myFontStyle.productNameText,
      color:Colors.Orange,
    },
    modalText:{
      ...myFontStyle.productPriceText,
      color:'#000000',
    },
    accardionStyle:{
      direction:'rtl',
      backgroundColor:'#ffffff',
    },paragraph:{
      ...myFontStyle.normalBold,
      color:'#000',
      marginTop:responsiveHeight(2),
      marginBottom:responsiveHeight(2),
      margin:5
      
    },historyBox:{
      width:responsiveWidth(84),
  height:responsiveHeight(15),
  marginRight:'auto',
  marginLeft:'auto',
 
  backgroundColor:'#fff',
  shadowColor:'#00000075',
  shadowRadius: 100,
  shadowOpacity:10,
  elevation: 10,
  shadowOffset: {
    width: 10,
    height: 6
  },
  borderRadius:10,
  marginTop:responsiveHeight(1),
  marginBottom:responsiveHeight(1),
  
  // flexDirection:'row-reverse',
  justifyContent:'space-between',
  padding:15,
    },profilePic:{
      width:responsiveWidth(20),
      height:responsiveHeight(10),
      marginLeft:responsiveWidth(2),
    }
    ,ConsultantName:{
      ...myFontStyle.ConsultantName,
  color:'#000',
    }
    ,des:{
      ...myFontStyle.mediumRegular,
  color:'#000',
    },
    ConsultantName2:{
      ...myFontStyle.smallRegular,
  color:'#000',
    },
    TypeCallText:{
      ...myFontStyle.mediumRegular,
  color:'green'
  ,
    },
    reqCon:{
      ...myFontStyle.ConsultantName,
  color:'#000',
    },
    
    
    heartBtnText:{
      ...myFontStyle.ConsultantName2,
  color:'#FF2525',
    },
    yellowBtn:{
      backgroundColor:"#FF6900",
      height:responsiveHeight(5),
      width:responsiveWidth(20),
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
    },
    costBtn:{
      backgroundColor:"#FF6900",
      height:responsiveHeight(5),
      width:responsiveWidth(30),
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
    },
    costBtn2:{
      backgroundColor:"#fff",
      height:responsiveHeight(5),
      width:responsiveWidth(30),
      display:'flex',
      borderWidth:1,
      borderColor:'#ff6900',
      color:'#ff6900',
      alignContent:'center',
      justifyContent:'center',alignItems:'center',
      borderRadius:5,
      marginTop:responsiveHeight(5),
      shadowColor: "#00000056",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.5,
  shadowRadius: 3.84,
  
  elevation: 5,
    },
    yellowBtnTxt:{

      color:'#ffffff',
    
      ...myFontStyle.largBold,
    },    yellowBtnTxt2:{
      
      color:'#ff6900',
    
      ...myFontStyle.largBold,
    },
    // textInputIcon:{
    //   textAlign:'right',
    //  ...myFontStyle.mediumRegular,
    //  width:"100%",
    // },
  });

  export default FavoriteBlog;

//make this component available to the <app></app>
