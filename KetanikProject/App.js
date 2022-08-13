import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Login from '@screens/Login/Login';
import Splash from '@screens/Splash/Splash';
import Verify from '@screens/Login/Verify';
import ForgetPassword from '@screens/Login/ForgetPassword';
import SignUp from "@screens/Login/SignUp";
import Home from '@screens/Home/Home';
import SignUpSecond from '@screens/Login/SignUpSecond';
import Store from "@screens/Store/Store";
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { createDrawerNavigator } from '@react-navigation/drawer';



import Search from "@screens/Search/Search";
import { ThemeProvider} from './theme/theme-context';
import { myFontStyle } from './src/assets/Constance';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabStack= () => {

  return (

   <Tab.Navigator 
   
   barStyle={{ backgroundColor:'#fff',paddingRight:5 ,height:responsiveHeight(8), shadowColor:'#000',
   shadowOffset: {
     width: 0,
     height: 2,
   },
   // shadowOpacity: 0.5,
   shadowRadius: 2,
   
   elevation: 10,}}
initialRouteName={"StackNavigatorsHome"}
shifting={false}
activeColor={'#fff'}
// tabBar={props => <TabBar {...props} />}
>
  <Tab.Screen
    // name="home"
    name={"StackNavigatorsHome"}
    component={StackNavigatorsHome}
    options={{          tabBarLabel:<Text style={{...myFontStyle.menu,marginTop:10,textAlign:'center'}}></Text>,  tabBarIcon: ({ color }) => (            <Icon name="home" color={Colors.darkGreen}  size={25} />          ),        }}      />
<Tab.Screen
   name="Library" component={StackNavigatorsLibrary}
   options={{          tabBarLabel:<Text style={{...myFontStyle.menu}}></Text>,    tabBarIcon: ({ color }) => (    <Icon name="library-books" color={Colors.darkGreen} size={25} />         ),           }}      />
<Tab.Screen
   name="Searchs" component={StackNavigatorsSearch}
   options={{          tabBarLabel: <Text style={{...myFontStyle.menu}}></Text>, tabBarIcon: ({ color }) => (    <Icon name="search" color={Colors.darkGreen} size={25} />         ),           }}      />

  
<Tab.Screen
       // name="home"
       name={"Categorys"}
       component={StackNavigatorsCat}

       options={{          tabBarLabel:<Text style={{...myFontStyle.menu}}></Text>,          tabBarIcon: ({ color }) => (            <Icon name="apps" color={Colors.darkGreen} size={25} />          ),        }}      />
<Tab.Screen
   name="Profile" component={StackNavigatorsProfile}
   style={{...myFontStyle.UltraBold}}
   options={{          tabBarLabel: <Text style={{...myFontStyle.menu}}></Text>,    tabBarIcon: ({ color }) => (    <Icon name="person-outline" color={Colors.darkGreen} size={25} />         ),           }}      />

</Tab.Navigator>
  );
}
const StackNavigatorsHome = () => {

  return (
 
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={Home} />
    
    </Stack.Navigator>
  );
 }
const StackNavigatorsLibrary = () => {

  return (
 
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
     
      

    </Stack.Navigator>
  );
 }
const StackNavigatorsSearch = () => {

  return (
 
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
     
        <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
 }
const StackNavigatorsCat = () => {

  return (
 
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
    
    
      
    </Stack.Navigator>
  );
 }
const StackNavigatorsProfile = () => {

  return (
 
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
             
    </Stack.Navigator>
  );
 }
export default function App() {
  return (
    <ThemeProvider>

    <NavigationContainer>
       <Stack.Navigator screenOptions={{
       headerShown: false,
     
    }} >
      <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="SignUp" component={SignUp} /> 
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="SignUpSecond" component={SignUpSecond}/>
        <Stack.Screen name="Store" component={Store}/>
         <Stack.Screen name="TabBar" component={TabStack} />
  
   

        <Stack.Screen name="Home" component={Home} />
    

      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
}