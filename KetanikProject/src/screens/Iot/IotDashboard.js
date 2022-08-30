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
import axios from 'axios';
import Spinner from '@components/Spinner';
import AsyncStorage from  '@react-native-async-storage/async-storage';
import { Button } from 'react-native-paper';
import DrawerPage from '@components/drawerContent/DrawerPage';
import DrawerContent from '@components/drawerContent/DrawerContent';
import Drawer from 'react-native-drawer'



 const IotDashboard = ({navigation }) => {

  const drawers = useRef(null);
  const [data,setData] = useState([]);

  const GetData=()=>{
    const axios = require("axios");
  var ss=AsyncStorage.getItem("CustomerID")

    axios.post(apiUrl + "CustomerPart",{CustomerID:1})
    .then(function (response) {
      if (response.data.result == "True") {
        console.log(777)

        console.log(response.data.Data);
        setData(Object.values(response.data.Data))

    }})
    .catch(function (error) {
      console.log(777)

      console.log(error);
    });
  
   
 
  }
  useEffect(() => {
    GetData();

  }, []);
 
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
  
  <DrawerPage drawers={drawers} name={"داشبورد Iot"} />
    <View style={styles.container}>
   
    {
  data.map((item)=>(


<TouchableOpacity onPress={()=>navigation.navigate("IotProject",{id:item[0].ProjectID,title:item[0].ProjectName})} style={styles.subViewRead1}>
<View style={{}}>
<TouchableOpacity  style={{flexDirection:'row',alignItems:'center'}}>

<Icon name="remove-red-eye" size={20} color={'#FF6900'}/>
<Text style={{...myFontStyle.mediumBold,color:Colors.black,textAlign:'right',flexDirection:'column'}}>{"مشاهده پروژه"}</Text>

</TouchableOpacity>
    </View>
 

<View style={{flexDirection:'row',justifyContent:'flex-end',width:responsiveWidth(25)}}>
<View>
    <Text style={{...myFontStyle.normalBold,color:Colors.black,textAlign:'right',flexDirection:'column'}}>{item[0].ProjectName?.substring(0, 20)}...</Text>


      </View>
</View>


{/* </View> */}



  </TouchableOpacity>
  ))
  }
     
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
   backgroundColor:'#F7F6F9',
   width:"100%",
   borderRadius:3
    },sort:{
     
      height:responsiveHeight(6),
      borderRadius:15,
      backgroundColor:'#ffb921',
      justifyContent:'center',    
      
    },logo:{
      width:25,
      height:25,
      resizeMode:'contain',
      alignSelf:'center',
      alignContent:'center',
      alignItems:'center',display:'flex',
      
    },modalHeader:{
      display:'flex',
      alignItems:'center'
      ,borderBottomColor:"rgba(186, 186, 186, 0.25)" ,
           borderBottomWidth:1,
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
      ...myFontStyle.productPriceText,
      color:'#000',
      marginTop:responsiveHeight(2),
      marginBottom:responsiveHeight(2),
      
    },historyBox:{
      width:responsiveWidth(84),
  height:responsiveHeight(10),
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
      width:50,
      height:50,
      borderRadius:200,
      marginLeft:responsiveWidth(2),
    },ConsultantName:{
      ...myFontStyle.ConsultantName,
  color:'#000',
    },
    ConsultantName2:{
      ...myFontStyle.ConsultantName2,
  color:'#000',
    },
    TypeCallText:{
      ...myFontStyle.productPriceText,
  color:'green',
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
    subViewRead1:{
        borderRightWidth:5,
        borderRightColor:'#2DDB4E',
        backgroundColor:"#fff",
        elevation:5,
        shadowOpacity:1,
        shadowRadius:10,
        shadowOffset:5,
        borderRadius:5,
        marginRight:responsiveHeight(2),
        marginLeft:responsiveHeight(2),
        marginBottom:0,
      height:responsiveHeight(8),
      marginTop:responsiveHeight(3)
      ,alignItems:'center',
      flexDirection:'row',
      justifyContent:'space-between',
      padding:responsiveWidth(3),
      paddingBottom:responsiveHeight(2)},
      
  });

  export default IotDashboard;

//make this component available to the <app></app>
