import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{
       headerShown: false,
     
    }} >
        {/* <Stack.Screen name="Home" component={Login} />
        {/* <Stack.Screen name="Splash" component={Splash} /> */}
        {/* <Stack.Screen name="Verify" component={Verify} /> */}
        {/* <Stack.Screen name="ForgetPassword" component={ForgetPassword} /> */}
        {/* <Stack.Screen name="SelectedNews" component={SelectedNews} /> */}
        {/* <Stack.Screen name="EpisodesList" component={EpisodesList} /> */}
        {/* <Stack.Screen name="EachSelectedNews" component={EachSelectedNews} /> */}
        {/* <Stack.Screen name="Cart" component={Cart} /> */}
        {/* <Stack.Screen name="Category" component={Category} /> */}
        {/* <Stack.Screen name="Share" component={Share} /> */}
        {/* <Stack.Screen name="AboutUs" component={AboutUs} /> */}
        <Stack.Screen name="EditPassword" component={EditPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}