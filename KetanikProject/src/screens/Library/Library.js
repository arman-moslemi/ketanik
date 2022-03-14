import React, { useState,useEffect } from 'react';
import { myFontStyle } from "@assets/Constance";
import { View, Text , StyleSheet,Image, TouchableOpacity} from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors} from "@assets/Colors";
import {Input} from '@components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
// create a component
const FirstRoute = () => (
 <></>
);

const SecondRoute = () => (
  <View style={{ flex: 1}}>
    

    <View style={{display:'flex',flexDirection:'row-reverse'}}>
      <View style={styles.libraryBox}>
        <View style={styles.littleBtn}>
          
        </View>
        <Image source={require('@assets/images/book1.jpg')} style={styles.libraryBook}/>
      </View>
      <View style={styles.libraryBox}>
        <Image source={require('@assets/images/book1.jpg')} style={styles.libraryBook}/>
      </View>
      <View style={styles.libraryBox}>
        <Image source={require('@assets/images/book1.jpg')} style={styles.libraryBook}/>
      </View>
      </View>   
      
    <View style={{display:'flex',flexDirection:'row-reverse'}}>
      <View style={styles.libraryBox}>
        <Image source={require('@assets/images/book1.jpg')} style={styles.libraryBook}/>
      </View>
      <View style={styles.libraryBox}>
        <Image source={require('@assets/images/book1.jpg')} style={styles.libraryBook}/>
      </View>
      <View style={styles.libraryBox}>
        <Image source={require('@assets/images/book1.jpg')} style={styles.libraryBook}/>
      </View>
      </View>     
  </View>
);

const renderScene = SceneMap({
  library: SecondRoute,
  status: FirstRoute,
});
 const Library = ({navigation }) => {
  
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'status', title: 'وضعیت' },
    { key: 'library', title: 'کتابخانه' },
    
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
    <View style={{ flex: 1,padding:0}}>
          <View style={styles.topBar}>


<TouchableOpacity onPress={()=>navigation.goBack()} style={{}}>
        <Icon name={"refresh"} color={'#111'} size={30}/>
      </TouchableOpacity>
     

    
    
      <TouchableOpacity onPress={()=>navigation.goBack()} style={{}}>
        <Icon name={"arrow-back"} color={'#111'} size={30}/>
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
  paddingTop:responsiveHeight(2),
  paddingRight:responsiveWidth(7),
  paddingLeft:responsiveWidth(7),
  zIndex:1000,
  justifyContent:'space-between',
  
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
  marginTop:responsiveHeight(0),
  width:responsiveWidth(90),
  marginRight:'auto',
  marginLeft:'auto'
},loginBtn:{
  backgroundColor:Colors.darkGreen,
  width:responsiveWidth(75),
  marginTop:responsiveHeight(2),
  height:responsiveHeight(8),
  alignContent:'center',
  alignItems:'center',
  paddingTop:responsiveHeight(2.5),
  borderRadius:15,
},btnText:{
  ...myFontStyle.largBold,
  color:'#fff',
},forgetPassBtn:{
  textAlign:'left',
  
  alignSelf:'flex-start',
  paddingLeft:responsiveWidth(3),
  marginTop:responsiveHeight(2),
  marginBottom:responsiveHeight(2),
},forgetPassBtnText:{
  color:'#3495fe',
  ...myFontStyle.largBold,
},libraryBook:{
    width:"100%",
    height:responsiveHeight(18),
    resizeMode:'cover',
    borderRadius:10,
    marginTop:responsiveHeight(5),
},libraryBox:{
  width:responsiveWidth(25),
  marginRight:'auto',
  marginLeft:'auto',
}
  });

  export default Library;

//make this component available to the <app></app>
