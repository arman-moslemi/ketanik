import React, { useState,useEffect } from 'react';
import { myFontStyle } from "@assets/Constance";

import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors} from "@assets/Colors";
import { Switch } from 'react-native-paper';
import { View, Text , StyleSheet,Image, TouchableOpacity,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
 const UserProfile = ({navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

 
 
return (
    <View style={{ padding:0,justifyContent:'flex-start',alignContent:'flex-start',alignSelf:'flex-start'}}>
       <Image source={require('@assets/images/userProfileTop.png')} style={styles.topImg}/>
  
     <View style={styles.backView}>
     <TouchableOpacity>
     <Icon name={'west'} size={40} color={'#111'} style={{}}/>
   
     </TouchableOpacity>
      
     </View>
     <Image source={require('@assets/images/profile.jpg')} style={styles.profile2}/>
    <View style={{padding:15,borderBottomColor:'#E8EAE6',borderBottomWidth:20,}}>

    <View style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
      <Text style={styles.userName}>سپهر خسروی</Text>
      <Text style={styles.userEmail}>sepehrkhosravi@gmail.com</Text>
    </View>
    <View style={styles.edit}>
      <TouchableOpacity style={{display:'flex',flexDirection:'row-reverse',alignItems:'center',justifyContent:'flex-end'}}>
      <Icon name={'mode-edit'} size={20} color={'#007bff'} />
      <Text style={styles.btnEdit}>ویرایش حساب کاربری</Text>
      </TouchableOpacity>
    </View>
   
    </View>
  <ScrollView>
  <TouchableOpacity style={styles.editProfileBtn}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        <Image source={require('@assets/images/wallet.png')} style={styles.btnImg2}/>
        <Text style={styles.btnText}>کیف پول</Text>
      </View>
      <View>
        <Icon name={'chevron-left'} size={20} color={'#111'}/>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.editProfileBtn}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        <Image source={require('@assets/images/takhfif.png')} style={styles.btnImg}/>
        <Text style={styles.btnText}>بن های تخفیف</Text>
      </View>
      <View>
        <Icon name={'chevron-left'} size={20} color={'#111'}/>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.editProfileBtn}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        <Image source={require('@assets/images/bookmark.png')} style={styles.btnImg}/>
        <Text style={styles.btnText}>کتاب های نشان شده</Text>
      </View>
      <View>
        <Icon name={'chevron-left'} size={20} color={'#111'}/>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.editProfileBtn}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        <Image source={require('@assets/images/comment.png')} style={styles.btnImg}/>
        <Text style={styles.btnText}>نظرات من</Text>
      </View>
      <View>
        <Icon name={'chevron-left'} size={20} color={'#111'}/>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.editProfileBtn}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        <Image source={require('@assets/images/night.png')} style={styles.btnImg}/>
        <Text style={styles.btnText}>حالت شب</Text>
      </View>
      <View>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={Colors.darkGreen} />
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.editProfileBtn}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        <Image source={require('@assets/images/language.png')} style={styles.btnImg}/>
        <Text style={styles.btnText}>زبان</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
      <Text style={styles.btnText}>فارسی</Text>
        <Icon name={'chevron-left'} size={20} color={'#111'}/>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.editProfileBtn}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        <Image source={require('@assets/images/guide.png')} style={styles.btnImg}/>
        <Text style={styles.btnText}>راهنمایی و پشتیبانی</Text>
      </View>
      <View>
        <Icon name={'chevron-left'} size={20} color={'#111'}/>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.editProfileBtn}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        <Image source={require('@assets/images/about.png')} style={styles.btnImg}/>
        <Text style={styles.btnText}>درباره ما</Text>
      </View>
      <View>
        <Icon name={'chevron-left'} size={20} color={'#111'}/>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.editProfileBtn}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        <Image source={require('@assets/images/friend.png')} style={styles.btnImg}/>
        <Text style={styles.btnText}>دعوت از دوستان</Text>
      </View>
   
    </TouchableOpacity>
    <TouchableOpacity style={styles.editProfileBtn}>
      <View style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
        <Image source={require('@assets/images/exit.png')} style={styles.btnImg}/>
        <Text style={styles.btnText}>خروج از حساب</Text>
      </View>
      
    </TouchableOpacity>
  </ScrollView>
  </View>
);
};

const styles = StyleSheet.create({
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
      color:'#111',
      textAlign:'center',
    },userEmail:{
      ...myFontStyle.bookWriter,
      color:'#111',
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
    },btnText:{
      ...myFontStyle.episodeName,
      color:'#111',
      marginRight:responsiveWidth(2),
    },btnImg2:{
      resizeMode:'contain',
      width:25,
      height:35 ,
    }
  });

  export default UserProfile;

//make this component available to the <app></app>
