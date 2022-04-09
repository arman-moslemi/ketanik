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

 const Search = ({navigation }) => {
  
   
  const [checked, setChecked] = React.useState('first');
return (
    <View style={{backgroundColor:'#fff',flex:1}}>

<View style={styles.customRow}>
        
    
    </View>
    <View style={styles.topBar}>

    <View style={{flex : 2,textAlign:"right"}}>
          <Text style={styles.menuTitle}>جستجو</Text>
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
    <View style={styles.lightGreenBack}>
<View>
  <Icon name={'search'} size={40} color={'#c1c1c1'}/>
</View>
<View>
  <TextInput placeholder='جستجو کتاب،نویسنده و ناشر...' style={styles.searchInput}/>
</View>
    </View>
    <View style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'row-reverse',marginTop:responsiveHeight(3),marginBottom:responsiveHeight(3)}}>
      <View>
        <Text style={styles.headText}>
          تاریخچه
        </Text>
      </View>
      <View>
        <TouchableOpacity style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
          <Text style={styles.delText}>پاک کردن</Text>
          <Icon name={'delete'} size={25} color={'#dc3545'}/>
        </TouchableOpacity>
      </View>
    </View>
   <ScrollView>
   <View style={{display:'flex',flexDirection:'column'}}>
      
      <View style={styles.searchList}>
        <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
          <TouchableOpacity>
            <Icon name={'clear'} color={'#c1c1c1'} size={20}/>
          </TouchableOpacity>
          <Text style={styles.searchResult}>
            صد سال تنهایی
          </Text>
        </View>
        <View style={{}}>
          <Image source={require('@assets/images/book1.jpg')} style={styles.imageSearch}/>
        </View>
      </View>
      <View style={styles.searchList}>
        <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
          <TouchableOpacity>
            <Icon name={'clear'} color={'#c1c1c1'} size={20}/>
          </TouchableOpacity>
          <Text style={styles.searchResult}>
            صد سال تنهایی
          </Text>
        </View>
        <View style={{}}>
          <Image source={require('@assets/images/book1.jpg')} style={styles.imageSearch}/>
        </View>
      </View>
  
      </View>
   </ScrollView>
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
  },lightGreenBack:{
    backgroundColor:Colors.lightGreen,
    height:responsiveHeight(8),
    padding:10,
    borderRadius:10,
    width:responsiveWidth(90),
    display:'flex',
    flexDirection:'row-reverse',
    marginRight:'auto',
    marginLeft:'auto',
    marginTop:responsiveHeight(7),
    alignItems:'center'
  },aboutView:{
    display:'flex',
    
    alignSelf:'center'
  },searchInput:{
    ...myFontStyle.normalRegular,
  },headText:{
    ...myFontStyle.textOnImg,
    color:'#1a1a1a',
  },delText:{
    ...myFontStyle.largeRegular,
    color:'#dc3545',
  },searchList:{
    display:'flex',
    flexDirection:'row-reverse',
    paddingBottom:responsiveHeight(1),
    borderBottomColor:'#c1c1c1',
    borderBottomWidth:0.5,
    justifyContent:'space-between',
    paddingTop:responsiveHeight(1),
  },searchResult:{
    ...myFontStyle.largeRegular,
    color:'#111',
    marginRight:responsiveWidth(5),
  },imageSearch:{
    width:responsiveWidth(15),
    borderRadius:5,
    resizeMode:'cover',
    height:responsiveHeight(8),
    
  }
  });

  export default Search;


