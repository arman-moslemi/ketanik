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



 const Store = ({navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
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
        <Image source={require('@assets/images/upDown.png')} style={styles.logo} />

        </TouchableOpacity>
      </View>
  
      <View style={{width:"14%",marginRight:"1%"}}>
        <TouchableOpacity style={[styles.sort2,shadow2]} onPress={toggleModal2}>
        <Image source={require('@assets/images/filter.png')} style={styles.logo} />

        </TouchableOpacity>
      </View>
      </View>
     <View style={{display:'flex',flexDirection:'row'}}>
      <View style={{width:'48%',marginRight:'1%'}}>
        <ProductCard/>
      </View>
      <View style={{width:'48%',marginLeft:'1%'}}>
        <ProductCard/>
      </View>
      
     </View>
     <View style={{display:'flex',flexDirection:'row'}}>
      <View style={{width:'48%',marginRight:'1%'}}>
        <ProductCard/>
      </View>
      <View style={{width:'48%',marginLeft:'1%'}}>
        <ProductCard/>
      </View>
      
     </View>
     <View style={{display:'flex',flexDirection:'row'}}>
      <View style={{width:'48%',marginRight:'1%'}}>
        <ProductCard/>
      </View>
      <View style={{width:'48%',marginLeft:'1%'}}>
        <ProductCard/>
      </View>
      
     </View>
     <View style={{display:'flex',flexDirection:'row'}}>
      <View style={{width:'48%',marginRight:'1%'}}>
        <ProductCard/>
      </View>
      <View style={{width:'48%',marginLeft:'1%'}}>
        <ProductCard/>
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
      <Modal isVisible={isModalVisible2} onBackdropPress={closeModal2} animationIn={'slideInUp'} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <View style={{ flex:0.3,backgroundColor:'#ffffff',borderRadius:10,width:'80%'}}>
          <View style={styles.modalHeader}>
          <Image source={require('@assets/images/blackSort.png')} style={styles.modalHeaderIcon} />
          <Text style={styles.modalHeaderText}>
            مرتب سازی بر اساس
          </Text>
          </View>
          <View>
          <View style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between',borderBottomColor:'#f4f4f4',borderBottomWidth:1,borderStyle:'solid',padding:10}}>
          <Text style={styles.radioLable}>
        فقط کالاهای موجود
      </Text>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={'#ffb921'}/>
          </View>
          <List.Section title="Accordions">
      <List.Accordion
        title="Uncontrolled Accordion"
        left={props => <List.Icon icon={'star'} />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Controlled Accordion"
        left={props => <List.Icon  icon={'star'} />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>
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
      padding:25,
     
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
      backgroundColor:'#ffb921',
      justifyContent:'center',    
      
    },sort2:{
      borderRadius:15,
      height:responsiveHeight(6),
      backgroundColor:Colors.Green1,
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
    }
  });

  export default Store;

//make this component available to the <app></app>
