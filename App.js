import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer,DarkTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Ionicons} from '@expo/vector-icons';
import {colors} from './src/theme';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import PackagesScreen from './src/screens/PackagesScreen';
import PackageDetailScreen from './src/screens/PackageDetailScreen';
import CalculatorScreen from './src/screens/CalculatorScreen';
import ContactScreen from './src/screens/ContactScreen';

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function PackageStack(){return <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:colors.bg},headerTintColor:colors.cyan,headerTitleStyle:{fontWeight:'800'},contentStyle:{backgroundColor:colors.bg}}}><Stack.Screen name="PackagesList" component={PackagesScreen} options={{headerShown:false}}/><Stack.Screen name="PackageDetail" component={PackageDetailScreen} options={{title:'Package details'}}/></Stack.Navigator>}
const icons = {Home:'home',About:'information-circle',Packages:'game-controller',Calculator:'calculator',Contact:'mail'};
export default function App(){
 return <SafeAreaProvider><NavigationContainer theme={{...DarkTheme,colors:{...DarkTheme.colors,background:colors.bg,card:colors.panel,text:colors.white,primary:colors.cyan,border:colors.line}}}><StatusBar barStyle="light-content" backgroundColor={colors.bg}/><Tabs.Navigator screenOptions={({route})=>({headerShown:false,tabBarActiveTintColor:colors.cyan,tabBarInactiveTintColor:colors.muted,tabBarLabelStyle:{fontSize:10,fontWeight:'800',paddingBottom:2},tabBarStyle:{backgroundColor:'#1b1b22',borderTopColor:colors.line,height:63,paddingTop:5,paddingBottom:8},tabBarIcon:({color,size})=><Ionicons name={icons[route.name]} size={size} color={color}/>})}><Tabs.Screen name="Home" component={HomeScreen}/><Tabs.Screen name="About" component={AboutScreen} options={{title:'About'}}/><Tabs.Screen name="Packages" component={PackageStack}/><Tabs.Screen name="Calculator" component={CalculatorScreen} options={{title:'Fees'}}/><Tabs.Screen name="Contact" component={ContactScreen}/></Tabs.Navigator></NavigationContainer></SafeAreaProvider>;
}
