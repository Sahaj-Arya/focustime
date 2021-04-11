import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const minutesToMilllis = (min) => min * 1000 * 60;

const formatTime = (time) => (time < 10 ? `0${time}` : time);
export const Count = ({ minutes = 2, isPaused, onProgress,onEnd }) => {
  const interval = React.useRef(null);


  const [millis, setMillis] = useState(null);
  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
         clearInterval(interval.current);
         onEnd();
        return { time };
      }
      const timeLeft = time - 1000;
      onProgress(timeLeft/minutesToMilllis(minutes))
      return timeLeft;
    });
  };

  useEffect(() => {
    if(isPaused){
    if(interval.current) clearInterval(interval.current);
    return;}
    {
    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current)}
  },[isPaused]);
  
useEffect(() => {
  setMillis(minutesToMilllis(minutes))
},[minutes]);

  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}{' '}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    padding: 20,
    backgroundColor: 'purple',
    opacity: 0.8,
  },
});
