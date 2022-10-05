import React, {useState,useRef ,useEffect} from 'react';
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
import { apiUrl ,apiAsset} from "@commons/inFormTypes";
import DrawerPage from '@components/drawerContent/DrawerPage';
import DrawerContent from '@components/drawerContent/DrawerContent';
import Drawer from 'react-native-drawer'
import AsyncStorage from '@react-native-async-storage/async-storage';
 const ConsultantList = ({navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const keyboardVerticalOffset = responsiveHeight(1);
  const drawers = useRef(null);

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: '15 دقیقه', value: '15'},
    {label: '30 دقیقه', value: '30'},
    {label: '45 دقیقه', value: '45'},
    {label: '60 دقیقه', value: '60'},
  ]);
  const [checked, setChecked] = React.useState('first');
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [expanded, setExpanded] = React.useState(true);
  const [value, setValue] = useState(null);

  const handlePress = () => setExpanded(!expanded);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [name, setName] = useState();
  const [subject, setubject] = useState();
  const [Specialty, setSpecialty] = useState();
  const [type, setType] = useState();
  const [time, setTime] = useState();
  const [cost, setCost] = useState();
  const [consultant, setConsultant] = useState();
  const toggleModal = (types,names,specialtys,wait,id) => {
    setModalVisible(!isModalVisible);
    setName(names);setType(types);setSpecialty(specialtys);
    setConsultant(id)
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
  const [data, setData] = useState([]);
  const [recent, setRecent] = useState([]);
  const  _handleKeyDownAuto = async(aa) => {
    const axios = require("axios");

        axios
            .post(apiUrl + "SearchConsultant",{
                Name:aa
            })
        .then(function (response) {
          if (response.data.result == "True") {
            // data.filter((el)=>el[0].Name.includes(aa))
setData(Object.values(response.data.Data)) 
           console.log(response.data.Data)
  
        }
        else{
          setData([])
          console.log(response.data.result)
  
        }})
        .catch(function (error) {
          console.log(error);
        });
      }

  const GetData=()=>{
      const axios = require("axios");
      axios.get(apiUrl + "AllConsultant")
      .then(function (response) {
        if (response.data.result == "True") {
            setData(response.data.Data)
            
          }})
          .catch(function (error) {
              console.log(777)
              alert(error)
              
              console.log(error);
          });
      axios.get(apiUrl + "GetConsultant")
      .then(function (response) {
        if (response.data.result == "True") {
            setData(response.data.Data)
            
          }})
          .catch(function (error) {
              console.log(777)
              alert(error)
              
              console.log(error);
          });
   
      

    }
    const GetCost=()=>{
        const axios = require("axios");
        console.log(4444)
        console.log(consultant)
        axios.post(apiUrl + "SetCostConsultant",{CustomerID:consultant,Time:time,Type:type})
        .then(function (response) {
          if (response.data.result == "True") {
              setCost(response.data.Data)
              toggleModal2()
            }})
            .catch(function (error) {
                console.log(777)
                alert(error)
                
                console.log(error);
            }); 
  
      }
    const InsertConsultant=()=>{
        const axios = require("axios");
        var ss= localStorage.getItem("CustomerID")
        axios.post(apiUrl + "SetConsultant",{Customer:ss,Consultant:consultant,Cost:cost,Time:time,Type:type,Subject:subject})
        .then(function (response) {
          if (response.data.result == "True") {
              handleClose2()
              alert("با موفقیت ثبت شد")
            }})
            .catch(function (error) {
                console.log(777)
                alert(error)
                
                console.log(error);
            });
   
     
        
  
      }
    const InsertFavorite=async(id)=>{
        const axios = require("axios");
        var ss=await AsyncStorage.getItem("CustomerID")
        axios.post(apiUrl + "InsertFavorite",{CustomerID:ss,CustomerID2:id})
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
    useEffect(() => {
      GetData();

    }, []);
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
  
  <DrawerPage drawers={drawers} name={"مشاوران برگزیده"} navigation={navigation} />
    <View style={styles.container}>
    <ScrollView>
      <View style={{display:'flex',flexDirection:'row-reverse',alignContent:'center',alignItems:'center'}}>
      <View style={styles.inputIcon}>
      <Icon name={"search"} color={'#CECECE'} size={30}/>
      <TextInput style={styles.textInputIcon}
      onChangeText={(aa)=>_handleKeyDownAuto(aa)} 
       placeholder="جستجو کنید ..."/>
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
   {
    data?.map((item)=>{
      return(
   <View style={styles.historyBox}>
    <View style={{display:'flex',flexDirection:'row-reverse',paddingBottom:responsiveHeight(0.75),borderBottomWidth:1,borderBottomColor:"rgba(186, 186, 186, 0.25)"}}>
  <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
  <Image source={require('@assets/images/profile2.png')} style={styles.profilePic} />
  <View style={{display:'flex',flexDirection:'column'}}>
    <Text style={styles.ConsultantName}>
    {item.Name} {item.Family}    </Text>
    <Text style={styles.ConsultantName2}>
    {item.Specialty}      </Text>
    <Text style={styles.ConsultantName2}>
      زمان انتظار : {item.WaitTime} دقیقه
    </Text>
  </View>
  </View>

  <View style={{flexDirection:'column',alignItems:'flex-start',justifyContent:'space-between'}}>
  <View style={{flexDirection:'row-reverse',alignItems:'flex-start'}}>
  {
                      [...new Array(5)].map((item2,index)=>{
                        return(
index+1>item.Rate?
<Icon name={"star"} color={'#ffb921'} size={15}/>

:
<Icon name={"star-border"} color={'#000000'} size={15}/>


                        )
                      })
                    }
  
     
      </View>
      <TouchableOpacity onPress={()=>InsertFavorite(item.CustomerID)} style={{display:'flex',flexDirection:'row-reverse',marginLeft:responsiveWidth(2),marginBottom:responsiveHeight(2)}}>
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
      <TouchableOpacity onPress={()=>toggleModal("1",item.Name+" "+item.Family,item.Specialty,item.WaitTime,item.CustomerID )}>

    <Text style={styles.TypeCallText}>
متنی    |    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>toggleModal("2",item.Name+" "+item.Family,item.Specialty,item.WaitTime ,item.CustomerID)}>

    <Text style={styles.TypeCallText}>
     صوتی    |   </Text>
     </TouchableOpacity>

     <TouchableOpacity onPress={()=>toggleModal("3",item.Name+" "+item.Family,item.Specialty,item.WaitTime,item.CustomerID )}>

    <Text style={styles.TypeCallText}>
تصویری    </Text>
</TouchableOpacity>

    </View>
  </View>
</View>
      )
    })
   }

    </ScrollView>
    <Modal isVisible={isModalVisible} onBackdropPress={closeModal} animationIn={'slideInUp'} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    {/* <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}> */}

        <View style={{ flex:0.52,backgroundColor:'#ffffff',borderRadius:1,width:'80%',padding:5}}>
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
      {name}       </Text>
    </View>
    <View style={{display:'flex',alignItems:'center',flexDirection:'row-reverse'}}>
    <Text style={styles.radioLable}>

تحصیلات :
    </Text>
      <Text style={styles.modalText}>
      {Specialty}     </Text>
    </View>
    <View style={{display:'flex',alignItems:'center',flexDirection:'row-reverse'}}>
    <Text style={styles.radioLable}>

نوع مشاوره :
    </Text>
      <Text style={styles.modalText}>
      {type==1?"متنی":type==2?"صوتی":"تصویری"}
     </Text>
    </View>
    <View>
    <Text style={styles.radioLable}>

موضوع مشاوره :
    </Text>
    </View>
 <View>
 <TextInput style={styles.textInputIcon}  o onChange={(e)=>setubject(e.target.value)}  placeholder=""/>

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
  setValue={setValue}
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
    <TouchableOpacity onPress={()=>{closeModal();GetCost()}} style={styles.yellowBtn}>
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
      {name}      </Text>
    </View>
    <View style={{display:'flex',alignItems:'center',flexDirection:'row-reverse'}}>
    <Text style={styles.radioLable}>

تحصیلات :
    </Text>
      <Text style={styles.modalText}>
      {Specialty}      </Text>
    </View>
    <View style={{display:'flex',alignItems:'center',flexDirection:'row-reverse'}}>
    <Text style={styles.radioLable}>

نوع مشاوره :
    </Text>
      <Text style={styles.modalText}>
      {type==1?"متنی":type==2?"صوتی":"تصویری"}
      </Text>
    </View>
    <View style={{display:'flex',alignItems:'center',flexDirection:'row-reverse'}}>
    <Text style={styles.radioLable}>

موضوع مشاوره :
    </Text>
    <Text style={styles.modalText}>
    {subject}       </Text>
    </View>

 <View style={{display:'flex',alignItems:'center',flexDirection:'row-reverse'}}>
    <Text style={styles.radioLable2}>

هزینه مشاوره :
    </Text>
    <Text style={styles.radioLable2}>

    {cost}تومان   
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
     </Drawer>
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
  height:responsiveHeight(16),
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
