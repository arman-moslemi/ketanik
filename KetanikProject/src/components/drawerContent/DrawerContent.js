//import liraries
import React, { useState,useEffect } from 'react';
import { View, Text, Image, TouchableOpacity ,Linking} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import { drawerStyles } from './DrawerStyles';

import {
  info,
  privacyPolicy,
  ratings,
  invitefriends,
  advertising,
  exit
} from './../../Constance';

import Icon from 'react-native-vector-icons/MaterialIcons';
// import {getUserInfo,MutUserInfos,SetSignOut} from '../../api/graphql/requests/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";
import {RadioButton ,Switch,List} from 'react-native-paper';
import { myFontStyle } from "@assets/Constance";


// create a component
const DrawerContent = ({ navigation }) => {
  const [Name,setName]=useState("User");
  const [photo,setPhoto]=useState("");
  // const [phone,setPhone]=useState("");
  useEffect(() => {
    // getDriverStatisticsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    mutLogin()



  }, []);
  const  mutLogin=async()=> {
    setName(await AsyncStorage.getItem('Name'))
    setPhoto(await AsyncStorage.getItem('@userPhoto'))
    console.log(1111)
    console.log(photo)
  }
  const  exit=async()=> {

 await   AsyncStorage.setItem('CustomerID',"")
navigation.navigate('Login')
  }

  const txtDarawerItem = [
    {id:1, title: "برگزیده ها", icon: "card-travel", navigateName: "Store",
      name1:"محصولات",
      name2:"مشاوران",
      name3:"اخبار",
      navigateName1:"FavoriteProduct",
      navigateName2:"BestConsultant",
      navigateName3:"FavoriteBlog",
    } ,
    {id:2, title: "کیف پول", icon: "wallet-travel", navigateName: "Wallet" },
    {id:3, title: "تاریخچه", icon: "library-books", navigateName: "ChatList" 
    //   ,  name1:"محصولات",
    // name2:"مشاوران",
    // name3:"اخبار",
    // navigateName1:"FavoriteProduct",
    // navigateName2:"BestConsultant",
    // navigateName3:"FavoriteBlog",
  },
    { id:4,title: "تیکت ها و پشتیبانی", icon: "textsms", navigateName: "TicketList" },
    // {id:3, title: "تخفیف ها", icon: "people-alt", navigateName: "" },
    // { title: Strings.inviteFriends, icon: invitefriends, navigateName: "" },
    // {id:5, title: "انتخاب زبان", icon: "sticky-note-2", navigateName: "" },
    // {id:7, title: "به روز رسانی", icon: "cached", navigateName: "" },
    { id:6,title: "خروج", icon: "login", navigateName: "" },
    // { title: Strings.signIn, icon: exit, navigateName: "" },
  ]


  const _renderMapView = (item, index) => (





//     <TouchableOpacity
// key={item.id}
//       onPress={() => item.id!=8? navigation.navigate(item.navigateName):exit()}

//       style={drawerStyles.subBtn}>


//       <Icon color={Colors.black}  name={"chevron-left"} size={responsiveFontSize(1.5)} />



//       <View style={drawerStyles.subViewDetails}>

//       <Icon color={"#000"} name={item.icon} size={responsiveFontSize(3)} />
//         <Text style={[drawerStyles.txtHeader, { marginRight: responsiveWidth(2) }]}>{item.title}</Text>


//       </View>

//     </TouchableOpacity>

<List.Accordion
title={item.title}
style={{
  ...myFontStyle.productPriceText,
width:responsiveWidth(50),
backgroundColor:"#fff",
  color:'#000'}}
  // titleStyle={{color:"#000",...myFontStyle.productPriceText}}
  titleStyle={[drawerStyles.txtHeader, { marginRight: responsiveWidth(2) }]}
  onPress={() =>item.name1?null: item.id!=6? navigation.navigate(item.navigateName):exit()}>
  {
    item.name1?
<List.Item title={item.name1}
  titleStyle={[drawerStyles.txtHeader, { marginRight: responsiveWidth(2) }]}

 onPress={()=>navigation.navigate(item.navigateName1)}
  /> 
    :
    null
  }
  {
    item.name2?
<List.Item title={item.name2}
  titleStyle={[drawerStyles.txtHeader, { marginRight: responsiveWidth(2) }]}
 onPress={()=>navigation.navigate(item.navigateName2)}
  /> 
    :
    null
  }
  {
    item.name3?
<List.Item title={item.name3}
  titleStyle={[drawerStyles.txtHeader, { marginRight: responsiveWidth(2) }]}
 onPress={()=>navigation.navigate(item.navigateName3)}
  /> 
    :
    null
  }

  </List.Accordion>


  )

  return (
    <View style={drawerStyles.container}>

      <View style={drawerStyles.header}>
        <LinearGradient colors={[Colors.Green, Colors.Green]} style={drawerStyles.child}>

        </LinearGradient>
</View>
<View style={{position:'absolute',alignItems:'center'}}>
        <View style={drawerStyles.subViewAvatar}>
      <TouchableOpacity

onPress={() => navigation.navigate('EditProfile')}

>


          {/* <Image style={drawerStyles.avatar} source={avatarWoman} /> */}
          {
  photo?
          <Image style={drawerStyles.avatar} source={{uri:apiAsset+photo}} />

          :
          <Image style={drawerStyles.avatar} source={require("@assets/images/user.png")} />

          }

</TouchableOpacity>
        </View>
<TouchableOpacity style={{alignItems:"center"}} onPress={()=>navigation.navigate("EditProfile")}>
{
  Name?

  <Text style={drawerStyles.txtTitle}>{Name}</Text>
  :
  <Text style={drawerStyles.txtTitle}>User</Text>

}
        <Text style={drawerStyles.txtEdit}>ویرایش اطلاعات</Text>
</TouchableOpacity>
      </View>

      <View style={drawerStyles.subViemItem}>
      <List.Section title=""  backgroundColor={'#ffffff'} style={{...myFontStyle.productPriceText,color:'#ffffff'}}>

        {txtDarawerItem.map((item, index) => (

          _renderMapView(item, index)

        ))}
       
        </List.Section>

      </View>

    </View>
  );
};



//make this component available to the app
export default DrawerContent;
