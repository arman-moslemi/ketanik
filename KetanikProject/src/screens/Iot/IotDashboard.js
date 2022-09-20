import React, {useState,useRef ,useEffect} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView,FlatList,KeyboardAvoidingView} from 'react-native';


import { StyleSheet } from 'react-native';
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
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import {Input} from '@components/Input';



 const IotDashboard = ({navigation }) => {

  const drawers = useRef(null);
  const [data,setData] = useState([]);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
   };
   const [isModalVisible, setModalVisible] = useState(false);

   const closeModal=()=>{
     setModalVisible(!isModalVisible);
   }
  const GetData=async()=>{
    const axios = require("axios");
  var ss=await AsyncStorage.getItem("CustomerID")

    axios.post(apiUrl + "CustomerPart",{CustomerID:ss})
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
  const [projectName, setProjectName] = useState("");
  const [partName, setPartName] = useState("");

  const InsertProject=async ()=>{
    const axios = require("axios");
    var ss=await AsyncStorage.getItem("CustomerID")
  
      axios.post(apiUrl + "InsertProject",{CustomerID:ss,ProjectName:projectName,PartName:partName})
      .then(function (response) {
        if (response.data.result == "True") {
          console.log(777)
          closeModal()
GetData()  
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
  
  <DrawerPage drawers={drawers} name={"داشبورد Iot"} navigation={navigation} />
    <View style={styles.container}>
    <TouchableOpacity style={styles.sortBtn} onPress={toggleModal}>
          <Text style={{...myFontStyle.normalBold,color:'#fff',alignSelf:'center'}}>ایجاد پروژه

          </Text>
        <Icon name={"add"} color={'#fff'} size={25} style={{marginTop:responsiveHeight(1),transform: [{rotateY: '180deg'}]}}></Icon>

        </TouchableOpacity>

        <Modal isVisible={isModalVisible} onBackdropPress={closeModal} style={{justifyContent:'center',alignItems:'center'}}>
               <View style={styles.sortModal}>
                <View style={{width:'100%',borderBottomColor:'#f4f4f4',borderBottomWidth:2,padding:10}}>
                  <Text style={{...myFontStyle.textOnImg,color:'#000'}}>افزودن پروژه</Text>
                </View>
                <View style={{paddingRight:responsiveWidth(5),paddingTop:responsiveHeight(2)}}>
                <Text style={{...myFontStyle.normalRegular,color:Colors.text,marginTop:responsiveHeight(2),}}>نام پروژه </Text>
                <Input onChangeText={(ss)=>setProjectName(ss)}  placeholder="نام پروژه خود را وارد کنید : "  numberOfLines={1} inputStyle={styles.textInputLogin}containerStyle={{alignItems:"flex-end"}} />


                </View>
                <View style={{paddingRight:responsiveWidth(5),paddingTop:responsiveHeight(0)}}>
                <Text style={{...myFontStyle.normalRegular,color:Colors.text,marginTop:responsiveHeight(2),}}>عنوان بخش اول:   </Text>
                <Input onChangeText={(ss)=>setPartName(ss)}   placeholder="نام بخش اول را وارد نمایید"  inputStyle={styles.textInputLogin2}containerStyle={{alignItems:"flex-end"}} />


                </View>
             <View style={{justifyContent:'center',width:'100%',alignContent:'flex-end'}}>
             <View style={{width:responsiveWidth(30) ,alignSelf:'flex-start',marginTop:responsiveHeight(2),marginLeft:responsiveWidth(5)}}>


<TouchableOpacity onPress={()=>InsertProject()} style={styles.sendBtn}>
<Text style={styles.modalBtnText}>افزودن</Text>
</TouchableOpacity>

                 </View>
               </View>
               </View>
              </Modal>
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
    sendBtn:{
      backgroundColor:'#FF6900',
      width:responsiveWidth(30),
      height:responsiveHeight(4.5),
      borderRadius:50,
      justifyContent:'center',
      elevation:5,
   shadowOpacity:0.5,
   shadowRadius:50,
   shadowOffset:50,
  },notShowBtn:{
    textAlign:'center',
    width:responsiveWidth(25),
   },
   modalBtnText:{
     ...myFontStyle.normalBold,
     color:'#fff',
     textAlign:'center',

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
      sortBtn:{
        backgroundColor:'#FF6900',
        width:responsiveScreenWidth(30),
        height:responsiveHeight(5),
        borderRadius:50,
        elevation:5,
      shadowOpacity:1,
      shadowRadius:10,
      shadowOffset:5,
      justifyContent:'center',
      flexDirection:'row',
    },
    sortModal:{
      width:responsiveWidth(95),
      marginTop:responsiveHeight(-20),
      backgroundColor:'#fff',
      alignItems:'flex-end',
      borderRadius:5,
      shadowColor: '#fff',
      shadowOpacity: 0.1,
      shadowOffset: { width: 2, height: 0},
      shadowRadius: 700,
      elevation: 20,
      alignContent:'center',
      paddingTop:responsiveHeight(1),
      paddingBottom:responsiveHeight(3),
      paddingRight:responsiveWidth(0),
      paddingLeft:responsiveWidth(0),
    }, 
      
  });

  export default IotDashboard;

//make this component available to the <app></app>
