import React, { useState,useEffect ,useContext} from 'react';
import { myFontStyle } from "@assets/Constance";
import { View, Text , StyleSheet,Image, TouchableOpacity,Button,ScrollView,FlatList} from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors} from "@assets/Colors";
import {Input} from '@components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from "react-native-modal";
import ShowMore from 'react-native-show-more-button';
import axios from 'axios';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";
import { Rating, AirbnbRating } from 'react-native-ratings';
import AsyncStorage from  '@react-native-async-storage/async-storage';
// create a component
// const [showBox, setShowBox] = useState(false);
// const onClick = () => setShowBox(true);
import { ThemeContext } from '../../../theme/theme-context';
import TrackPlayer, { usePlaybackState } from "react-native-track-player";
import { getTranslation } from '@i18n/i18n';

export const truncate = (str, len) => {
  if (str.length > len && str.length > 0) {
    let new_str = str + " ";
    new_str = str.substr(0, len);
    new_str = str.substr(0, new_str.lastIndexOf(" "));
    new_str = new_str.length > 0 ? new_str : str.substr(0, len);
    return new_str + "...";
  }
  return str;
};


// const renderScene = SceneMap({
//   comment: FirstRoute,
//   present: ThirdRoute,
//   detail: SecondRoute,
 
// });
 const EachBook = ({navigation,route }) => {
  const {  theme } = useContext(ThemeContext);

  const [page,setPage]=useState(0);

  const [index, setIndex] = React.useState(2);
  // const [routes] = React.useState([
  //   { key: 'comment', title: 'نظرات' },
   
  //   { key: 'detail', title: 'جزئیات' },
  //   { key: 'present', title: 'معرفی کتاب' },
   
  // ]);
  // const renderTabBar = props => (
  //   <TabBar
  //     {...props}
  //     indicatorStyle={styles(theme).indicatorStyle}
  //     style={styles(theme).tabBar}
  //     getLabelText={({route}) => route.title}
  //     renderLabel={({route, focused, color}) =>
  //       focused ? (
  //         <Text style={styles(theme).tabBarText}>{route.title}</Text>
  //       ) : (
  //         <Text style={styles(theme).tabBarText2}>{route.title}</Text>
  //       )
  //     }
  //   />
  // );
  const [data,setData]=useState([]);
  const [rate,setRate]=useState([]);
  const [comment,setComment]=useState([]);
  const [rateNum, setRateNum] = useState(false);
  const [income, setIncome] = useState("");
  const [rel, setRel] = useState([]);
  const [relWri, setRelWri] = useState([]);
  const [relTran, setRelTran] = useState([]);
  const [relPub, setRelPub] = useState([]);
  const [like, setLike] = useState();
  const [trans, setTrans] = useState();
  const [pub, setPub] = useState();
  const [writer, setWriter] = useState();
  const [grid, setGrid] = useState();
  const [lib, setlib] = useState();

  useEffect(() => {

    mutLogin();


}, [like]);
const keyExtractor = item => {
  return item.id;
};
// const data=[1,2,3,4,5]
const _render = (item, index) => {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("EachBook",{id:item.item.BookID})} style={styles(theme).cardBox}>
    <Image source={{uri:apiAsset+item.item.Pic}} style={styles(theme).bookImg}/>
    <Text style={styles(theme).bookName}>
    {truncate(item.item.BookName,20)}
    </Text>
    <View style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between'}}>
    <Text style={styles(theme).bookName}>
    {item.item.Cost}ت
    </Text>
    <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
    <Text style={styles(theme).bookName}>
    {item.item.Rate}
    </Text>
    <Icon name={'star'} size={15} color={'#ffc93d'} style={{}}/>
    </View>
    </View>
   </TouchableOpacity>
  );
};
const {id} = route?.params ?? {};

  const  mutLogin=async()=> {
    // await TrackPlayer.destroy()

    const state = await AsyncStorage.getItem("@user");

    axios.post(apiUrl+'SingleBook',{BookID:id,CustomerID:state})
    .then(function (response) {
      const message = response.data;
      const result = response.data.result;
      console.log(333);

      console.log(message);

      if(result == "true"){
        setData(response.data.GroupData)
        setRate(response.data.RateData)
        setComment(response.data.CommentData)
        setWriter(response.data.GroupData.Writer)
        setTrans(response.data.GroupData.Translator)
        setPub(response.data.GroupData.Publisher)
        setGrid(response.data.GroupData.GroupID)
        setlib(response.data.LibData)
        console.log(896);
        console.log(response.data.LibData);
        axios.post(apiUrl+'LastRelatedBook',{GroupID:response.data.GroupData.GroupID})
        .then(function (response2) {
  
    
          if(result == "true"){
            setRel(response2.data.Data)
        
            // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                            }else{
    
          }
        })
        .catch(function (error) {
          console.log(error);
        });
        console.log(response.data.GroupData.Writer);

        axios.post(apiUrl+'LastWriterBook',{Writer:response.data.GroupData.Writer})
        .then(function (response3) {
          const message = response3.data;
          const result = response3.data.result;
    
    
          if(result == "true"){
            setRelWri(response3.data.Data)
        
            // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                            }else{
    
          }
        })
        .catch(function (error) {
          console.log(error);
        });
        axios.post(apiUrl+'LastTranslatorBook',{Translator:response.data.GroupData.Translator})
        .then(function (response4) {
          const message = response4.data;
          const result = response4.data.result;
        
    
          if(result == "true"){
            setRelTran(response4.data.Data)
        
            // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                            }else{
    
          }
        })
        .catch(function (error) {
          console.log(error);
        });
        axios.post(apiUrl+'LastPublisherBook',{Publisher:response.data.GroupData.Publisher})
        .then(function (response5) {
          const message = response5.data;
          const result = response5.data.result;
         
    
          if(result == "true"){
            setRelPub(response5.data.Data)
        
            // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                            }else{
    
          }
        })
        .catch(function (error) {
          console.log(error);
        });
                        }else{

      }
    })
    .catch(function (error) {
      console.log(error);
    });

    
    };

    const  gotoExample=async()=> {
      await TrackPlayer.stop();
      await TrackPlayer.destroy();
      navigation.navigate("ListenBook",{id:data.BookID,link:data.Link,image:data?.Pic,BookName:data.BookName,writer:data.Writer,SpecialCost:data.SpecialCost,Cost:data.Cost})
    }
  const  mutComment=async()=> {
    const state = await AsyncStorage.getItem("@user");
if( rate==""|| income==""){
  alert("موارد را وارد نمایید")

}
if(state==""){
  alert("لطفا وارد شوید")

}
    axios.post(apiUrl+'InsertComment',{BookID:id,CustomerID:state,Rate:rateNum,Text:income})
    .then(function (response) {
      const message = response.data;
      const result = response.data.result;
      
      
      if(result == "true"){
        alert("با موفقیت اضافه شد")
        setModalVisibleCom(false)
        // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                        }else{

      }
    })
    .catch(function (error) {
      console.log(error);
    });


    };
  const  mutSave=async()=> {
    console.log(rateNum);
    const state = await AsyncStorage.getItem("@user");

if(state==""){
  alert("لطفا وارد شوید")

}
    axios.post(apiUrl+'SingleBookSave',{BookID:id,CustomerID:state})
    .then(function (response) {
      const message = response.data;
      const result = response.data.result;
      console.log(333);
      
      console.log(message);
      
      if(result == "true"){
        alert("با موفقیت ذخیره شد")
        setModalVisibleCom(false)
        // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                        }else{

      }
    })
    .catch(function (error) {
      console.log(error);
    });


    };
  const  mutLike=async(aa)=> {
    console.log(rateNum);

    setLike(aa)
    axios.post(apiUrl+'InsertLike',{CommentBookID:aa})
    .then(function (response) {
      const message = response.data;
      const result = response.data.result;
      console.log(333);
      
      console.log(message);
      
      if(result == "true"){
        alert("با موفقیت ذخیره شد")
                        }else{

      }
    })
    .catch(function (error) {
      console.log(error);
    });


    };
    const  buy=async()=> {
      const state = await AsyncStorage.getItem("@user");

      axios.post(apiUrl+'ShoppingBasketAdd',{CustomerID:state,BookID:id,Cost:data.SpecialCost?data.SpecialCost:data.Cost})
      .then(function (response) {
        const message = response.data;
        const result = response.data.result;
        console.log(333);
        
        console.log(message);
        
        if(result == "true"){
          alert("با موفقیت به سبدخریداضافه شد")
          navigation.reset({
            index: 0,
            routes: [{ name: 'TabBar' }]
       })                          }else{
  
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  
  
      };
  const FirstRoute = () => (
    <ScrollView>
      <View style={styles(theme).commentView}>
     
     <View style={{width:responsiveWidth(65),marginLeft:responsiveWidth(5)}}>
       <View style={{display:'flex',flexDirection:'row',alignItems:'center',}}>
         <Text style={styles(theme).rateNum}>5</Text>
         <Icon name={'star'} color={'#ffc93d'} size={20}/>
         <View style={styles(theme).lineBack}>
           <View style={[styles(theme).lineFront1,{width:rate[0]?.Five==0?0:""+parseInt(rate[0]?.Five)/parseInt(rate[0]?.Number)*100+"%"}]}>
   
           </View>
         </View>
       </View>
       <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
       <Text style={styles(theme).rateNum}>4</Text>

         <Icon name={'star'} color={'#ffc93d'} size={20}/>
         <View style={styles(theme).lineBack}>
         <View style={[styles(theme).lineFront1,{width:rate[0]?.Four==0?0:""+parseInt(rate[0]?.Four)/parseInt(rate[0]?.Number)*100+"%"}]}>
   
           </View>
         </View>
       </View>
       <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
       <Text style={styles(theme).rateNum}>3</Text>

         <Icon name={'star'} color={'#ffc93d'} size={20}/>
         <View style={styles(theme).lineBack}>
         <View style={[styles(theme).lineFront1,{width:rate[0]?.Three==0?0:""+parseInt(rate[0]?.Three)/parseInt(rate[0]?.Number)*100+"%"}]}>
   
           </View>
         </View>
       </View>
       <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
       <Text style={styles(theme).rateNum}>2</Text>

         <Icon name={'star'} color={'#ffc93d'} size={20}/>
         <View style={styles(theme).lineBack}>
         <View style={[styles(theme).lineFront1,{width:rate[0]?.Two==0?0:""+parseInt(rate[0]?.Two)/parseInt(rate[0]?.Number)*100+"%"}]}>
   
           </View>
         </View>
       </View>
       <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
       <Text style={styles(theme).rateNum}>1</Text>

         <Icon name={'star'} color={'#ffc93d'} size={20}/>
         <View style={styles(theme).lineBack}>
         <View style={[styles(theme).lineFront1,{width:rate[0]?.One==0?0:""+parseInt(rate[0]?.One)/parseInt(rate[0]?.Number)*100+"%"}]}>
   
           </View>
         </View>
       </View>
       
     </View>
     <View style={{width:responsiveWidth(20)}}>
       <Text style={styles(theme).textRate}>
        {rate[0]?.Average}
       </Text>
       <View style={{display:'flex',flexDirection:'row-reverse',justifyContent:'flex-end',marginTop:responsiveHeight(-1),marginBottom:responsiveHeight(1)}}>
       {[...new Array(5)].map((item,index)=>{
                        return(
index+1>rate[0]?.Average?
<Icon name={'star'} color={"#fff"} size={15}/>
:
<Icon name={'star'} color={Colors.darkGreen} size={15}/>

)
})
}
         {/* <Icon name={'star'} color={Colors.darkGreen} size={15}/> */}
        
       </View>
       <View style={{display:'flex',flexDirection:'row-reverse'}}>
         <Icon name={'person'} color={'#1a1a1a'} size={25}/>
         <Text style={styles(theme).eachBookDetail3}>
         {getTranslation('نظر')} ({comment.length})
         </Text>
       </View>
     </View>
      </View>
      {
        comment.map((item)=>{
          return(

      <View style={styles(theme).commentGreenBox}>
         <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
           <View>
           <Image source={{uri:apiAsset+data?.Pic}} style={styles(theme).writerImg}/>
           </View>
           <View>
             <Text style={styles(theme).eachBookDetail5}>{item.Username}</Text>
            <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
            <View style={{display:'flex',flexDirection:'row-reverse',justifyContent:'flex-end',marginTop:responsiveHeight(1),marginBottom:responsiveHeight(1)}}>
            {[...new Array(5)].map((item2,index)=>{
                        return(
index+1>item?.Rate?
<Icon name={'star'} color={"#fff"} size={15}/>
:
<Icon name={'star'} color={Colors.darkGreen} size={15}/>

)
})
}
        
       </View>
       <Text style={styles(theme).eachBookDetail3}>{item.Date}</Text>
            </View>
           </View>
         </View>
         <Text style={styles(theme).bookDescription}>
      {item.Text}
         </Text>
         <TouchableOpacity onPress={()=>mutLike(item.CommentBookID)} style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
           
           <View>
           <Text style={styles(theme).bookDescription}>{item?.Likee} <Icon name={like==item.CommentBookID?'favorite':'favorite-border'} color={'red'} size={20}/></Text>
           </View>
         </TouchableOpacity>
       </View>
          )
        })
      }
    
    </ScrollView>
   );
   
   const SecondRoute = () => (
    
   <ScrollView>
   <View style={{ flex: 1}}>
   
        {/* <View style={{display:'flex',flexDirection:'row-reverse',marginTop:responsiveHeight(5),justifyContent:"space-between",marginBottom:responsiveHeight(5)}}>
          <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
             <Image source={require('@assets/images/book1.jpg')} style={styles(theme).writerImg}/>
             <View>
               <Text style={styles(theme).writerName}>
                 {data.Writer}
               </Text>
               <Text style={styles(theme).writerName2}>
            نویسنده
               </Text>
             </View>
          </View>
          <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
             <Image source={require('@assets/images/book2.jpg')} style={styles(theme).writerImg}/>
             <View>
               <Text style={styles(theme).writerName}>
{data.Translator}               </Text>
               <Text style={styles(theme).writerName2}>
   مترجم            </Text>
             </View>
          </View>
        </View> */}
        <View style={styles(theme).bookDetilTable}>
          <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
            <Icon name={'fiber-manual-record'} color={Colors.darkGreen} size={10}/>
            <Text style={styles(theme).table1}>
            {getTranslation('نام کتاب')}
            </Text>
          </View>
          <View style={{flex:0.5}}>
          <Text style={styles(theme).table2}>
{data.BookName}          </Text>
          </View>
        </View>
        <View style={styles(theme).bookDetilTable}>
          <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
            <Icon name={'fiber-manual-record'} color={Colors.darkGreen} size={10}/>
            <Text style={styles(theme).table1}>
            {getTranslation('نویسنده')}
            </Text>
          </View>
          <View style={{flex:0.5}}>
          <Text style={styles(theme).table2}>
          {data.Writer}          </Text>
          </View>
        </View>
        <View style={styles(theme).bookDetilTable}>
          <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
            <Icon name={'fiber-manual-record'} color={Colors.darkGreen} size={10}/>
            <Text style={styles(theme).table1}>
            {getTranslation('مترجم')}
            </Text>
          </View>
          <View style={{flex:0.5}}>
          <Text style={styles(theme).table2}>
{data.Translator}          </Text>
          </View>
        </View>
        <View style={styles(theme).bookDetilTable}>
          <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
            <Icon name={'fiber-manual-record'} color={Colors.darkGreen} size={10}/>
            <Text style={styles(theme).table1}>
            {getTranslation('ناشر')}
            </Text>
          </View>
          <View style={{flex:0.5}}>
          <Text style={styles(theme).table2}>
{data.Publisher}          </Text>
          </View>
        </View>
        <View style={styles(theme).bookDetilTable}>
          <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
            <Icon name={'fiber-manual-record'} color={Colors.darkGreen} size={10}/>
            <Text style={styles(theme).table1}>
            {getTranslation('دسته')}
            </Text>
          </View>
          <View style={{flex:0.5}}>
          <Text style={styles(theme).table2}>
           {data.Title}
          </Text>
          </View>
        </View>
        <View style={styles(theme).bookDetilTable}>
          <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
            <Icon name={'fiber-manual-record'} color={Colors.darkGreen} size={10}/>
            <Text style={styles(theme).table1}>
            {getTranslation('تعداد صفحات')}
            </Text>
          </View>
          <View style={{flex:0.5}}>
          <Text style={styles(theme).table2}>
            {data.Pages}
          </Text>
          </View>
        </View>
        <View style={styles(theme).bookDetilTable}>
          <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
            <Icon name={'fiber-manual-record'} color={Colors.darkGreen} size={10}/>
            <Text style={styles(theme).table1}>
            {getTranslation('زبان')}
            </Text>
          </View>
          <View style={{flex:0.5}}>
          <Text style={styles(theme).table2}>
           {data.Language}
          </Text>
          </View>
        </View>
        <View style={styles(theme).bookDetilTable}>
          <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
            <Icon name={'fiber-manual-record'} color={Colors.darkGreen} size={10}/>
            <Text style={styles(theme).table1}>
            {getTranslation('سایز')}
            </Text>
          </View>
          <View style={{flex:0.5}}>
          <Text style={styles(theme).table2}>
         {data.Size}MB
          </Text>
          </View>
        </View>
        <View style={styles(theme).bookDetilTable}>
          <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
            <Icon name={'fiber-manual-record'} color={Colors.darkGreen} size={10}/>
            <Text style={styles(theme).table1}>
            {getTranslation('تاریخ انتشار')}
            </Text>
          </View>
          <View style={{flex:0.5}}>
          <Text style={styles(theme).table2}>
          {data.Date}
          </Text>
          </View>
        </View>
        <View style={styles(theme).bookDetilTable}>
          <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
            <Icon name={'fiber-manual-record'} color={Colors.darkGreen} size={10}/>
            <Text style={styles(theme).table1}>
            {getTranslation('شابک')}
            </Text>
          </View>
          <View style={{flex:0.5}}>
          <Text style={styles(theme).table2}>
{data.ISBN}          </Text>
          </View>
        </View>
        <View style={styles(theme).bookDetilTable}>
          <View style={{display:'flex',flexDirection:'row-reverse',flex:0.5,alignItems:'center'}}>
            <Icon name={'fiber-manual-record'} color={Colors.darkGreen} size={10}/>
            <Text style={styles(theme).table1}>
            {getTranslation('راوی')}
            </Text>
          </View>
          <View style={{flex:0.5}}>
          <Text style={styles(theme).table2}>
{data.Narrator}          </Text>
          </View>
        </View>
     </View>
   </ScrollView>
   );
   const ThirdRoute = () => (
   <ScrollView>
   <View style={styles(theme).bookDescriptionBox}>
     <Text style={styles(theme).bookDescription}>
   {data.Description}
     </Text>
   
   </View>
   </ScrollView>
    );
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisibleCom, setModalVisibleCom] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
return (
 
<ScrollView style={{ flex: 1,padding:0,backgroundColor:theme.backgroundColor}}>
    <View style={styles(theme).greenBack}>
    <View style={styles(theme).topBar}>


    {/* <View style={styles(theme).rightCol}>
    <TouchableOpacity onPress={()=>alert(55)}>
    <Image source={require('@assets/images/save.png')} style={styles(theme).saveBtn}/>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Image source={require('@assets/images/share.png')} style={styles(theme).saveBtn}/>
      </TouchableOpacity>
    </View> */}
    {/* <View style={styles(theme).leftCol}>
    <TouchableOpacity>
        <Image source={require('@assets/images/back.png')} style={styles(theme).saveBtn}/>
      </TouchableOpacity>
     
</View> */}
       
</View>


    </View>
    
    <View style={styles(theme).bookDetailBox}>
<Image source={{uri:apiAsset+data?.Pic}} style={styles(theme).bookImg2}/>
<Text style={styles(theme).eachBookName}>{data.BookName}</Text>
<Text style={styles(theme).eachBookDetail}>{data.Writer}</Text>
<Text style={styles(theme).eachBookDetail}>{data.Cost} {getTranslation('sek')}</Text>
<View style={styles(theme).rateRow}>
<Text style={styles(theme).eachBookDetail2}>{rate[0]?.Average}</Text>
<Icon name={'star'} color={'#ffc93d'} size={20}/>
</View>
</View>
{
  lib==true?
<View style={styles(theme).btnRow}>
<TouchableOpacity onPress={()=>navigation.navigate("EpisodesList",{id:data.BookID})} style={[styles(theme).loginBtn,{marginLeft:5}]}>
       <Text style={styles(theme).btnText}>{getTranslation('مطالعه')}</Text>
     </TouchableOpacity>
     {/* <TouchableOpacity onPress={()=>navigation.navigate("ListenBook",{id:data.BookID,link:data.Link,image:data?.Pic,BookName:data.BookName,writer:data.Writer})} style={styles(theme).whiteBtn}>
       <Text style={styles(theme).btnText2}>نسخه نمونه</Text>
     </TouchableOpacity> */}
     <TouchableOpacity style={styles(theme).greenBtn2} onPress={toggleModal}>
      <Icon name={'keyboard-control'} size={30} color={'#fff'}/>
     </TouchableOpacity>
</View>
  :
<View style={styles(theme).btnRow}>
<TouchableOpacity onPress={()=>buy()} style={styles(theme).loginBtn}>
       <Text style={styles(theme).btnText}>{getTranslation('خرید')}</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>gotoExample()} style={styles(theme).whiteBtn}>
       <Text style={styles(theme).btnText2}>{getTranslation('نسخه نمونه')}</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles(theme).greenBtn2} onPress={toggleModal}>
      <Icon name={'keyboard-control'} size={30} color={'#fff'}/>
     </TouchableOpacity>
</View>
}
<View>
<TouchableOpacity onPress={()=>setModalVisibleCom(true)} style={styles(theme).comBtn}>
       <Text style={styles(theme).btnText}>{getTranslation('نظر دهید')}</Text>
     </TouchableOpacity>

</View>
<Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)} >
 <View style={styles(theme).moreModal}>
 
<View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center',marginBottom:responsiveHeight(5)}}>
  <View>
  <Image source={{uri:apiAsset+data.Pic}} style={styles(theme).modalImg}/>
  </View>
  <View>
    <Text style={styles(theme).eachBookDetail4}>
    {data.BookName}
    </Text>
    <Text style={styles(theme).eachBookDetail3}>
    {data.Writer}
    </Text>
  </View>
</View>
<TouchableOpacity onPress={()=>navigation.navigate("Rosters",{id:data.BookID})} style={{borderTopWidth:0.5,borderTopColor:'#c1c1c1',display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'row-reverse',paddingTop:responsiveHeight(2),paddingBottom:responsiveHeight(2)}}>
<View>
<Text style={styles(theme).eachBookDetail3}>
{getTranslation('فهرست کتاب')}
    </Text>
</View>
<View>
  <Image source={require('@assets/images/detail.png')} style={styles(theme).miniIcon}/>
</View>
</TouchableOpacity>
{/* <TouchableOpacity style={{borderTopWidth:0.5,borderTopColor:'#c1c1c1',display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'row-reverse',paddingTop:responsiveHeight(2),paddingBottom:responsiveHeight(2)}}>
<View>
<Text style={styles(theme).eachBookDetail3}>
     ارسال هدیه
    </Text>
</View>
<View>
  <Image source={require('@assets/images/gift.png')} style={styles(theme).miniIcon}/>
</View>
</TouchableOpacity> */}
<TouchableOpacity onPress={()=>mutSave()} style={{borderTopWidth:0.5,borderTopColor:'#c1c1c1',display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'row-reverse',paddingTop:responsiveHeight(2),paddingBottom:responsiveHeight(2)}}>
<View>
<Text style={styles(theme).eachBookDetail3}>
{getTranslation('افزودن به کتاب های دلخواه')}
    </Text>
</View>
<View>
  <Image source={require('@assets/images/save.png')} style={styles(theme).miniIcon}/>
</View>
</TouchableOpacity>
<TouchableOpacity style={{borderTopWidth:0.5,borderTopColor:'#c1c1c1',display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'row-reverse',paddingTop:responsiveHeight(2),paddingBottom:responsiveHeight(2)}}>
<View>
<Text style={styles(theme).eachBookDetail3}>
{getTranslation('اشتراک گذاری')}
    </Text>
</View>
<View>
  <Image source={require('@assets/images/share.png')} style={styles(theme).miniIcon}/>
</View>
</TouchableOpacity>
 </View>
 </Modal>

      <View style={styles(theme).tabViewBox}>
      {/* <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width:responsiveWidth(90) }}
    /> */}
      <View style={styles(theme).viwTab}>
      <TouchableOpacity onPress={()=>setPage(2)} style={page==2?styles(theme).tab:styles(theme).tabINActive}>
        <Text style={styles(theme).tabBarText}>
        {getTranslation('نظرات')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setPage(1)} style={page==1?styles(theme).tab:styles(theme).tabINActive}>
        <Text style={styles(theme).tabBarText}>
        {getTranslation('جزییات')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setPage(0)} style={page==0?styles(theme).tab:styles(theme).tabINActive}>
        <Text style={styles(theme).tabBarText}>
        {getTranslation('معرفی کتاب')}
        </Text>
      </TouchableOpacity>
          </View>
      </View> 
      <View style={{padding:10}}>
      {
        page==0?
      ThirdRoute()
        :page==1?
        SecondRoute()
        :
        FirstRoute()
      }
      </View>
      <Modal isVisible={isModalVisibleCom} onBackdropPress={() => setModalVisibleCom(false)} >
 <View style={styles(theme).moreModal}>
 
<View style={{display:'flex',alignItems:'center',justifyContent:'center',marginBottom:responsiveHeight(2)}}>
<Rating
                    type='star'
                    ratingCount={5}
                    imageSize={40}
                    // showRating

                    ratingTextColor={'#fff'}
                    ratingColor='#FFC444'
                    ratingBackgroundColor='#000000'
                    onFinishRating={(ss)=>setRateNum(ss)}
                    // style={{transform: [{rotateY: '180deg'}]}}
                    style={{backgroundColor:Colors.darkGreen}}
                  />
</View>
<View style={{alignItems:'center',justifyContent:'center'}}>
<Input multiline={true} onChangeText={(ss)=>setIncome(ss)}  placeholder="نظر" inputStyle={{marginTop:responsiveHeight(2)}}  />

</View>
<TouchableOpacity onPress={()=>mutComment()} style={styles(theme).comBtn}>
       <Text style={styles(theme).btnText}>{getTranslation('ثبت')}</Text>
     </TouchableOpacity>
 </View>
 </Modal>
 <View style={styles(theme).container}>

 <View style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between',marginBottom:responsiveHeight(5),marginTop:responsiveHeight(5)}}>
     <View style={{flex:1}}>
     <Text style={styles(theme).rowTitle}>
     {getTranslation('کتاب های مرتبط')}
      </Text>
     </View>
      <View>
      <TouchableOpacity onPress={()=>navigation.navigate('SelectedNews',{type:"group",GroupID:grid,GroupName:data.Title})}>
      <Text style={styles(theme).seeAll}>
      {getTranslation('مشاهده همه')}
      </Text>
      </TouchableOpacity>
      </View>
      </View>
   <View style={{display:'flex',flexDirection:'row-reverse'}}>
   <FlatList
          keyExtractor={keyExtractor}
          data={rel}
          renderItem={_render}
          horizontal={true}
          style={{marginTop:responsiveHeight(1),marginBottom:responsiveHeight(1),transform: [{ scaleX: -1 }] }}
          
        />
   </View>
 <View style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between',marginBottom:responsiveHeight(5),marginTop:responsiveHeight(5)}}>
     <View style={{flex:1}}>
     <Text style={styles(theme).rowTitle}>
     {getTranslation('دیگر کتاب های')} {data.Writer}
      </Text>
     </View>
      <View>
      <TouchableOpacity onPress={()=>navigation.navigate("SelectedNews",{type:"writer",writer:writer})}>
      <Text style={styles(theme).seeAll}>
      {getTranslation('مشاهده همه')}
      </Text>
      </TouchableOpacity>
      </View>
      </View>
   <View style={{display:'flex',flexDirection:'row-reverse'}}>
   <FlatList
          keyExtractor={keyExtractor}
          data={relWri}
          renderItem={_render}
          horizontal={true}
          style={{marginTop:responsiveHeight(1),marginBottom:responsiveHeight(1),transform: [{ scaleX: -1 }] }}
          
        />
   </View>


 <View style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between',marginBottom:responsiveHeight(5),marginTop:responsiveHeight(5)}}>
     <View style={{flex:1}}>
     <Text style={styles(theme).rowTitle}>
         {getTranslation('دیگر کتاب های')} {data.Publisher}
      </Text>
     </View>
      <View>
      <TouchableOpacity onPress={()=>navigation.navigate("SelectedNews",{type:"publisher",publisher:pub})}>
      <Text style={styles(theme).seeAll}>

      {getTranslation('مشاهده همه')}      </Text>
      </TouchableOpacity>
      </View>
      </View>
   <View style={{display:'flex',flexDirection:'row-reverse'}}>
   <FlatList
          keyExtractor={keyExtractor}
          data={relPub}
          renderItem={_render}
          horizontal={true}
          style={{marginTop:responsiveHeight(1),marginBottom:responsiveHeight(1),transform: [{ scaleX: -1 }] }}
          
        />
   </View>


 <View style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between',marginBottom:responsiveHeight(5),marginTop:responsiveHeight(5)}}>
     <View style={{flex:1}}>
     <Text style={styles(theme).rowTitle}>
         {getTranslation('دیگر کتاب های')} {getTranslation('مترجم')}
      </Text>
     </View>
      <View>
      <TouchableOpacity onPress={()=>navigation.navigate("SelectedNews",{type:"translator",translator:trans})}>
      <Text style={styles(theme).seeAll}>
      {getTranslation('مشاهده همه')}      </Text>
      </TouchableOpacity>
      </View>
      </View>
   <View style={{display:'flex',flexDirection:'row-reverse'}}>
   <FlatList
          keyExtractor={keyExtractor}
          data={relTran}
          renderItem={_render}
          horizontal={true}
          style={{marginTop:responsiveHeight(1),marginBottom:responsiveHeight(1),transform: [{ scaleX: -1 }] }}
          
        />
   </View>
   </View>
  
  </ScrollView>

    
);
};

const styles = (theme) => StyleSheet.create({
  container: {
    paddingRight:responsiveWidth(5),
    paddingLeft:responsiveWidth(5),
    paddingBottom:responsiveHeight(2),
    alignItems:"flex-end",
    marginTop:responsiveHeight(15),
},
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
color:theme.menuTitle,
  zIndex:10000,
},
tabBar:{
  backgroundColor:"transparent",
  elevation: 0,
  paddingBottom:responsiveHeight(2),
  borderBottomColor:theme.borderColor,
  borderBottomWidth:2
},
tabBarText:{
  color: theme.textTitle2,
  ...myFontStyle.largBold
},
tabBarText2:{
  color:theme.textTitle2,
  ...myFontStyle.largBold
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
  backgroundColor:theme.darkGreen,
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
  width:responsiveWidth(40),
  height:responsiveHeight(25),
  zIndex:2000,
marginRight:'auto',
marginLeft:'auto',
marginTop:responsiveHeight(10),
  resizeMode:'cover',
  borderRadius:10,
},eachBookName:{
    ...myFontStyle.UltraBold,
    color:theme.textTitle,
    textAlign:'center',
    marginTop:responsiveHeight(2),
},bookDetailBox:{
 
  textAlign:'center',
},eachBookDetail:{
  ...myFontStyle.bookWriter3,
  color:theme.textTitle,
  textAlign:'center',
  
  
},eachBookDetail2:{
  ...myFontStyle.UltraBold,
  color:theme.textTitle,
  textAlign:'center',
  
  
},eachBookDetail3:{
  ...myFontStyle.bookWriter3,
  color:'#111',
  textAlign:'right',
  
  
},eachBookDetail4:{
  ...myFontStyle.UltraBold,
  color:'#111',
  textAlign:'right',
  
  
},rateRow:{

  display:'flex',
  marginRight:'auto',
  marginLeft:'auto',
  flexDirection:'row',
  alignItems:'center',
},btnRow:{
  marginRight:'auto',
  marginLeft:'auto',
  marginTop:responsiveHeight(2),
  display:'flex',
  flexDirection:'row-reverse',
},
loginBtn:{
  backgroundColor:Colors.darkGreen,
  width:responsiveWidth(35),
  
  height:responsiveHeight(6),
  alignContent:'center',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:10,
 
},
comBtn:{
  backgroundColor:Colors.darkGreen,
  width:responsiveWidth(35),
  
  height:responsiveHeight(6),
  alignContent:'center',
  alignItems:'center',
  alignSelf:'center',
justifyContent:'center',
  borderRadius:10,
  marginTop:responsiveHeight(1)
 
},

cardBox:{
  backgroundColor:'#f1f5ec',
  height:responsiveHeight(19),
  width:responsiveWidth(34),
  borderRadius:10,
  textAlign:'center',
  padding:responsiveHeight(1),
  marginLeft:responsiveWidth(3),
  marginTop:responsiveHeight(3),
  transform: [{ scaleX: -1 }] 

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

},btnText:{
  ...myFontStyle.largBold,
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
  paddingTop:responsiveHeight(1),
  marginRight:10,
  marginLeft:10,
},btnText2:{
  ...myFontStyle.largBold,
  color:Colors.darkGreen,
  
},greenBtn2:{
  backgroundColor:Colors.darkGreen,
  width:responsiveWidth(12),

  height:responsiveHeight(6),
  alignContent:'center',
  alignItems:'center',
  paddingTop:responsiveHeight(1),
  borderRadius:10,
},bookDescription:{
  color:theme.textTitle,
  ...myFontStyle.bookWriter3,
  marginTop:responsiveHeight(2),
  
  },
  rateNum:{
    color:theme.textTitle2,
    ...myFontStyle.bookWriter3,
    
    },
  writerName:{
    color:theme.textTitle2,
    ...myFontStyle.largBold,
  },writerName2:{
    ...myFontStyle.normalRegular,
    color:theme.textTitle2
  },writerImg:{
    height:60,
    width:60,
    borderRadius:200,
    marginLeft:10,
  },bookDetilTable:{
    borderBottomColor:theme.borderColor,
    borderBottomWidth:1,
    display:'flex',
    flexDirection:'row-reverse',
    marginTop:responsiveHeight(0),
    paddingTop:responsiveHeight(1),
    paddingBottom:responsiveHeight(1),
  }
  ,table1:{
    color:theme.textTitle2,
    ...myFontStyle.largBold,
    marginRight:10,
  }
  ,table2:{
    color:theme.textTitle,
    ...myFontStyle.largBold,
    textAlign:'right',
  },moreModal:{
    // backgroundColor:Colors.lightGreen,
    backgroundColor:Colors.white,
    bottom:0,
    borderRightColor:Colors.darkGreen,
    borderRightWidth:5,
    borderRadius:10,
    padding:responsiveHeight(2),
    display:'flex',
    justifyContent:'flex-start',
  },modalImg:{
    height:responsiveHeight(12),
    width:responsiveWidth(24),
    resizeMode:'cover',
    borderRadius:10,
    marginLeft:responsiveWidth(5),
  },miniIcon:{
    width:24,
    height:28,
  },commentView:{
    display:'flex',
    marginTop:responsiveHeight(2),
    marginBottom:responsiveHeight(2),
    flexDirection:'row-reverse',
    alignItems:'center'
  },textRate:{
    ...myFontStyle.rate,
    color:theme.textTitle,
    textAlign:'center'
  },lineBack:{
    width:'85%',
    height:8,
    backgroundColor:'#e4e4e4',
    borderRadius:200,
    marginLeft:10,
  }
  ,lineFront1:{
    backgroundColor:Colors.darkGreen,
    height:8,
    borderRadius:200,
  },lineFront2:{
    backgroundColor:Colors.darkGreen,
    height:8,
    width:'40%',
    borderRadius:200,
  },lineFront3:{
    backgroundColor:Colors.darkGreen,
    height:8,
    width:'30%',
    borderRadius:200,
  },lineFront4:{
    backgroundColor:Colors.darkGreen,
    height:8,
    width:'20%',
    borderRadius:200,
  },lineFront5:{
    backgroundColor:Colors.darkGreen,
    height:8,
    width:'5%',
    borderRadius:200,
  },commentGreenBox:{
    backgroundColor:Colors.lightGreen,
    borderRadius:15,
    width:'100%',
    height:'auto',
    padding:responsiveHeight(2),
    marginTop:responsiveHeight(2),
    marginBottom:responsiveHeight(2),
  },eachBookDetail5:{
    ...myFontStyle.largBold,
    color:'#1a1a1a',
  },
  viwTab:{flexDirection:'row',alignItems:'center',justifyContent:"center"},
  tab:{borderBottomWidth:1,width:responsiveWidth(30),alignItems:'center',
justifyContent:"center",paddingBottom:responsiveHeight(3),borderBottomColor:theme.darkGreen}
 ,
  tabINActive:{borderBottomWidth:1,width:responsiveWidth(30),alignItems:'center',
justifyContent:"center",paddingBottom:responsiveHeight(3),borderBottomColor:"#f1f1f1"}

});

  export default EachBook;

//make this component available to the <app></app>
