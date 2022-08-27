import React, {useState,useEffect,useContext} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView,Alert} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Drawer from 'react-native-drawer'
// import DrawerContent from './drewerContent/DrawerContent';
import { myFontStyle } from "@assets/Constance";
import { RadioButton } from 'react-native-paper';
import { ThemeContext } from '../../../theme/theme-context';
import AsyncStorage from  '@react-native-async-storage/async-storage';
import axios from 'axios';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";

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
  const {  theme } = useContext(ThemeContext);
  const [cost,setCost]=useState(0);
  const [defcost,setDefCost]=useState(0);

  const [checked, setChecked] = React.useState('first');
  useEffect(() => {
  
    mutLogin();


}, []);
const  mutLogin=async()=> {
  const state = await AsyncStorage.getItem("@user");
  const lang = await AsyncStorage.getItem("@langs");

  
  axios.post(apiUrl+'FactorWallet',{CustomerID:state},{ headers: {
    lang: lang
  }})
  .then(function (response) {
    const message = response.data;
    const result = response.data.result;
    console.log(message);
  
    if(result == "true"){
        
  
  setDefCost(response.data.CostData?.Money)
      // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                      }else{
    }
  })
  .catch(function (error) {
    console.log(error);
  })
 
    
        };
  const  dargah=async()=> {
    const state = await AsyncStorage.getItem("@user");

    console.log(state);
    console.log(cost);

    axios.post(apiUrl+'Dargah',{CostTotal:cost,CustomerID:state,Type:2})
    .then(function (response) {
      const message = response.data;
      const result = response.data.result;
    
      if(result == "true"){
        console.log(response.data.Data)
        let userObj = JSON.parse(response.data.Data);
        console.log(userObj.id)
        navigation.navigate("Dargah",{id:userObj.id})        
                        }else{
      Alert.alert("",response.data.message)
      }
    })
    .catch(function (error) {
      console.log(error);
    })
   
      
          };
return (
    <View style={{backgroundColor:theme.backgroundColor,flex:1}}>

<View style={styles(theme).customRow}>
        
    
    </View>
    <View style={styles(theme).topBar}>

    <View style={{flex : 2,textAlign:"right"}}>
          <Text style={styles(theme).menuTitle}>شارژ کیف پول</Text>
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
    <Text style={styles(theme).aboutTitle}>
     مبلغ فعلی کیف پول : {defcost}
    </Text>
    <View style={styles(theme).radioRow}>
  <View style={styles(theme).radioView}>
  <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => {setChecked('first');setCost(10)}}
        color={Colors.darkGreen}
      />
  <Text style={styles(theme).radionText}>
     10 sek
  </Text>
      </View>
  </View>
  <View style={styles(theme).radioRow}>
  <View style={styles(theme).radioView}>
  <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => {setChecked('second');setCost(20)}}
        color={Colors.darkGreen}
      />
  <Text style={styles(theme).radionText}>
     20 sek
  </Text>
      </View>
  </View>
  <View style={styles(theme).radioRow}>
  <View style={styles(theme).radioView}>
  <RadioButton
        value="third"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => {setChecked('third');setCost(50)}}
        color={Colors.darkGreen}
      />
  <Text style={styles(theme).radionText}>
    50 sek
  </Text>
      </View>
  </View>
  <View style={styles(theme).radioRow}>
  <View style={styles(theme).radioView}>
  <RadioButton
        value="four"
        status={ checked === 'four' ? 'checked' : 'unchecked' }
        onPress={() => {setChecked('four');setCost(100)}}
        color={Colors.darkGreen}
      />
  <Text style={styles(theme).radionText}>
     100 sek
  </Text>
      </View>
  </View>
  <View style={styles(theme).radioRow}>
  <View style={styles(theme).radioView}>
  <RadioButton
        value="five"
        status={ checked === 'five' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('five')}
        color={Colors.darkGreen}
      />
  <Text style={styles(theme).radionText}>
     200 sek
  </Text>
      </View>
  </View>
  <View style={{display:'flex',flexDirection:'row-reverse',marginTop:responsiveHeight(5),justifyContent:'space-between'}}>
   
    <TouchableOpacity onPress={()=>dargah()} style={styles(theme).payBtn}>
       <Text style={styles(theme).btnText}>پرداخت</Text>
     </TouchableOpacity>
    

    <TouchableOpacity style={styles(theme).cancelBtn}>
       <Text style={styles(theme).btnText2}>انصراف</Text>
     </TouchableOpacity>
   
  </View>
  <View style={styles(theme).greenBack}>
<Icon name={'error'} color={'#dc3545'} size={30}/>
<Text style={styles(theme).alertText}>
لطفا توجه داشته باشید امکان استرداد مبلغ واریز شده وجود ندارد
  </Text>
  </View>
  <TouchableOpacity onPress={()=>navigation.navigate("Factor")} style={styles(theme).editProfileBtn2}>
      <View style={{display:'flex',flexDirection:'row-reverse'}}>
        
        <Text style={styles(theme).btnText3}>مشاهده سابقه تراکنش های موفق</Text>
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

  export default Wallet;


