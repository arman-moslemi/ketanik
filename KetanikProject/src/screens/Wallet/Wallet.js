import React, {useState,useEffect,useContext} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView,FlatList} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { myFontStyle } from "@assets/Constance";


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

 const Wallet = ({navigation }) => {

return (
  <View style={styles.container}>
      <View style={styles.parent}>
			<View  style={styles.child}>
      
      		</View>

      	</View>
        <View style={{marginTop:responsiveHeight(-22)}}>
<Text style={styles.walletText}>
            موجودی کیف شما :
          </Text>
          <Text style={styles.walletValue}>
            25.000 تومان
          </Text>
</View>
<View style={{display:'flex',alignContent:'center',alignItems:'center',justifyContent:'center',flexDirection:'row-reverse',marginTop:responsiveHeight(6)}}>
  <TouchableOpacity style={styles.walletBox}>
  <Image source={require('@assets/images/excel.png')} style={styles.walletBtn} />
  <Text style={styles.walletBtnText}>
    خروجی اکسل
  </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.walletBox}>
  <Image source={require('@assets/images/plus.png')} style={styles.walletBtn} />
  <Text style={styles.walletBtnText}>
    افزایش موجودی
  </Text>
</TouchableOpacity>

</View>
     
<View style={{paddingRight:responsiveWidth(2),paddingLeft:responsiveWidth(2)}}>
<Text style={{...myFontStyle.checkBox2,color:'#000',textAlign:'right',display:'flex',justifyContent:'flex-start',marginTop:responsiveHeight(3)}}>
  تاریخچه تراکنش ها
</Text>
<View style={styles.historyBox}>
<View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
  <Image source={require('@assets/images/left.png')} style={styles.walletBtn2} />
  <View style={{display:'flex',flexDirection:'column'}}>
    <Text style={styles.walletTextBox}>
      واریز به کیف پول
    </Text>
    <Text style={styles.walletTextBox2}>
      توضیحات تراکنش اینجا نوشته شود
    </Text>
  </View>
  
  </View>
  <View style={{display:'flex',flexDirection:'column',alignItems:'flex-end',alignSelf:"flex-start"}}>
    <Text style={styles.walletTextBox4}>
      -5.000
    </Text>
    <Text style={styles.walletTextBox2}>
      25 تیر 1401
    </Text>
  </View>
</View>
<View style={styles.historyBox}>
  <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
  <Image source={require('@assets/images/right.png')} style={styles.walletBtn2} />
  <View style={{display:'flex',flexDirection:'column'}}>
    <Text style={styles.walletTextBox}>
      برداشت از کیف پول
    </Text>
    <Text style={styles.walletTextBox2}>
      توضیحات تراکنش اینجا نوشته شود
    </Text>
  </View>
  </View>

  <View style={{display:'flex',flexDirection:'column',alignItems:'flex-end',alignSelf:"flex-start"}}>
    <Text style={styles.walletTextBox3}>
      +5.000
    </Text>
    <Text style={styles.walletTextBox2}>
      25 تیر 1401
    </Text>
  </View>
  
</View>
</View>
  </View>
   
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
    alignItems:'center',
    backgroundColor:'#fff',
    flex:1,
    display:'flex',
    padding:25,
   
  }, parent : {
    marginTop:responsiveHeight(-4),
    height : responsiveHeight(30),
    width : '100%',
    transform : [ { scaleX : 1.5 } ],
    borderBottomStartRadius : 800,
    borderBottomEndRadius : 800,
    overflow : 'hidden',
},
child : {
    flex : 1,
    transform : [ { scaleX : 1 } ],
    backgroundColor:'#ffb921',

    alignItems : 'center',
    justifyContent : 'center',

},walletText:{
  color:'#fff',
  ...myFontStyle.registerText,
  textAlign:'center',
},walletValue:{
  ...myFontStyle.SplashText,
  color:'#fff',
  textAlign:'center',
},walletBox:{
  backgroundColor:'#fff',
  borderRadius:10,
  width:130,
  height:130,
  marginRight:responsiveWidth(3),
  marginLeft:responsiveWidth(3),
  shadowColor:'#00000075',
    shadowRadius: 100,
    shadowOpacity:10,
    elevation: 10,
    shadowOffset: {
      width: 10,
      height: 6
    },
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  alignContent:'center',
    
},walletBtn:{
      width:50,
      height:50,
},walletBtnText:{
  ...myFontStyle.registerText,
  marginTop:responsiveHeight(1),
  color:'#FF6900',
},historyBox:{
  width:responsiveWidth(90),
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
  
  flexDirection:'row-reverse',
  justifyContent:'space-between',
  padding:15,
},walletBtn2:{
  width:25,
  height:25,
  marginLeft:responsiveWidth(5),
},walletTextBox:{
  ...myFontStyle.registerText,
  color:'#000',
},walletTextBox2:{
  ...myFontStyle.productValueText,
  color:'#AAADB2',
  marginTop:5,
},walletTextBox3:{
  ...myFontStyle.productValueText,
  color:'#009959',
  marginTop:5,

 alignSelf:'flex-start',
},walletTextBox4:{
  ...myFontStyle.productValueText,
  color:'#FF2525',
  marginTop:5,

 alignSelf:'flex-start',
}
  });

  export default Wallet;


