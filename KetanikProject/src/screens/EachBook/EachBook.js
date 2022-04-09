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
 <ScrollView>
   <View style={styles.commentView}>
  
  <View style={{width:responsiveWidth(65),marginLeft:responsiveWidth(5)}}>
    <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
      <Icon name={'star'} color={'#ffc93d'} size={20}/>
      <View style={styles.lineBack}>
        <View style={styles.lineFront1}>

        </View>
      </View>
    </View>
    <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
      <Icon name={'star'} color={'#ffc93d'} size={20}/>
      <View style={styles.lineBack}>
        <View style={styles.lineFront2}>

        </View>
      </View>
    </View>
    <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
      <Icon name={'star'} color={'#ffc93d'} size={20}/>
      <View style={styles.lineBack}>
        <View style={styles.lineFront3}>

        </View>
      </View>
    </View>
    <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
      <Icon name={'star'} color={'#ffc93d'} size={20}/>
      <View style={styles.lineBack}>
        <View style={styles.lineFront4}>

        </View>
      </View>
    </View>
    <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
      <Icon name={'star'} color={'#ffc93d'} size={20}/>
      <View style={styles.lineBack}>
        <View style={styles.lineFront5}>

        </View>
      </View>
    </View>
    
  </View>
  <View style={{width:responsiveWidth(20)}}>
    <Text style={styles.textRate}>
      4.5
    </Text>
    <View style={{display:'flex',flexDirection:'row-reverse',justifyContent:'flex-end',marginTop:responsiveHeight(-1),marginBottom:responsiveHeight(1)}}>
      <Icon name={'star'} color={Colors.darkGreen} size={15}/>
      <Icon name={'star'} color={Colors.darkGreen} size={15}/>
      <Icon name={'star'} color={Colors.darkGreen} size={15}/>
      <Icon name={'star'} color={Colors.darkGreen} size={15}/>
      <Icon name={'star'} color={Colors.darkGreen} size={15}/>
    </View>
    <View style={{display:'flex',flexDirection:'row-reverse'}}>
      <Icon name={'person'} color={'#1a1a1a'} size={25}/>
      <Text style={styles.eachBookDetail3}>
        نظر (141)
      </Text>
    </View>
  </View>
   </View>
   <View style={styles.commentGreenBox}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        <View>
        <Image source={require('@assets/images/book3.jpg')} style={styles.writerImg}/>
        </View>
        <View>
          <Text style={styles.eachBookDetail5}>نرگس عامری</Text>
         <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
         <View style={{display:'flex',flexDirection:'row-reverse',justifyContent:'flex-end',marginTop:responsiveHeight(1),marginBottom:responsiveHeight(1)}}>
      <Icon name={'star'} color={Colors.darkGreen} size={15}/>
      <Icon name={'star'} color={Colors.darkGreen} size={15}/>
      <Icon name={'star'} color={Colors.darkGreen} size={15}/>
      <Icon name={'star'} color={Colors.darkGreen} size={15}/>
      <Icon name={'star'} color={Colors.darkGreen} size={15}/>
    </View>
    <Text style={styles.eachBookDetail3}>01/01/12</Text>
         </View>
        </View>
      </View>
      <Text style={styles.bookDescription}>
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
صنعت چاپ و با استفاده از طراحان گرافیک است.
      </Text>
      <TouchableOpacity style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        
        <View>
        <Text style={styles.bookDescription}>14 <Icon name={'favorite-border'} size={20}/></Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={styles.commentGreenBox}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        <View>
        <Image source={require('@assets/images/book3.jpg')} style={styles.writerImg}/>
        </View>
        <View>
          <Text style={styles.eachBookDetail5}>نرگس عامری</Text>
         <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
         <View style={{display:'flex',flexDirection:'row-reverse',justifyContent:'flex-end',marginTop:responsiveHeight(1),marginBottom:responsiveHeight(1)}}>
      <Icon name={'star'} color={Colors.darkGreen} size={15}/>
      <Icon name={'star'} color={Colors.darkGreen} size={15}/>
      <Icon name={'star'} color={Colors.darkGreen} size={15}/>
      <Icon name={'star'} color={Colors.darkGreen} size={15}/>
      <Icon name={'star'} color={Colors.darkGreen} size={15}/>
    </View>
    <Text style={styles.eachBookDetail3}>01/01/12</Text>
         </View>
        </View>
      </View>
      <Text style={styles.bookDescription}>
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
صنعت چاپ و با استفاده از طراحان گرافیک است.
      </Text>
      <TouchableOpacity style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        
        <View>
        <Text style={styles.bookDescription}>14 <Icon name={'favorite-border'} size={20}/></Text>
        </View>
      </TouchableOpacity>
    </View>
 </ScrollView>
);

const SecondRoute = () => (
 
<ScrollView>
<View style={{ flex: 1}}>

     <View style={{display:'flex',flexDirection:'row-reverse',marginTop:responsiveHeight(5),justifyContent:"space-between",marginBottom:responsiveHeight(5)}}>
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
       <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
         <Icon name={'fiber-manual-record'} color={Colors.darkGreen} size={10}/>
         <Text style={styles.table1}>
           نام کتاب
         </Text>
       </View>
       <View style={{flex:0.5}}>
       <Text style={styles.table2}>
         سایه و استخوان
       </Text>
       </View>
     </View>
     <View style={styles.bookDetilTable}>
       <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
         <Icon name={'fiber-manual-record'} color={Colors.darkGreen} size={10}/>
         <Text style={styles.table1}>
          نویسنده
         </Text>
       </View>
       <View style={{flex:0.5}}>
       <Text style={styles.table2}>
         لی باردوگو
       </Text>
       </View>
     </View>
     <View style={styles.bookDetilTable}>
       <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
         <Icon name={'fiber-manual-record'} color={Colors.darkGreen} size={10}/>
         <Text style={styles.table1}>
          مترجم
         </Text>
       </View>
       <View style={{flex:0.5}}>
       <Text style={styles.table2}>
         بهناز عسگری
       </Text>
       </View>
     </View>
     <View style={styles.bookDetilTable}>
       <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
         <Icon name={'fiber-manual-record'} color={Colors.darkGreen} size={10}/>
         <Text style={styles.table1}>
         ناشر
         </Text>
       </View>
       <View style={{flex:0.5}}>
       <Text style={styles.table2}>
        نقش و نگار
       </Text>
       </View>
     </View>
     <View style={styles.bookDetilTable}>
       <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
         <Icon name={'fiber-manual-record'} color={Colors.darkGreen} size={10}/>
         <Text style={styles.table1}>
          دسته
         </Text>
       </View>
       <View style={{flex:0.5}}>
       <Text style={styles.table2}>
        فانتزی_تخیلی
       </Text>
       </View>
     </View>
     <View style={styles.bookDetilTable}>
       <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
         <Icon name={'fiber-manual-record'} color={Colors.darkGreen} size={10}/>
         <Text style={styles.table1}>
         تعداد صفحات
         </Text>
       </View>
       <View style={{flex:0.5}}>
       <Text style={styles.table2}>
         316
       </Text>
       </View>
     </View>
     <View style={styles.bookDetilTable}>
       <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
         <Icon name={'fiber-manual-record'} color={Colors.darkGreen} size={10}/>
         <Text style={styles.table1}>
        زبان
         </Text>
       </View>
       <View style={{flex:0.5}}>
       <Text style={styles.table2}>
        فارسی
       </Text>
       </View>
     </View>
     <View style={styles.bookDetilTable}>
       <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
         <Icon name={'fiber-manual-record'} color={Colors.darkGreen} size={10}/>
         <Text style={styles.table1}>
         سایز
         </Text>
       </View>
       <View style={{flex:0.5}}>
       <Text style={styles.table2}>
      1.6MB
       </Text>
       </View>
     </View>
     <View style={styles.bookDetilTable}>
       <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
         <Icon name={'fiber-manual-record'} color={Colors.darkGreen} size={10}/>
         <Text style={styles.table1}>
         تاریخ انتشار
         </Text>
       </View>
       <View style={{flex:0.5}}>
       <Text style={styles.table2}>
       1398_2021
       </Text>
       </View>
     </View>
     <View style={styles.bookDetilTable}>
       <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
         <Icon name={'fiber-manual-record'} color={Colors.darkGreen} size={10}/>
         <Text style={styles.table1}>
          شابک
         </Text>
       </View>
       <View style={{flex:0.5}}>
       <Text style={styles.table2}>
       978-6009553457
       </Text>
       </View>
     </View>
     <View style={styles.bookDetilTable}>
       <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
         <Icon name={'fiber-manual-record'} color={Colors.darkGreen} size={10}/>
         <Text style={styles.table1}>
         راوی
         </Text>
       </View>
       <View style={{flex:0.5}}>
       <Text style={styles.table2}>
       سحر جعفری جوزانی
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
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
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
     <TouchableOpacity style={styles.greenBtn2} onPress={toggleModal}>
      <Icon name={'keyboard-control'} size={30} color={'#fff'}/>
     </TouchableOpacity>
</View>
<Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)} >
 <View style={styles.moreModal}>
 
<View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center',marginBottom:responsiveHeight(5)}}>
  <View>
  <Image source={require('@assets/images/book1.jpg')} style={styles.modalImg}/>
  </View>
  <View>
    <Text style={styles.eachBookDetail4}>
      کتاب سایه و استخوان
    </Text>
    <Text style={styles.eachBookDetail3}>
     اثر لی باردوگو
    </Text>
  </View>
</View>
<TouchableOpacity style={{borderTopWidth:0.5,borderTopColor:'#c1c1c1',display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'row-reverse',paddingTop:responsiveHeight(2),paddingBottom:responsiveHeight(2)}}>
<View>
<Text style={styles.eachBookDetail3}>
     فهرست کتاب
    </Text>
</View>
<View>
  <Image source={require('@assets/images/detail.png')} style={styles.miniIcon}/>
</View>
</TouchableOpacity>
<TouchableOpacity style={{borderTopWidth:0.5,borderTopColor:'#c1c1c1',display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'row-reverse',paddingTop:responsiveHeight(2),paddingBottom:responsiveHeight(2)}}>
<View>
<Text style={styles.eachBookDetail3}>
     ارسال هدیه
    </Text>
</View>
<View>
  <Image source={require('@assets/images/gift.png')} style={styles.miniIcon}/>
</View>
</TouchableOpacity>
<TouchableOpacity style={{borderTopWidth:0.5,borderTopColor:'#c1c1c1',display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'row-reverse',paddingTop:responsiveHeight(2),paddingBottom:responsiveHeight(2)}}>
<View>
<Text style={styles.eachBookDetail3}>
    افزودن به کتاب های دلخواه
    </Text>
</View>
<View>
  <Image source={require('@assets/images/save.png')} style={styles.miniIcon}/>
</View>
</TouchableOpacity>
<TouchableOpacity style={{borderTopWidth:0.5,borderTopColor:'#c1c1c1',display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'row-reverse',paddingTop:responsiveHeight(2),paddingBottom:responsiveHeight(2)}}>
<View>
<Text style={styles.eachBookDetail3}>
     اشتراک گذاری
    </Text>
</View>
<View>
  <Image source={require('@assets/images/share.png')} style={styles.miniIcon}/>
</View>
</TouchableOpacity>
 </View>
 </Modal>

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
    shadowColor: '#c1c1c1',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 50,
    elevation: 100,
    zIndex:100,
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
  
  
},eachBookDetail3:{
  ...myFontStyle.bookWriter3,
  color:'#000',
  textAlign:'right',
  
  
},eachBookDetail4:{
  ...myFontStyle.UltraBold,
  color:'#000',
  textAlign:'right',
  
  
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
  },bookDetilTable:{
    borderBottomColor:'#c1c1c1',
    borderBottomWidth:1,
    display:'flex',
    flexDirection:'row-reverse',
    marginTop:responsiveHeight(0),
    paddingTop:responsiveHeight(1),
    paddingBottom:responsiveHeight(1),
  }
  ,table1:{
    color:Colors.darkGreen,
    ...myFontStyle.UltraBold,
    marginRight:10,
  }
  ,table2:{
    color:'#1a1a1a',
    ...myFontStyle.largBold,
    textAlign:'right',
  },moreModal:{
    backgroundColor:Colors.lightGreen,
    bottom:0,
    borderRightColor:Colors.darkGreen,
    borderRightWidth:5,
    borderRadius:10,
    padding:responsiveHeight(2),
    display:'flex',
    justifyContent:'flex-start',
  },modalImg:{
    height:100,
    width:70,
    resizeMode:'cover',
    borderRadius:10,
    marginLeft:responsiveWidth(5),
  },miniIcon:{
    width:24,
    height:28,
  },commentView:{
    display:'flex',
    marginTop:responsiveHeight(2),
    marginBottom:responsiveHeight(2),
    flexDirection:'row-reverse',
    alignItems:'center'
  },textRate:{
    ...myFontStyle.rate,
    color:'#1a1a1a',
  },lineBack:{
    width:'85%',
    height:8,
    backgroundColor:'#e4e4e4',
    borderRadius:200,
    marginLeft:10,
  }
  ,lineFront1:{
    backgroundColor:Colors.darkGreen,
    height:8,
    width:'100%',
    borderRadius:200,
  },lineFront2:{
    backgroundColor:Colors.darkGreen,
    height:8,
    width:'40%',
    borderRadius:200,
  },lineFront3:{
    backgroundColor:Colors.darkGreen,
    height:8,
    width:'30%',
    borderRadius:200,
  },lineFront4:{
    backgroundColor:Colors.darkGreen,
    height:8,
    width:'20%',
    borderRadius:200,
  },lineFront5:{
    backgroundColor:Colors.darkGreen,
    height:8,
    width:'5%',
    borderRadius:200,
  },commentGreenBox:{
    backgroundColor:Colors.lightGreen,
    borderRadius:15,
    width:'100%',
    height:'auto',
    padding:responsiveHeight(2),
    marginTop:responsiveHeight(2),
    marginBottom:responsiveHeight(2),
  },eachBookDetail5:{
    ...myFontStyle.largBold,
    color:'#1a1a1a',
  }
});

  export default EachBook;

//make this component available to the <app></app>
