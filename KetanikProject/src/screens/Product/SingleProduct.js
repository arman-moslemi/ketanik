import React, { useState,useEffect,useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image,Alert } from 'react-native';
import { myFontStyle } from "@assets/Constance";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '@assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import {TopBar} from '../../components/TopBar';
import Modal from "react-native-modal";
import {Input} from '@components/Input';
import axios from 'axios';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";
import DrawerPage from '@components/drawerContent/DrawerPage';
import DrawerContent from '@components/drawerContent/DrawerContent';
import Drawer from 'react-native-drawer'
import AsyncStorage from  '@react-native-async-storage/async-storage';
import ViewSlider from 'react-native-view-slider';
import { Rating, AirbnbRating } from 'react-native-ratings';

// create a component
const SingleProduct = ({navigation,route}) => {

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [data,setData] = useState([]);
  const [count,setCount]=useState(1);
  const [costTotal,setCostTotal]=useState(0)
  const drawers = useRef(null);
  const [rate,setRate]=useState(5)
  const [com, setCom] = useState([]);
  const [property, setProperty] = useState([]);
  const [number, setNumber] = useState(1);
  const [rateNum, setRateNum] = useState();

  const {params} = route?.params ?? {};


     
  
          const GetData=()=>{
            const axios = require("axios");
          
            var customer=AsyncStorage.getItem("CustomerID")
            var guest=AsyncStorage.getItem("Guest")?AsyncStorage.getItem("Guest"):0;

            console.log(123456)
            console.log(params)
            axios.post(apiUrl +  "SingleProduct",{ProductName:params})
            .then(function (response) {
              console.log(response.data)
    
              if (response.data.result == "True") {
                console.log(777)
                console.log(response.data.Data)

                setData(response.data.Data[0])
              }
            });
      
            axios.post(apiUrl + "ProductProperty",{ProductName:params})
            .then(function (response) {
              console.log(response)
    
              if (response.data.result == "True") {
                console.log(789456)
                console.log(response.data.Data)
                setProperty(Object.values(response.data.Data))
    
            }})
            .catch(function (error) {
              console.log(777)
              alert(error)
    
              console.log(error);
            });
            axios.post(apiUrl + "ProductComment",{Title:params})
            .then(function (response) {
                if (response.data.result == "True") {
              console.log(response.data.Data)
    
            setCom(response.data.Data)
    
        }})
        .catch(function (error) {
          console.log(777)
          alert(error)
    
          console.log(error);
        });
          }
          const AddCart=async ()=>{
            const axios = require("axios");
    
          
        var customer=await AsyncStorage.getItem("CustomerID");
            axios.post(apiUrl + "ShoppingBasketAdd",{ProductID:data?.ProductID, 
                // CustomerID:customer,
                CustomerID:customer,
               GuestID:0,
              ShoppingBasketNumber:number,
              Cost:data?.SpecialCost?data.SpecialCost:data.Cost
            })
            .then(function (response) {
              console.log(response)
    
              if (response.data.result == "True") {
                console.log(222)
                console.log(response.data.Data)
                alert("محصول با موفقیت به سبدخرید اضافه شد")
            }})
            .catch(function (error) {
              console.log(777)
              alert(error)
    
              console.log(error);
            });
        
          
         
      
          }
  useEffect(() => {
    GetData();

  }, []);
  const toggleModal = () => {
   setModalVisible(!isModalVisible);
  };

  const closeModal=()=>{
    setModalVisible(!isModalVisible);
  }
  const InsertComment=async()=>{
    var ss=await AsyncStorage.getItem("CustomerID")
   

    
    const axios = require("axios");
    axios.post(apiUrl + "InsertProductComment",{CustomerID:ss,ProductID:data.ProductID,Text:text,Rate:rateNum})
    .then(function (response) {
      if (response.data.result == "True") {
        alert("پیام با موفقیت ثبت شد")
GetData()              
        }})
        .catch(function (error) {
            console.log(777)
            alert(error)
            
            console.log(error);
        });
      ;

}
const InsertFavorite=async()=>{
  const axios = require("axios");
  var ss=await AsyncStorage.getItem("CustomerID")
  axios.post(apiUrl + "InsertFavorite",{CustomerID:ss,ProductID:data.ProductID})
  .then(function (response) {
    if (response.data.result == "True") {
        alert("با موفقیت ثبت شد")
      }})
      .catch(function (error) {
          console.log(777)
          alert(error)
          
          console.log(error);
      });


  

}

return (
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
  
  <DrawerPage drawers={drawers} name={"مشاهده محصول"} navigation={navigation} />
      
           <View >








</View>

<View style={styles.container}>
   
{/* <View style={styles.viewBody}> */}

<ScrollView >
<ViewSlider

        renderSlides = {
          <>
            <TouchableOpacity onPress={()=>Linking.openURL(data?.Link1)} style={styles.viewBox}>
            <Image source={{uri:apiAsset + data?.Pic1}} resizeMode={"stretch"} style={styles.imageSlider}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL(data?.Link2)} style={styles.viewBox}><Image source={{uri:apiAsset+data?.Pic2}}  resizeMode={"stretch"} style={styles.imageSlider}></Image></TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL(data?.Link3)} style={styles.viewBox}><Image source={{uri:apiAsset+data?.Pic3}}  resizeMode={"stretch"} style={styles.imageSlider}></Image></TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL(data?.Link4)} style={styles.viewBox}><Image source={{uri:apiAsset+data?.Pic4}}  resizeMode={"stretch"} style={styles.imageSlider}></Image></TouchableOpacity>

            </>
      }
      style={styles.slider}     //Main slider container style
      height = {responsiveHeight(26)}    //Height of your slider
      slideCount = {4}    //How many views you are adding to slide
      dots = {true}     // Pagination dots visibility true for visibile
      dotActiveColor = '#FFCC00'     //Pagination dot active color
      dotInactiveColor = '#fff'    // Pagination do inactive color
      dotsContainerStyle={styles.dotContainer}     // Container style of the pagination dots
      autoSlide = {false}    //The views will slide automatically
      slideInterval = {5000}    //In Miliseconds
     />
     <View style={{flexDirection:'row-reverse',justifyContent:'space-between',paddingHorizontal:responsiveWidth(8)}}>
<View>
    <Text style={styles.productName}>{data.Name}</Text>
    <Text style={styles.productValue}>مدل:{data.BrandName}</Text>
    <View style={{flexDirection:'row'}}>
    <Text style={styles.GroupText}>{data.Title}</Text>
    <Text style={styles.GroupTitle}>دسته بندی:</Text>
<Text >{data.RateAVG?data.RateAVG:0}</Text>
    <Icon name={"star"} color={'#ffb921'} size={20}/>
    </View>
</View>
<View>

<TouchableOpacity onPress={()=>InsertFavorite()} style={styles.hBtn}>
    <View style={{flexDirection:'row'}}>
  <Text style={styles.favorite}>افزودن به برگزیده ها</Text>
    <Image source={require('@assets/images/heart.png')} style={styles.heartBtn}/>
    </View>
  </TouchableOpacity>
  
</View>

</View>
<View style={styles.viwProperty}>
    <View style={{width:"100%",borderBottomColor:"#DADADA",color:Colors.Orange,borderBottomWidth:1,alignItems:'flex-end'}}>


    <Text style={styles.ProTitle}>مشخصات فنی</Text>
    </View>
    {property?.map((item,index)=>{
return(
    <View style={{flexDirection:'row',alignItems:'flex-end'}}>
<View style={{width:responsiveWidth(60),height:responsiveHeight(4),margin:10,backgroundColor:"#FAFAFA",padding:5,flexDirection:'row-reverse'}}>
    {  item.map((item2)=>{
        return(
        <Text style={styles.ProText}>
{item2.SubGroupPropertyTitle}     </Text>
    )
})}
</View>
<View style={{width:responsiveWidth(20),margin:10,height:responsiveHeight(4),backgroundColor:"#FAFAFA",marginLeft:10,padding:5}}>
<Text style={styles.ProText}>
{item[0].MainGroupPropertyTitle}    </Text>
</View>
    </View>

)
        })}

</View>
<View style={styles.viwProperty}>
    <View style={{width:"100%",borderBottomColor:"#DADADA",color:Colors.Orange,borderBottomWidth:1,alignItems:'flex-end'}}>


    <Text style={styles.ProTitle}>نقد و بررسی</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'flex-end'}}>
    <Text style={styles.des}>
    {data.Description}    </Text>

    </View>
</View>
<View style={styles.viwProperty}>
    <View style={{width:"100%",borderBottomColor:"#DADADA",color:Colors.Orange,borderBottomWidth:1,alignItems:'flex-end'}}>


    <Text style={styles.ProTitle}>نظرات کاربران</Text>
    </View>
   
    <View style={{flexDirection:'row',alignItems:'flex-end'}}>
    <View style={styles.sortModal}>
    <View style={{paddingRight:responsiveWidth(5),paddingTop:responsiveHeight(0),flexDirection:'row'}}>
                <Rating
                    type='star'
                    ratingCount={5}
                    imageSize={20}
                    // showRating

                    ratingTextColor={'#fff'}
                    ratingColor={'#FFC444'}
                    onFinishRating={(ss)=>setRateNum(ss)}
                    // style={{transform: [{rotateY: '180deg'}]}}
                  />
                <Text style={{...myFontStyle.normalRegular,color:Colors.text,}}>امتیاز شما:   </Text>

                </View>
  
          
                <View style={{paddingRight:responsiveWidth(5),paddingTop:responsiveHeight(0)}}>
                <Text style={{...myFontStyle.normalRegular,color:Colors.text,marginTop:responsiveHeight(2),}}>دیدگاه شما:   </Text>
                <Input onChangeText={(ss)=>setText(ss)}     inputStyle={styles.textInputLogin2}containerStyle={{alignItems:"flex-end"}} />


                </View>
             <View style={{justifyContent:'center',width:'100%',alignContent:'flex-end'}}>
             <View style={{width:responsiveWidth(30) ,alignSelf:'flex-start',marginTop:responsiveHeight(2),marginLeft:responsiveWidth(5)}}>


<TouchableOpacity onPress={()=>InsertComment()} style={styles.sendBtn}>
<Text style={styles.modalBtnText}>ثبت دیدگاه</Text>
</TouchableOpacity>

                 </View>
               </View>
               </View>




    </View>

   
    <View style={{width:'100%'}}>
{
                    com?.map((item)=>{
                        return(
                          <View style={{justifyContent:'space-between',alignItems:'flex-end',borderBottomColor:"#E4E4E4",borderBottomWidth:1,width:"100%"}}>
  <View style={{flexDirection:'row-reverse',justifyContent:'space-between'}}>
    <View>
  <Text style={{...myFontStyle.normalRegular,color:Colors.Green}}>{item.Name} {item.Family}  </Text>
  </View>
<View style={{flexDirection:'row',marginRight:responsiveWidth(10)}}>
{
                      [...new Array(5)].map((item2,index)=>{
                        return(
index+1>item.Rate?

<Icon name={"star-border"} color={'#000000'} size={15}/>
:
<Icon name={"star"} color={'#ffb921'} size={15}/>


                        )
                      })
                    }
<Text style={{...myFontStyle.mediumRegular,color:Colors.text}}>امتیاز ثبت شده:  </Text>

</View>
  </View>
<View>
<Text style={{...myFontStyle.normalRegular,color:Colors.text,}}>{item.TextComment}   </Text>

  </View>
  </View>
                    )})}
</View>

</View>















</ScrollView>
 
<View style={styles.footer}>

<TouchableOpacity style={styles.sortBtn} onPress={()=>AddCart()}>
          <Text style={{...myFontStyle.normalBold,color:'#fff'}}>
افزودن به سبد خرید       
   </Text>

        </TouchableOpacity>
        <View style={{marginRight:5,borderColor:'#000',borderWidth:1,width:60,alignItems:'center',flexDirection:'row',justifyContent:'center',borderRadius:25}}>
        
        <TouchableOpacity onPress={()=>number>1?setNumber(number-1):null}>

        <Text  style={{...myFontStyle.normalBold,color:Colors.Green,textAlign:'right',flexDirection:'column'}}>-</Text>
        </TouchableOpacity>
        <Text style={{...myFontStyle.normalBold,color:Colors.black,textAlign:'right',flexDirection:'column',marginHorizontal:10}}>{number}</Text>
        <TouchableOpacity onPress={()=>setNumber(number+1)}>

        <Text  style={{...myFontStyle.normalBold,color:Colors.Green,textAlign:'right',flexDirection:'column'}}>+</Text>
</TouchableOpacity>
        </View>
        <View>
        <Text style={{...myFontStyle.normalBold,color:'#000'}}>
مجموع سبد خرید:   </Text>
{
  !data.SpecialCost?

   <Text style={{...myFontStyle.normalBold,color:Colors.Black}}>
{data.Cost}   تومان</Text>
  :
<View>
<View style={{flexDirection:'row'}}>

  <View style={{backgroundColor:Colors.Red,width:35,borderRadius:50,alignItems:'center'}}>
<Text style={{color:Colors.White}}>{parseInt(((data.Cost-data.SpecialCost)/data.SpecialCost)*100)}%</Text></View>
<Text style={{...myFontStyle.mediumBold,color:Colors.Grey,textDecorationLine: 'line-through'}}>

{data.Cost}   تومان</Text>
</View>
   <Text style={{...myFontStyle.normalBold,color:Colors.Black}}>
{data.SpecialCost}   تومان</Text>
</View>
}
</View>
</View>

</View>

        </Drawer>
);
};

const styles = StyleSheet.create({

  container: {flex:1,backgroundColor:"#fff"},
  menuTitle:{
    ...myFontStyle.largBold,
        color:"#fff",
        marginTop:responsiveHeight(1),
      },

      page: {
      flexDirection: 'column',
    },customRow:{
      flex:1, flexDirection:"row",
      position:"absolute",
      top:responsiveHeight(0),
      paddingRight:responsiveWidth(5),
      paddingLeft:responsiveWidth(5),
    },
    drawerStyles: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3,zIndex:5},

avatar: {
    width: responsiveWidth(18),
    height: responsiveHeight(10),
    resizeMode: "contain",
    // margin:5,
    marginRight:responsiveWidth(5)

  },
  button:{marginTop:responsiveHeight(2),width:responsiveWidth(30)
    ,height:responsiveHeight(4),backgroundColor:Colors.yellow,
  borderRadius:5,
  alignItems:'center',
  justifyContent:'center'

  },

  txtEdit: {
    color: Colors.white,
    ...myFontStyle.mediumRegular,
    borderWidth:1,
    borderColor:Colors.white,
    borderRadius:50,
    paddingVertical:3,
    paddingHorizontal:9,
    backgroundColor:Colors.yellow

  },
  modal:{
    // alignSelf: "center",
    // marginTop: responsiveHeight(30),
     height: responsiveHeight(63),
    width: responsiveWidth(90),
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding:  responsiveWidth(4),
  },
  viewRowCart:{flexDirection:'row',justifyContent:'space-between',paddingLeft:responsiveWidth(3),paddingRight:responsiveWidth(3) },
  viewRowCart2:{flexDirection:'row',justifyContent:'space-between',paddingLeft:responsiveWidth(3),paddingRight:responsiveWidth(3) },
  rowCart:{height:responsiveHeight(15),width:responsiveWidth(45),borderRadius:5,alignItems:"center",justifyContent:'center'},
  rowCart2:{height:responsiveHeight(11),borderRadius:5,alignItems:"center",justifyContent:'center',margin:responsiveWidth(3)},
  rowCart3:{height:responsiveHeight(11),borderRadius:5,alignItems:"center",
  justifyContent:'space-between',margin:responsiveWidth(3),flexDirection:'row'},
  viewBody:{backgroundColor:"#FAFAFB",flex:12},
  subViewBody:{backgroundColor:"#fff",
  height:responsiveHeight(12)
  ,alignItems:'flex-end',
  flexDirection:'row',
  justifyContent:'flex-end',
  paddingBottom:responsiveHeight(2)},
  subViewRead1:{

    backgroundColor:"#fff",
    elevation:5,
    shadowOpacity:1,
    shadowRadius:10,
    shadowOffset:5,
    borderRadius:5,
    marginRight:responsiveHeight(2),
    marginLeft:responsiveHeight(2),
    marginBottom:8,
  height:responsiveHeight(10),
  marginTop:responsiveHeight(2)
  ,alignItems:'center',
  flexDirection:'row',
  justifyContent:'space-between',
  padding:responsiveWidth(3),
  paddingBottom:responsiveHeight(2)},
  subViewRead2:{
    borderLeftWidth:5,
    borderLeftColor:'#F69D0D',
    backgroundColor:"#fff",
    elevation:5,
    shadowOpacity:1,
    shadowRadius:10,
    shadowOffset:5,
    borderRadius:5,
    marginRight:responsiveHeight(2),
    marginLeft:responsiveHeight(2),
    marginBottom:0,
  height:responsiveHeight(8),
  marginTop:responsiveHeight(3)
  ,alignItems:'center',
  flexDirection:'row-reverse',
  justifyContent:'space-between',
  padding:responsiveWidth(3),
  paddingBottom:responsiveHeight(2)},
  subViewRead3:{
    borderLeftWidth:5,
    borderLeftColor:'#E82B63',
    backgroundColor:"#fff",
    elevation:5,
    shadowOpacity:1,
    shadowRadius:10,
    shadowOffset:5,
    borderRadius:5,
    marginRight:responsiveHeight(2),
    marginLeft:responsiveHeight(2),
    marginBottom:0,
  height:responsiveHeight(8),
  marginTop:responsiveHeight(3)
  ,alignItems:'center',
  flexDirection:'row-reverse',
  justifyContent:'space-between',
  padding:responsiveWidth(3),
  paddingBottom:responsiveHeight(2)},

  viewProfText:{marginRight:5,marginTop:responsiveHeight(1),alignItems:'flex-end'},
viewIconEdit:{position:"absolute",bottom:0,right:20,backgroundColor:Colors.yellow,borderRadius:50},
textInputLogin:{
  height:responsiveHeight(15),
  ...myFontStyle.mediumRegular,
  borderColor:"#F1F1F1",
  borderWidth:2,
alignItems:'flex-end'

  },
  sortBtn:{
      backgroundColor:'#FF6900',
      width:responsiveScreenWidth(35),
      height:responsiveHeight(6),
      borderRadius:3,
  
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  },
  sortModal:{
    width:responsiveWidth(95),
    // marginTop:responsiveHeight(-20),
    backgroundColor:'#fff',
    alignItems:'flex-end',
    borderRadius:5,
    shadowColor: '#fff',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 0},
    shadowRadius: 700,
    elevation: 20,
    alignContent:'center',
    paddingTop:responsiveHeight(1),
    paddingBottom:responsiveHeight(3),
    paddingRight:responsiveWidth(0),
    paddingLeft:responsiveWidth(0),
  }, viewRadio: {flexDirection:'row',alignItems:'center',marginTop:responsiveHeight(1)}
  ,txtRadio: {
    color: Colors.text,
    ...myFontStyle.mediumBold,
    // lineHeight:responsiveHeight(3)

  },notShowBtn:{
    textAlign:'center',
    width:responsiveWidth(25),
   },
   modalBtnText:{
     ...myFontStyle.normalBold,
     color:'#fff',
     textAlign:'center',

   },
   sendBtn:{
       backgroundColor:'#FF6900',
       width:responsiveWidth(30),
       height:responsiveHeight(4.5),
       borderRadius:50,
       justifyContent:'center',
       elevation:5,
    shadowOpacity:0.5,
    shadowRadius:50,
    shadowOffset:50,
   },
   answered:{
       width:'80%',
       borderColor:'#2DDB4E',
       borderWidth:1,
       borderRadius:50,
       height:responsiveHeight(4),
       justifyContent:'center',
       textAlign:'center',
   },answeredText:{
       ...myFontStyle.mediumRegular,
       color:'#2DDB4E',
       textAlign:'center',
   }
   ,waited:{
    // width:'80%',
    borderColor:'#F69D0D',
    borderWidth:1,
    borderRadius:50,
    height:responsiveHeight(4),
    justifyContent:'center',
    textAlign:'center',
},waitedText:{
    ...myFontStyle.mediumRegular,
    color:'#F69D0D',
    textAlign:'center',
},closed:{
    width:'80%',
    borderColor:'#E82B63',
    borderWidth:1,
    borderRadius:50,
    height:responsiveHeight(4),
    justifyContent:'center',
    textAlign:'center',
}
,closedText:{
    ...myFontStyle.mediumRegular,
    color:'#E82B63',
    textAlign:'center',
},textInputLogin:{

    ...myFontStyle.mediumRegular,
    borderColor:"#F1F1F1",
    borderWidth:2,
  alignItems:'flex-end',
  backgroundColor:'#F7F6F9',

  marginLeft:responsiveWidth(2),

    },
    textInputLogin2:{

        ...myFontStyle.mediumRegular,
        borderColor:"#F1F1F1",
        borderWidth:2,
      alignItems:'flex-end',
      backgroundColor:'#F7F6F9',
      marginLeft:responsiveWidth(2),
      height:responsiveHeight(15),
        },
        footer:{height:responsiveHeight(9.5),backgroundColor:'#fff',borderRadius:5  ,  elevation:10,
        shadowOpacity:1,
        shadowRadius:10,
        shadowOffset:5,
    shadowColor:"#000",
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:responsiveWidth(5),
    alignItems:'center'
    },
    
imageSlider:
  {borderRadius:10,height:responsiveHeight(20),width:responsiveWidth(90)}
,
slider: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    paddingRight:responsiveWidth(0),
    paddingLeft:responsiveWidth(0),
  },
  dotContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: responsiveHeight(2)
    },bodyC:{
     marginTop:responsiveHeight(1),
     alignContent:"center",
    
    }
    , viewBox: {
        paddingHorizontal: responsiveScreenWidth(10),
        justifyContent: 'center',
        width: responsiveWidth(100),
        padding: 0,
        alignItems: 'center',
        height: "100%",
      
      }
      ,heartBtn:{
  
        width:20,
        height:20,
        resizeMode:'contain',
        
       },
       productName:{
        ...myFontStyle.largBold,
        color:Colors.Green,
        marginLeft:responsiveWidth(2),
        marginRight:responsiveWidth(2),
        marginTop:responsiveHeight(1),
       },productValue:{
        ...myFontStyle.mediumRegular,
        color:Colors.Grey,
        marginLeft:responsiveWidth(2),
        marginRight:responsiveWidth(2),
       }
       ,GroupTitle:{
        ...myFontStyle.mediumBold,
        color:Colors.Grey,
        marginLeft:responsiveWidth(2),
        marginRight:responsiveWidth(2),
       }
       ,GroupText:{
        ...myFontStyle.mediumBold,
        color:Colors.Yellow,
        marginLeft:responsiveWidth(2),
        marginRight:responsiveWidth(2),
       }
       ,ProText:{
        ...myFontStyle.mediumBold,
        color:Colors.Black,
  
       }
       ,favorite:{
        ...myFontStyle.mediumBold,
        color:Colors.Red,
        marginLeft:responsiveWidth(2),
        marginRight:responsiveWidth(2),
       },
       ProTitle:
       {width:responsiveWidth(30),borderBottomColor:Colors.Orange,color:Colors.Orange,borderBottomWidth:1,
    ...myFontStyle.normalBold
    },
       des:
       {color:Colors.Black,
    ...myFontStyle.normalRegular
    },
    viwProperty:{padding:responsiveWidth(5),alignItems:'flex-end',    elevation:10,
    shadowOpacity:1,
    shadowRadius:10,
    shadowOffset:5,
    shadowColor:"rgba(157, 157, 157, 0.22)",
    margin:10,
    borderRadius:5
    }
});

  export default SingleProduct;

