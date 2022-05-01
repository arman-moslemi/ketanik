import React, {useState,useEffect} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView,FlatList} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { myFontStyle } from "@assets/Constance";
import axios from 'axios';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";
import { isMessageIgnored } from 'react-native/Libraries/LogBox/Data/LogBoxData';

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
  const [data,setData]=useState([]);
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


    };
    const keyExtractor = item => {
      return item.GroupID;
    };
    const _render = (item, index) => {
      console.log(item.item)
      return (
        // <View style={styles.categoryRow}>
        <TouchableOpacity onPress={()=>navigation.navigate("SelectedNews",{type:"group",GroupID:item.item.GroupID,GroupName:item.item.Title})} style={item.item.GroupID==1?styles.categoryBox:item.item.GroupID==2?styles.categoryBox2:item.item.GroupID==3?styles.categoryBox3:
          item.item.GroupID==4?styles.categoryBox4:item.item.GroupID==5?styles.categoryBox5:item.item.GroupID==6?styles.categoryBox6:item.item.GroupID==7?styles.categoryBox7:styles.categoryBox8
        }>
        <Image source={{uri:apiAsset+item.item.Pic}} style={styles.bookImg}/>
         <Text style={styles.cateTitle}>
          {item.item.Title}
         </Text>
        </TouchableOpacity>
       
    // </View> 
      );
    };
return (
    <View style={{backgroundColor:'#fff',flex:1}}>

<View style={styles.customRow}>
        
    
        </View>
    <View style={styles.topBar}>

    <View style={{flex : 2,textAlign:"right"}}>
          <Text style={styles.menuTitle}>دسته بندی</Text>
          </View>
    
        
        <View style={{flex :0.5}}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{}}>
            <Icon name={"arrow-back"} color={'#111'} size={30}/>
          </TouchableOpacity>
          </View>
    </View>
     
  <ScrollView>
 <View style={styles.container}>
     {/* <View style={styles.categoryRow}>
         <View style={styles.categoryBox}>
         <Image source={require('@assets/images/book1.jpg')} style={styles.bookImg}/>
          <Text style={styles.cateTitle}>
            کتاب های صوتی
          </Text>
         </View>
         <View style={styles.categoryBox2}>
         <Image source={require('@assets/images/book2.jpg')} style={styles.bookImg}/>
         <Text style={styles.cateTitle}>
            کتاب های رایگان
          </Text>
         </View>
     </View> */}
  
     <FlatList
          numColumns={2}
          columnWrapperStyle={styles.charityList}
          keyExtractor={keyExtractor}
          data={data}
          renderItem={_render}
          // style={{marginTop:responsiveHeight(7),marginLeft:responsiveWidth(2),marginBottom:responsiveHeight(20)}}
                    // ListFooterComponent={listFooter}
          // onEndReached={fetchNextCharityPage}
        />
 </View>
  </ScrollView>
    </View>
);
};

const styles = StyleSheet.create({
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
  },categoryRow:{
      display:'flex',
      flexDirection:'row-reverse',
    marginTop:responsiveHeight(1),
    marginBottom:responsiveHeight(1),
      flex:1,
  },categoryBox:{
      height:responsiveHeight(11),
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
    height:responsiveHeight(11),
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
    height:responsiveHeight(11),
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
    height:responsiveHeight(11),
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
    height:responsiveHeight(11),
      // flex:0.5,
    backgroundColor:'#dfab58',
    borderRadius:10,
    margin:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },
  categoryBox6:{
    height:responsiveHeight(11),
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
    height:responsiveHeight(11),
      // flex:0.5,
    backgroundColor:'#262d5b',
    borderRadius:10,
    marginRight:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },
  categoryBox8:{
    height:responsiveHeight(11),
      // flex:0.5,
    backgroundColor:'#b1cfad',
    borderRadius:10,
    marginLeft:5,
    overflow:'hidden',
    display:'flex',
    flexDirection:'row-reverse',
    alignContent:'center',
    alignItems:'center',
  },
  categoryBox9:{
    height:responsiveHeight(11),
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
    height:responsiveHeight(11),
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
    height:responsiveHeight(11),
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
    height:responsiveHeight(11),
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
    height:responsiveHeight(11),
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
    height:responsiveHeight(11),
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
    marginRight:responsiveWidth(5),
    width:responsiveWidth(30),
  }
  });

  export default Category;

//make this component available to the <app></app>
