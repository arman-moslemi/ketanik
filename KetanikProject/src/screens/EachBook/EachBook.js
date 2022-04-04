import React, { useState,useEffect } from 'react';
import { myFontStyle } from "@assets/Constance";
import { View, Text , StyleSheet,Image, TouchableOpacity,Button,ScrollView} from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors} from "@assets/Colors";
import {Input} from '@components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from "react-native-modal";
// create a component
// const [showBox, setShowBox] = useState(false);
// const onClick = () => setShowBox(true);


const FirstRoute = () => (
 <></>
);

const SecondRoute = () => (
 
  <View style={{ flex: 1}}>
    
    <View  style={{position:'relative'}}>
      <TouchableOpacity style={{display:'flex',flexDirection:'row-reverse',marginTop:responsiveHeight(2)}} onClick={()=>onClick()} >
      <Icon name={"notes"} color={'#707070'} size={30} style={{transform: [{rotateY: '180deg'}]}}/>
        <Text style={styles.pageTitleText}>
            در حال مطالعه
        </Text>
      </TouchableOpacity>
     
      <View style={styles.greenBox}>
        <TouchableOpacity style={styles.greenBoxBtn}>
          <Text style={styles.greenBoxText}>
            در حال مطالعه
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.greenBoxBtn}>
          <Text style={styles.greenBoxText}>
            آخرین بازدید شده ها
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.greenBoxBtn}>
          <Text style={styles.greenBoxText}>
            خوانده شده ها
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.greenBoxBtn}>
          <Text style={styles.greenBoxText}>
           همه کتاب ها
          </Text>
        </TouchableOpacity>
      </View>
   
    </View>
    <View style={{display:'flex',flexDirection:'row-reverse'}}>
      <View style={styles.libraryBox}>
        <TouchableOpacity style={styles.littleBtn}>
        <Icon name={"more-vert"} color={Colors.darkGreen} size={25}/>
     
        </TouchableOpacity>
        <TouchableOpacity style={styles.littleBtn2}>
        <Icon name={"headset"} color={Colors.darkGreen} size={20}/>
     
        </TouchableOpacity>
        <Image source={require('@assets/images/book1.jpg')} style={styles.libraryBook}/>
      </View>
      <View style={styles.libraryBox}>
      <TouchableOpacity style={styles.littleBtn}>
        <Icon name={"more-vert"} color={Colors.darkGreen} size={25}/>
     
        </TouchableOpacity>
        <TouchableOpacity style={styles.littleBtn2}>
        <Icon name={"headset"} color={Colors.darkGreen} size={20}/>
     
        </TouchableOpacity>
        <Image source={require('@assets/images/book1.jpg')} style={styles.libraryBook}/>
      </View>
      <View style={styles.libraryBox}>
      <TouchableOpacity style={styles.littleBtn}>
        <Icon name={"more-vert"} color={Colors.darkGreen} size={25}/>
     
        </TouchableOpacity>
        <TouchableOpacity style={styles.littleBtn2}>
        <Icon name={"headset"} color={Colors.darkGreen} size={20}/>
     
        </TouchableOpacity>
        <Image source={require('@assets/images/book1.jpg')} style={styles.libraryBook}/>
      </View>
      </View>   
      
    <View style={{display:'flex',flexDirection:'row-reverse'}}>
      <View style={styles.libraryBox}>
      <TouchableOpacity style={styles.littleBtn}>
        <Icon name={"more-vert"} color={Colors.darkGreen} size={25}/>
     
        </TouchableOpacity>
        <TouchableOpacity style={styles.littleBtn2}>
        <Icon name={"headset"} color={Colors.darkGreen} size={20}/>
     
        </TouchableOpacity>
        <Image source={require('@assets/images/book1.jpg')} style={styles.libraryBook}/>
      </View>
      <View style={styles.libraryBox}>
      <TouchableOpacity style={styles.littleBtn}>
        <Icon name={"more-vert"} color={Colors.darkGreen} size={25}/>
     
        </TouchableOpacity>
        <TouchableOpacity style={styles.littleBtn2}>
        <Icon name={"headset"} color={Colors.darkGreen} size={20}/>
     
        </TouchableOpacity>
        <Image source={require('@assets/images/book1.jpg')} style={styles.libraryBook}/>
      </View>
      <View style={styles.libraryBox}>
      <TouchableOpacity style={styles.littleBtn}>
        <Icon name={"more-vert"} color={Colors.darkGreen} size={25}/>
     
        </TouchableOpacity>
        <TouchableOpacity style={styles.littleBtn2}>
        <Icon name={"headset"} color={Colors.darkGreen} size={20}/>
     
        </TouchableOpacity>
        <Image source={require('@assets/images/book1.jpg')} style={styles.libraryBook}/>
      </View>
      </View>  
      {/* <Button title="Show modal" onPress={toggleModal} />

<Modal isVisible={isModalVisible}>
  <View style={{ flex: 1 }}>
    <Text>Hello!</Text>

    <Button title="Hide modal" onPress={toggleModal} />
  </View>
</Modal> */}
     
  </View>
);
const ThirdRoute = () => (
  <></>
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
  
return (
  <ScrollView contentContainerStyle={{flexGrow:1,flex:1}}>
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
     

  
  </View>
  </ScrollView>
    
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
}
  });

  export default EachBook;

//make this component available to the <app></app>
