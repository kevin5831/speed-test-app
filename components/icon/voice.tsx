// components/icon/voice.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

interface VoiceIconProps {
  focused?: boolean;
}

export const VoiceIcon: React.FC<VoiceIconProps> = ({ focused = false }) => {
  const color = focused ? '#FF4D4D' : '#E6D8D9';
  
  return (
    <View style={styles.container}>
      <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <Path 
          d="M8.79533 4.8419C10.8703 3.49938 13.3437 2.72021 15.9997 2.72021C23.3338 2.72021 29.2797 8.66613 29.2797 16.0002C29.2797 23.3343 23.3338 29.2802 15.9997 29.2802C8.66564 29.2802 2.71973 23.3343 2.71973 16.0002C2.71973 13.9512 3.18349 12.011 4.01245 10.2774" 
          stroke={color} 
          strokeWidth="1.8675" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <Path 
          d="M15.8156 11.9653V19.9697C15.8156 21.1545 14.6308 21.8206 13.8184 21.0922L11.4633 18.984C11.3793 19.0037 11.2921 19.0131 11.2019 19.0131H9.44849C8.71083 19.0131 8.11426 18.3263 8.11426 17.4786V14.4564C8.11426 13.6087 8.71083 12.9219 9.44849 12.9219H11.2019C11.2921 12.9219 11.3793 12.9313 11.4633 12.951L13.8184 10.8428C14.6308 10.1144 15.8156 10.7805 15.8156 11.9653Z" 
          fill={color} 
          stroke={color} 
          strokeWidth="1.8675" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <Path 
          d="M22.0176 11.6426C22.0176 11.6426 23.8851 13.1988 23.8851 16.0001C23.8851 19.1126 22.1213 20.5651 22.1213 20.5651" 
          stroke={color} 
          strokeWidth="1.8675" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <Path 
          d="M19.251 14.2139C19.251 14.2139 20.0395 14.8716 20.0395 16.0544C20.0395 17.3689 19.2945 17.9831 19.2945 17.9831" 
          stroke={color} 
          strokeWidth="1.8675" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <Circle 
          cx="6.33117" 
          cy="7.54895" 
          r="1.34875" 
          fill={color}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    height: 64,
  },
});