import React, {useState,useEffect,useContext} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView,FlatList} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { myFontStyle } from "@assets/Constance";
import axios from 'axios';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";
import { isMessageIgnored } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import { ThemeContext } from '../../../theme/theme-context';
import AsyncStorage from  '@react-native-async-storage/async-storage';
import TrackPlayer, { Capability  } from "react-native-track-player";

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

 const Category = ({navigation }) => {
  const {  theme } = useContext(ThemeContext);

  const [data,setData]=useState([]);
  const [book,setBook]=useState(null);
  const [bookID,setBookID]=useState();
  const [episode,setEpisode]=useState();
  const [track,setTrack]=useState([]);
  const [isplay, setPlay] = useState(false);

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
    axios.get(apiUrl+'AllGroup')
    .then(function (response) {
      const message = response.data;
      const result = response.data.result;
      console.log(message);

      if(result == "true"){
        setData(response.data.GroupData)

        // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                        }else{

      }
    })
    .catch(function (error) {
      console.log(error);
    });
    const state = await AsyncStorage.getItem("@user");
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

      }  })
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
      return item.GroupID;
    };
    const _render = (item, index) => {
      console.log(item.item)
      return (
        // <View style={styles(theme).categoryRow}>
        <TouchableOpacity onPress={()=>navigation.navigate("SelectedNews",{type:"group",GroupID:item.item.GroupID,GroupName:item.item.Title})} style={item.item.GroupID==1?styles(theme).categoryBox:item.item.GroupID==2?styles(theme).categoryBox2:item.item.GroupID==3?styles(theme).categoryBox3:
          item.item.GroupID==4?styles(theme).categoryBox4:item.item.GroupID==5?styles(theme).categoryBox5:item.item.GroupID==6?styles(theme).categoryBox6:item.item.GroupID==7?styles(theme).categoryBox7:styles(theme).categoryBox8
        }>
        <Image source={{uri:apiAsset+item.item.Pic}} style={styles(theme).bookImg}/>
         <Text style={styles(theme).cateTitle}>
          {item.item.Title}
         </Text>
        </TouchableOpacity>
       
    // </View> 
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
    <View style={{backgroundColor:theme.backgroundColor,flex:1}}>

<View style={styles(theme).customRow}>
        
    
        </View>
    <View style={styles(theme).topBar}>
    <View style={{flex : 1}}>
          <Text style={styles(theme).menuTitle}>دسته بندی</Text>
          </View>

        <View style={{flex :3}}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{}}>
            <Icon name={"arrow-back"} color={theme.iconWhite} size={30}/>
          </TouchableOpacity>
          </View>
    
        
    </View>
     
  <ScrollView>
 <View style={styles(theme).container}>
     {/* <View style={styles(theme).categoryRow}>
         <View style={styles(theme).categoryBox}>
         <Image source={require('@assets/images/book1.jpg')} style={styles(theme).bookImg}/>
          <Text style={styles(theme).cateTitle}>
            کتاب های صوتی
          </Text>
         </View>
         <View style={styles(theme).categoryBox2}>
         <Image source={require('@assets/images/book2.jpg')} style={styles(theme).bookImg}/>
         <Text style={styles(theme).cateTitle}>
            کتاب های رایگان
          </Text>
         </View>
     </View> */}
  
     <FlatList
          numColumns={2}
          columnWrapperStyle={styles(theme).charityList}
          keyExtractor={keyExtractor}
          data={data}
          renderItem={_render}
          // style={{marginTop:responsiveHeight(7),marginLeft:responsiveWidth(2),marginBottom:responsiveHeight(20)}}
                    // ListFooterComponent={listFooter}
          // onEndReached={fetchNextCharityPage}
        />
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
);
};

const styles = (theme) => StyleSheet.create({
    container: {
        paddingRight:responsiveWidth(1),
        paddingLeft:responsiveWidth(1),
        paddingBottom:responsiveHeight(2),
        alignItems:"flex-end",
        marginTop:responsiveHeight(7),
    },
    charityList: {
      marginTop: responsiveHeight(2),
    
      justifyContent: 'center',
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
      paddingTop:responsiveHeight(3),
      paddingRight:responsiveWidth(7),
      paddingLeft:responsiveWidth(7),
      zIndex:1000,
  },categoryRow:{
      display:'flex',
      flexDirection:'row-reverse',
    marginTop:responsiveHeight(1),
    marginBottom:responsiveHeight(1),
      flex:1,
  },categoryBox:{
      height:responsiveHeight(10),
      // flex:0.5,
      backgroundColor:'#e43299',
      borderRadius:10,
      margin:5,
      overflow:'hidden',
      display:'flex',
      flexDirection:'row-reverse',
      alignContent:'center',
      alignItems:'center',
  },categoryBox2:{
    height:responsiveHeight(10),
      // flex:0.5,
    backgroundColor:'#e0ad5c',
    borderRadius:10,
    margin:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },categoryBox3:{
    height:responsiveHeight(10),
      // flex:0.5,
    backgroundColor:'#bad259',
    borderRadius:10,
    margin:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },categoryBox4:{
    height:responsiveHeight(10),
      // flex:0.5,
    backgroundColor:'#e35831',
    borderRadius:10,
    margin:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },
  categoryBox5:{
    height:responsiveHeight(10),
      // flex:0.5,
    backgroundColor:'#dfab58',
    borderRadius:10,
    margin:5,
    overflow:'hidden',
    marginTop:5,
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },
  categoryBox6:{
    height:responsiveHeight(10),
      // flex:0.5,
    backgroundColor:'#6c6263',
    borderRadius:10,
    margin:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },
  categoryBox7:{
    height:responsiveHeight(10),
      // flex:0.5,
    backgroundColor:'#262d5b',
    borderRadius:10,
    margin:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },
  categoryBox8:{
    height:responsiveHeight(10),
      // flex:0.5,
    backgroundColor:'#b1cfad',
    borderRadius:10,
    margin:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },
  categoryBox9:{
    height:responsiveHeight(10),
      // flex:0.5,
    backgroundColor:'#95a8b6',
    borderRadius:10,
    marginRight:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },
  categoryBox10:{
    height:responsiveHeight(10),
      // flex:0.5,
    backgroundColor:'#a485ae',
    borderRadius:10,
    marginLeft:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },
  categoryBox11:{
    height:responsiveHeight(10),
      // flex:0.5,
    backgroundColor:'#6e6365',
    borderRadius:10,
    marginRight:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },
  categoryBox12:{
    height:responsiveHeight(10),
      // flex:0.5,
    backgroundColor:'#e48921',
    borderRadius:10,
    marginLeft:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },
  categoryBox13:{
    height:responsiveHeight(10),
      // flex:0.5,
    backgroundColor:'#4f86d6',
    borderRadius:10,
    marginRight:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },
  categoryBox14:{
    height:responsiveHeight(10),
      // flex:0.5,
    backgroundColor:'#d91c2e',
    borderRadius:10,
    marginLeft:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },
  bookImg:{
      width:50,
      resizeMode:'contain',
      height:responsiveHeight(13),
      marginTop:responsiveHeight(-5),
      transform: [{rotate: '20deg'}],
   
  },cateTitle:{
    color:'#fff',
    ...myFontStyle.normalBold,
    marginLeft:responsiveWidth(5),
    width:responsiveWidth(30),
  },imageBook:{
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

  export default Category;

//make this component available to the <app></app>
