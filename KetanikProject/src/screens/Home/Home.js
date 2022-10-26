import React, {useState,useRef ,useEffect} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView,FlatList,Spinner} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import { myFontStyle } from "@assets/Constance";
import DrawerPage from '@components/drawerContent/DrawerPage';
import DrawerContent from '@components/drawerContent/DrawerContent';
import Drawer from 'react-native-drawer';
import AsyncStorage from  '@react-native-async-storage/async-storage';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";
import GetLocation from 'react-native-get-location'

// import ReactWeather, { useOpenWeather } from 'react-open-weather';
// create a component



 const Home = ({navigation }) => {
  const drawers = useRef(null);
  // const { data, isLoading, errorMessage } = useOpenWeather({
  //   key: 'c57c3e45897952d7fb5d7e4bcb519dc6',
  //   lat: '48.137154',
  //   lon: '11.576124',
  //   lang: 'en',
  //   unit: 'metric', // values are (metric, standard, imperial)
  // });
  const [temp,setTemp] = useState('');
  const [humidity,setHumidity] = useState('');
  const [wind,setWind] = useState('');
  const [ico,setIco] = useState('@assets/icons/01d.png');
  const [data,setData] = useState([]);

  useEffect(() => {

      mutLogin();


  }, []);

  const  mutLogin=async()=> {
    console.log(999);
    var CustomerID= await AsyncStorage.getItem("CustomerID")

    axios.post(apiUrl + "CustomerDevice",{CustomerID:CustomerID})
    .then(function (response) {
      // console.log(666)
      // console.log(response);
      // console.log(response.data.Data);
      if (response.data.result == "True") {
        console.log(666)
        console.log(response.data.Data);
  
        setData(response.data.Data[0])
 
    }})
    .catch(function (error) {
      console.log(777)

      console.log(error);
    });
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
  })
  .then(location => {
      console.log(123);
      console.log(location);
      console.log(location.latitude);
      console.log(location.longitude);
      axios.get("https://api.openweathermap.org/data/2.5/weather?lat="+location.latitude+"&lon="+location.longitude+"&appid=c57c3e45897952d7fb5d7e4bcb519dc6")
      .then(function (response) {
        // const message = response;
        console.log(999);
        console.log(response.data.main.temp);
        setTemp(response.data.main.temp?parseInt( response.data.main.temp-273):0)
        setHumidity(response.data.main.humidity)
        setWind(response.data.wind.speed)
        // setIco(require('@assets/icons/'+response.data.main.icon+'.png'))
        setIco(require('@assets/icons/01d.png'))
        const result = response.data;
        console.log(result);
  
       
      })
      .catch(function (error) {
        console.log(333333); 
        console.log(error); 
      });
  })
  .catch(error => {
      const { code, message } = error;
      console.warn(code, message);
  })
   
 


  

    };
  return (

  //     <DrawerPage navigation={navigation} Scene={<Draw/>} drawers={drawers}>
  // <Draw/>
  //   </DrawerPage>
  <Drawer
  // type="static"
  type="overlay"
  acceptDoubleTap ={true}
      ref={drawers}
      content={<DrawerContent navigation={navigation}/>}
      tapToClose={true}
      // open={true}
openDrawerOffset={0.4} // 20% gap on the right side of drawer
panCloseMask={0.2}
closedDrawerOffset={-3}
styles={styles.drawerStyles}
tweenHandler={(ratio) => ({
  main: { opacity:(2-ratio)/2 }
})}
      >

<DrawerPage drawers={drawers} name={"صفحه اصلی"} navigation={navigation} />
<View style={styles.container}>
  <View style={{flexDirection:'row-reverse',justifyContent:'space-between'}}>
    <View style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end'}}>
      <TouchableOpacity onPress={()=>navigation.navigate("Store")} style={styles.seeProducts}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignContent:'center',alignItems:'center',justifyContent:'space-between'}}>
      <Image source={require('@assets/images/store.png')} style={styles.btnImg} />
      <Text style={styles.btnText}>مشاهده محصولات</Text>
      </View>

      </TouchableOpacity>
    
      <TouchableOpacity onPress={()=>navigation.navigate("BlogList")} style={styles.news}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignContent:'center',alignItems:'center',justifyContent:'space-between'}}>
      <Image source={require('@assets/images/newspaper.png')} style={styles.btnImg} />
      <Text style={styles.btnText}>اخبار و مقالات</Text>
      </View>
      </TouchableOpacity>
        <TouchableOpacity onPress={()=>  navigation.navigate("ConsultantList")} style={styles.iotProducts} >
      <View style={{display:'flex',flexDirection:'row-reverse',alignContent:'center',alignItems:'center',justifyContent:'space-between'}}>
      <Image source={require('@assets/images/Iot.png')} style={styles.btnImg} />
      <Text style={styles.btnText}
      
      >لیست مشاوران
      </Text>
      </View>
      </TouchableOpacity>
    </View>
<View style={{height:responsiveHeight(24),width:responsiveWidth(36),backgroundColor:'#43d6e5',borderRadius:5,
alignItems:'center',justifyContent:'center'
}}>
{/* <Text style={{color:'#fff'}}>{temp}</Text> */}
<Image source={ico} style={styles.btnImg2} />

<Text style={{color:'#fff',...myFontStyle.largBold,  }}>دما:{temp}C</Text>
<View style={{marginTop:20}}>
<Text style={{color:'#fff',...myFontStyle.largBold,  }}>رطوبت:{humidity}%</Text>
<Text style={{color:'#fff',...myFontStyle.largBold,  }}>باد:{wind}km/h</Text>

</View>
</View>
    </View>
    <View style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between',marginTop:20}}>
      {/* <TouchableOpacity style={styles.consult1} onPress={()=>navigation.navigate("ChatList")} > */}
      <TouchableOpacity style={styles.consult1} onPress={()=>navigation.navigate("IotDashboard")} >
      <View style={{display:'flex',flexDirection:'row-reverse',alignContent:'center',alignItems:'center',justifyContent:'space-between'}}>
      <Image source={require('@assets/images/consulting.png')} style={styles.btnImg} />
      <Text style={styles.btnText}>کشاورزی هوشمند</Text>
      </View>

      </TouchableOpacity>
    
    </View>
  </View>
  {data?
<View style={styles.bodyView}>
<View style={styles.bodyHeader}>
<Text style={{...myFontStyle.normalBold,color:Colors.Green,flexDirection:'column'}}>سالم</Text>
<Text style={{...myFontStyle.normalBold,color:Colors.Orange,flexDirection:'column'}}>شماره دستگاه:{data.Serial}</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:responsiveHeight(2)}}>
<TouchableOpacity   style={styles.card}>
  <Text style={{...myFontStyle.mediumBold,flexDirection:'column',color:"#000"}}>دمای آب</Text>
  <Image source={require('@assets/images/temperarure.png')} style={styles.btnImg3} />

  <Text style={{...myFontStyle.mediumBold,flexDirection:'column',color:"#000"}}>28درجه</Text>
  <Text style={{...myFontStyle.smallBold,color:Colors.Green,flexDirection:'column'}}>وضعیت:سالم</Text>

  </TouchableOpacity>
  <TouchableOpacity  style={styles.card}>
  <Text style={{...myFontStyle.mediumBold,flexDirection:'column',color:"#000"}}>دمای خاک</Text>
  <Image source={require('@assets/images/soil.png')} style={styles.btnImg3} />

  <Text style={{...myFontStyle.mediumBold,flexDirection:'column',color:"#000"}}>28درجه</Text>
  <Text style={{...myFontStyle.smallBold,color:Colors.Green,flexDirection:'column'}}>وضعیت:سالم</Text>

  </TouchableOpacity>
  <TouchableOpacity   style={styles.card}>
  <Text style={{...myFontStyle.mediumBold,flexDirection:'column',color:"#000"}}>دمای هوا</Text>
  <Image source={require('@assets/images/celsius.png')} style={styles.btnImg3} />

  <Text style={{...myFontStyle.mediumBold,flexDirection:'column',color:"#000"}}>۳۷درجه</Text>
  <Text style={{...myFontStyle.smallBold,color:Colors.Green,flexDirection:'column'}}>وضعیت:سالم</Text>

  </TouchableOpacity>

</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:responsiveHeight(2)}}>
<View style={styles.card}>
  <Text style={{...myFontStyle.mediumBold,flexDirection:'column',color:"#000"}}>شیر آب کنترلی</Text>
  <Image source={require('@assets/images/water-faucet.png')} style={styles.btnImg3} />

  <Text style={{...myFontStyle.mediumBold,flexDirection:'column',color:"#000"}}>بسته</Text>
  <Text style={{...myFontStyle.smallBold,color:Colors.Green,flexDirection:'column'}}>وضعیت:سالم</Text>

  </View>
  <View style={styles.card}>
  <Text style={{...myFontStyle.mediumBold,flexDirection:'column',color:"#000"}}>رطوبت خاک</Text>
  <Image source={require('@assets/images/sprout.png')} style={styles.btnImg3} />

  <Text style={{...myFontStyle.mediumBold,flexDirection:'column',color:"#000"}}>53٪</Text>
  <Text style={{...myFontStyle.smallBold,color:Colors.Green,flexDirection:'column'}}>وضعیت:سالم</Text>

  </View>
  <View style={styles.card}>
  <Text style={{...myFontStyle.mediumBold,flexDirection:'column',color:"#000"}}>رظوبت هوا</Text>
  <Image source={require('@assets/images/humidity.png')} style={styles.btnImg3} />

  <Text style={{...myFontStyle.mediumBold,flexDirection:'column',color:"#000"}}>68٪</Text>
  <Text style={{...myFontStyle.smallBold,color:Colors.Green,flexDirection:'column'}}>وضعیت:سالم</Text>

  </View>

</View>
</View>
:
null}
  </Drawer>
  );
};
 



  const styles = StyleSheet.create({
    container:{
      padding:25,
     
    },
    seeProducts:{
      backgroundColor:'#ffb921',
      height:responsiveHeight(7),
      width:responsiveWidth(50),
      borderRadius:10,
      display:'flex',
      justifyContent:'center',
      alignContent:'center',
      // alignItems:'center',
      padding:10,
      flexDirection:'column',
      shadowColor:'#000',
      marginBottom:10,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      // shadowOpacity: 0.5,
      shadowRadius: 2,
      
      elevation: 10,
    },iotProducts:{
      backgroundColor:'#4BA064',
      height:responsiveHeight(7),
      width:responsiveWidth(50),
      borderRadius:10,
      display:'flex',
      justifyContent:'center',
      alignContent:'center',
  // alignItems:'center',
  padding:10,      shadowColor:'#000',
      marginBottom:10,

      shadowOffset: {
        width: 0,
        height: 2,
      },
      // shadowOpacity: 0.5,
      shadowRadius: 2,
      
      elevation: 10,
    },
    btnImg:{
      width:34,
      resizeMode:"contain",
      // marginTop:responsiveHeight(-8),
    },
    btnImg2:{
      width:34,
      height:30,
      backgroundColor:'#fff',
      resizeMode:"contain",
      // marginTop:responsiveHeight(-8),
    },
    
    consult1:{
      backgroundColor:'#a20067',
      height:responsiveHeight(7),
      width:responsiveWidth(90),
      borderRadius:10,
      display:'flex',
      justifyContent:'center',
      marginBottom:10,

      alignContent:'center',
      // alignItems:'center',
      padding:10,
      flexDirection:'column',
      shadowColor:'#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      // shadowOpacity: 0.5,
      shadowRadius: 2,
      
      elevation: 10,
    },news
      :{
        backgroundColor:'#FF6900',
        height:responsiveHeight(7),
        width:responsiveWidth(50),
        borderRadius:10,
              marginBottom:10,

        display:'flex',
        justifyContent:'center',
        // alignContent:'center',
        // alignItems:'center',
        // flexDirection:'column',
        padding:10,
        shadowColor:'#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      // shadowOpacity: 0.5,
      shadowRadius: 2,
      
      elevation: 10,
      },btnText:{
        ...myFontStyle.normalBold,
        color:'#ffffff',
        // marginTop:responsiveHeight(-10),
      },
      bodyView:
      {
      backgroundColor:"#fff",
      paddingHorizontal:responsiveWidth(2),
      marginHorizontal:20
    },
     bodyHeader:
      {flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:responsiveWidth(1),
      marginBottom:10
    ,
    },
    btnImg3:{
      width:responsiveWidth(6),
      height:responsiveHeight(4)
    },
    card:
    {
    alignItems:'center',
    justifyContent:'center',
    width:responsiveWidth(25),
    paddingVertical:responsiveHeight(0.5),
    shadowColor:'#000',
  backgroundColor:"#fff",
  marginLeft:5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius:0.5,
    elevation: 10,
    borderRadius:5
  },
    
  });

  export default Home;

//make this component available to the <app></app>
