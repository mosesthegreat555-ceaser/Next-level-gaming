import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../theme';
import {money} from '../data';

export const styles = StyleSheet.create({
  page:{backgroundColor:colors.bg,flex:1},scroll:{paddingHorizontal:19,paddingTop:16,paddingBottom:38},
  eyebrow:{color:colors.cyan,fontWeight:'900',letterSpacing:2,fontSize:10,marginBottom:10},
  heading:{fontWeight:'900',fontSize:32,lineHeight:37,color:colors.white,marginBottom:10},
  body:{color:colors.muted,fontSize:14,lineHeight:22},
  sectionTitle:{fontWeight:'900',fontSize:21,color:colors.white,marginTop:29,marginBottom:15},
  card:{backgroundColor:colors.panel,borderRadius:14,borderWidth:1,borderColor:colors.line,padding:16,marginBottom:13},
  chip:{backgroundColor:'#1b3336',paddingHorizontal:10,paddingVertical:6,alignSelf:'flex-start',borderRadius:6},
  button:{backgroundColor:colors.cyan,borderRadius:10,paddingHorizontal:16,paddingVertical:14,alignItems:'center',justifyContent:'center',flexDirection:'row'},
  buttonText:{color:colors.black,fontWeight:'900',fontSize:14},
  outline:{borderColor:colors.cyan,borderWidth:1,borderRadius:10,padding:12,alignItems:'center',justifyContent:'center'},
  input:{backgroundColor:colors.panel,borderRadius:9,borderWidth:1,borderColor:colors.line,color:colors.white,paddingHorizontal:13,paddingVertical:12,fontSize:15},
  label:{fontWeight:'900',color:colors.cyan,fontSize:11,letterSpacing:1,marginTop:14,marginBottom:7},
});
export function Screen({children,contentContainerStyle}) {
  return <SafeAreaView edges={['top']} style={styles.page}><ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={[styles.scroll,contentContainerStyle]}>{children}</ScrollView></SafeAreaView>;
}
export function Intro({eyebrow,title,description}){return <View style={{marginBottom:16}}><Text style={styles.eyebrow}>{eyebrow}</Text><Text style={styles.heading}>{title}</Text>{description?<Text style={styles.body}>{description}</Text>:null}</View>}
export function PrimaryButton({title,onPress,icon='arrow-forward',disabled=false}){
  return <TouchableOpacity disabled={disabled} accessibilityRole="button" onPress={onPress} style={[styles.button,disabled&&{opacity:.5}]}><Text style={styles.buttonText}>{title}</Text><Ionicons name={icon} size={17} color={colors.black} style={{marginLeft:10}}/></TouchableOpacity>;
}
export function OutlineButton({title,onPress}){
  return <TouchableOpacity accessibilityRole="button" onPress={onPress} style={styles.outline}><Text style={{color:colors.cyan,fontWeight:'850'}}>{title}</Text></TouchableOpacity>;
}
export function PackageCard({item,onPress}) {
  return <View style={[styles.card,{padding:0,overflow:'hidden'}]}><View style={{backgroundColor:'#241d31',padding:21,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}><Text style={{fontSize:46}}>{item.icon}</Text><Text style={{fontSize:10,fontWeight:'900',color:colors.cyan,letterSpacing:1}}>{item.tag.toUpperCase()}</Text></View><View style={{padding:17}}><Text style={{fontSize:17,fontWeight:'900',color:colors.white}}>{item.name}</Text><Text style={[styles.body,{marginTop:6,marginBottom:13}]}>{item.short}</Text><View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',gap:10}}><Text style={{fontSize:19,fontWeight:'900',color:colors.cyan}}>{money(item.price)}</Text><TouchableOpacity accessibilityRole="button" onPress={onPress} style={{borderWidth:1,borderColor:colors.cyan,borderRadius:7,paddingHorizontal:11,paddingVertical:8}}><Text style={{color:colors.cyan,fontWeight:'800',fontSize:12}}>View details ↗</Text></TouchableOpacity></View></View></View>;
}
export function BrandHeader(){return <View style={{flexDirection:'row',alignItems:'center',marginBottom:27}}><Image source={require('../../assets/logo.png')} style={{width:54,height:54,borderRadius:13,marginRight:13}}/><View><Text style={{color:colors.white,fontWeight:'900',fontSize:16,letterSpacing:1}}>NEXT <Text style={{color:colors.purple}}>LEVEL</Text></Text><Text style={{color:colors.muted,fontSize:10,letterSpacing:1}}>GAMING & ESPORTS ARENA</Text></View></View>}
export function QuoteLine({label,value,accent=false,green=false,strong=false}){return <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderBottomWidth:strong?0:1,borderBottomColor:colors.line,paddingVertical:12,gap:8}}><Text style={{color:strong?colors.white:colors.muted,fontSize:strong?16:13,fontWeight:strong?'900':'400'}}>{label}</Text><Text style={{color:accent?colors.cyan:green?colors.green:colors.white,fontWeight:'900',fontSize:strong?24:15}}>{value}</Text></View>}
