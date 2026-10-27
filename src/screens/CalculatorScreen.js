import React,{useEffect,useState} from 'react';
import {Text,TouchableOpacity,View} from 'react-native';
import {Intro,Screen,PrimaryButton,QuoteLine,styles} from '../components/UI';
import {colors} from '../theme';
import {packages,calculateQuote,money} from '../data';
const empty=()=>Object.fromEntries(packages.map(p=>[p.id,0]));
export default function CalculatorScreen({navigation,route}){
 const [quantities,setQuantities]=useState(empty);
 useEffect(()=>{const id=route.params?.initialPackage;if(id&&packages.some(p=>p.id===id))setQuantities(prev=>({...prev,[id]:Math.min((prev[id]||0)+1,99)}));},[route.params?.requestId]);
 const modify=(id,delta)=>setQuantities(prev=>({...prev,[id]:Math.max(0,Math.min(99,(prev[id]||0)+delta))}));
 const quote=calculateQuote(quantities);
 return <Screen><Intro eyebrow="LIVE QUOTATION" title="CALCULATE FEES" description="Choose your quantities. Discounts and 15% VAT are added automatically."/>
 <Text style={styles.sectionTitle}>Choose your bookings</Text>
 {packages.map(p=><View key={p.id} style={[styles.card,{flexDirection:'row',alignItems:'center',gap:9,padding:12}]}><Text style={{fontSize:28,width:40,textAlign:'center'}}>{p.icon}</Text><View style={{flex:1}}><Text style={{fontWeight:'850',fontSize:13,color:colors.white}}>{p.name}</Text><Text style={{color:colors.cyan,fontSize:12,fontWeight:'800'}}>{money(p.price)}</Text></View><View style={{flexDirection:'row',alignItems:'center',gap:10}}><TouchableOpacity accessibilityLabel={'Remove '+p.name} onPress={()=>modify(p.id,-1)} style={{backgroundColor:colors.surface,borderRadius:40,width:31,height:31,alignItems:'center',justifyContent:'center'}}><Text style={{color:colors.white,fontSize:20}}>−</Text></TouchableOpacity><Text style={{minWidth:16,color:colors.white,fontWeight:'900',textAlign:'center'}}>{quantities[p.id]}</Text><TouchableOpacity accessibilityLabel={'Add '+p.name} onPress={()=>modify(p.id,1)} style={{backgroundColor:colors.cyan,borderRadius:40,width:31,height:31,alignItems:'center',justifyContent:'center'}}><Text style={{color:colors.black,fontSize:20}}>+</Text></TouchableOpacity></View></View>)}
 <TouchableOpacity accessibilityRole="button" onPress={()=>setQuantities(empty())} style={{paddingVertical:11,alignItems:'center'}}><Text style={{color:colors.muted,textDecorationLine:'underline'}}>Clear selections</Text></TouchableOpacity>
 <View style={[styles.card,{borderColor:'#00ffff65',padding:22,marginTop:20}]}><Text style={styles.eyebrow}>YOUR QUOTATION</Text><QuoteLine label="Bookings" value={String(quote.count)}/><QuoteLine label="Subtotal" value={money(quote.subtotal)}/><QuoteLine label={`Discount (${quote.rate*100}%)`} value={'−'+money(quote.discount)} green/><QuoteLine label="VAT (15%)" value={money(quote.vat)}/><QuoteLine label="TOTAL DUE" value={money(quote.total)} strong accent/></View>
 <View style={[styles.card,{backgroundColor:'#261d31'}]}><Text style={{fontSize:11,color:colors.purple,fontWeight:'900'}}>DISCOUNT TIERS</Text><Text style={[styles.body,{fontSize:12,marginTop:5}]}>1 booking: 0%  ·  2: 5%  ·  3: 10%  ·  4 or more: 15%</Text></View>
 <PrimaryButton title="Contact us about booking" onPress={()=>navigation.navigate('Contact')}/><Text style={[styles.body,{fontSize:12,marginTop:12}]}>Prototype quote only. No payment or real booking takes place.</Text>
 </Screen>;
}
