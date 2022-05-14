import React, { useState,useEffect } from 'react';
import { myFontStyle } from "@assets/Constance";

import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors} from "@assets/Colors";

import { View, Text , StyleSheet,Image, TouchableOpacity,ScrollView,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import TrackPlayer, { usePlaybackState } from "react-native-track-player";
import Player from "@components/Player";
import axios from 'axios';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";
import AsyncStorage from  '@react-native-async-storage/async-storage';

 const ListenBookMain = ({navigation,route }) => {
  const [data,setData]=useState([]);
  const [track,setTrack]=useState([]);
  const [isModalVisible, setModalVisible] = useState(false); 
  const [isplay, setPlay] = useState(false);
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
 
  

  const {id,num} = route?.params ?? {};
  const [index, setIndex] = useState(num);

  const  mutLogin=async()=> {
  const state = await AsyncStorage.getItem("@user");
console.log(state)
console.log(id)
  axios.post(apiUrl+'SubBookShow',{BookID:id,CustomerID:state})
  .then(function (response) {
    const message = response.data;
    const result = response.data.result;
    console.log(777);
    console.log(message);

    if(result == "true"){
      setData(response.data.GroupData)
      var ss=[]
      response.data.GroupData.map((item,ii)=>{
        ii>=num?
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
  useEffect(() => {

    mutLogin();
    // togglePlayback()

}, []);

  async function togglePlayback() {
    const currentTrack = await TrackPlayer.getPosition();
    const currentTrack2 = await TrackPlayer.getDuration();
    console.log(444)
    console.log(index)
    
    // console.log(num)
    // console.log(currentTrack.toFixed(1))
    // console.log(currentTrack2)
    if (currentTrack.toFixed(1) == currentTrack2.toFixed(1)) {
      console.log(775)
      console.log(index)
      
      // setPlay(true)
      await TrackPlayer.reset();
      await TrackPlayer.add(track);
          TrackPlayer.updateOptions({
          stopWithApp: true
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
  async function stop() {
if(isplay)
     { await TrackPlayer.pause()
setPlay(false)}
else{

await TrackPlayer.play()
setPlay(true)
}

    // }
  }
  // TrackPlayer.addEventListener(Event.RemoteNext, () => {
  //   TrackPlayer.skipToNext();
  // });

  // TrackPlayer.addEventListener(Event.RemotePrevious, () => {
  //   TrackPlayer.skipToPrevious();
  // });
  async function seeks(type) {
    const currentTrack = await TrackPlayer.getPosition();
    const currentTrack2 = await TrackPlayer.getDuration();
  
  console.log(currentTrack-10)
    if(type=="prev"){
      TrackPlayer.seekTo(currentTrack-15)
    }
    else{
      if(currentTrack+30<currentTrack2)
      {
  
        TrackPlayer.seekTo(await TrackPlayer.getPosition()+15)
      }
    }
  }
  const [ minutes, setMinutes ] = useState(0);
  const [seconds, setSeconds ] =  useState(0);
  // useEffect(()=>{
  //   let myInterval = setInterval(() => {
  //           if (seconds < 60) {
  //               setSeconds(seconds + 1);
  //           }
  //           if (seconds === 59) {
            
  //                   setMinutes(minutes + 1);
  //                   setSeconds(0);
                
  //           } 
  //       }, 1000)
      
  //   });
return (
   <ScrollView>
      <View style={{display:'flex',justifyContent:'center',alignContent:'center',alignItems:'center'}} >
        <Image source={{uri:apiAsset+data[0]?.Pic}} style={styles.backgroundImage}  blurRadius={5}/>
        <View style={styles.backView}>
         <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Icon name={'west'} size={30} color={'#fff'} style={{}}/>
   
     </TouchableOpacity>
      
     </View>
        <Image source={{uri:apiAsset+data[0]?.Pic}} style={styles.overImg}/>
      </View>
      <View style={styles.whiteBack}>
      <Text style={styles.eachBookName}>{data[0]?.BookName}</Text>
      <Text style={styles.eachBookDetail}>{data[0]?.Writer}</Text>
      <View style={{display:'flex',flexDirection:'row-reverse',marginRight:'auto',marginLeft:'auto',marginTop:responsiveHeight(5)}}>
        {/* <TouchableOpacity onPress={()=>tra} style={styles.btnBox}>
          <Image source={require('@assets/images/speed.png')} style={styles.btnBoxImg}/>
          <Text style={styles.btnBoxTxt}>سرعت</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.btnBox}>
          <Image source={require('@assets/images/share.png')} style={styles.btnBoxImg}/>
          <Text style={styles.btnBoxTxt}>اشتراک گذاری</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnBox}>
          <Image source={require('@assets/images/save.png')} style={styles.btnBoxImg}/>
          <Text style={styles.btnBoxTxt}>نشان کردن</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnBox} onPress={toggleModal} >
          <Image source={require('@assets/images/car.png')} style={styles.btnBoxImg}/>
          <Text style={styles.btnBoxTxt}>حالت ماشین</Text>
        </TouchableOpacity>
      </View>
      {/* player Code is Here */}
      <View style={{padding:responsiveWidth(5),alignItems:'center'}} >
                <Player
        // onNext={skipToNext}
        style={{ marginTop: 10}}
        // onPrevious={skipToPrevious}
        onTogglePlayback={togglePlayback}
        stop={stop}
        isplay={isplay}
        setPlay={setPlay}
        setIndex={setIndex}
        index={index}
        type="main"
        id={id}

      />
                  </View>
     
  
      </View>
      <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)} >
 <View style={styles.editModal}>
   <Text style={styles.modalTitle}>
     حالت ماشین
   </Text>
   <View style={{display:'flex',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
    <TouchableOpacity onPress={()=>togglePlayback()} style={styles.playBtn}>
    {
            isplay?
            <Icon name={'pause-circle-filled'} color={Colors.darkGreen} size={90} />
            :
            <Icon name={'play-circle-filled'} color={Colors.darkGreen} size={90} />
    }  
      </TouchableOpacity>
    <View style={{display:'flex',flexDirection:'row-reverse',marginTop:responsiveHeight(5)}}>
      <TouchableOpacity  onPress={()=> seeks("next")} style={{padding:responsiveHeight(2),borderLeftColor:'#c1c1c1',borderLeftWidth:1}}>
        <Image source={require('@assets/images/15after.png')} style={styles.after}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> seeks("prev")}  style={{padding:responsiveHeight(2)}}>
      <Image source={require('@assets/images/15before.png')} style={styles.after}/>
      </TouchableOpacity>
    </View>
  </View>
 </View>
 </Modal>
 
   </ScrollView>
   
);
};

const styles = StyleSheet.create({
  backgroundImage:{
    height:responsiveHeight(50),
    width:responsiveWidth(100),
    resizeMode:'cover'
  },overImg:{
    height:responsiveHeight(35),
    borderRadius:10,
    width:responsiveWidth(60),
    marginRight:'auto',
    marginLeft:'auto',
    
    position:'absolute',

  },backView:{
    position:'absolute',
    top:responsiveHeight(2),
    left:responsiveWidth(9),
      display:'flex',
      flex:1,
    },eachBookName:{
      ...myFontStyle.UltraBold,
      color:'#000',
      textAlign:'center',
      marginTop:responsiveHeight(2),
  },eachBookDetail:{
    ...myFontStyle.bookWriter3,
    color:'#000',
    textAlign:'center',
    
    
  },btnBoxImg:{
    width:32,
    height:32,
    resizeMode:'contain'
  },btnBoxTxt:{
    ...myFontStyle.bookWriter3,
    color:"#000"
  },btnBox:{
    borderLeftColor:'#c1c1c1',
    borderLeftWidth:1,
    paddingLeft:responsiveWidth(5),
    paddingRight:responsiveWidth(5),
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },loginBtn:{
    backgroundColor:Colors.darkGreen,
    width:responsiveWidth(50),
    marginTop:responsiveHeight(5),
    height:responsiveHeight(6),
    alignContent:'center',
    alignItems:'center',
  display:'flex',
  alignContent:'center',
  alignItems:'center',
  justifyContent:'center',
    borderRadius:10,
    marginRight:'auto',
    marginLeft:'auto',
    
  },btnText:{
    ...myFontStyle.largBold,
    color:'#fff',
  },
  editModal:{
    width:responsiveWidth(80),
    backgroundColor:Colors.lightGreen,
    
    borderRadius:15,
    marginRight:'auto',
    marginLeft:'auto',
    borderRightColor:Colors.darkGreen,
    borderRightWidth:4,
    padding:20,

  },modalTitle:{
    ...myFontStyle.UltraBold,
    color:'#111',
    marginTop:responsiveHeight(1),

  },playBtn:{
    // backgroundColor:Colors.darkGreen,
    height:120,
    width:120,
    borderRadius:100,
    marginTop:responsiveHeight(6),
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },after:{
    height:135,
    width:115,
    resizeMode:'contain',
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

  }
  });

  export default ListenBookMain;

//make this component available to the <app></app>
