import React, {useState,useContext ,useEffect} from 'react';
import {View, TextInput, Text, TouchableOpacity,Image,ScrollView,FlatList,KeyboardAvoidingView} from 'react-native';


import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ProductCard } from '@components/ProductCard';
import { myFontStyle } from "@assets/Constance";
import Modal from "react-native-modal";
import {RadioButton ,Switch,List} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';

// create a component



 const ConsultantList = ({navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const keyboardVerticalOffset = responsiveHeight(1);

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    // {label: 'پزشکی', value: '1'},
    // {label: 'دندان پزشکی', value: '2'},
    // {label: 'بورد', value: '3'},
  ]);
  const [checked, setChecked] = React.useState('first');
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [expanded, setExpanded] = React.useState(true);
  const [value, setValue] = useState(null);

  const handlePress = () => setExpanded(!expanded);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const closeModal=()=>{
    setModalVisible(!isModalVisible);
  }
  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2);
  };
  const closeModal2=()=>{
    setModalVisible2(!isModalVisible2);
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
    <View style={{display:'flex',flexDirection:'row-reverse',paddingBottom:responsiveHeight(0.75),borderBottomWidth:1,borderBottomColor:"rgba(186, 186, 186, 0.25)"}}>
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

  <View style={{display:'flex',flexDirection:'column',alignItems:'flex-end',justifyContent:'space-between'}}>
  <View style={{display:'flex',flexDirection:'row-reverse',marginLeft:responsiveWidth(2),alignItems:'flex-start'}}>
  <Icon name={"star-border"} color={'#000000'} size={15}/>
      <Icon name={"star-border"} color={'#000000'} size={15}/>
      <Icon name={"star"} color={'#ffb921'} size={15}/>
      <Icon name={"star"} color={'#ffb921'} size={15}/>
      <Icon name={"star"} color={'#ffb921'} size={15}/>
     
      </View>
      <TouchableOpacity style={{display:'flex',flexDirection:'row-reverse',marginBottom:responsiveHeight(2)}}>
      <Icon name={"favorite-border"} color={'#FF2525'} size={15}/>
        <Text style={styles.heartBtnText}>
          افزودن به برگزیده ها
        </Text>
      </TouchableOpacity>
  </View>
  </View>
  <View style={{justifyContent:'space-between',flexDirection:'row-reverse',padding:responsiveWidth(1)}}>
    <View>
    <Text style={styles.reqCon}>
درخواست مشاوره:    </Text>
    </View>
    <View style={{flexDirection:'row-reverse'}}>
      <TouchableOpacity onPress={()=>toggleModal()}>

    <Text style={styles.TypeCallText}>
متنی    |    </Text>
      </TouchableOpacity>
    <Text style={styles.TypeCallText}>
     صوتی    |   </Text>
    <Text style={styles.TypeCallText}>
تصویری    </Text>
    </View>
  </View>
</View>
<View style={styles.historyBox}>
    <View style={{display:'flex',flexDirection:'row-reverse',paddingBottom:responsiveHeight(0.75),borderBottomWidth:1,borderBottomColor:"rgba(186, 186, 186, 0.25)"}}>
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

  <View style={{display:'flex',flexDirection:'column',alignItems:'flex-end',justifyContent:'space-between'}}>
  <View style={{display:'flex',flexDirection:'row-reverse',marginLeft:responsiveWidth(2),alignItems:'flex-start'}}>
  <Icon name={"star-border"} color={'#000000'} size={15}/>
      <Icon name={"star-border"} color={'#000000'} size={15}/>
      <Icon name={"star"} color={'#ffb921'} size={15}/>
      <Icon name={"star"} color={'#ffb921'} size={15}/>
      <Icon name={"star"} color={'#ffb921'} size={15}/>
     
      </View>
      <TouchableOpacity style={{display:'flex',flexDirection:'row-reverse',marginBottom:responsiveHeight(2)}}>
      <Icon name={"favorite-border"} color={'#FF2525'} size={15}/>
        <Text style={styles.heartBtnText}>
          افزودن به برگزیده ها
        </Text>
      </TouchableOpacity>
  </View>
  </View>
  <View style={{justifyContent:'space-between',flexDirection:'row-reverse',padding:responsiveWidth(1)}}>
    <View>
    <Text style={styles.reqCon}>
درخواست مشاوره:    </Text>
    </View>
    <View style={{flexDirection:'row-reverse'}}>
      <TouchableOpacity onPress={()=>toggleModal()}>

    <Text style={styles.TypeCallText}>
متنی    |    </Text>
      </TouchableOpacity>
    <Text style={styles.TypeCallText}>
     صوتی    |   </Text>
    <Text style={styles.TypeCallText}>
تصویری    </Text>
    </View>
  </View>
</View>
    </ScrollView>
    <Modal isVisible={isModalVisible} onBackdropPress={closeModal} animationIn={'slideInUp'} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    {/* <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}> */}

        <View style={{ flex:0.48,backgroundColor:'#ffffff',borderRadius:1,width:'80%',padding:5}}>
          <View style={styles.modalHeader}>
          {/* <Image source={require('@assets/images/blackSort.png')} style={styles.modalHeaderIcon} /> */}
          <Text style={styles.modalHeaderText}>
زمان مورد نیاز برای مشاوره          </Text>
          </View>
          <View style={{padding:10}}>
    <View style={{display:'flex',alignItems:'center',flexDirection:'row-reverse'}}>
    <Text style={styles.radioLable}>

  نام مشاور :   
    </Text>
      <Text style={styles.modalText}>
   امیرحسین مفید      </Text>
    </View>
    <View style={{display:'flex',alignItems:'center',flexDirection:'row-reverse'}}>
    <Text style={styles.radioLable}>

تحصیلات :
    </Text>
      <Text style={styles.modalText}>
کارشناش ارشد کشاورزی      </Text>
    </View>
    <View style={{display:'flex',alignItems:'center',flexDirection:'row-reverse'}}>
    <Text style={styles.radioLable}>

نوع مشاوره :
    </Text>
      <Text style={styles.modalText}>
متنی      </Text>
    </View>
    <View>
    <Text style={styles.radioLable}>

موضوع مشاوره :
    </Text>
    </View>
 <View>
 <TextInput style={styles.textInputIcon}  onChangeText={(ss)=>setMobile(ss)}  placeholder=""/>

 </View>
 <View>
    <Text style={styles.radioLable}>

مدت زمان مشاوره :
    </Text>
    </View>
    <View>

    <DropDownPicker
  open={open}
  value={value}
  items={items}
  setOpen={setOpen}
  // setValue={setValue}
  // setValue={setValueDrop}
  setItems={setItems}
  // width={100}
  ite
  style={{
    borderColor:'#F1F1F1',
    borderWidth:2,
    // margin:5,
    width:responsiveWidth(38),
backgroundColor:"rgba(247, 246, 249, 1)",
alignSelf:'flex-end'
  }}
  placeholder="انتخاب کنید"
  zIndex={1000}
  dropDownContainerStyle={{
    borderColor:'#F1F1F1',
    borderWidth:2,
  borderRadius:5,

}}
/>
    </View>
    <TouchableOpacity onPress={()=>{closeModal();toggleModal2()}} style={styles.yellowBtn}>
        <Text style={styles.yellowBtnTxt}>پرداخت</Text>
      </TouchableOpacity>
    </View>
      
        </View>
        {/* </KeyboardAvoidingView> */}
      </Modal>
    <Modal isVisible={isModalVisible2} onBackdropPress={closeModal2} animationIn={'slideInUp'} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    {/* <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}> */}

        <View style={{ flex:0.4,backgroundColor:'#ffffff',borderRadius:1,width:'80%',padding:5}}>
          <View style={styles.modalHeader}>
          {/* <Image source={require('@assets/images/blackSort.png')} style={styles.modalHeaderIcon} /> */}
          <Text style={styles.modalHeaderText}>
تایید درخواست
</Text>
          </View>
          <View style={{padding:10}}>
    <View style={{display:'flex',alignItems:'center',flexDirection:'row-reverse'}}>
    <Text style={styles.radioLable}>

  نام مشاور :   
    </Text>
      <Text style={styles.modalText}>
   امیرحسین مفید      </Text>
    </View>
    <View style={{display:'flex',alignItems:'center',flexDirection:'row-reverse'}}>
    <Text style={styles.radioLable}>

تحصیلات :
    </Text>
      <Text style={styles.modalText}>
کارشناش ارشد کشاورزی      </Text>
    </View>
    <View style={{display:'flex',alignItems:'center',flexDirection:'row-reverse'}}>
    <Text style={styles.radioLable}>

نوع مشاوره :
    </Text>
      <Text style={styles.modalText}>
متنی      </Text>
    </View>
    <View style={{display:'flex',alignItems:'center',flexDirection:'row-reverse'}}>
    <Text style={styles.radioLable}>

موضوع مشاوره :
    </Text>
    <Text style={styles.modalText}>
متنی      </Text>
    </View>

 <View style={{display:'flex',alignItems:'center',flexDirection:'row-reverse'}}>
    <Text style={styles.radioLable2}>

هزینه مشاوره :
    </Text>
    <Text style={styles.radioLable2}>

125000تومان   
 </Text>
    </View>
    <View>

  
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>


    <TouchableOpacity   style={styles.costBtn}>
        <Text style={styles.yellowBtnTxt}>پرداخت آنلاین</Text>
      </TouchableOpacity>
    <TouchableOpacity   style={styles.costBtn2}>
        <Text style={styles.yellowBtnTxt2}>پرداخت از کیف پول</Text>
      </TouchableOpacity>
    </View>
    </View>
      
        </View>
        {/* </KeyboardAvoidingView> */}
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
   backgroundColor:'#F7F6F9',
   width:"100%",
   borderRadius:3
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
      alignItems:'center'
      ,borderBottomColor:"rgba(186, 186, 186, 0.25)" ,
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
    },
    radioLable:{
      ...myFontStyle.productNameText,
      color:'#000000',
    },
    radioLable2:{
      ...myFontStyle.productNameText,
      color:Colors.Orange,
    },
    modalText:{
      ...myFontStyle.productPriceText,
      color:'#000000',
    },
    accardionStyle:{
      direction:'rtl',
      backgroundColor:'#ffffff',
    },paragraph:{
      ...myFontStyle.productPriceText,
      color:'#000',
      marginTop:responsiveHeight(2),
      marginBottom:responsiveHeight(2),
      
    },historyBox:{
      width:responsiveWidth(84),
  height:responsiveHeight(13),
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
  
  // flexDirection:'row-reverse',
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
    },
    ConsultantName2:{
      ...myFontStyle.ConsultantName2,
  color:'#000',
    },
    TypeCallText:{
      ...myFontStyle.productPriceText,
  color:'green',
    },
    reqCon:{
      ...myFontStyle.ConsultantName,
  color:'#000',
    },
    
    
    heartBtnText:{
      ...myFontStyle.ConsultantName2,
  color:'#FF2525',
    },
    yellowBtn:{
      backgroundColor:"#FF6900",
      height:responsiveHeight(5),
      width:responsiveWidth(20),
      display:'flex',
      alignContent:'center',
      justifyContent:'center',alignItems:'center',
      borderRadius:5,
      marginTop:responsiveHeight(5),
      shadowColor: "#ffd200",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.5,
  shadowRadius: 3.84,
  
  elevation: 5,
    },
    costBtn:{
      backgroundColor:"#FF6900",
      height:responsiveHeight(5),
      width:responsiveWidth(30),
      display:'flex',
      alignContent:'center',
      justifyContent:'center',alignItems:'center',
      borderRadius:5,
      marginTop:responsiveHeight(5),
      shadowColor: "#ffd200",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.5,
  shadowRadius: 3.84,
  
  elevation: 5,
    },
    costBtn2:{
      backgroundColor:"#fff",
      height:responsiveHeight(5),
      width:responsiveWidth(30),
      display:'flex',
      borderWidth:1,
      borderColor:'#ff6900',
      color:'#ff6900',
      alignContent:'center',
      justifyContent:'center',alignItems:'center',
      borderRadius:5,
      marginTop:responsiveHeight(5),
      shadowColor: "#00000056",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.5,
  shadowRadius: 3.84,
  
  elevation: 5,
    },
    yellowBtnTxt:{

      color:'#ffffff',
    
      ...myFontStyle.largBold,
    },    yellowBtnTxt2:{
      
      color:'#ff6900',
    
      ...myFontStyle.largBold,
    },
    // textInputIcon:{
    //   textAlign:'right',
    //  ...myFontStyle.mediumRegular,
    //  width:"100%",
    // },
  });

  export default ConsultantList;

//make this component available to the <app></app>
