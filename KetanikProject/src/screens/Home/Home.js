import React, {useState,useContext ,useEffect} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView,FlatList,Spinner} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Drawer from 'react-native-drawer'
// import DrawerContent from './drewerContent/DrawerContent';
import { myFontStyle } from "@assets/Constance";
import ViewSlider from 'react-native-view-slider';
import axios from 'axios';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";
import { ThemeContext } from '../../../theme/theme-context';
import AsyncStorage from  '@react-native-async-storage/async-storage';
import TrackPlayer, { Capability  } from "react-native-track-player";

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
  
  const {  theme} = useContext(ThemeContext);
  const [data,setData]=useState([]);
  const [best,setBest]=useState([]);
  const [slider,setSlider]=useState([]);
  const [book,setBook]=useState(null);
  const [bookID,setBookID]=useState();
  const [episode,setEpisode]=useState();
  const [cart,setCart]=useState([]);
  const [isplay, setPlay] = useState(false);
  const [track,setTrack]=useState([]);

  const  setNull=async()=> {
    const books = await AsyncStorage.removeItem("@bookid");
    const episode = await AsyncStorage.removeItem("@epid");
setBook()
  
console.log(books)
console.log(episode)

    };
  useEffect(() => {

    mutLogin();


}, []);
  const  mutLogin=async()=> {
    axios.get(apiUrl+'MainSlider')
    .then(function (response) {
      const message = response.data;
      const result = response.data.result;
      // console.log(message);

      if(result == "true"){
        setData(response.data.Data)
        setBest(response.data.BestSellerData)
        setSlider(response.data.SliderData)

                        }else{

      }
    })
    .catch(function (error) {
      console.log(error);
    });
      const state = await AsyncStorage.getItem("@user");
  
      
      axios.post(apiUrl+'ShoppingBasketView',{CustomerID:state})
      .then(function (response) {
        const message = response.data;
        const result = response.data.result;
        console.log(message);
      
        if(result == "true"){
            
          setCart(response.data.Data)
   
          // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                          }else{
        }
      })
      .catch(function (error) {
        console.log(error);
      })
     
        
          
      const books = await AsyncStorage.getItem("@bookid");
      const episode = await AsyncStorage.getItem("@epid");
  
      axios.post(apiUrl+'SingleBook',{CustomerID:state,BookID:books})
      .then(function (response) {
        const message = response.data;
        const result = response.data.result;
        console.log(message);
  
        if(result == "true"){
          setBook(response.data.GroupData)
          setEpisode(episode)
          setBookID(books)
  
  
          // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                          }else{
  
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  
      axios.post(apiUrl+'SubBookShow',{BookID:books,CustomerID:state})
      .then(function (response) {
        const message = response.data;
        const result = response.data.result;
        console.log(777);
        console.log(message);
    
        if(result == "true"){
          var ss=[]
          response.data.GroupData.map((item,ii)=>{
            ii>=episode?
            ss.push({
              id: "local-track",
              url: apiAsset+item?.Link,
              title: "Ketanic",
              artwork: "https://i.picsum.photos/id/500/200/200.jpg",
            })
            :
            null
          })
          setTrack(ss)
          // togglePlayback()
          // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                          }else{
    
        }
      })
      .catch(function (error) {
        console.log(error);
      });
      

    };
  const keyExtractor = item => {
    return item.id;
  };
  // const data=[1,2,3,4,5]
  const _render = (item, index) => {
    // console.log(item)
    return (
      <TouchableOpacity onPress={()=>navigation.navigate("EachBook",{id:item.item.BookID})} style={styles(theme).cardBox}>
      <Image source={{uri:apiAsset+item.item.Pic}} style={styles(theme).bookImg}/>
      <Text style={styles(theme).bookName}>
      {truncate(item.item.BookName,20)}
      </Text>
      <View style={{display:'flex',flexDirection:'row-reverse'}}>
    
        {
          item.item.SpecialCost?
<>
      <Text style={styles(theme).priceRed}>
      {item.item.SpecialCost}ت
    </Text>
    <Text style={styles(theme).priceStroke}>
    {item.item.Cost}ت
    </Text>
    </>
          :
<Text style={styles(theme).bookName}>
      {item.item.Cost}ت
      </Text>
        }
  <View style={{flexDirection:'row-reverse',alignItems:'center',width:"10%"}}>
      <Text style={styles(theme).bookName}>
{item.item.Rate}      </Text>
      <Icon name={'star'} size={15} color={'#ffc93d'} style={{}}/>
      </View>

     
      </View>
     </TouchableOpacity>
    );
  };
  async function TogglePlayback() {
    const currentTrack = await TrackPlayer.getPosition();
    const currentTrack2 = await TrackPlayer.getDuration();
    console.log(444)
    
    // console.log(num)
    // console.log(currentTrack.toFixed(1))
    // console.log(currentTrack2)
    if (currentTrack.toFixed(1) == currentTrack2.toFixed(1)) {
      console.log(775)
      
      // setPlay(true)
      await TrackPlayer.reset();
      await TrackPlayer.add(track);
          TrackPlayer.updateOptions({
          stopWithApp: true,
          capabilities: [
            Capability.Play,
            Capability.Pause,
            // Capability.SkipToNext,
            // Capability.SkipToPrevious,
            Capability.Stop,
          ],
          compactCapabilities: [
            Capability.Play,
            Capability.Pause,
            // Capability.SkipToNext,
            // Capability.SkipToPrevious,
          ],
      });
 
      await TrackPlayer.play();
      setPlay(true)
    }
    else{

      if(isplay)
     { await TrackPlayer.pause()
setPlay(false)}
else{

await TrackPlayer.play()
setPlay(true)
}
    }
    


    // }
  }
return (
  data?
    // <View style={{backgroundColor:'#fff',flex:1}}>
    <View style={{backgroundColor:theme.backgroundColor,flex:1}}>




    <View style={styles(theme).customRow}>
        
    
    </View>
    <View style={styles(theme).topBar}>

    <View style={{flex : 2,textAlign:"right",display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
         
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{display:'flex',flexDirection:'row-reverse'}}>
          {/* <View style={styles(theme).badget}>
              
          </View> */}
          <Icon name={"notifications"} color={theme.iconWhite} size={30} />
          
          </TouchableOpacity>
          </View>
    
        
        <View style={{flex : 2,textAlign:"left",display:'flex',flexDirection:'row-reverse',alignItems:'flex-start',justifyContent:'flex-end'}}>
        <TouchableOpacity onPress={()=>navigation.navigate("Cart")} style={{display:'flex',flexDirection:'row-reverse'}}>
          {
            cart.length>0?

          <View style={styles(theme).badget2}>
              
          </View>
            :
            null
          }
          <Icon name={"shopping-cart"} color={theme.iconWhite} size={30} />
          
          </TouchableOpacity>
          </View>
    </View>
     <ViewSlider
        renderSlides = {
          <>
            <TouchableOpacity onPress={()=>Linking.openURL(slider?.LinkSlider1)} style={styles(theme).viewBox}>
            <Image source={{uri:apiAsset+slider.Slider1}} resizeMode={"stretch"} style={styles(theme).imageSlider}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL(data?.LinkSlider2)} style={styles(theme).viewBox}>
              <Image source={{uri:apiAsset+slider?.Slider2}}  resizeMode={"stretch"} style={styles(theme).imageSlider}></Image>
              </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL(data?.LinkSlider3)} style={styles(theme).viewBox}>
              <Image source={{uri:apiAsset+slider?.Slider3}}  resizeMode={"stretch"} style={styles(theme).imageSlider}>
                </Image>
                </TouchableOpacity>

            </>
      }
      style={styles(theme).slider}     //Main slider container style
      height = {responsiveHeight(25)}    //Height of your slider
      slideCount = {3}    //How many views you are adding to slide
      dots = {true}     // Pagination dots visibility true for visibile
      dotActiveColor = '#FFCC00'     //Pagination dot active color
      dotInactiveColor = '#fff'    // Pagination do inactive color
      dotsContainerStyle={styles(theme).dotContainer}     // Container style of the pagination dots
      autoSlide = {true}    //The views will slide automatically
      slideInterval = {5000}    //In Miliseconds
     /> 
     
       <ScrollView >
  <View style={styles(theme).container}>
  <View style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between',marginBottom:responsiveHeight(5)}}>
     <View style={{flex:1}}>
     <Text style={styles(theme).rowTitle}>
          تازه های برگزیده
      </Text>
     </View>
      <View>
      <TouchableOpacity onPress={()=>navigation.navigate("SelectedNews")}>
      <Text style={styles(theme).seeAll}>
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
          style={{marginTop:responsiveHeight(1),marginBottom:responsiveHeight(1), transform: [{ scaleX: -1 }] }}
          
        />
          
         
        
   
  
   <View style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between',marginBottom:responsiveHeight(5),marginTop:responsiveHeight(5)}}>
     <View style={{flex:1}}>
     <Text style={styles(theme).rowTitle}>
         پر فروش ترین ها
      </Text>
     </View>
      <View>
      <TouchableOpacity onPress={()=>navigation.navigate("SelectedNews",{type:"best"})}>
      <Text style={styles(theme).seeAll}>
         مشاهده همه
      </Text>
      </TouchableOpacity>
      </View>
      </View>
   <View style={{display:'flex',flexDirection:'row-reverse'}}>
   <FlatList
          keyExtractor={keyExtractor}
          data={best}
          renderItem={_render}
          horizontal={true}
          style={{marginTop:responsiveHeight(1),marginBottom:responsiveHeight(1), transform: [{ scaleX: -1 }] }}
          
        />
   </View>


   </View>
  </ScrollView>
  <View >
    {
      book?
  
    <TouchableOpacity onPress={()=>navigation.navigate("ListenBookMain",{id:bookID,num:episode})} style={{borderRadius:10,backgroundColor:Colors.lightGreen,flexDirection:'row-reverse',height:responsiveHeight(6),justifyContent:'space-between'}}>
        {
        isplay?
        // <TouchableOpacity onPress={stop} style={{borderRadius:50,backgroundColor:Colors.white}}>
        <TouchableOpacity onPress={TogglePlayback} >

<Icon name={"pause-circle-filled"} size={50} color={Colors.darkGreen}/>
</TouchableOpacity>
:
<TouchableOpacity onPress={TogglePlayback}>

<Icon name={"play-circle-filled"} size={50} color={Colors.darkGreen}/>
</TouchableOpacity>
    }
    
    <Image source={{uri:apiAsset+book.Pic}} style={styles(theme).imageBook}/>
    <View>

      <Text style={styles(theme).miniText}>{book.BookName}</Text>
      <Text style={styles(theme).miniText}>درحال مطالعه</Text>
      </View>
      <TouchableOpacity onPress={()=>setNull()}> 
      <Icon name={"close"} color={'#111'} style={{marginRight:responsiveWidth(30)}} size={30}/>
</TouchableOpacity>
      {/* <Text style={styles(theme).miniText}>درحال مطالعه</Text> */}
    </TouchableOpacity>
      :
      null
    }
  </View>
    </View>
    :
    <Spinner size={50} color={theme.textTitle} />
    );
};


const styles =(theme) =>  StyleSheet.create({
  
    container: {
        paddingRight:responsiveWidth(5),
        paddingLeft:responsiveWidth(5),
        paddingBottom:responsiveHeight(2),
        alignItems:"flex-end",
        marginTop:responsiveHeight(5),
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
    backgroundColor:theme.cardBack,
    height:responsiveHeight(19),
    width:responsiveWidth(36),
    borderRadius:10,
    textAlign:'center',
    padding:responsiveHeight(1),
    marginLeft:responsiveWidth(3),
    marginTop:responsiveHeight(3)
    , transform: [{ scaleX: -1 }] 

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
    ...myFontStyle.mediumRegular,
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
    color:theme.textTitle,
},seeAll:{
    ...myFontStyle.largeRegular,
    color:theme.textTitle,
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

},
imageBook:{
  width:responsiveWidth(15),
  height:"100%",
  resizeMode:'cover',
  borderRadius:10,
  marginLeft:10
  
}
,miniText:{
  ...myFontStyle.mediumRegular,
  color:'#111'
},
  });

  export default Home;

//make this component available to the <app></app>
