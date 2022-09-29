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
import TicketList from '@screens/Ticket/TicketList';
import Ticket from '@screens/Ticket/Ticket';
import IotDashboard from '@screens/Iot/IotDashboard';
import IotProject from '@screens/Iot/IotProject';
import SignUpSecond from '@screens/Login/SignUpSecond';
import SingleProduct from '@screens/Product/SingleProduct';
import BlogList from '@screens/Blog/BlogList';
import SingleBlog from '@screens/Blog/SingleBlog';
import Store from "@screens/Store/Store";
import Profile from "@screens/Profile/Profile";
import EditProfile from "@screens/Profile/EditProfile";
import Wallet from "@screens/Wallet/Wallet";
import BestConsultant from '@screens/ConsultantList/BestConsultant';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { createDrawerNavigator } from '@react-navigation/drawer';


import ConsultantList from '@screens/ConsultantList/ConsultantList';
import HistoryConsultant from '@screens/ConsultantList/HistoryConsultant';
import Cart from '@screens/Cart/Cart';
import CartAddress from '@screens/Cart/CartAddress';
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
      <Stack.Screen name="IotDashboard" component={IotDashboard} />
      <Stack.Screen name="IotProject" component={IotProject} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="CartAddress" component={CartAddress} />
      <Stack.Screen name="SingleProduct" component={SingleProduct} />
      <Stack.Screen name="BlogList" component={BlogList} />
      <Stack.Screen name="SingleBlog" component={SingleBlog} />
      <Stack.Screen name="EditProfile" component={EditProfile} /> 
      <Stack.Screen name="TicketList" component={TicketList} />
      <Stack.Screen name="Ticket" component={Ticket} />

    
    </Stack.Navigator>
  );
 }
const StackNavigatorsLibrary = () => {

  return (
 
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
     
     <Stack.Screen name="BlogList" component={BlogList} />
     <Stack.Screen name="SingleBlog" component={SingleBlog} />


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
    
    <Stack.Screen name="IotDashboard" component={IotDashboard} />
      <Stack.Screen name="IotProject" component={IotProject} />
      
    </Stack.Navigator>
  );
 }
const StackNavigatorsProfile = () => {

  return (
 
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
             <Stack.Screen name="Profile" component={Profile} /> 
             <Stack.Screen name="EditProfile" component={EditProfile} /> 
             <Stack.Screen name="TicketList" component={TicketList} />
             <Stack.Screen name="Ticket" component={Ticket} />

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
        <Stack.Screen name="Wallet" component={Wallet}/>
        <Stack.Screen name="ConsultantList" component={ConsultantList}/>
        <Stack.Screen name="HistoryConsultant" component={HistoryConsultant}/>
        <Stack.Screen name="BestConsultant" component={BestConsultant}/>
         <Stack.Screen name="TabBar" component={TabStack} />
  
   

        <Stack.Screen name="Home" component={Home} />
    

      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
}