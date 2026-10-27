import React,{useState} from 'react';
import {Alert,KeyboardAvoidingView,Platform,Text,TextInput,View} from 'react-native';
import {Intro,Screen,PrimaryButton,styles} from '../components/UI';
import {colors} from '../theme';
export default function ContactScreen(){
 const [name,setName]=useState(''),[email,setEmail]=useState(''),[phone,setPhone]=useState(''),[message,setMessage]=useState('');
 const validate=()=>{
  const n=name.trim(),e=email.trim(),p=phone.replace(/\D/g,''),m=message.trim();
  let error='';
  if(n.length<2)error='Please enter your full name (at least 2 characters).';
  else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))error='Please enter a valid email address.';
  else if(p.length<9||p.length>15)error='Please enter a valid phone number (9–15 digits).';
  else if(m.length<10)error='Please write a message with at least 10 characters.';
  if(error){Alert.alert('Check your details',error);return;}
  Alert.alert('Validation successful','Your contact details are valid. This is a prototype, so no message was sent.');
  setName('');setEmail('');setPhone('');setMessage('');
 };
 const input=(label,value,onChange,placeholder,props={})=><View key={label}><Text style={styles.label}>{label}</Text><TextInput style={[styles.input,props.multiline&&{minHeight:112,textAlignVertical:'top'}]} value={value} onChangeText={onChange} placeholder={placeholder} placeholderTextColor="#777987" {...props}/></View>;
 return <Screen><Intro eyebrow="GET IN TOUCH" title="CONTACT US" description="Send an enquiry to the arena team (prototype form)."/><View style={styles.card}><Text style={[styles.sectionTitle,{marginTop:0}]}>Your enquiry</Text>{input('FULL NAME',name,setName,'Your name',{autoCapitalize:'words'})}{input('EMAIL ADDRESS',email,setEmail,'you@example.com',{keyboardType:'email-address',autoCapitalize:'none'})}{input('PHONE NUMBER',phone,setPhone,'+27 82 123 4567',{keyboardType:'phone-pad'})}{input('YOUR MESSAGE',message,setMessage,'Type your message here…',{multiline:true,numberOfLines:4})}<View style={{marginTop:19}}><PrimaryButton title="Validate enquiry" onPress={validate} icon="send"/></View><Text style={[styles.body,{fontSize:12,marginTop:15}]}>The app validates your inputs but does not send emails.</Text></View><Text style={styles.sectionTitle}>Visit us</Text><View style={styles.card}><Text style={{color:colors.purple,fontWeight:'900',fontSize:15,marginBottom:8}}>Next Level Gaming & Esports Arena</Text><Text style={styles.body}>📍 Johannesburg, South Africa</Text><Text style={[styles.body,{marginTop:8}]}>Our full address, verified contact details and map will be added in a future project phase.</Text></View></Screen>;
}
