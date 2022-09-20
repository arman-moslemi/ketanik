import React, { useState,useEffect,useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image,Alert } from 'react-native';
import { myFontStyle } from "@assets/Constance";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '@assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import {TopBar} from '../../components/TopBar';
import Modal from "react-native-modal";
import {Input} from '@components/Input';
import axios from 'axios';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";
import DrawerPage from '@components/drawerContent/DrawerPage';
import DrawerContent from '@components/drawerContent/DrawerContent';
import Drawer from 'react-native-drawer'
import AsyncStorage from  '@react-native-async-storage/async-storage';

// create a component
const Cart = ({navigation}) => {

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [data,setData] = useState([]);
  const [count,setCount]=useState(1);
  const [costTotal,setCostTotal]=useState(0)
  const drawers = useRef(null);
  const increment = (id,type) => {
    setCount(count+1)
    console.log(count)
    const axios = require("axios");
      
            axios.post(apiUrl + "ShoppingBasketValue",{ShoppingBasketID:id,Type:type})
            .then(function (response) {
              console.log(response)
    
              if (response.data.result == "True") {
                console.log(777)
                console.log(response.data.Data)
                setCount(count+1)
                GetData()
            }})
            .catch(function (error) {
              console.log(777)
              alert(error)
    
              console.log(error);
            });
       
        
  
      }
      const DeleteCart = (id) => {
        setCount(count+1)
        console.log(count)
        const axios = require("axios");
            
                setCount(count+1)
                axios.post(apiUrl + "ShoppingBasketDelete",{ShoppingBasketID:id})
                .then(function (response) {
                  console.log(response)
        
                  if (response.data.result == "True") {
                    console.log(777)
                    console.log(response.data.Data)
                    GetData()
             }})
                .catch(function (error) {
                  console.log(777)
                  alert(error)
        
                  console.log(error);
                });
              
            
      
          }
     
  
          const GetData=async()=>{
            const axios = require("axios");
          
            var customer=await AsyncStorage.getItem("CustomerID")
            var guest=AsyncStorage.getItem("Guest")?AsyncStorage.getItem("Guest"):0;

            console.log(123456)
            console.log(customer)
            axios.post(apiUrl + "ShoppingBasketView",{CustomerID:customer,GuestID:0})
            .then(function (response) {
              console.log(response)
    
              if (response.data.result == "True") {
                console.log(777)
                console.log(response.data.Data)
                setCostTotal(0)
                setData(response.data.Data)
                var dd=0;
                response.data.Data.map((item)=>{
dd=item.SpecialCost?dd+parseInt(item.SpecialCost*item.ShoppingBasketNumber):dd+parseInt(item.Cost*item.ShoppingBasketNumber)
})
setCostTotal(dd)
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
  const toggleModal = () => {
   setModalVisible(!isModalVisible);
  };

  const closeModal=()=>{
    setModalVisible(!isModalVisible);
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
  
  <DrawerPage drawers={drawers} name={"سبد خرید"} navigation={navigation} />
      
           <View >








</View>

<View style={styles.container}>
   
{/* <View style={styles.viewBody}> */}

<ScrollView >
{
  data.map((item)=>(

<View style={styles.subViewRead1}>
<View style={{}}>
<TouchableOpacity onPress={()=>DeleteCart(item.ShoppingBasketID)} style={{flexDirection:'row',alignItems:'center'}}>

<Image source={require("@assets/images/deleteIcon.png")} resizeMode={"contain"} style={{width:15,height:20}}/> 

</TouchableOpacity>
<Text style={{...myFontStyle.smallBold,color:Colors.black,textAlign:'right',flexDirection:'column',marginTop:5,textDecorationLine:"line-through"}}>{item.Cost}تومان</Text>
<Text style={{...myFontStyle.mediumBold,color:Colors.black,textAlign:'right',flexDirection:'column'}}>{item.SpecialCost}تومان</Text>

    </View>
    

<View style={{flexDirection:'row',justifyContent:'flex-end',width:responsiveWidth(25),marginTop:5}}>
<View >
    <Text style={{...myFontStyle.normalBold,color:Colors.black,textAlign:'right',flexDirection:'column'}}>{item.Name}</Text>
    <View style={{marginTop:responsiveHeight(1),flexDirection:'row-reverse'}}>
    <Text style={{...myFontStyle.smallBold,color:Colors.black,textAlign:'right'}}>تعداد:</Text>
        <View style={{marginRight:5,borderColor:'#000',borderWidth:1,width:60,alignItems:'center',flexDirection:'row',justifyContent:'center',borderRadius:25}}>
        
        <TouchableOpacity onPress={()=>increment(item.ShoppingBasketID,"mines")}>

        <Text  style={{...myFontStyle.normalBold,color:Colors.Green,textAlign:'right',flexDirection:'column'}}>-</Text>
        </TouchableOpacity>
        <Text style={{...myFontStyle.normalBold,color:Colors.black,textAlign:'right',flexDirection:'column',marginHorizontal:10}}>{item.ShoppingBasketNumber}</Text>
        <TouchableOpacity onPress={()=>increment(item.ShoppingBasketID,"add")}>

        <Text  style={{...myFontStyle.normalBold,color:Colors.Green,textAlign:'right',flexDirection:'column'}}>+</Text>
</TouchableOpacity>
        </View>

    </View>


      </View>
      <View style={{}}>
<TouchableOpacity  style={{flexDirection:'row',alignItems:'center'}}>

<Image source={{uri:apiAsset+item.Pic1}} resizeMode={"contain"} style={{width:responsiveWidth(18),height:responsiveHeight(9)}}/> 

</TouchableOpacity>
    </View>
</View>


{/* </View> */}



  </View>
  ))
  }
</ScrollView>
 
<View style={styles.footer}>

<TouchableOpacity style={styles.sortBtn} onPress={()=>navigation.navigate("CartAddress",{Cost:costTotal})}>
          <Text style={{...myFontStyle.normalBold,color:'#fff'}}>
ادامه فرآیند خرید       
   </Text>

        </TouchableOpacity>
        <View>
        <Text style={{...myFontStyle.normalBold,color:'#000'}}>
مجموع سبد خرید:   </Text>
   <Text style={{...myFontStyle.mediumBold,color:'#7B808C'}}>
{costTotal}   تومان</Text>
</View>
</View>

</View>

        </Drawer>
);
};

const styles = StyleSheet.create({

  container: {flex:1,backgroundColor:"#fff"},
  menuTitle:{
    ...myFontStyle.largBold,
        color:"#fff",
        marginTop:responsiveHeight(1),
      },

      page: {
      flexDirection: 'column',
    },customRow:{
      flex:1, flexDirection:"row",
      position:"absolute",
      top:responsiveHeight(0),
      paddingRight:responsiveWidth(5),
      paddingLeft:responsiveWidth(5),
    },
    drawerStyles: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3,zIndex:5},

avatar: {
    width: responsiveWidth(18),
    height: responsiveHeight(10),
    resizeMode: "contain",
    // margin:5,
    marginRight:responsiveWidth(5)

  },
  button:{marginTop:responsiveHeight(2),width:responsiveWidth(30)
    ,height:responsiveHeight(4),backgroundColor:Colors.yellow,
  borderRadius:5,
  alignItems:'center',
  justifyContent:'center'

  },

  txtEdit: {
    color: Colors.white,
    ...myFontStyle.mediumRegular,
    borderWidth:1,
    borderColor:Colors.white,
    borderRadius:50,
    paddingVertical:3,
    paddingHorizontal:9,
    backgroundColor:Colors.yellow

  },
  modal:{
    // alignSelf: "center",
    // marginTop: responsiveHeight(30),
     height: responsiveHeight(63),
    width: responsiveWidth(90),
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding:  responsiveWidth(4),
  },
  viewRowCart:{flexDirection:'row',justifyContent:'space-between',paddingLeft:responsiveWidth(3),paddingRight:responsiveWidth(3) },
  viewRowCart2:{flexDirection:'row',justifyContent:'space-between',paddingLeft:responsiveWidth(3),paddingRight:responsiveWidth(3) },
  rowCart:{height:responsiveHeight(15),width:responsiveWidth(45),borderRadius:5,alignItems:"center",justifyContent:'center'},
  rowCart2:{height:responsiveHeight(11),borderRadius:5,alignItems:"center",justifyContent:'center',margin:responsiveWidth(3)},
  rowCart3:{height:responsiveHeight(11),borderRadius:5,alignItems:"center",
  justifyContent:'space-between',margin:responsiveWidth(3),flexDirection:'row'},
  viewBody:{backgroundColor:"#FAFAFB",flex:12},
  subViewBody:{backgroundColor:"#fff",
  height:responsiveHeight(12)
  ,alignItems:'flex-end',
  flexDirection:'row',
  justifyContent:'flex-end',
  paddingBottom:responsiveHeight(2)},
  subViewRead1:{

    backgroundColor:"#fff",
    elevation:5,
    shadowOpacity:1,
    shadowRadius:10,
    shadowOffset:5,
    borderRadius:5,
    marginRight:responsiveHeight(2),
    marginLeft:responsiveHeight(2),
    marginBottom:8,
  height:responsiveHeight(10),
  marginTop:responsiveHeight(2)
  ,alignItems:'center',
  flexDirection:'row',
  justifyContent:'space-between',
  padding:responsiveWidth(3),
  paddingBottom:responsiveHeight(2)},
  subViewRead2:{
    borderLeftWidth:5,
    borderLeftColor:'#F69D0D',
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
  flexDirection:'row-reverse',
  justifyContent:'space-between',
  padding:responsiveWidth(3),
  paddingBottom:responsiveHeight(2)},
  subViewRead3:{
    borderLeftWidth:5,
    borderLeftColor:'#E82B63',
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
  flexDirection:'row-reverse',
  justifyContent:'space-between',
  padding:responsiveWidth(3),
  paddingBottom:responsiveHeight(2)},

  viewProfText:{marginRight:5,marginTop:responsiveHeight(1),alignItems:'flex-end'},
viewIconEdit:{position:"absolute",bottom:0,right:20,backgroundColor:Colors.yellow,borderRadius:50},
textInputLogin:{
  height:responsiveHeight(15),
  ...myFontStyle.mediumRegular,
  borderColor:"#F1F1F1",
  borderWidth:2,
alignItems:'flex-end'

  },
  sortBtn:{
      backgroundColor:'#FF6900',
      width:responsiveScreenWidth(35),
      height:responsiveHeight(6),
      borderRadius:3,
  
    justifyContent:'center',
    alignItems:'center',
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
  }, viewRadio: {flexDirection:'row',alignItems:'center',marginTop:responsiveHeight(1)}
  ,txtRadio: {
    color: Colors.text,
    ...myFontStyle.mediumBold,
    // lineHeight:responsiveHeight(3)

  },notShowBtn:{
    textAlign:'center',
    width:responsiveWidth(25),
   },
   modalBtnText:{
     ...myFontStyle.normalBold,
     color:'#fff',
     textAlign:'center',

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
   },
   answered:{
       width:'80%',
       borderColor:'#2DDB4E',
       borderWidth:1,
       borderRadius:50,
       height:responsiveHeight(4),
       justifyContent:'center',
       textAlign:'center',
   },answeredText:{
       ...myFontStyle.mediumRegular,
       color:'#2DDB4E',
       textAlign:'center',
   }
   ,waited:{
    // width:'80%',
    borderColor:'#F69D0D',
    borderWidth:1,
    borderRadius:50,
    height:responsiveHeight(4),
    justifyContent:'center',
    textAlign:'center',
},waitedText:{
    ...myFontStyle.mediumRegular,
    color:'#F69D0D',
    textAlign:'center',
},closed:{
    width:'80%',
    borderColor:'#E82B63',
    borderWidth:1,
    borderRadius:50,
    height:responsiveHeight(4),
    justifyContent:'center',
    textAlign:'center',
}
,closedText:{
    ...myFontStyle.mediumRegular,
    color:'#E82B63',
    textAlign:'center',
},textInputLogin:{

    ...myFontStyle.mediumRegular,
    borderColor:"#F1F1F1",
    borderWidth:2,
  alignItems:'flex-end',
  backgroundColor:'#F7F6F9',

  marginLeft:responsiveWidth(2),

    },
    textInputLogin2:{

        ...myFontStyle.mediumRegular,
        borderColor:"#F1F1F1",
        borderWidth:2,
      alignItems:'flex-end',
      backgroundColor:'#F7F6F9',
      marginLeft:responsiveWidth(2),
      height:responsiveHeight(15),
        },
        footer:{height:responsiveHeight(9.5),backgroundColor:'#fff',borderRadius:5  ,  elevation:10,
        shadowOpacity:1,
        shadowRadius:10,
        shadowOffset:5,
    shadowColor:"#000",
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:responsiveWidth(5),
    alignItems:'center'
    }
});

  export default Cart;

