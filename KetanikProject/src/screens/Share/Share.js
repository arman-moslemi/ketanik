import React, {useState,useRef,useContext} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Drawer from 'react-native-drawer'
// import DrawerContent from './drewerContent/DrawerContent';
import { myFontStyle } from "@assets/Constance";
import { ThemeContext } from '../../../theme/theme-context';
import { getTranslation } from '@i18n/i18n';


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

 const Share = ({navigation }) => {
  const {  theme } = useContext(ThemeContext);

return (
    <View style={{backgroundColor:theme.backgroundColor,flex:1}}>
<View style={styles(theme).customRow}>
        
    
        </View>

    <View style={styles(theme).topBar}>

    <View style={{flex : 2,textAlign:"right"}}>
          <Text style={styles(theme).menuTitle}>{getTranslation('معرفی به دوستان')}</Text>
          </View>
    
        
        <View style={{flex :0.5}}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{}}>
            <Icon name={"arrow-back"} color={theme.iconWhite} size={30}/>
          </TouchableOpacity>
          </View>
    </View>
     
  <ScrollView>
 <View style={styles(theme).container}>
  <View style={styles(theme).aboutView}>
    <Text style={styles(theme).aboutText}>
    {getTranslation('لینک اختصاصی')}
    </Text>
  </View>
  <View style={styles(theme).takhfifRow}>
    
    <View style={styles(theme).discountInput}>
      <Text style={styles(theme).textCode}>
      ketab.com/user/237864
      </Text>
    </View>
    <View>
    <TouchableOpacity style={styles(theme).loginBtn}>
       <Text style={styles(theme).btnText}>{getTranslation('کپی')}</Text>
     </TouchableOpacity>
    </View>
</View>
 </View>
  </ScrollView>
    </View>
);
};

const styles= (theme) => StyleSheet.create({
    container: {
        paddingRight:responsiveWidth(5),
        paddingLeft:responsiveWidth(5),
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
      paddingTop:responsiveHeight(5),
      paddingRight:responsiveWidth(7),
      paddingLeft:responsiveWidth(7),
      zIndex:1000,
  },aboutView:{
    width:responsiveWidth(80),
    marginRight:'auto',
    marginLeft:'auto',
    textAlign:'center',
    marginTop:responsiveHeight(6),
  }
  ,aboutText:{
    ...myFontStyle.largeRegular,
    color:theme.textTitle,
    textAlign:'center',
    lineHeight:30,
  },takhfifRow:{
    display:'flex',
    flexDirection:'row-reverse',
    alignItems:'center',
    marginTop:responsiveHeight(5),
    paddingBottom:responsiveHeight(2),
   
},discountInput:{
    borderColor:Colors.darkGreen,
    borderWidth:1,
    borderRadius:10,
    width:responsiveWidth(60),
    marginRight:responsiveWidth(4),
    height:responsiveHeight(6),
    color:theme.textTitle,
    textAlign:'center',
    display:'flex',
    alignItems:'center',
    alignContent:'center',
},loginBtn:{
  backgroundColor:Colors.darkGreen,
  width:responsiveWidth(20),
  marginRight:responsiveWidth(2),
  height:responsiveHeight(6),
  alignContent:'center',
  alignItems:'center',
 justifyContent:'center',
  borderRadius:10,
  display:'flex',
},btnText:{
  ...myFontStyle.largBold,
  color:'#fff',
},textCode:{
  // ...myFontStyle.largeRegular,
  fontSize:20,
  marginTop:responsiveHeight(1),
  color:theme.textTitle,
}
  });

  export default Share;


