// components/icon/eye.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

interface EyeIconProps {
  focused?: boolean;
}

export const EyeIcon: React.FC<EyeIconProps> = ({ focused = false }) => {
  const color = focused ? '#FF4D4D' : '#E6D8D9';
  
  return (
    <View style={styles.container}>
      <Svg width="24" height="24" viewBox="0 0 32 32" fill="none">
        <Path 
          d="M28.6404 15.84C28.6404 13.1199 23.6804 8.47998 15.8962 8.47998C8.11198 8.47998 3.36035 12.8 3.36035 15.84C3.36035 18.56 7.79199 23.2 15.8962 23.2C24.0003 23.2 28.6404 18.56 28.6404 15.84Z" 
          stroke={color} 
          strokeWidth="2.24" 
          strokeLinejoin="round"
        />
        <Path 
          d="M21.6364 15.84C21.6364 18.9793 19.0664 21.5242 15.8962 21.5242C12.7259 21.5242 10.1559 18.9793 10.1559 15.84C10.1559 12.7007 12.7259 10.1558 15.8962 10.1558C19.0664 10.1558 21.6364 12.7007 21.6364 15.84Z" 
          stroke={color} 
          strokeWidth="2.24" 
          strokeLinejoin="round"
        />
        <Circle 
          cx="15.8401" 
          cy="15.8401" 
          r="2.72" 
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
    width: 24,
    height: 24,
  },
});