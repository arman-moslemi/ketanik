import React, { useState,useEffect,useContext } from 'react';
import { myFontStyle } from "@assets/Constance";

import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors} from "@assets/Colors";

import { View, Text , StyleSheet,Image, TouchableOpacity,ScrollView,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import { RadioButton } from 'react-native-paper';
import TrackPlayer, {  Capability   } from "react-native-track-player";
import Player from "@components/Player";
import axios from 'axios';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";
import AsyncStorage from  '@react-native-async-storage/async-storage';
import { ThemeContext } from '../../../theme/theme-context';
import { getTranslation } from '@i18n/i18n';

 const ListenBook = ({navigation,route }) => {
  const {  theme } = useContext(ThemeContext);
  const [checked, setChecked] = React.useState('first');
  const [isModalVisible, setModalVisible] = useState(false); 
  const [isplay, setPlay] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [isModalVisible2, setModalVisible2] = useState(false);

  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2);
  };
  const {link,id,BookName,writer,image,SpecialCost,Cost} = route?.params ?? {};

  async function togglePlayback() {
    const currentTrack = await TrackPlayer.getPosition();
    const currentTrack2 = await TrackPlayer.getDuration();
    console.log(444)
    console.log(currentTrack.toFixed(1))
    console.log(currentTrack2)

    if (currentTrack.toFixed(1) == currentTrack2.toFixed(1)) {
      console.log(775)

      setPlay(true)
      // await TrackPlayer.reset();
      await TrackPlayer.reset();
      // await TrackPlayer.destroy();
      await TrackPlayer.add({
        id: "local-track",
        // url: localTrack,
        url: apiAsset+link,
        // url: require('@assets/images/audio_2021-11-02_15-04-15.mp3'),
        title: "Ketanic",
        artwork: "https://i.picsum.photos/id/500/200/200.jpg",
        artist:BookName

        // duration: 10
      }
      // ,{
      //   id: "local-track2",
      //   url: apiAsset+link,
      //   title: "Ketanic",
      //   artwork: "https://i.picsum.photos/id/500/200/200.jpg",
      // }]
      );
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
  const  buy=async()=> {
    const state = await AsyncStorage.getItem("@user");

    axios.post(apiUrl+'ShoppingBasketAdd',{CustomerID:state,BookID:id,Cost:SpecialCost?SpecialCost:Cost})
    .then(function (response) {
      const message = response.data;
      const result = response.data.result;
      console.log(333);
      
      console.log(message);
      
      if(result == "true"){
        alert("با موفقیت به سبدخرید شد")
                        }else{

      }
    })
    .catch(function (error) {
      console.log(error);
    });


    };
    const  mutSave=async()=> {
      const state = await AsyncStorage.getItem("@user");
  
  if(state==""){
    Alert.alert("",getTranslation("لطفا وارد شوید"))
  
  }
      axios.post(apiUrl+'SingleBookSave',{BookID:id,CustomerID:state})
      .then(function (response) {
        const message = response.data;
        const result = response.data.result;
        console.log(333);
        
        console.log(message);
        
        if(result == "true"){
          alert("با موفقیت ذخیره شد")
          // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                          }else{
  
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  
  
      };
return (
   <ScrollView>
      <View style={{display:'flex',justifyContent:'center',alignContent:'center',alignItems:'center'}} >
        <Image source={{uri:apiAsset+image}} style={styles(theme).backgroundImage}  
        // blurRadius={5}
        />
        <View style={styles(theme).backView}>
         <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Icon name={'west'} size={30} color={'#fff'} style={{}}/>
   
     </TouchableOpacity>
      
     </View>
        {/* <Image source={{uri:apiAsset+image}} style={styles(theme).overImg}/> */}
      </View>
      <View style={styles(theme).whiteBack}>
      <Text style={styles(theme).eachBookName}>{BookName}</Text>
      <Text style={styles(theme).eachBookDetail}>{writer}</Text>
      <View style={{display:'flex',flexDirection:'row-reverse',marginRight:'auto',marginLeft:'auto',marginTop:responsiveHeight(5)}}>
        {/* <TouchableOpacity style={styles(theme).btnBox}>
          <Image source={require('@assets/images/speed.png')} style={styles(theme).btnBoxImg}/>
          <Text style={styles(theme).btnBoxTxt}>سرعت</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles(theme).btnBox}>
          <Image source={require('@assets/images/share.png')} style={styles(theme).btnBoxImg}/>
          <Text style={styles(theme).btnBoxTxt}>{getTranslation('اشتراک گذاری')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>mutSave()} style={styles(theme).btnBox}>
          <Image source={require('@assets/images/save.png')} style={styles(theme).btnBoxImg}/>
          <Text style={styles(theme).btnBoxTxt}>{getTranslation('نشان کردن')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles(theme).btnBox} onPress={toggleModal} >
          <Image source={require('@assets/images/car.png')} style={styles(theme).btnBoxImg}/>
          <Text style={styles(theme).btnBoxTxt}>{getTranslation('حالت ماشین')}</Text>
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

      />
                  </View>
      {/* <TouchableOpacity onPress={toggleModal2} style={{marginTop:50,marginLeft:100,}}>
        <Icon name={'access-time'} size={35}/>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={()=>buy()} style={styles(theme).loginBtn}>
       <Text style={styles(theme).btnText}>{getTranslation('دریافت نسخه کامل')}</Text>
     </TouchableOpacity>
      </View>
      <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)} >
 <View style={styles(theme).editModal}>
   <Text style={styles(theme).modalTitle}>
   {getTranslation('حالت ماشین')}
   </Text>
  <View style={{display:'flex',justifyContent:'center',alignContent:'center',alignItems:'center'}}>

    <TouchableOpacity onPress={()=>togglePlayback()} style={styles(theme).playBtn}>
    {
            isplay?
            <Icon name={'pause-circle-filled'} color={Colors.darkGreen} size={90} />
            :
            <Icon name={'play-circle-filled'} color={Colors.darkGreen} size={90} />
    }
    </TouchableOpacity>
    <View style={{display:'flex',flexDirection:'row-reverse',marginTop:responsiveHeight(5)}}>
      <TouchableOpacity onPress={()=> seeks("next")} style={{padding:responsiveHeight(2),borderLeftColor:'#c1c1c1',borderLeftWidth:1}}>
        <Image source={require('@assets/images/15after.png')} style={styles(theme).after}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> seeks("prev")} style={{padding:responsiveHeight(2)}}>
      <Image source={require('@assets/images/15before.png')} style={styles(theme).after}/>
      </TouchableOpacity>
    </View>
  </View>
 </View>
 </Modal>
 <Modal isVisible={isModalVisible2} onBackdropPress={() => setModalVisible2(false)} >
 <View style={styles(theme).editModal}>
   <Text style={styles(theme).modalTitle}>
   {getTranslation('زمان سنج توقف')}
   </Text>
   <View style={styles(theme).radioRow}>
  <View style={styles(theme).radioView}>
  <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
        color={Colors.darkGreen}
      />
  <Text style={styles(theme).radionText}>
  {getTranslation('خاموش')}
  </Text>
      </View>
  </View>
  <View style={styles(theme).radioRow}>
  <View style={styles(theme).radioView}>
  <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
        color={Colors.darkGreen}
      />
  <Text style={styles(theme).radionText}>
  {getTranslation('تا پایان اپیزود')}
  </Text>
      </View>
  </View>
  <View style={styles(theme).radioRow}>
  <View style={styles(theme).radioView}>
  <RadioButton
        value="third"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}
        color={Colors.darkGreen}
      />
  <Text style={styles(theme).radionText}>
  {getTranslation('دقیقه')}5
  </Text>
      </View>
  </View>
  <View style={styles(theme).radioRow}>
  <View style={styles(theme).radioView}>
  <RadioButton
        value="four"
        status={ checked === 'four' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('four')}
        color={Colors.darkGreen}
      />
  <Text style={styles(theme).radionText}>
  {getTranslation('دقیقه')} 10
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
  {getTranslation('دقیقه')} 15
  </Text>
      </View>
  </View>
  <View style={styles(theme).radioRow}>
  <View style={styles(theme).radioView}>
  <RadioButton
        value="six"
        status={ checked === 'six' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('six')}
        color={Colors.darkGreen}
      />
  <Text style={styles(theme).radionText}>
  {getTranslation('دقیقه')} 30
  </Text>
      </View>
  </View>
  <View style={styles(theme).radioRow}>
  <View style={styles(theme).radioView}>
  <RadioButton
        value="seven"
        status={ checked === 'seven' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('seven')}
        color={Colors.darkGreen}
      />
  <Text style={styles(theme).radionText}>
  {getTranslation('دقیقه')} 45
  </Text>
      </View>
  </View>
  <View style={styles(theme).radioRow}>
  <View style={styles(theme).radioView}>
  <RadioButton
        value="eight"
        status={ checked === 'eight' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('eight')}
        color={Colors.darkGreen}
      />
  <Text style={styles(theme).radionText}>
  {getTranslation('دقیقه')} 60
  </Text>
      </View>
  </View>
 </View>
 </Modal>
   </ScrollView>
   
);
};

const styles = (theme) => StyleSheet.create({
  whiteBack:{
    backgroundColor:theme.backgroundColor,
  },
  backgroundImage:{
    height:responsiveHeight(50),
    width:responsiveWidth(100),
    resizeMode:'cover'
  },overImg:{
    height:responsiveHeight(35),
    borderRadius:10,
    width:responsiveWidth(65),
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
      color:theme.textTitle,
      textAlign:'center',
      marginTop:responsiveHeight(2),
  },eachBookDetail:{
    ...myFontStyle.bookWriter3,
    color:theme.textTitle,
    textAlign:'center',
    
    
  },btnBoxImg:{
    width:32,
    height:32,
    resizeMode:'contain'
  },btnBoxTxt:{
    ...myFontStyle.bookWriter3,
    color:theme.textTitle,
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
  },editModal:{
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

  export default ListenBook;

//make this component available to the <app></app>
