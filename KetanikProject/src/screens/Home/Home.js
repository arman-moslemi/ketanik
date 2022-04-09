import React, {useState,useRef} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView,FlatList} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Drawer from 'react-native-drawer'
// import DrawerContent from './drewerContent/DrawerContent';
import { myFontStyle } from "@assets/Constance";
import ViewSlider from 'react-native-view-slider';

// create a component


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

 const Home = ({navigation }) => {
  
  const keyExtractor = item => {
    return item.id;
  };
  const data=[1,2,3,4,5]
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
    <View style={{backgroundColor:'#fff',flex:1}}>




    <View style={styles.customRow}>
        
    
    </View>
    <View style={styles.topBar}>

    <View style={{flex : 2,textAlign:"right",display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
         
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{display:'flex',flexDirection:'row-reverse'}}>
          <View style={styles.badget}>
              
          </View>
          <Icon name={"notifications"} color={'#111'} size={30} />
          
          </TouchableOpacity>
          </View>
    
        
        <View style={{flex : 2,textAlign:"left",display:'flex',flexDirection:'row-reverse',alignItems:'flex-start',justifyContent:'flex-end'}}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{display:'flex',flexDirection:'row-reverse'}}>
          <View style={styles.badget2}>
              
          </View>
          <Icon name={"shopping-cart"} color={'#111'} size={30} />
          
          </TouchableOpacity>
          </View>
    </View>
     {/* <ViewSlider
        renderSlides = {
          <>
            <TouchableOpacity onPress={()=>Linking.openURL(data?.Link1)} style={styles.viewBox}>
            <Image source={require('@assets/images/book1.jpg')} resizeMode={"stretch"} style={styles.imageSlider}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL(data?.Link2)} style={styles.viewBox}><Image source={require('@assets/images/book1.jpg')}  resizeMode={"stretch"} style={styles.imageSlider}></Image></TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL(data?.Link3)} style={styles.viewBox}><Image source={require('@assets/images/book1.jpg')}  resizeMode={"stretch"} style={styles.imageSlider}></Image></TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL(data?.Link4)} style={styles.viewBox}><Image source={require('@assets/images/book1.jpg')}  resizeMode={"stretch"} style={styles.imageSlider}></Image></TouchableOpacity>

            </>
      }
      style={styles.slider}     //Main slider container style
      height = {responsiveHeight(25)}    //Height of your slider
      slideCount = {4}    //How many views you are adding to slide
      dots = {true}     // Pagination dots visibility true for visibile
      dotActiveColor = '#FFCC00'     //Pagination dot active color
      dotInactiveColor = '#fff'    // Pagination do inactive color
      dotsContainerStyle={styles.dotContainer}     // Container style of the pagination dots
      autoSlide = {true}    //The views will slide automatically
      slideInterval = {5000}    //In Miliseconds
     /> 
      */}
       <ScrollView>
  <View style={styles.container}>
  <View style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between',marginBottom:responsiveHeight(5)}}>
     <View style={{flex:1}}>
     <Text style={styles.rowTitle}>
          تازه های برگزیده
      </Text>
     </View>
      <View>
      <TouchableOpacity>
      <Text style={styles.seeAll}>
         مشاهده همه
      </Text>
      </TouchableOpacity>
      </View>
      </View>

              <FlatList
       
          keyExtractor={keyExtractor}
          data={data}
          renderItem={_render}
          horizontal={true}
          style={{marginTop:responsiveHeight(1),marginBottom:responsiveHeight(1)}}
          
        />
          
         
        
   
  
   <View style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between',marginBottom:responsiveHeight(5),marginTop:responsiveHeight(5)}}>
     <View style={{flex:1}}>
     <Text style={styles.rowTitle}>
         پر فروش ترین ها
      </Text>
     </View>
      <View>
      <TouchableOpacity>
      <Text style={styles.seeAll}>
         مشاهده همه
      </Text>
      </TouchableOpacity>
      </View>
      </View>
   <View style={{display:'flex',flexDirection:'row-reverse'}}>
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
   <View style={styles.cardBox}>
    <Image source={require('@assets/images/book4.jpg')} style={styles.bookImg}/>
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
   </View>
   <View style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between',marginBottom:responsiveHeight(5),marginTop:responsiveHeight(5)}}>
     <View style={{flex:1}}>
     <Text style={styles.rowTitle}>
        فروش ویژه
      </Text>
     </View>
      <View>
      <TouchableOpacity>
      <Text style={styles.seeAll}>
         مشاهده همه
      </Text>
      </TouchableOpacity>
      </View>
      </View>
   <View style={{display:'flex',flexDirection:'row-reverse'}}>
   <View style={styles.cardBox}>
    <Image source={require('@assets/images/book1.jpg')} style={styles.bookImg}/>
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
   <View style={styles.cardBox}>
    <Image source={require('@assets/images/book2.jpg')} style={styles.bookImg}/>
    <Text style={styles.bookName}>
    {truncate("به سوی من بازگرد",20)}
    </Text>
    <View style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between'}}>
    <View style={{display:'flex',flexDirection:'row-reverse'}}>
    <Text style={styles.priceRed}>
    29.000ت
    </Text>
    <Text style={styles.priceStroke}>
    29.000
    </Text>
    </View>
    <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
    <Text style={styles.bookName}>
    4.5
    </Text>
    <Icon name={'star'} size={15} color={'#ffc93d'} style={{}}/>
    </View>
    </View>
   </View>
   </View>

   </View>
  </ScrollView>
    </View>
);
};

const styles = StyleSheet.create({
    container: {
        paddingRight:responsiveWidth(5),
        paddingLeft:responsiveWidth(5),
        paddingBottom:responsiveHeight(2),
        alignItems:"flex-end",
        marginTop:responsiveHeight(15),
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
  },pageTitle:{
      display:'flex',
      flexDirection:'row-reverse',
      marginTop:responsiveHeight(8),
      borderBottomColor:Colors.darkGreen,
      borderBottomWidth:1,
      width:responsiveWidth(35),
      paddingBottom:responsiveHeight(1),
    
  },pageTitleText:{
    color:'#343434',
    ...myFontStyle.largeRegular,
    marginRight:responsiveWidth(2)
  },viewPageTitle:{
      display:"flex",
     
  },badget:{
    height:10,
    width:10,
    backgroundColor:'#dc3545',
    borderRadius:50,
    marginRight:responsiveWidth(2),
    display:'flex',
    alignContent:'center',
    alignItems:'center',
    marginLeft:-5,
},badgetText:{
    color:'#fff',
    ...myFontStyle.UltraBold,
},badget2:{
    height:10,
    width:10,
    backgroundColor:'#dc3545',
    borderRadius:50,
    marginRight:responsiveWidth(2),
    display:'flex',
    alignContent:'center',
    alignItems:'center',
    
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

}
  });

  export default Home;

//make this component available to the <app></app>
