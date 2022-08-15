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
// create a component



 const ConsultantList = ({navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const [checked, setChecked] = React.useState('first');
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const closeModal=()=>{
    setModalVisible(!isModalVisible);
  }
 
  return (
    <View style={styles.container}>
    <ScrollView>
      <View style={{display:'flex',flexDirection:'row-reverse',alignContent:'center',alignItems:'center'}}>
      <View style={styles.inputIcon}>
      <Icon name={"search"} color={'#CECECE'} size={30}/>
      <TextInput style={styles.textInputIcon}  placeholder="جستجو کنید ..."/>
      </View>
      <View style={{width:"14%",marginRight:"1%"}}>
        <TouchableOpacity style={[styles.sort,shadow]} onPress={toggleModal}>
        <Image source={require('@assets/images/filter.png')} style={styles.logo} />

        </TouchableOpacity>
      </View>
  
   
      </View>
     <View style={{display:'flex',flexDirection:'row'}}>
      <Text style={styles.paragraph}>
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
      </Text>
   </View>
   <View style={styles.historyBox}>
  <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
  <Image source={require('@assets/images/profile2.png')} style={styles.profilePic} />
  <View style={{display:'flex',flexDirection:'column'}}>
    <Text style={styles.ConsultantName}>
     یاسمن طاهری
    </Text>
    <Text style={styles.ConsultantName2}>
      کارشناس ارشد کشاورزی
    </Text>
    <Text style={styles.ConsultantName2}>
      زمان انتظار جهت پاسخگویی : 20 دقیقه
    </Text>
  </View>
  </View>

  <View style={{display:'flex',flexDirection:'column',alignItems:'flex-end',alignSelf:"baseline",justifyContent:'space-between'}}>
  <View style={{display:'flex',flexDirection:'row-reverse',justifyContent:'flex-end',marginLeft:responsiveWidth(2),alignItems:'flex-start'}}>
  <Icon name={"star-border"} color={'#000000'} size={15}/>
      <Icon name={"star-border"} color={'#000000'} size={15}/>
      <Icon name={"star"} color={'#ffb921'} size={15}/>
      <Icon name={"star"} color={'#ffb921'} size={15}/>
      <Icon name={"star"} color={'#ffb921'} size={15}/>
     
      </View>
      <TouchableOpacity style={{display:'flex',flexDirection:'row-reverse'}}>
      <Icon name={"favorite-border"} color={'#FF2525'} size={15}/>
        <Text style={styles.heartBtnText}>
          افزودن به برگزیده ها
        </Text>
      </TouchableOpacity>
  </View>
  
</View>
    </ScrollView>
    <Modal isVisible={isModalVisible} onBackdropPress={closeModal} animationIn={'slideInUp'} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <View style={{ flex:0.3,backgroundColor:'#ffffff',borderRadius:10,width:'80%'}}>
          <View style={styles.modalHeader}>
          <Image source={require('@assets/images/blackSort.png')} style={styles.modalHeaderIcon} />
          <Text style={styles.modalHeaderText}>
            مرتب سازی بر اساس
          </Text>
          </View>
          <View style={{padding:10}}>
    <View style={{display:'flex',alignItems:'center',flexDirection:'row-reverse'}}>
    <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
        color={'#ffb921'}
      />
      <Text style={styles.radioLable}>
        جدید ترین
      </Text>
    </View>
    <View style={{display:'flex',alignItems:'center',flexDirection:'row-reverse'}}>
    <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
        color={'#ffb921'}
      />
      <Text style={styles.radioLable}>
       پرفروش ترین
      </Text>
    </View>
    <View style={{display:'flex',alignItems:'center',flexDirection:'row-reverse'}}>
    <RadioButton
        value="third"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}
        color={'#ffb921'}
      />
      <Text style={styles.radioLable}>
       ارزان ترین
      </Text>
    </View>
    <View style={{display:'flex',alignItems:'center',flexDirection:'row-reverse'}}>
    <RadioButton
        value="fourth"
        status={ checked === 'fourth' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('fourth')}
        color={'#ffb921'}
      />
      <Text style={styles.radioLable}>
       گران ترین
      </Text>
    </View>
    </View>
      
        </View>
      </Modal>
     
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


  const styles = StyleSheet.create({
    container:{
      padding:25,
     backgroundColor:'#fff',flex:1,
    },
    inputIcon:{
      alignItems:'center',
      display:'flex',
      flexDirection:'row-reverse',
      backgroundColor:'#ffffff',
      borderRadius:5,
      width:"84%",
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
      backgroundColor:'#ffb921',
      justifyContent:'center',    
      
    },logo:{
      width:25,
      height:25,
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
    },paragraph:{
      ...myFontStyle.productPriceText,
      color:'#000',
      marginTop:responsiveHeight(2),
      marginBottom:responsiveHeight(2),
      
    },historyBox:{
      width:responsiveWidth(84),
  height:responsiveHeight(10),
  marginRight:'auto',
  marginLeft:'auto',
 
  backgroundColor:'#fff',
  shadowColor:'#00000075',
  shadowRadius: 100,
  shadowOpacity:10,
  elevation: 10,
  shadowOffset: {
    width: 10,
    height: 6
  },
  borderRadius:10,
  marginTop:responsiveHeight(1),
  marginBottom:responsiveHeight(1),
  
  flexDirection:'row-reverse',
  justifyContent:'space-between',
  padding:15,
    },profilePic:{
      width:50,
      height:50,
      borderRadius:200,
      marginLeft:responsiveWidth(2),
    },ConsultantName:{
      ...myFontStyle.ConsultantName,
  color:'#000',
    },ConsultantName2:{
      ...myFontStyle.ConsultantName2,
  color:'#000',
    },heartBtnText:{
      ...myFontStyle.ConsultantName2,
  color:'#FF2525',
    }
  });

  export default ConsultantList;

//make this component available to the <app></app>
