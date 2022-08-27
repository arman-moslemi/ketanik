import React, { useState,useEffect ,useContext} from 'react';
import { myFontStyle } from "@assets/Constance";

import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth,Alert } from 'react-native-responsive-dimensions';
import { Colors} from "@assets/Colors";

import { View, Text , StyleSheet,Image, TouchableOpacity,ScrollView,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import { RadioButton } from 'react-native-paper';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";
import axios from 'axios';
import Spinner from '@components/Spinner';
import AsyncStorage from  '@react-native-async-storage/async-storage';
import {launchImageLibrary} from 'react-native-image-picker';
import ImgToBase64 from 'react-native-image-base64';
import { ThemeContext } from '../../../theme/theme-context';
import { getTranslation } from '@i18n/i18n';

 const EditProfile = ({navigation }) => {
  const {  theme } = useContext(ThemeContext);

  // const [checked, setChecked] = React.useState('first');
  const [isModalVisible, setModalVisible] = useState(false);
  const [data,setData]=useState([]);
  const [name,setName]=useState();
  const [pic,setPic]=useState();
  const [email,setEmail]=useState();
  const [gender,setGender]=useState();
  const [backimage, setbackimageData] = React.useState('');
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const  mutLogin=async()=> {
    const state = await AsyncStorage.getItem("@user");
    const lang = await AsyncStorage.getItem("@langs");

console.log(state)
    axios.post(apiUrl+'OneCustomer',{CustomerID :state},{ headers: {
      lang: lang
    }})
    .then(function (response) {
      const message = response.data;
      const result = response.data.result;
      console.log(message);

      if(result == "true"){
        setData(response.data.Data)
console.log(response.data.Data)
setName(response.data.Data.Username)
setPic(response.data.Data.Pic)
setEmail(response.data.Data.Email)
        // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                        }else{

      }
    })
    .catch(function (error) {
      console.log(error);
    });


    };
    const  mutEdit=async()=> {
      const state = await AsyncStorage.getItem("@user");

      console.log(state)
      console.log(name)
      console.log(gender)
          axios.post(apiUrl+'EditCustomer',{CustomerID :state,Username:name,Gender:gender})
          .then(function (response) {
            const message = response.data;
            const result = response.data.result;
            console.log(message);
      
            if(result == "true"){
          Alert.alert("","تغییرات با موفقیت ذخیره شد")
              // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                              }else{
      
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      
      

    }
    useEffect(() => {
  
      mutLogin();
  
  
  }, []);
  const handleChoosePhoto =async ()=>{

    // setbackimageData(10);
    // console.log(backimage);
    const state = await AsyncStorage.getItem("@user");

    const options = {
      noData:true
    };
    const response = await launchImageLibrary(options);
    console.log(response.assets[0]);
  // launchImageLibrary(options,response => {
      if(response.assets[0].uri){
        console.log(response.assets[0]);
        console.log(1111);

        setbackimageData(response.assets[0].uri);
        console.log(backimage);


        ImgToBase64.getBase64String(response.assets[0].uri)
        .then(base64String =>
        //  console.log(base64String) &&
        
        axios.post(apiUrl + 'EditCustomerPic', {
          CustomerID: state,
          PicName:response.assets[0].fileName,
          Pic:base64String,
        })
          .then(response => {
           //   setData(response.data.data);
             // setids(id);
              // return;
              const result = response.data.result;
console.log(888)
console.log( response.data)
//   Alert.alert("","",response.data.message)
if(result=="true"){

  console.log(222);
  
  console.log(response.data.result);
    Alert.alert("",'عکس با موفقیت ثبت شد')
  AsyncStorage.setItem('@userPhoto',response.data.Data.Photo.toString())
}


          })
          .catch(function(error) {
            console.log(222);
            console.log(error);

          }
          )


    );


      }
    // });
  };
return (
    <View style={{ padding:0,justifyContent:'flex-start',alignContent:'flex-start',alignSelf:'flex-start',backgroundColor:theme.backgroundColor}}>
       <Image source={require('@assets/images/userProfileTop.png')} style={styles(theme).topImg}/>
   
     <View style={styles(theme).backView}>
     <TouchableOpacity onPress={()=>navigation.goBack()}>
     <Icon name={'west'} size={40} color={'#111'} style={{}}/>
   
     </TouchableOpacity>
      
     </View>
     {/* <Image source={require('@assets/images/profile.jpg')} style={styles(theme).profile2}/> */}
     {
                  backimage !=''?
                  <Image style={styles(theme).profile2}  source={{uri:backimage}}/>

                  :
            pic?

            <Image style={styles(theme).profile2} source={{uri:apiAsset+pic}} />
            :

          <Image style={styles(theme).profile2}source={require('@assets/images/profile.jpg')} />
          }
     <TouchableOpacity style={styles(theme).loginBtn} 
    //  onPress={toggleModal} 
    onPress={
      ()=>{handleChoosePhoto()}
    }
     >
       <Text style={styles(theme).btnText}>{getTranslation('ویرایش تصویر')}</Text>
     </TouchableOpacity>
   
     
     <View style={{padding:15,borderBottomColor:theme.borderB,borderBottomWidth:10,}}>
</View>

 

  <ScrollView>
  <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center',width:responsiveWidth(90),marginRight:'auto',marginLeft:'auto',marginBottom:responsiveHeight(2),marginTop:responsiveHeight(2),justifyContent:'space-between'}}>
  <Text style={styles(theme).inputText}>
  {getTranslation('نام کاربری')}
  </Text>
  <TextInput value={name} onChangeText={(ss)=>setName(ss)} placeholder="نام کاربری" style={styles(theme).discountInput} placeholderTextColor={theme.white} />
</View>
<View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center',width:responsiveWidth(90),marginRight:'auto',marginLeft:'auto',marginBottom:responsiveHeight(2),marginTop:responsiveHeight(2),justifyContent:'space-between'}}>
  <Text style={styles(theme).inputText}>
  {getTranslation('ایمیل')}
  </Text>
  <TextInput disableFullscreenUI={true} value={email} editable={false} placeholder="ایمیل" style={styles(theme).discountInput} placeholderTextColor={'#111'} />
</View>
<View style={{padding:15,borderBottomColor:theme.borderB,borderBottomWidth:10,}}>
</View>
<View style={styles(theme).radioRow}>
  <View style={styles(theme).radioView}>
  <RadioButton
        value="first"
        status={ gender  ? 'unchecked' : 'checked' }
        onPress={() => setGender(false)}
        color={Colors.darkGreen}
      />
  <Text style={styles(theme).radionText}>
  {getTranslation('خانم')}
  </Text>
      
  </View>
  <View style={styles(theme).radioView}>
      <RadioButton
        value="second"
        status={ gender  ? 'checked' : 'unchecked' }
        onPress={() => setGender(true)}
        color={Colors.darkGreen}
      />
        <Text style={styles(theme).radionText}>
        {getTranslation('آقا')}
  </Text>
    </View>
    </View>
  
<View style={{padding:15,borderBottomColor:theme.borderB,borderBottomWidth:10,}}>
</View>
<TouchableOpacity onPress={()=>navigation.navigate("EditPassword")} style={styles(theme).editProfileBtn2}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        
        <Text style={styles(theme).btnText2}>{getTranslation('تغییر رمزعبور')}</Text>
      </View>
      <View>
        <Icon name={'chevron-left'} size={20} color={'#111'}/>
      </View>
    </TouchableOpacity>
    <View style={styles(theme).btnRow}>
    <View style={styles(theme).btnBox}>
    <TouchableOpacity onPress={()=>mutEdit()} style={styles(theme).purchaseBtn}>
       <Text style={styles(theme).purchaseBtnText}>{getTranslation('ذخیره تغییرات')}</Text>
     </TouchableOpacity>
    </View>
    <View style={styles(theme).btnBox}>
    <TouchableOpacity onPress={()=>navigation.goBack()} style={styles(theme).purchaseBtn2}>
       <Text style={styles(theme).purchaseBtnText2}>{getTranslation('انصراف')}</Text>
     </TouchableOpacity>
    </View>
</View>
 
 {/* Modal is here */}
 <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)} >
 <View style={styles(theme).editModal}>
   <Text style={styles(theme).modalTitle}>
     ویرایش تصویر پروفایل
   </Text>
   <TouchableOpacity style={styles(theme).editProfileBtn}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        <Image source={require('@assets/images/trash.png')} style={styles(theme).btnImg}/>
        <Text style={styles(theme).btnText3}>{getTranslation('حذف تصویر')}</Text>
      </View>
     
    </TouchableOpacity>
    <TouchableOpacity style={styles(theme).editProfileBtn}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        <Image source={require('@assets/images/gallery.png')} style={styles(theme).btnImg}/>
        <Text style={styles(theme).btnText3}>{getTranslation('گالری')}</Text>
      </View>
     
    </TouchableOpacity>
    <TouchableOpacity style={styles(theme).editProfileBtn}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        <Image source={require('@assets/images/camera.png')} style={styles(theme).btnImg}/>
        <Text style={styles(theme).btnText3}>{getTranslation('دوربین')}</Text>
      </View>
     
    </TouchableOpacity>
 </View>
 </Modal>

  </ScrollView>
  </View>
);
};

const styles = (theme) => StyleSheet.create({
  topImg:{
        resizeMode:'stretch',
        height:responsiveHeight(16),
        width:responsiveWidth(100),
    }
    ,backView:{
    position:'absolute',
    top:responsiveHeight(2),
    left:responsiveWidth(9),
      display:'flex',
      flex:1,
    },profile2:{
     borderRadius:150,
      height:100,
      width:100,
      resizeMode:'cover',
      marginRight:'auto',
      marginLeft:'auto',
      marginTop:responsiveHeight(-8),
      borderWidth:4,
      borderColor:'#fd9e43',
      padding:5,
    },btnEdit:{
      ...myFontStyle.largeRegular,
      color:'#007bff',
      marginRight:5,
    },edit:{
      marginTop:responsiveHeight(1),
      marginLeft:responsiveWidth(5),
    },userName:{
      ...myFontStyle.bookTitle,
      color:theme.textTitle,
      textAlign:'center',
    },userEmail:{
      ...myFontStyle.bookWriter,
      color:theme.textTitle,
      textAlign:'center',
    },btnImg:{
      width:30,
      height:30,
    },editProfileBtn:{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row-reverse',
      paddingRight:responsiveWidth(5),
      paddingLeft:responsiveWidth(5),
      paddingTop:responsiveHeight(1),
      paddingBottom:responsiveHeight(1),
      borderBottomColor:'#eaeaea',
      borderBottomWidth:2,
    },editProfileBtn2:{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row-reverse',
      paddingRight:responsiveWidth(5),
      paddingLeft:responsiveWidth(5),
      paddingTop:responsiveHeight(1),
      paddingBottom:responsiveHeight(1),
     
    }
    ,btnText:{
      ...myFontStyle.episodeName,
      color:'#111',
      marginRight:responsiveWidth(2),
    },btnImg2:{
      resizeMode:'contain',
      width:35,
      height:40,
    },loginBtn:{
      backgroundColor:Colors.darkGreen,
      width:responsiveWidth(70),
      marginTop:responsiveHeight(4),
      height:responsiveHeight(7),
      alignContent:'center',
      alignItems:'center',
      justifyContent:"center",
      // paddingTop:responsiveHeight(1.5),
      borderRadius:10,
      marginRight:'auto',
      marginLeft:'auto',
    },btnText:{
      ...myFontStyle.largBold,
      color:'#fff',
    },discountInput:{
      borderColor:'#bbbbbb',
      borderWidth:1,
      borderRadius:10,
      width:responsiveWidth(60),
      marginRight:'auto',
      marginLeft:'auto',
      height:responsiveHeight(6),
      color:'#111',
      ...myFontStyle.normalRegular,
    
      padding:10,
      
  },inputText:{
    color:theme.textTitle,
    ...myFontStyle.largeRegular,
    width:responsiveWidth(17),
  },editProfileBtn:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row-reverse',
    paddingRight:responsiveWidth(5),
    paddingLeft:responsiveWidth(5),
    paddingTop:responsiveHeight(1),
    paddingBottom:responsiveHeight(1),
   marginTop:responsiveHeight(1),
   marginBottom:responsiveHeight(1),
  },btnText2:{
    ...myFontStyle.episodeName,
    color:theme.textTitle,
    marginRight:responsiveWidth(2),
  }
  ,purchaseBtn:{
    backgroundColor:Colors.darkGreen,
    flex:0.5,
    width:'100%',
    marginTop:responsiveHeight(2),
    height:responsiveHeight(6),
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    marginLeft:5,
    
  },purchaseBtnText:{
    ...myFontStyle.largeRegular,
    color:'#fff',
  },btnRow:{
      flex:1,
      display:'flex',
      flexDirection:'row-reverse',
      width:responsiveWidth(85),
      marginRight:'auto',
      marginLeft:'auto',
  },purchaseBtn2:{
    backgroundColor:'#fff',
    flex:0.5,
    marginTop:responsiveHeight(2),
    height:responsiveHeight(6),
    alignContent:'center',
    alignItems:'center',
    paddingTop:responsiveHeight(1),
    borderRadius:10,
    marginRight:5,
    borderColor:Colors.darkGreen,
    borderWidth:1,
  },purchaseBtnText2:{
    ...myFontStyle.largeRegular,
    color:Colors.darkGreen,
  },btnBox:{
      display:'flex',
      flex:0.5,
  },editModal:{
    width:responsiveWidth(80),
    backgroundColor:Colors.lightGreen,
    
    borderRadius:15,
    marginRight:'auto',
    marginLeft:'auto',
    borderRightColor:Colors.darkGreen,
    borderRightWidth:4,
    padding:20,

  },modalTitle:{
    ...myFontStyle.largBold,
    color:'#111',
    marginTop:responsiveHeight(1),

  },editProfileBtn:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row-reverse',
    marginTop:responsiveHeight(2),
    paddingTop:responsiveHeight(1),
    paddingBottom:responsiveHeight(1),
    borderBottomColor:'#eaeaea',
    borderBottomWidth:2,
  },btnText3:{
    ...myFontStyle.episodeName,
      color:'#111',
      marginRight:responsiveWidth(2),
  } ,viewRadio: {flexDirection:'row',alignItems:'center'},
  radionText: {
    color: theme.textTitle,
    ...myFontStyle.largeRegular,
    // lineHeight:responsiveHeight(3)

  },radioView:{
    marginTop:responsiveHeight(2),
    display:'flex',
    flexDirection:'row-reverse',
    alignItems:'center',
    marginRight:responsiveWidth(10),
  },radioRow:{
    display:'flex',
    flexDirection:'row-reverse',
  }
  });

  export default EditProfile;

//make this component available to the <app></app>
