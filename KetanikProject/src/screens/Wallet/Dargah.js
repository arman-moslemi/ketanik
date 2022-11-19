import React, {useState,useEffect,useContext} from 'react';
import {View, Text, TouchableOpacity,Image,ScrollView} from 'react-native';


import { StyleSheet  } from 'react-native';
import { WebView  } from 'react-native-webview';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Drawer from 'react-native-drawer'
// import DrawerContent from './drewerContent/DrawerContent';
import { myFontStyle } from "@assets/Constance";
import { RadioButton } from 'react-native-paper';
import { ThemeContext } from '../../../theme/theme-context';
import AsyncStorage from  '@react-native-async-storage/async-storage';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";
import { getTranslation } from '@i18n/i18n';

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

 const Dargah = ({navigation,route }) => {
  const {  theme } = useContext(ThemeContext);
  const {id} = route?.params ?? {};
  const [customerID, setCustomerID] = useState();
  useEffect(() => {
  
    dargah()
}, []);
const  dargah=async()=> {
  const state = await AsyncStorage.getItem("@user");
  setCustomerID(state)
}
const backs=()=> {
  navigation.reset({
    index: 0,
    routes: [{ name: 'TabBar' }]
})
}
return (
    <ScrollView style={{backgroundColor:theme.backgroundColor,flex:1}}>

<View style={styles(theme).customRow}>
        
    
    </View>
    <View style={styles(theme).topBar}>

    <View style={{flex : 2,textAlign:"right"}}> 
          <Text style={styles(theme).menuTitle}>{getTranslation("درگاه")}</Text>
          </View>
    
        
        <View style={{flex :0.5}}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{}}>
            <Icon name={"arrow-back"} color={theme.iconWhite} size={30}/>
          </TouchableOpacity>
          </View>

    </View>
    <View >
 {/* <View style={styles(theme).container}> */}
 <WebView
        source={{
          // uri: 'https://test-www.payson.se/embedded/checkout?id='+id
          uri:
    apiUrl+'DargahMain/'+customerID+"T"+id+'' ,method:'GET'

        //   uri: 'http://www.google.com'
        }}
        style={{ marginTop: responsiveHeight(5),height:responsiveHeight(95) }}
      />
    {/* </View> */}
    <TouchableOpacity
     onPress={()=>
 backs()
} 
 style={styles(theme).payBtn}>

       <Text style={styles(theme).btnText}>{getTranslation("بازگشت")}</Text>
     </TouchableOpacity>   
      </View>
    </ScrollView>
);
};

const styles = (theme) =>  StyleSheet.create({
    container: {
        paddingRight:responsiveWidth(3),
        paddingLeft:responsiveWidth(3),
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
    height : responsiveHeight(22),
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
    textAlign:'right',
    marginTop:responsiveHeight(3),
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
  color: theme.textTitle,
  ...myFontStyle.episodeName,
  // lineHeight:responsiveHeight(3)

},payBtn:{
  backgroundColor:Colors.darkGreen,
  width:responsiveWidth(38),
  marginTop:responsiveHeight(1),
  marginBottom:responsiveHeight(1),
  height:responsiveHeight(6),
  alignContent:'center',
  alignItems:'center',
display:'flex',
alignContent:'center',
alignSelf:'center',
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
  alignItems:'center',
  flexDirection:'row-reverse',
  paddingRight:responsiveWidth(0),
  paddingLeft:responsiveWidth(0),
  paddingTop:responsiveHeight(1),
  paddingBottom:responsiveHeight(1),
 marginTop:responsiveHeight(3),
},btnText3:{
  ...myFontStyle.largeRegular,
  color:'#111',
  marginRight:responsiveWidth(2),
}
  });

  export default Dargah;


