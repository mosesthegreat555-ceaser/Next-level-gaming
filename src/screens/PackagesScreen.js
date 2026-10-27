import React from 'react';
import {Text} from 'react-native';
import {Screen,Intro,PackageCard,styles} from '../components/UI';
import {packages} from '../data';
export default function PackagesScreen({navigation}){
 return <Screen><Intro eyebrow="EXPLORE EXPERIENCES" title="OUR PACKAGES" description="Find gaming activities and see exactly what each package includes."/><Text style={styles.sectionTitle}>Gaming packages</Text>{packages.filter(p=>p.category==='Gaming packages').map(p=><PackageCard key={p.id} item={p} onPress={()=>navigation.navigate('PackageDetail',{id:p.id})}/>)}<Text style={styles.sectionTitle}>Individual experiences</Text>{packages.filter(p=>p.category==='Individual experiences').map(p=><PackageCard key={p.id} item={p} onPress={()=>navigation.navigate('PackageDetail',{id:p.id})}/>)}</Screen>;
}
