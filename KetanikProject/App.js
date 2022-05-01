import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Login from '@screens/Login/Login';
import Splash from '@screens/Splash/Splash';
import Verify from '@screens/Login/Verify';
import ForgetPassword from '@screens/Login/ForgetPassword';
import SelectedNews from '@screens/SelectedNews/SelectedNews';
import EpisodesList from '@screens/EpisodesList/EpisodesList';
import EachSelectedNews from '@screens/SelectedNews/EachSelectedNews';
import Cart from '@screens/Cart/Cart';
import Category from '@screens/Category/Category';
import Share from '@screens/Share/Share';
import AboutUs from '@screens/AboutUs/AboutUs';
import EditPassword from '@screens/EditPassword/EditPassword';
import Home from '@screens/Home/Home';
import UserProfile from '@screens/UserProfile/UserProfile';
import EditProfile from '@screens/UserProfile/EditProfile';
import GroupBook from '@screens/GroupBook/GroupBook';
import Library from '@screens/Library/Library';
import { Colors } from '@assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


import EachBook from '@screens/EachBook/EachBook';
import Rosters from '@screens/Rosters/Rosters';
import ListenBook from '@screens/ListenBook/ListenBook';
import Wallet from '@screens/Wallet/Wallet';
import Factor from '@screens/Factor/Factor';
import Search from "@screens/Search/Search";
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabStack= () => {

  return (

   <Tab.Navigator
   barStyle={{ backgroundColor: Colors.white,paddingRight:5 ,height:responsiveHeight(8)}}
initialRouteName={"StackNavigatorsHome"}
shifting={false}
activeColor={Colors.darkGreen}
// tabBar={props => <TabBar {...props} />}
>
<Tab.Screen
   name="Profile" component={StackNavigatorsProfile}
   
   options={{          tabBarLabel: 'حساب کاربری',    tabBarIcon: ({ color }) => (    <Icon name="person-outline" color={Colors.darkGreen} style={{height:responsiveHeight(13),width:responsiveWidth(8)}} size={30} />         ),           }}      />
<Tab.Screen
   name="Library" component={StackNavigatorsLibrary}
   options={{          tabBarLabel: 'کتابخانه',    tabBarIcon: ({ color }) => (    <Icon name="library-books" color={Colors.darkGreen} style={{height:responsiveHeight(13),width:responsiveWidth(8)}} size={29} />         ),           }}      />
<Tab.Screen
   name="Search" component={StackNavigatorsSearch}
   options={{          tabBarLabel: 'جستجو',    tabBarIcon: ({ color }) => (    <Icon name="search" color={Colors.darkGreen} style={{height:responsiveHeight(13),width:responsiveWidth(8)}} size={30} />         ),           }}      />

  
<Tab.Screen
       // name="home"
       name={"Categorys"}
       component={StackNavigatorsCat}

       options={{          tabBarLabel: 'دسته بندی',          tabBarIcon: ({ color }) => (            <Icon name="apps" color={Colors.darkGreen} style={{height:responsiveHeight(13),width:responsiveWidth(8)}} size={30} />          ),        }}      />
 <Tab.Screen
   // name="home"
   name={"StackNavigatorsHome"}
   component={StackNavigatorsHome}
   options={{          tabBarLabel: 'خانه',  tabBarIcon: ({ color }) => (            <Icon name="home" color={Colors.darkGreen} style={{height:responsiveHeight(13),width:responsiveWidth(8)}} size={30} />          ),        }}      />

</Tab.Navigator>
  );
}
const StackNavigatorsHome = () => {

  return (
 
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={Home} />
    
     <Stack.Screen name="EpisodesList" component={EpisodesList} />
        <Stack.Screen name="Rosters" component={Rosters} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="SelectedNews" component={SelectedNews} />
        <Stack.Screen name="EachBook" component={EachBook} />
        <Stack.Screen name="ListenBook" component={ListenBook} />
    </Stack.Navigator>
  );
 }
const StackNavigatorsLibrary = () => {

  return (
 
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
     
        <Stack.Screen name="Library" component={Library} />
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
    
    
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="GroupBook" component={GroupBook} /> 
 
    </Stack.Navigator>
  );
 }
const StackNavigatorsProfile = () => {

  return (
 
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
              <Stack.Screen name="UserProfile" component={UserProfile} />

        <Stack.Screen name="EditProfile" component={EditProfile}/>
               <Stack.Screen name="Share" component={Share} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="EditPassword" component={EditPassword} /> 
        <Stack.Screen name="wallet" component={Wallet} /> 
    </Stack.Navigator>
  );
 }
export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{
       headerShown: false,
     
    }} >
      <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="Verify" component={Verify} />

         <Stack.Screen name="TabBar" component={TabStack} />
  
        {/* <Stack.Screen name="SelectedNews" component={SelectedNews} />  */}
   

        <Stack.Screen name="Home" component={Home} />
    
         {/* <Stack.Screen name="Factor" component={Factor} /> */}
       {/* <Stack.Screen name="Search" component={Search} />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}