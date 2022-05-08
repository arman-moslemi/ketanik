import React, { useState,useEffect } from 'react';
import { myFontStyle } from "@assets/Constance";
import { View, Text , StyleSheet,Image, TouchableOpacity,Button,FlatList} from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors} from "@assets/Colors";
import {Input} from '@components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from "react-native-modal";
import { ScrollView } from 'react-native-web';
import AsyncStorage from  '@react-native-async-storage/async-storage';
import axios from 'axios';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";
import { useNavigation } from '@react-navigation/native';
import {
  BarChart,
  LineChart

} from "react-native-chart-kit";
// create a component
// const [showBox, setShowBox] = useState(false);
// const onClick = () => setShowBox(true);


const data2 = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2 // optional
    }
  ],
  legend: ["Rainy Days"] // optional
};
const chartConfig = {
  backgroundGradientFrom: "#F4F4F4",
  backgroundGradientFromOpacity: 10,
  backgroundGradientTo: "#F4F4F4",
  // backgroundGradientToOpacity: 0.1,
  color: (opacity = 1) => `rgba(22, 178, 245, 1)`,
  strokeWidth: 30, // optional, default 3
  barPercentage: 1,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  // decimalPlaces: 1,
  useShadowColorFromDataset: false  // optional
};
const FirstRoute = () => (
  <View>
  <View style={{display:'flex',flexDirection:'row-reverse'}}>
    <View style={styles.lightGreenBack}>
       <View style={styles.greenCircle}>
         <Image source={require('@assets/images/category2.png')} style={styles.miniImg}/>
       </View>
       <Text style={styles.largeText}>
         23
       </Text>
       <Text style={styles.miniText}>
         ژانر خوانده شده
       </Text>
       
    </View>
    <View style={styles.lightGreenBack}>
    <View style={styles.greenCircle}>
         <Image source={require('@assets/images/hour.png')} style={styles.miniImg}/>
       </View>
       <Text style={styles.largeText}>
         23
       </Text>
       <Text style={styles.miniText}>
         ساعت کتاب خوانده شده
       </Text>
</View>
<View style={styles.lightGreenBack}>
<View style={styles.greenCircle}>
         <Image source={require('@assets/images/book.png')} style={styles.miniImg}/>
       
       </View>
       <Text style={styles.largeText}>
         23
       </Text>
       <Text style={styles.miniText}>
         کتاب خوانده شده
       </Text>
</View>

  </View>
  <View>
<LineChart
  data={data2}
  width={responsiveWidth(100)}
  height={256}
  verticalLabelRotation={30}
  chartConfig={chartConfig}
  bezier
/>
</View>
</View>
);
const keyExtractor = item => {
  return item.BookID;
};


const SecondRoute = ({show,setShow,data,setRole,roleName,setRoleName,navigation}) => {
  const _render = ({item}) => {
    console.log(item.BookName)
  
    return (
      <TouchableOpacity onPress={()=>navigation.navigate("EpisodesList",{id:item.BookID})} style={styles.libraryBox}>
      {/* <TouchableOpacity style={styles.littleBtn}>
      <Icon name={"more-vert"} color={Colors.darkGreen} size={25}/>
    
      </TouchableOpacity>
      <TouchableOpacity style={styles.littleBtn2}>
      <Icon name={"headset"} color={Colors.darkGreen} size={20}/>
    
      </TouchableOpacity> */}
      <Image source={{uri:apiAsset+item.Pic}} style={styles.libraryBook}/>
      <Text style={styles.moreText}>{item.RoleName}</Text>
    </TouchableOpacity>
    );
    };
return(
 <View style={{ flex: 1}}>

   <View  style={{position:'relative'}}>
     <TouchableOpacity style={{display:'flex',flexDirection:'row-reverse',marginTop:responsiveHeight(2)}} onPress={()=>setShow(!show)} >
     <Icon name={"notes"} color={'#707070'} size={30} style={{transform: [{rotateY: '180deg'}]}}/>
       <Text style={styles.pageTitleText}>
           {roleName}
       </Text>
     </TouchableOpacity>
   {
     show?
    
     <View style={styles.greenBox}>
       <TouchableOpacity onPress={()=>{setRole(1);setRoleName("در حال مطالعه");setShow(false)}} style={styles.greenBoxBtn}>
         <Text style={styles.greenBoxText}>
           در حال مطالعه
         </Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>{setRole(2);setRoleName("خوانده نشده ها");setShow(false)}} style={styles.greenBoxBtn}>
         <Text style={styles.greenBoxText}>
         خوانده نشده ها
         </Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>{setRole(3);setRoleName("خوانده شده ها");setShow(false)}} style={styles.greenBoxBtn}>
         <Text style={styles.greenBoxText}>
           خوانده شده ها
         </Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>{setRole(4);setRoleName("همه کتاب ها");setShow(false)}} style={styles.greenBoxBtn}>
         <Text style={styles.greenBoxText}>
          همه کتاب ها
         </Text>
       </TouchableOpacity>
     </View>
  
  :
  null
}
</View>

     <FlatList
 
 keyExtractor={keyExtractor}
 data={data}
 renderItem={_render}
 numColumns={2}
 navigation={navigation}

 columnWrapperStyle={styles.charityList}
 // style={{marginTop:responsiveHeight(7),marginLeft:responsiveWidth(2),marginBottom:responsiveHeight(20)}}
           // ListFooterComponent={listFooter}
 // onEndReached={fetchNextCharityPage}
 />

 </View>
)};



 const Library = ({navigation }) => {
  const [show,setShow]=useState(false);
  const [roleName,setRoleName]=useState("همه کتاب ها");

  const [index, setIndex] = React.useState(0);
  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'status':
        return <FirstRoute  />;
      case 'library':
        return <SecondRoute navigation={navigation} show={show} setShow={setShow} data={data} setRole={setRole} setRoleName={setRoleName} roleName={roleName} />;
      default:
        return null;
    }
    };;
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
  const [data,setData]=useState([]);
  const [role,setRole]=useState(null);
  const [slider,setSlider]=useState([]);
  useEffect(() => {

    mutLogin();


}, [role]);

  const  mutLogin=async()=> {
    const state = await AsyncStorage.getItem("@user");

    axios.post(apiUrl+'Library',{CustomerID:state,RoleID:role})
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


    };
return (
  
    <View style={{ flex: 1,padding:0}}>
          <View style={styles.topBar}>


<TouchableOpacity onPress={()=>navigation.goBack()} style={{}}>
        <Icon name={"cached"} color={'#111'} size={30}/>
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
  charityList: {
    marginTop: responsiveHeight(2),
  
    justifyContent: 'center'
    ,marginBottom:responsiveHeight(3),
  },
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
    // width:"100%",
    height:responsiveHeight(19),
    resizeMode:'cover',
    borderRadius:10,
    
},libraryBox:{
  height:responsiveHeight(19),
  width:responsiveWidth(37.5),
  marginRight:'auto',
  marginLeft:'auto',
  // position:'relative',
  // alignItems:'center',
  marginTop:responsiveHeight(5),
},pageTitleText:{
  color:'#343434',
  ...myFontStyle.largeRegular,
  marginRight:responsiveWidth(2)
},littleBtn:{
  position:'absolute',
  top:responsiveHeight(1),
  right:responsiveWidth(1),
  height:25,
  width:25,
  borderRadius:20,
  textAlign:'center',
  display:'flex',
  justifyContent:'center',
  alignContent:'center',
  alignItems:'center',
  alignSelf:'center',
  zIndex:1000,
  backgroundColor:'#fff'
},littleBtn2:{
  position:'absolute',
  top:responsiveHeight(1),
  left:responsiveWidth(1),
  height:25,
  width:25,
  borderRadius:20,
  textAlign:'center',
  display:'flex',
  justifyContent:'center',
  alignContent:'center',
  alignItems:'center',
  alignSelf:'center',
  zIndex:1000,
  backgroundColor:'#fff'
},greenBox:{
  backgroundColor:Colors.lightGreen,
  
  width:responsiveWidth(40),
  position:'absolute',
  top:responsiveHeight(7),
  right:0,
  zIndex:10000,
  borderRadius:5,
  borderRightColor:Colors.darkGreen,
  borderRightWidth:3,
},greenBoxBtn:{
  borderBottomColor:'#e8ebe3',
  borderBottomWidth:1,
  padding:10,
  width:'100%',
},greenBoxText:{
  ...myFontStyle.normalRegular,
  color:'#111',
},lightGreenBack:{
  backgroundColor:'#E5EBDF',
  borderRadius:15,
  width:responsiveWidth(28),
  height:responsiveHeight(20),
  margin:5,
  marginTop:responsiveHeight(5),
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignContent:'center',
  alignItems:'center',
  alignSelf:'center',
},greenCircle:{
  height:65,
  width:65,
  backgroundColor:'#b3e0d9',
  borderRadius:100,
  justifyContent:'center',
  alignContent:'center',
  alignSelf:'center',
  display:'flex',
  alignItems:'center'
},miniImg:{
    width:45,
    height:45,
    resizeMode:'contain' 
},largeText:{
  ...myFontStyle.textOnImg,
  color:'#111',
},miniText:{
  ...myFontStyle.mediumRegular,
  color:'#111'
},
moreText:{
  color:'#000',
  ...myFontStyle.normalRegular,
},
  });

  export default Library;

//make this component available to the <app></app>
