import React, {useState,useRef} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView,ImageBackground} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Drawer from 'react-native-drawer'
// import DrawerContent from './drewerContent/DrawerContent';
import { myFontStyle } from "@assets/Constance";
import { RadioButton } from 'react-native-paper';

// create a component


// export const truncate = (str, len) => {
//     // console.log("truncate", str, str.length, len);
//     if (str.length > len && str.length > 0) {
//       let new_str = str + " ";
//       new_str = str.substr(0, len);
//       new_str = str.substr(0, new_str.lastIndexOf(" "));
//       new_str = new_str.length > 0 ? new_str : str.substr(0, len);
//       return new_str + "...";
//     }
//     return str;
//   };

 const Factor = ({navigation }) => {
  
   
  const [checked, setChecked] = React.useState('first');
return (
    <View style={{backgroundColor:'#fff',flex:1}}>

<View style={styles.customRow}>
        
    
    </View>
    <View style={styles.topBar}>

    <View style={{flex : 2,textAlign:"right"}}>
          <Text style={styles.menuTitle}>تراکنش های موفق</Text>
          </View>
    
        
        <View style={{flex :0.5}}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{}}>
            <Icon name={"arrow-back"} color={'#111'} size={30}/>
          </TouchableOpacity>
          </View>
    </View>
     
  <ScrollView>
 <View style={styles.container}>
 
  <View style={styles.aboutView}>
<Image source={require('@assets/images/logo.png')} style={styles.backgroundImg}/>
    <View style={styles.tableBorder}>
    <View style={{display:'flex',flexDirection:'row-reverse'}}>
      <View style={{width:responsiveWidth(20),padding:5,borderLeftColor:'#d3d3d3',borderLeftWidth:0.5}}>
        <Text style={styles.tableHeader}>
          تاریخ
        </Text>
      </View>
      <View style={{width:responsiveWidth(25),padding:5,borderLeftColor:'#d3d3d3',borderLeftWidth:0.5}}>
        <Text style={styles.tableHeader}>
         واریز/برداشت
        </Text>
      </View>
      <View style={{width:responsiveWidth(25),padding:5,borderLeftColor:'#d3d3d3',borderLeftWidth:0.5}}>
        <Text style={styles.tableHeader}>
         توضیحات
        </Text>
      </View>
      <View style={{width:responsiveWidth(20),padding:5}}>
        <Text style={styles.tableHeader}>
          وضعیت
        </Text>
      </View>
    </View>
    <View style={{display:'flex',flexDirection:'row-reverse',borderTopColor:'#d3d3d3',borderTopWidth:0.5,alignItems:'center'}}>
      <View style={{width:responsiveWidth(20),padding:5,borderLeftColor:'#d3d3d3',borderLeftWidth:0.5}}>
        <Text style={styles.tableContent}>
        1400/05/29
        </Text>
      </View>
      <View style={{width:responsiveWidth(25),padding:5,borderLeftColor:'#d3d3d3',borderLeftWidth:0.5}}>
        <Text style={styles.tableContentGreen}>
         12048 تومان
        </Text>
      </View>
      <View style={{width:responsiveWidth(25),padding:5,borderLeftColor:'#d3d3d3',borderLeftWidth:0.5}}>
        <Text style={styles.tableContent}>
         خرید
        </Text>
        <Text style={styles.tableContent}>
        "شیوه گرگ"
        </Text>
      </View>
      <View style={{width:responsiveWidth(20),padding:5}}>
        <Text style={styles.tableContent}>
          کیف پول
        </Text>
        <Text style={styles.tableContentGreen}>
         موفق
        </Text>
      </View>
    </View>
    <View style={{display:'flex',flexDirection:'row-reverse',borderTopColor:'#d3d3d3',borderTopWidth:0.5,alignItems:'center'}}>
      <View style={{width:responsiveWidth(20),padding:5,borderLeftColor:'#d3d3d3',borderLeftWidth:0.5}}>
        <Text style={styles.tableContent}>
        1400/05/29
        </Text>
      </View>
      <View style={{width:responsiveWidth(25),padding:5,borderLeftColor:'#d3d3d3',borderLeftWidth:0.5}}>
        <Text style={styles.tableContentGreen}>
         12048 تومان
        </Text>
        
      </View>
      <View style={{width:responsiveWidth(25),padding:5,borderLeftColor:'#d3d3d3',borderLeftWidth:0.5}}>
        <Text style={styles.tableContent}>
         خرید
        </Text>
        <Text style={styles.tableContent}>
        "شیوه گرگ"
        </Text>
      </View>
      <View style={{width:responsiveWidth(20),padding:5,alignContent:'center',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Text style={styles.tableContent}>
          کیف پول
        </Text>
        <Text style={styles.tableContentGreen}>
         موفق
        </Text>
      </View>
    </View>
    <View style={{display:'flex',flexDirection:'row-reverse',borderTopColor:'#d3d3d3',borderTopWidth:0.5,alignItems:'center'}}>
      <View style={{width:responsiveWidth(20),padding:5,borderLeftColor:'#d3d3d3',borderLeftWidth:0.5}}>
        <Text style={styles.tableContent}>
        1400/05/29
        </Text>
      </View>
      <View style={{width:responsiveWidth(25),padding:5,borderLeftColor:'#d3d3d3',borderLeftWidth:0.5}}>
        <Text style={styles.tableContentGreen}>
         12048 تومان
        </Text>
        
      </View>
      <View style={{width:responsiveWidth(25),padding:5,borderLeftColor:'#d3d3d3',borderLeftWidth:0.5}}>
        <Text style={styles.tableContent}>
         خرید
        </Text>
        <Text style={styles.tableContent}>
        "شیوه گرگ"
        </Text>
      </View>
      <View style={{width:responsiveWidth(20),padding:5,alignContent:'center',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Text style={styles.tableContent}>
         پرداخت آنلاین
        </Text>
        <Text style={styles.tableContentGreen}>
         موفق
        </Text>
      </View>
    </View>
    <View style={{display:'flex',flexDirection:'row-reverse',borderTopColor:'#d3d3d3',borderTopWidth:0.5,alignItems:'center'}}>
      <View style={{width:responsiveWidth(20),padding:5,borderLeftColor:'#d3d3d3',borderLeftWidth:0.5}}>
        <Text style={styles.tableContent}>
        1400/05/29
        </Text>
      </View>
      <View style={{width:responsiveWidth(25),padding:5,borderLeftColor:'#d3d3d3',borderLeftWidth:0.5}}>
        <Text style={styles.tableContentGreen}>
         12048 تومان
        </Text>
        
      </View>
      <View style={{width:responsiveWidth(25),padding:5,borderLeftColor:'#d3d3d3',borderLeftWidth:0.5}}>
        <Text style={styles.tableContent}>
         خرید
        </Text>
        <Text style={styles.tableContent}>
        "شیوه گرگ"
        </Text>
      </View>
      <View style={{width:responsiveWidth(20),padding:5,alignContent:'center',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Text style={styles.tableContent}>
         پرداخت آنلاین
        </Text>
        <Text style={styles.tableContentGreen}>
         موفق
        </Text>
      </View>
    </View>
    </View>
 
  </View>

 </View>
  </ScrollView>
    </View>
);
};

const styles = StyleSheet.create({
    container: {
        paddingRight:responsiveWidth(3),
        paddingLeft:responsiveWidth(3),
        paddingBottom:responsiveHeight(2),
        alignItems:"flex-end",
        marginTop:responsiveHeight(4),
    },

    menuTitle:{
...myFontStyle.UltraBold,
      color:Colors.darkGreen,
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
    backgroundColor:'#fff',
    marginTop:responsiveHeight(-13),
    height : responsiveHeight(25),
    width : '100%',
    transform : [ { scaleX : 1.7 } ],
    borderBottomStartRadius : 800,
    borderBottomEndRadius : 800,
    overflow : 'hidden',
    shadowColor: '#b8b8b8', shadowOpacity: 0.5, shadowRadius: 50,
    elevation:120,
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
    color:'#111',
    textAlign:'justify',
    lineHeight:30,
  },aboutTitle:{
  ...myFontStyle.bookTitle,
  color:'#111',
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
  color: '#111',
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
  ...myFontStyle.largeRegular,
  color:'#111',
  textAlign:'center'
},tableContent:{
  ...myFontStyle.normalRegular,
  color:'#111',
  textAlign:'center',
},tableContentGreen:{
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


