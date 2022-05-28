import React, { useState,useEffect,useRef} from 'react';
import { myFontStyle } from "@assets/Constance";
import { View, Text , StyleSheet,Image, TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors} from "@assets/Colors";
import CodeInputMain from '@components/CodeInput';
import { apiUrl ,apiAsset} from "@commons/inFormTypes";
import axios from 'axios';

 const Verify = ({navigation,route}) => {
  const [verify,setVerify]=useState("");
  const {code,name,email,pass} = route?.params ?? {};
  const CodeInputRef = useRef(null);
  const [ codeMain, setCodeMain ] = useState(code);
  const [ minutes, setMinutes ] = useState(1);
  const [seconds, setSeconds ] =  useState(59);
  const keyboardVerticalOffset = responsiveHeight(1)

  useEffect(()=>{
  let myInterval = setInterval(() => {
          if (seconds > 0) {
              setSeconds(seconds - 1);
          }
          if (seconds === 0) {
              if (minutes === 0) {
                  clearInterval(myInterval)
              } else {
                  setMinutes(minutes - 1);
                  setSeconds(59);
              }
          } 
      }, 1000)
      return ()=> {
          clearInterval(myInterval);
        };
  });

  const  register=async()=> {
if(verify=="" || codeMain!=verify){
     alert("کد وارد شده نادرست می باشد")
 

}

else{
console.log(545)

            axios.post(apiUrl + 'InsertCustomer',{Email:email,Password:pass,Username:name})
            .then(function (response) {
              // await AsyncStorage.setItem("@user","true")
              const result = response.data.result;
              console.log(result);
              if(result == "true"){
               console.log(22);
              //  console.log(response.data.Data);
              //  console.log(response.data.Data.code);
               navigation.navigate("Login")
             
                                }else{
                 setLoading(false);
                 SetEror2(true);
              }
            })
            .catch(function (error) {
              console.log(error);
            });

    // }
// else{
//         setLoading(false);
//          SetEror2(true)



// }


}

    };
 
    const  again=async()=> {
    
      console.log(545)
      
                  axios.post(apiUrl + 'RegisterSMS',{Email:email})
                  .then(function (response) {
                    // await AsyncStorage.setItem("@user","true")
                    const result = response.data.result;
                    console.log(result);
                    if(result == "true"){
                     console.log(22);
                  
                     setCodeMain(response.data.Data)
                   
                                      }else{
                       setLoading(false);
                       SetEror2(true);
                    }
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
      
      
      
      
      
          };
return (
    <View style={{ flex: 1,padding:0}}>
       {/* <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}> */}

      <Image source={require('@assets/images/login.png')} style={styles.loginImg} />
      <View style={styles.verifyBox}>
        <Text style={styles.verifyTitle}>
            دریافت کد تایید
        </Text>
        <Text style={styles.guideText}>
            کدی که برای شما ارسال شده را وارد کنید.
        </Text>
        <View style={styles.inputView}>
          {/* <CodeInput/>
          <CodeInput/>
          <CodeInput/>
          <CodeInput/> */}
          <CodeInputMain
            ref={CodeInputRef}
            onCodeInputEnd={code => setVerify(code)}
            validCode={verify}
            // hasError={error}
          />
        </View>
        <View style={styles.timerInput}>
          <View style={{paddingRight:15,paddingLeft:15}}>
            { minutes === 0 && seconds === 0
            ? 
            <Text style={styles.timerText}>
              00:00
            </Text>
            :  <Text style={styles.timerText}>{minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</Text> 
        }
          </View>
          <View  style={{paddingRight:15,paddingLeft:15,borderRightWidth:1,borderRightColor:Colors.borderColor}}>
            <TouchableOpacity onPress={()=>{setSeconds(59);again()}}>
              <Text style={styles.getPassText}>
              درخواست رمز جدید
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={()=>register()} style={styles.loginBtn}>
       <Text style={styles.btnText}>ورود</Text>
     </TouchableOpacity>
    

</View>
{/* </KeyboardAvoidingView>
 */}
      </View>
     
 
);
};

const styles = StyleSheet.create({
loginImg:{
  width:responsiveWidth(100),
  height:responsiveHeight(50),

  resizeMode:'contain',
  marginTop:responsiveHeight(-5)
},loginBtn:{
  backgroundColor:Colors.darkGreen,
  width:responsiveWidth(75),
  marginTop:responsiveHeight(6),
  height:responsiveHeight(8),
  alignContent:'center',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:15,
},btnText:{
  ...myFontStyle.largBold,
  color:'#fff',
},forgetPassBtn:{
  textAlign:'left',
  
  alignSelf:'flex-start',
  paddingLeft:responsiveWidth(3),
  marginTop:responsiveHeight(2),
  marginBottom:responsiveHeight(2),
},forgetPassBtnText:{
  color:'#3495fe',
  ...myFontStyle.largBold,
},verifyTitle:{
    ...myFontStyle.largBold,
    color:'#111',
    textAlign:'right',
    borderBottomColor:Colors.darkGreen,
    borderBottomWidth:3,
    width:responsiveWidth(31),
    paddingBottom:10,
},verifyBox:{
    flex:1,
    justifyContent:'flex-start',
    paddingRight:responsiveWidth(15),
    paddingLeft:responsiveWidth(15),
    alignItems:'flex-end'
},guideText:{
    ...myFontStyle.normalRegular,
    color:'#111',
    marginTop:responsiveHeight(2),
},inputView:{
  display:'flex',
  flexDirection:'row',
  marginTop:responsiveHeight(4),
},verifyInput:{
  width:20,
  borderWidth:0,
},timerInput:{
  display:'flex',
  flexDirection:'row-reverse',
  justifyContent:'center',
  alignContent:'center',
  textAlign:'center',
  marginRight:'auto',
  marginLeft:'auto',
  marginTop:responsiveHeight(5),

},timerText:{
  ...myFontStyle.normalRegular,
  color:'#111'
},getPassText:{
  ...myFontStyle.normalRegular,
  color:'#3495fe',
}
  });

  export default Verify;

//make this component available to the <app></app>
