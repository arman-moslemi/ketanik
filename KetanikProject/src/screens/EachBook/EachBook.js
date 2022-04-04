import React, { useState,useEffect } from 'react';
import { myFontStyle } from "@assets/Constance";
import { View, Text , StyleSheet,Image, TouchableOpacity,Button,ScrollView,FlatList} from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors} from "@assets/Colors";
import {Input} from '@components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from "react-native-modal";
import ShowMore from 'react-native-show-more-button';
// create a component
// const [showBox, setShowBox] = useState(false);
// const onClick = () => setShowBox(true);
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

const FirstRoute = () => (
 <></>
);

const SecondRoute = () => (
 
<ScrollView>
<View style={{ flex: 1}}>

     <View style={{display:'flex',flexDirection:'row-reverse',marginTop:responsiveHeight(5),justifyContent:"space-between"}}>
       <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
          <Image source={require('@assets/images/book1.jpg')} style={styles.writerImg}/>
          <View>
            <Text style={styles.writerName}>
              لی باردوگو
            </Text>
            <Text style={styles.writerName2}>
         نویسنده
            </Text>
          </View>
       </View>
       <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
          <Image source={require('@assets/images/book2.jpg')} style={styles.writerImg}/>
          <View>
            <Text style={styles.writerName}>
            بهناز عسگری
            </Text>
            <Text style={styles.writerName2}>
مترجم            </Text>
          </View>
       </View>
     </View>
     <View style={styles.bookDetilTable}>
       <View style={{display:'flex',flexDirection:'row-reverse'}}>
         <Icon name={'fiber-manual-record'} color={Colors.darkGreen} size={20}/>
         <Text style={styles.table1}>
           نام کتاب
         </Text>
       </View>
     </View>
  </View>
</ScrollView>
);
const ThirdRoute = () => (
<ScrollView>
<View style={styles.bookDescriptionBox}>
  <Text style={styles.bookDescription}>
  اولین رمان از سهگانه گریشا است که توسط نویسنده آمریکایی لی
باردوگو نوشته شده است. «ستر» سایه نواری از جنس تاریکی بی
پایان و پر از هیولاهای خونخوار است که کشور «راوکا» را دربر
گرفته است. از طرف دیگر راوکا در محاصره دشمنان و در شرف از
هم فروپاشیدن است. سرنوشت کشور به یک دخترک پناهنده گره
خورد
  </Text>

</View>
</ScrollView>
 );
const renderScene = SceneMap({
  comment: FirstRoute,
  present: ThirdRoute,
  detail: SecondRoute,
 
});
 const EachBook = ({navigation }) => {
  // const [showSearch, setshowSearch] = useState(false);
  // const onClick = () =>{
  //   setshowSearch(!showSearch);
  // };
  const [index, setIndex] = React.useState(2);
  const [routes] = React.useState([
    { key: 'comment', title: 'نظرات' },
   
    { key: 'detail', title: 'جزئیات' },
    { key: 'present', title: 'معرفی کتاب' },
   
  ]);
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicatorStyle}
      style={styles.tabBar}
      getLabelText={({route}) => route.title}
      renderLabel={({route, focused, color}) =>
        focused ? (
          <Text style={styles.tabBarText}>{route.title}</Text>
        ) : (
          <Text style={styles.tabBarText2}>{route.title}</Text>
        )
      }
    />
  );
  const keyExtractor = item => {
    return item.id;
  };const data=[1,2,3,4,5]
  const _render = (item, index) => {
    console.log(item)
    return (
      <View style={styles.cardBox}>
      <Image source={require('@assets/images/book3.jpg')} style={styles.bookImg}/>
      <Text style={styles.bookName}>
      {truncate("به سوی من بازگرد",20)}
      </Text>
      <View style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between'}}>
      <Text style={styles.bookName}>
      29.000ت
      </Text>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
      <Text style={styles.bookName}>
      4.5
      </Text>
      <Icon name={'star'} size={15} color={'#ffc93d'} style={{}}/>
      </View>
      </View>
     </View>
    );
  };
return (
 
<View style={{ flex: 1,padding:0,backgroundColor:'#fff'}}>
    <View style={styles.greenBack}>
    <View style={styles.topBar}>


    <View style={styles.rightCol}>
      
    <TouchableOpacity  style={{}}>
    <Image source={require('@assets/images/save.png')} style={styles.saveBtn}/>
      </TouchableOpacity>
      <TouchableOpacity style={{}}>
        <Image source={require('@assets/images/share.png')} style={styles.saveBtn}/>
      </TouchableOpacity>
    </View>
    <View style={styles.leftCol}>
    <TouchableOpacity style={{}}>
        <Image source={require('@assets/images/back.png')} style={styles.saveBtn}/>
      </TouchableOpacity>
     
</View>
      
</View>


    </View>
    
    <View style={styles.bookDetailBox}>
<Image source={require('@assets/images/book1.jpg')} style={styles.bookImg2}/>
<Text style={styles.eachBookName}>کتاب سایه و استخوان</Text>
<Text style={styles.eachBookDetail}>اثر لی باردوگو</Text>
<Text style={styles.eachBookDetail}>29.000 تومان</Text>
<View style={styles.rateRow}>
<Text style={styles.eachBookDetail2}>4.5</Text>
<Icon name={'star'} color={'#ffc93d'} size={20}/>
</View>
</View>
<View style={styles.btnRow}>
<TouchableOpacity style={styles.loginBtn}>
       <Text style={styles.btnText}>خرید</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.whiteBtn}>
       <Text style={styles.btnText2}>نسخه نمونه</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.greenBtn2}>
      <Icon name={'keyboard-control'} size={30} color={'#fff'}/>
     </TouchableOpacity>
</View>


      <View style={styles.tabViewBox}>
      <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width:responsiveWidth(90) }}
    />
      </View> 
{/*      
      <FlatList
       
       keyExtractor={keyExtractor}
       data={data}
       renderItem={_render}
       horizontal={true}
       style={{marginTop:responsiveHeight(1),marginBottom:responsiveHeight(1)}}
       
     /> */}
  
  </View>

    
);
};

const styles = StyleSheet.create({
loginImg:{
  width:responsiveWidth(100),
  resizeMode:'contain',
  marginTop:responsiveHeight(-10)
},
topBar:{
  display:'flex',
  flexDirection:'row-reverse',
  paddingTop:responsiveHeight(0),
  paddingRight:responsiveWidth(7),
  paddingLeft:responsiveWidth(7),
  zIndex:1000,
  justifyContent:'space-between',
  alignItems:'center',
},

menuTitle:{
...myFontStyle.UltraBold,
  color:Colors.darkGreen,
  zIndex:10000,
},
tabBar:{
  backgroundColor:"transparent",
  elevation: 0,
  paddingBottom:responsiveHeight(2),
  borderBottomColor:Colors.borderColor,
  borderBottomWidth:2
},
tabBarText:{
  color: "#000",
  ...myFontStyle.mediumBold
},
tabBarText2:{
  color: "#000",
  ...myFontStyle.mediumRegular
},
indicatorStyle:{
  backgroundColor: Colors.darkGreen,
    marginBottom: responsiveHeight(-0.3),
    marginLeft: responsiveWidth(0),
    
    height:responsiveHeight(0.5),
    borderRadius:5
},tabViewBox:{
  flex:1,
  width:responsiveWidth(80),
  marginTop:responsiveHeight(3),
  width:responsiveWidth(90),
  marginRight:'auto',
  marginLeft:'auto'
},
greenBack:{
  backgroundColor:'#f1f5ec',
   flexDirection:"row-reverse",
  justifyContent:'flex-start',
    position:"absolute",
    top:responsiveHeight(0),
    paddingRight:responsiveWidth(5),
    paddingLeft:responsiveWidth(5),
    alignItems:'flex-start',
   
    height : responsiveHeight(54),
    width : '100%',
    transform : [ { scaleX : 1.1 } ],
    borderBottomStartRadius : 150,
    borderBottomEndRadius : 150,
    overflow : 'hidden',
    justifyContent:'center'
},rightCol:{
 display:'flex',
 flexDirection:'row-reverse',
 flex:0.5,
},leftCol:{
  flex:0.5,
}
,saveBtn:{
  width:25,
  resizeMode:'contain',
  marginLeft:responsiveWidth(5),
},bookImg2:{
  width:responsiveWidth(45),
  height:responsiveHeight(28),
  zIndex:2000,
marginRight:'auto',
marginLeft:'auto',
marginTop:responsiveHeight(10),
  resizeMode:'contain',
  borderRadius:20,
},eachBookName:{
    ...myFontStyle.UltraBold,
    color:'#000',
    textAlign:'center',
    marginTop:responsiveHeight(2),
},bookDetailBox:{
 
  textAlign:'center',
},eachBookDetail:{
  ...myFontStyle.bookWriter3,
  color:'#000',
  textAlign:'center',
  
  
},eachBookDetail2:{
  ...myFontStyle.UltraBold,
  color:'#000',
  textAlign:'center',
  
  
},rateRow:{

  display:'flex',
  marginRight:'auto',
  marginLeft:'auto',
  flexDirection:'row',
  alignItems:'center',
},btnRow:{
  marginRight:'auto',
  marginLeft:'auto',
  marginTop:responsiveHeight(0.5),
  display:'flex',
  flexDirection:'row-reverse',
},loginBtn:{
  backgroundColor:Colors.darkGreen,
  width:responsiveWidth(35),
  
  height:responsiveHeight(6),
  alignContent:'center',
  alignItems:'center',
  paddingTop:responsiveHeight(0.8),
  borderRadius:10,
 
},cardBox:{
  backgroundColor:'#f1f5ec',
  height:responsiveHeight(18),
  width:responsiveWidth(34),
  borderRadius:10,
  textAlign:'center',
  padding:10,
  marginLeft:10,

},bookImg:{
  height:responsiveHeight(14),
  width:responsiveWidth(28),
  resizeMode:'cover',
  marginRight:'auto',
  marginLeft:'auto',
  marginTop:responsiveHeight(-4),
  borderRadius:10,
},bookName:{
  color:'#111',
  ...myFontStyle.normalRegular,
  marginTop:responsiveHeight(0.5),
},priceRed:{
  color:'#dc3545',
  ...myFontStyle.normalRegular,
  marginTop:responsiveHeight(0.5),
},priceStroke:{
...myFontStyle.normalRegular,
color:'#111',
textDecorationLine: 'line-through',
marginTop:responsiveHeight(0.5),
marginRight:4,
},rowTitle:{
  ...myFontStyle.largBold,
  color:'#111',
},seeAll:{
  ...myFontStyle.largeRegular,
  color:'#111',
},
dotContainer: {
backgroundColor: 'transparent',
position: 'absolute',
bottom: responsiveHeight(2)
},slider: {
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius:10,
  paddingRight:responsiveWidth(0),
  paddingLeft:responsiveWidth(0),
  marginTop:responsiveHeight(5)
},
imageSlider:
{borderRadius:10,height:responsiveHeight(20),width:responsiveWidth(90)}
, viewBox: {
paddingHorizontal: responsiveWidth(10),
justifyContent: 'center',
width: responsiveWidth(100),
padding: 0,
alignItems: 'center',
height: "100%",

},btnText:{
  ...myFontStyle.UltraBold,
  color:'#fff',
},whiteBtn:{
  width:responsiveWidth(35),
  height:responsiveHeight(6),
  backgroundColor:'#fff',
  borderColor:Colors.darkGreen,
  color:Colors.darkGreen,
  borderWidth:2,
  borderRadius:10,
  alignContent:'center',
  alignItems:'center',
  paddingTop:responsiveHeight(0.8),
  marginRight:10,
  marginLeft:10,
},btnText2:{
  ...myFontStyle.UltraBold,
  color:Colors.darkGreen,
  
},greenBtn2:{
  backgroundColor:Colors.darkGreen,
  width:responsiveWidth(12),

  height:responsiveHeight(6),
  alignContent:'center',
  alignItems:'center',
  paddingTop:responsiveHeight(0.8),
  borderRadius:10,
},bookDescription:{
  color:'#1a1a1a',
  ...myFontStyle.bookWriter3,
  marginTop:responsiveHeight(2),
  
  },writerName:{
    color:'#1a1a1a',
    ...myFontStyle.largBold,
  },writerName2:{
    ...myFontStyle.normalRegular,
    color:'#1a1a1a'
  },writerImg:{
    height:60,
    width:60,
    borderRadius:200,
    marginLeft:10,
  }

});

  export default EachBook;

//make this component available to the <app></app>
