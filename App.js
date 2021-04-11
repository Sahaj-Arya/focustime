import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';
import { Focus } from './src/features/focus/focus';
import { FocusHistory } from './src/features/focus/focusHistory';

import { Timer } from './src/features/timer/timer';

// You can import from local files
// import AssetExample from './src/components/AssetExample';

// or any pure javascript modules available in npm
const STATUSES={
Complete:1,
Cancelled:0,

}
export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  // useEffect(() => {
  //   setFocusHistory([...focusHistory, focusSubject]);
  // }, [focusSubject]);
const onClear=()=>{}
  
const AddFocusHistorySubjectWithtate=(subject,status)=>{
setFocusHistory([...focusHistory,{subject,status}])
}
  console.log(focusHistory);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
AddFocusHistorySubjectWithtate(focusSubject,STATUSES.Complete)
            setFocusSubject(null);
          }}
          clearSubject={() => {
          AddFocusHistorySubjectWithtate(focusSubject,STATUSES.Cancelled);

          setFocusSubject(null)}}
        />
      ) : (
        <>
        <Focus addSubject=  {setFocusSubject} />
<FocusHistory focusHistory={focusHistory} onClear={onClear}/>
</>
      )}

      <Text>{focusSubject}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    paddingtop: Platform.OS === 'ios' ? 20 : 30,
  },
});
