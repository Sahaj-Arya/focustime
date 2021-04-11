import React,{useState} from 'react';
import {View ,StyleSheet,Text,Vibration,Platform} from 'react-native';
import {Count} from '../../components/count';
import {RoundedButton} from '../../components/RoundedButton';
import {ProgressBar} from 'react-native-paper';
import {Timing} from './timing';
import {useKeepAwake} from "expo-keep-awake";

export const Timer =({focusSubject ,onTimerEnd,clearSubject})=>{
    useKeepAwake();
const [isStarted,setIsStarted]=useState(false)
const [progress,setprogress]=useState(1)
const [minutes,setMinutes]=useState(.1)
const DEFAULT_TIME=.1;
const onProgress=(progress)=>{
  setprogress(progress)
}
const onEnd=()=>{
  vibrate();
    setMinutes(DEFAULT_TIME);
  setprogress(1);
  setIsStarted(false)
  onTimerEnd();

}
const changeTime = (min) => {
  
  setMinutes(min);
  setprogress(1);
  setIsStarted(false)

}

const vibrate = () => {
 if(Platform.OS==='ios'){
   const interval =setInterval(()=> Vibration.vibrate(),1000);
setTimeout(()=>clearInterval(interval),10000);}
else{
Vibration.vibrate(1*1000,4)





}
 };

  return(
    <View style={styles.container}>
    <View style={styles.count}>
    <Count  minutes={minutes} isPaused={!isStarted} onProgress={onProgress}
    onEnd={onEnd}
    />
    </View>
    <View style={{paddingTop:40}}>
    
    <Text style={styles.title}>Focus on:</Text>
    <Text style={styles.task}>{focusSubject}</Text>
    <View style={styles.progressBar}>
    <ProgressBar 
    progress={progress}
    color='#5E84E2'
    style={{height:10}}/>
    </View>
    <View style={styles.btnrow}>
    <Timing onChangeTime= {changeTime} />
    </View>
    <View style={styles.btnV}>
    {isStarted?(
        <RoundedButton style={styles.btn} title='pause' size={100} onPress={()=>setIsStarted(false)} />
    ):(
          <RoundedButton style={styles.btn} title='start' size={100} onPress={()=>setIsStarted(true)} />

    )
}
    </View>

    </View>
<View>
<RoundedButton  title='-' size={30} onPress={()=>clearSubject()} />
 </View>
    </View>
  )
}


const styles=StyleSheet.create({
container:{
  flex:1,
},
title:{
  color: 'white' ,
textAlign:'center'

},
count:
{
flex:0.5,
alignItems:'center',
justifyContent:'center'
},
btn:{
  fontWeight:'bold',
textAlign:'center',
alignContent:'center',
},
btnV:{
  flex:0.3,
paddingTop:80,
  fontWeight:'bold',
alignItems:'center',
justifyContent:'center',
},
progressBar:{
padding:40,
 
},
task:{

  color: 'white' ,
fontWeight:'bold',
textAlign:'center'
},
btnrow:{
flex:.3,
flexDirection:'row',
padding:15,
justifyContent:'center',
alignItems:'center'


},

})