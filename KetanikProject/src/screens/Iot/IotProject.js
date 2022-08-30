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
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';



 const IotProject = ({navigation ,route}) => {
  const [fav, setFav] = useState([
   
        {
          id:1,
          title: 'Getting Started',
          body: 'React native Accordion/Collapse component, very good to use in toggles & show/hide content'
        },
        {
          id:2,
          title: 'Components',
          body: 'AccordionList,Collapse,CollapseHeader & CollapseBody'
        }
        ,
  ]);
  const drawers = useRef(null);
  const {id,title} = route?.params ?? {};
  const [data,setData] = useState([]);
  function groupArrayOfObjects(list, key) {
    return list.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }
  const GetData=()=>{
    const axios = require("axios");
  var mm=AsyncStorage.getItem("CustomerID")

//     axios.post(apiUrl + "CustomerPart",{CustomerID:1})
//     .then(function (response) {
//       if (response.data.result == "True") {
//         console.log(777)
//         var ss=[]
//         Object.values(response.data.Data).filter(x=>x[0].ProjectID==id)[0].map((item)=>{
//           console.log(item)

// ss.push(item)
//         })
//         setData(ss)
//         console.log(response.data.Data);

//     }})
//     .catch(function (error) {
//       console.log(777)

//       console.log(error);
//     });
    axios.post(apiUrl + "CustomerDeviceGroup",{ProjectID:id})
    .then(function (response) {
      if (response.data.result == "True") {
        console.log(666)
        console.log(response.data.Data);
        var ss=[]
     var gg=   groupArrayOfObjects( Object.values(response.data.Data)[0],"PartID")
        console.log( Object.values(gg));

        // Object.values(response.data.Data).map((item)=>{
        //   console.log(888)

        //   console.log(item)

        //   ss.push(item)
        // })
        setData(Object.values(gg))

    }})
    .catch(function (error) {
      console.log(777)

      console.log(error);
    });
   
 
  }
  useEffect(() => {
    GetData();

  }, []);
  const _head=(item)=>{
    return(
        // <View  style={{alignItems:'center',borderBottomColor:"#000",borderBottomWidth:1}}>
        //   <Text>{item.title}</Text>
        // </View>
        <View style={styles.subViewRead1}>
<View style={{}}>
<TouchableOpacity  style={{flexDirection:'row',alignItems:'center'}}>

<Icon name="keyboard-arrow-down" size={20} color={'#000'}/>

</TouchableOpacity>
    </View>
 

<View style={{flexDirection:'row',justifyContent:'flex-end',width:responsiveWidth(25)}}>
<View>
    <Text style={{...myFontStyle.normalBold,color:Colors.black,textAlign:'right',flexDirection:'column'}}>{item[0].PartName?.substring(0, 20)}...</Text>


      </View>
</View>


{/* </View> */}



  </View>
    );
}
const _body=(item)=>{
    return (
        <View style={styles.body}>
          {
            item.map((item2)=>{
              return(
<View>
<View style={styles.bodyView}>
<Text style={{...myFontStyle.normalBold,color:Colors.Green,flexDirection:'column'}}>سالم</Text>
<Text style={{...myFontStyle.normalBold,color:Colors.Orange,flexDirection:'column'}}>شماره دستگاه:{item2.Serial}</Text>
</View>
<View style={{flexDirection:'row',alignItems:'center'}}>
  <View style={{height:responsiveHeight(10)}}>
  <Text style={{...myFontStyle.normalBold,flexDirection:'column'}}>دمای هوا</Text>
  <Text style={{...myFontStyle.normalBold,flexDirection:'column'}}>۳۷درجه</Text>
  <Text style={{...myFontStyle.normalBold,color:Colors.Green,flexDirection:'column'}}>وضعیت:سالم</Text>

  </View>
  </View>
</View>
              )
            })
          }
        </View>
    );
}
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
  
  <DrawerPage drawers={drawers} name={title} />
    <View style={styles.container}>
   
    <AccordionList
            list={data}
            header={_head}
            body={_body}
            keyExtractor={item => `${item[0].PartID}`}
          />
     
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
    subViewRead1:{
      borderRightWidth:5,
      borderRightColor:'#FF6900',
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
    body:
      {padding:10,height:responsiveHeight(15), shadowColor: "#00000056",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        // backgroundColor:"#000",
        marginRight:responsiveHeight(2),
        marginLeft:responsiveHeight(2),        
        elevation: 5,},
 bodyView:
  {flexDirection:'row',justifyContent:'space-between',paddingHorizontal:responsiveWidth(1)}
 
  });

  export default IotProject;

//make this component available to the <app></app>
