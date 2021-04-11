import React,{useState} from 'react';
import {View ,StyleSheet,Text} from 'react-native';
import { TextInput } from 'react-native-paper';
import {RoundedButton} from '../../components/RoundedButton'
import {ProgressBar} from 'react-native-paper';

export const Timing =({onChangeTime})=>{
return(
<>

<View style={styles.timingBtn}>
<RoundedButton size={75} title='0.6' onPress={() =>onChangeTime(0.1)} />
</View>

<View style={styles.timingBtn}>
<RoundedButton size={75} title='5' onPress={() =>onChangeTime(5)} />
</View>

<View style={styles.timingBtn}>
<RoundedButton size={75} title='10' onPress={() =>onChangeTime(10)} />
</View>

</>
  
)

}

const styles=StyleSheet.create({
timingBtn:{
  flex:1,
  alignItems:'center'
},

})