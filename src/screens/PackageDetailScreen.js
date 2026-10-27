import React from 'react';
import {Text,View} from 'react-native';
import {Intro,Screen,PrimaryButton,styles} from '../components/UI';
import {packages,money} from '../data';
import {colors} from '../theme';
export default function PackageDetailScreen({route,navigation}){
 const p=packages.find(item=>item.id===route.params?.id);
 if(!p)return <Screen><Intro eyebrow="NOT FOUND" title="Package unavailable"/></Screen>;
 const calculate=()=>navigation.getParent()?.navigate('Calculator',{initialPackage:p.id,requestId:Date.now()});
 return <Screen><Intro eyebrow={p.category.toUpperCase()} title={p.name.toUpperCase()}/><View style={{height:230,backgroundColor:'#291e38',borderColor:colors.line,borderWidth:1,borderRadius:16,alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:110}}>{p.icon}</Text></View><Text style={{fontSize:32,color:colors.cyan,fontWeight:'900',marginVertical:19}}>{money(p.price)}</Text><Text style={styles.body}>{p.description}</Text><Text style={styles.sectionTitle}>What's included</Text><View style={styles.card}>{p.includes.map(t=><View key={t} style={{flexDirection:'row',gap:10,paddingVertical:8,alignItems:'center'}}><Text style={{color:colors.green,fontWeight:'900'}}>✓</Text><Text style={{color:colors.white,flex:1}}>{t}</Text></View>)}</View><PrimaryButton title="Add to fee calculator" onPress={calculate}/><Text style={[styles.body,{fontSize:12,marginTop:13}]}>Coursework demonstration only. No booking or payment is processed.</Text></Screen>;
}
