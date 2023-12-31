import React, {useState,useEffect,useContext} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView,ImageBackground} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Drawer from 'react-native-drawer'
// import DrawerContent from './drewerContent/DrawerContent';
import { myFontStyle } from "@assets/Constance";
import AsyncStorage from  '@react-native-async-storage/async-storage';
import axios from 'axios';
import { apiUrl ,apiAsset} from "@commons/inFormTypes"
import { ThemeContext } from '../../../theme/theme-context';


 const Factor = ({navigation }) => {
  const {  theme } = useContext(ThemeContext);
  const [data,setData]=useState([]);

  useEffect(() => {

    mutLogin();


}, []);
const  mutLogin=async()=> {
  const state = await AsyncStorage.getItem("@user");

  
  axios.post(apiUrl+'FactorCustomer',{CustomerID:state})
  .then(function (response) {
    const message = response.data;
    const result = response.data.result;
    console.log(message);
  
    if(result == "true"){
        
      setData(response.data.GroupData)
 
      // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                      }else{
  
    }
  })
  .catch(function (error) {
    console.log(error);
  })
 
    
        };
  const [checked, setChecked] = React.useState('first');
return (
    <View style={{backgroundColor:theme.backgroundColor,flex:1}}>

<View style={styles(theme).customRow}>
        
    
    </View>
    <View style={styles(theme).topBar}>

    <View style={{flex : 2,textAlign:"right"}}>
          <Text style={styles(theme).menuTitle}>تراکنش های موفق</Text>
          </View>
    
        
        <View style={{flex :0.5}}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{}}>
            <Icon name={"arrow-back"} color={'#111'} size={30}/>
          </TouchableOpacity>
          </View>
    </View>
     
  <ScrollView>
 <View style={styles(theme).container}>
 
  <View style={styles(theme).aboutView}>
<Image source={require('@assets/images/logo.png')} style={styles(theme).backgroundImg}/>
    <View style={styles(theme).tableBorder}>
    <View style={{display:'flex',flexDirection:'row-reverse'}}>
      <View style={{width:responsiveWidth(25),padding:5,borderLeftColor:'#d3d3d3',borderLeftWidth:0.5}}>
        <Text style={styles(theme).tableHeader}>
          تاریخ
        </Text>
      </View>
      <View style={{width:responsiveWidth(20),padding:5,borderLeftColor:'#d3d3d3',borderLeftWidth:0.5}}>
        <Text style={styles(theme).tableHeader}>
         واریز/برداشت
        </Text>
      </View>
      <View style={{width:responsiveWidth(25),padding:5,borderLeftColor:'#d3d3d3',borderLeftWidth:0.5}}>
        <Text style={styles(theme).tableHeader}>
         توضیحات
        </Text>
      </View>
      <View style={{width:responsiveWidth(20),padding:5}}>
        <Text style={styles(theme).tableHeader}>
          وضعیت
        </Text>
      </View>
    </View>
    {
      data?.map((item)=>{
        return(

    <View style={{flexDirection:'row-reverse',borderTopColor:'#d3d3d3',borderTopWidth:0.5,alignItems:'center'}}>
      <View style={{width:responsiveWidth(25),borderLeftColor:'#d3d3d3',borderLeftWidth:0.5}}>
        <Text style={styles(theme).tableContentDate}>
{item.Date}        </Text>
      </View>
      <View style={{width:responsiveWidth(20),padding:5,borderLeftColor:'#d3d3d3',borderLeftWidth:0.5}}>
        <Text style={styles(theme).tableContentGreen}>
         {item.Cost} تومان
        </Text>
      </View>
      <View style={{width:responsiveWidth(25),padding:5,borderLeftColor:'#d3d3d3',borderLeftWidth:0.5}}>
        <Text style={styles(theme).tableContent}>
         خرید
        </Text>
        <Text style={styles(theme).tableContent}>
       {item.BookName}
        </Text>
      </View>
      <View style={{width:responsiveWidth(20),padding:5}}> 
        <Text style={styles(theme).tableContent}>
          {/* کیف پول */}
          آنلاین
        </Text>
        <Text style={styles(theme).tableContentGreen}>
         موفق
        </Text>
      </View>
    </View>
        ) 
      })
    }
  
    </View>
 
  </View>

 </View>
  </ScrollView>
    </View>
);
};

const styles =(theme) => StyleSheet.create({
    container: {
        paddingRight:responsiveWidth(2),
        paddingLeft:responsiveWidth(2),
        paddingBottom:responsiveHeight(2),
        alignItems:"flex-end",
        marginTop:responsiveHeight(4),
    },

    menuTitle:{
...myFontStyle.UltraBold,
color:theme.menuTitle,
      zIndex:10000,
    },

    page: {
    flexDirection: 'column',
  },customRow:{
    flex:1, flexDirection:"row",
    position:"absolute",
    top:responsiveHeight(0),
    paddingRight:responsiveWidth(5),
    paddingLeft:responsiveWidth(5),
    backgroundColor:theme.topRowBack,
    marginTop:responsiveHeight(-13),
    height : responsiveHeight(25),
    width : '100%',
    transform : [ { scaleX : 1.7 } ],
    borderBottomStartRadius : 800,
    borderBottomEndRadius : 800,
    overflow : 'hidden',
    shadowColor: '#c1c1c1',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 50,
    elevation: 100,
    zIndex:100,
   
  },
  topBar:{
      display:'flex',
      flexDirection:'row-reverse',
      paddingTop:responsiveHeight(2),
      paddingRight:responsiveWidth(7),
      paddingLeft:responsiveWidth(7),
      zIndex:1000,
  },aboutView:{
    width:responsiveWidth(87),
    marginRight:'auto',
    marginLeft:'auto',
    textAlign:'center',
    marginTop:responsiveHeight(3),
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
  }
  ,aboutText:{
    ...myFontStyle.largeRegular,
    color:theme.textTitle,
    textAlign:'justify',
    lineHeight:30,
  },aboutTitle:{
  ...myFontStyle.bookTitle,
  color:theme.textTitle,
  marginBottom:responsiveHeight(2),
  marginTop:responsiveHeight(2),
},radioView:{
  marginTop:responsiveHeight(2),
  display:'flex',
  flexDirection:'row-reverse',
  marginRight:responsiveWidth(10),
},radioRow:{
  display:'flex',
  flexDirection:'row-reverse',
  borderBottomColor:'#c1c1c1',
  borderBottomWidth:0.5,
} ,viewRadio: {flexDirection:'row',alignItems:'center'},
radionText: {
  color:theme.textTitle,
  ...myFontStyle.episodeName,
  // lineHeight:responsiveHeight(3)

},payBtn:{
  backgroundColor:Colors.darkGreen,
  width:responsiveWidth(38),
  marginTop:responsiveHeight(5),
  height:responsiveHeight(6),
  alignContent:'center',
  alignItems:'center',
display:'flex',
alignContent:'center',
alignItems:'center',
justifyContent:'center',
  borderRadius:10,

  
},btnText:{
  ...myFontStyle.episodeName,
  color:'#fff',
},cancelBtn:{
  backgroundColor:'#fff',
  width:responsiveWidth(38),
  marginTop:responsiveHeight(5),
  height:responsiveHeight(6),
  alignContent:'center',
  alignItems:'center',
display:'flex',
alignContent:'center',
alignItems:'center',
justifyContent:'center',
  borderRadius:10,
borderColor:Colors.darkGreen,
borderWidth:1,
  marginRight:responsiveWidth(3),
},btnText2:{
  ...myFontStyle.episodeName,
  color:Colors.darkGreen,
},greenBack:{
  backgroundColor:Colors.lightGreen,
  borderRadius:10,
  padding:responsiveHeight(2),
  marginTop:responsiveHeight(3),
  borderRightColor:Colors.darkGreen,
  borderRightWidth:5,
  justifyContent:'flex-start',
  display:'flex',
flex:1,
flexDirection:'row-reverse',
  alignContent:'flex-start',
  alignItems:'flex-start',
 textAlign:'right',
},alertText:{
  ...myFontStyle.largeRegular,
  color:'#111',textAlign:'right',
  marginRight:5,
},editProfileBtn2:{
  display:'flex',
  justifyContent:'space-between',
  alignItems:'flex-start',
  flexDirection:'row-reverse',
  paddingRight:responsiveWidth(0),
  paddingLeft:responsiveWidth(0),
  paddingTop:responsiveHeight(1),
  paddingBottom:responsiveHeight(1),
 marginTop:responsiveHeight(3),
},btnText3:{
  ...myFontStyle.episodeName,
  color:'#111',
  marginRight:responsiveWidth(2),
},tableBorder:{
  borderWidth:0.5,
  borderColor:'#d3d3d3',
  marginTop:responsiveHeight(5),
  width:responsiveWidth(90),
},tableHeader:{
  ...myFontStyle.normalRegular,
  color:theme.textTitle,
  textAlign:'center'
},tableContent:{
  ...myFontStyle.normalRegular,
  color:theme.textTitle,
  textAlign:'center',
},
tableContentDate:{
  ...myFontStyle.normalRegular,
  color:theme.textTitle,
  textAlign:'left',
},
tableContentGreen:{
  ...myFontStyle.normalRegular,
  color:'#28a745',
  textAlign:'center',
},backgroundImg:{
  width:responsiveWidth(80),
  resizeMode:'contain',position:'absolute',
marginTop:responsiveHeight(10),
opacity:0.06,
}
  });

  export default Factor;


