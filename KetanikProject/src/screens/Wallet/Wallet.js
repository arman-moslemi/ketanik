import React, {useState,useRef} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView} from 'react-native';


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

 const Wallet = ({navigation }) => {
  
   
  const [checked, setChecked] = React.useState('first');
return (
    <View style={{backgroundColor:'#fff',flex:1}}>

<View style={styles.customRow}>
        
    
    </View>
    <View style={styles.topBar}>

    <View style={{flex : 2,textAlign:"right"}}>
          <Text style={styles.menuTitle}>شارژ کیف پول</Text>
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
    <Text style={styles.aboutTitle}>
     مبلغ فعلی کیف پول : 0
    </Text>
    <View style={styles.radioRow}>
  <View style={styles.radioView}>
  <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
        color={Colors.darkGreen}
      />
  <Text style={styles.radionText}>
     10 یورو
  </Text>
      </View>
  </View>
  <View style={styles.radioRow}>
  <View style={styles.radioView}>
  <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
        color={Colors.darkGreen}
      />
  <Text style={styles.radionText}>
     20 یورو
  </Text>
      </View>
  </View>
  <View style={styles.radioRow}>
  <View style={styles.radioView}>
  <RadioButton
        value="third"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}
        color={Colors.darkGreen}
      />
  <Text style={styles.radionText}>
    50 یورو
  </Text>
      </View>
  </View>
  <View style={styles.radioRow}>
  <View style={styles.radioView}>
  <RadioButton
        value="four"
        status={ checked === 'four' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('four')}
        color={Colors.darkGreen}
      />
  <Text style={styles.radionText}>
     100 یورو
  </Text>
      </View>
  </View>
  <View style={styles.radioRow}>
  <View style={styles.radioView}>
  <RadioButton
        value="five"
        status={ checked === 'five' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('five')}
        color={Colors.darkGreen}
      />
  <Text style={styles.radionText}>
     200 یورو
  </Text>
      </View>
  </View>
  <View style={{display:'flex',flexDirection:'row-reverse',marginTop:responsiveHeight(5),justifyContent:'space-between'}}>
   
    <TouchableOpacity style={styles.payBtn}>
       <Text style={styles.btnText}>پرداخت</Text>
     </TouchableOpacity>
    

    <TouchableOpacity style={styles.cancelBtn}>
       <Text style={styles.btnText2}>انصراف</Text>
     </TouchableOpacity>
   
  </View>
  <View style={styles.greenBack}>
<Icon name={'error'} color={'#dc3545'} size={30}/>
<Text style={styles.alertText}>
لطفا توجه داشته باشید امکان استرداد مبلغ واریز شده وجود ندارد
  </Text>
  </View>
  <TouchableOpacity style={styles.editProfileBtn2}>
      <View style={{display:'flex',flexDirection:'row-reverse'}}>
        
        <Text style={styles.btnText3}>مشاهده سابقه تراکنش های موفق</Text>
      </View>
      <View>
        <Icon name={'chevron-left'} size={20} color={'#111'}/>
      </View>
    </TouchableOpacity>
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
}
  });

  export default Wallet;


