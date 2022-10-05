import React, {useState,useContext ,useEffect} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView,FlatList,Spinner} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ProductCard } from '@components/ProductCard';
import { myFontStyle } from "@assets/Constance";
import Modal from "react-native-modal";
import {RadioButton ,Switch,List} from 'react-native-paper';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component



 const FavoriteProduct = ({navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [checked, setChecked] = useState('first');
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [expanded, setExpanded] = useState(true);
 
  const [data,setData]=useState([])
  const keyExtractor = item => {
    return item[0]?.ProductID;
  };
 
  const _render = (item, index) => {
    console.log(item)
    return (
      <ProductCard navigation={navigation} Name={item.item?.ProductName}Name2={item.item?.Name2} Unit={item.item?.Unit} Number={item.item?.Number} 
      Cost={item.item?.Cost} SpecialCost={item.item?.SpecialCost} Photo={item.item?.Pic1}/>
    );
  };

    
  const GetData=async()=>{
    const axios = require("axios");
  

    var ss=await AsyncStorage.getItem("CustomerID")
    
    axios.post(apiUrl + "CustomerFavorite",{CustomerID:ss})
    .then(function (response) {
      if (response.data.result == "True") {
        console.log(777)

        console.log(response.data.Data.filter(x=>x.ProductID!=null));
        setData(response.data.Data.filter(x=>x.ProductID!=null))

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
  return (
    <View style={styles.container}>
    

     <FlatList
          numColumns={2}
          columnWrapperStyle={{width:'50%'}}
          keyExtractor={keyExtractor}
          data={data}
          renderItem={_render}
          style={{marginTop:responsiveHeight(4),marginBottom:responsiveHeight(20),marginRight:2}}
                    // ListFooterComponent={listFooter}
          // onEndReached={fetchNextCharityPage}
        />
   
    </View>
  );
};
 

const shadow = {
  shadowColor: Colors.Orange,
  shadowRadius: 100,
  shadowOpacity:10,
  elevation: 10,
  shadowOffset: {
    width: 10,
    height: 6
  }
}
const shadow2 = {
  shadowColor: Colors.Green1,
  shadowRadius: 100,
  shadowOpacity:10,
  elevation: 10,
  shadowOffset: {
    width: 10,
    height: 4
  }
}

  const styles = StyleSheet.create({
    container:{
      padding:responsiveWidth(3),
     
    },
    inputIcon:{
      alignItems:'center',
      display:'flex',
      flexDirection:'row-reverse',
      backgroundColor:'#ffffff',
      borderRadius:5,
      width:"69%",
      marginLeft:'1%',
      marginTop:5,
      marginBottom:5,
      marginRight:'auto',
      marginLeft:'auto',
      height:responsiveHeight(6),
      paddingLeft:responsiveWidth(2),
      borderRadius:50,
      shadowColor:'#00000055',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius:0.5,
      
      elevation: 10,
    },textInputIcon:{
      textAlign:'right',
   ...myFontStyle.mediumRegular,
   width:"100%",
    },sort:{
     
      height:responsiveHeight(6),
      borderRadius:15,
      backgroundColor:Colors.Green,
      justifyContent:'center',    
      
    },sort2:{
      borderRadius:15,
      height:responsiveHeight(6),
      backgroundColor:"#ffb921",
      display:'flex',
      alignContent:'center',
      alignItems:'center',
      justifyContent:'center',
      
  
    },logo:{
      width:20,
      height:20,
      resizeMode:'contain',
      alignSelf:'center',
      alignContent:'center',
      alignItems:'center',display:'flex',
      
    },modalHeader:{
      display:'flex',
      alignItems:'center',
      borderBottomColor:'#BABABA',
      borderBottomWidth:1,
      borderStyle:'solid',
      justifyContent:'flex-start',
      flexDirection:'row-reverse',
      paddingTop:responsiveHeight(1),
      paddingBottom:responsiveHeight(1),
      paddingLeft:responsiveWidth(2),
      paddingRight:responsiveWidth(2),
    }
    ,modalHeaderIcon:{
      width:25,
      height:25,
      resizeMode:'contain',
      marginLeft:10,
    },modalHeaderText:{
      ...myFontStyle.registerText,
      color:'#000000',
    },radioLable:{
      ...myFontStyle.productNameText,
      color:'#000000',
    },accardionStyle:{
      direction:'rtl',
      backgroundColor:'#ffffff',
    }
  });

  export default FavoriteProduct;

//make this component available to the <app></app>
