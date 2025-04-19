import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, LinearGradient, Stop, Defs } from 'react-native-svg';

interface UserIconProps {
  focused?: boolean;
}

export const UserIcon: React.FC<UserIconProps> = ({ focused = false }) => {
  return (
    <View style={styles.container}>
      {!focused ? (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <Path 
            d="M16.2675 3.94714C17.7366 3.94714 19.1454 4.53071 20.1842 5.56947C21.223 6.60824 21.8065 8.01711 21.8065 9.48614C21.8065 10.9552 21.223 12.364 20.1842 13.4028C19.1454 14.4416 17.7366 15.0252 16.2675 15.0252C14.7985 15.0252 13.3896 14.4416 12.3509 13.4028C11.3121 12.364 10.7285 10.9552 10.7285 9.48614C10.7285 8.01711 11.3121 6.60824 12.3509 5.56947C13.3896 4.53071 14.7985 3.94714 16.2675 3.94714Z" 
            stroke="#E6D8D9" 
            strokeWidth="2.1844"
          />
          <Path 
            d="M5.16406 26.9054C5.16406 21.6365 7.34846 18.948 15.93 18.948C24.5116 18.948 27.1641 20.5222 27.1641 26.9054" 
            stroke="#E6D8D9" 
            strokeWidth="2.1844" 
            strokeLinecap="round"
          />
        </Svg>
      ) : (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <Defs>
            <LinearGradient id="paint0_linear_1786_10763" x1="16.2675" y1="3.94714" x2="16.2675" y2="15.0252" gradientUnits="userSpaceOnUse">
              <Stop stopColor="#FF4D4D"/>
              <Stop offset="1" stopColor="#BD001F"/>
            </LinearGradient>
            <LinearGradient id="paint1_linear_1786_10763" x1="16.2675" y1="3.94714" x2="16.2675" y2="15.0252" gradientUnits="userSpaceOnUse">
              <Stop stopColor="#FF4D4D"/>
              <Stop offset="1" stopColor="#BD001F"/>
            </LinearGradient>
            <LinearGradient id="paint2_linear_1786_10763" x1="16.1641" y1="18.948" x2="16.1641" y2="26.9054" gradientUnits="userSpaceOnUse">
              <Stop stopColor="#FF4D4D"/>
              <Stop offset="1" stopColor="#BD001F"/>
            </LinearGradient>
            <LinearGradient id="paint3_linear_1786_10763" x1="16.1641" y1="18.948" x2="16.1641" y2="26.9054" gradientUnits="userSpaceOnUse">
              <Stop stopColor="#FF4D4D"/>
              <Stop offset="1" stopColor="#BD001F"/>
            </LinearGradient>
          </Defs>
          <Path 
            d="M16.2675 3.94714C17.7366 3.94714 19.1454 4.53071 20.1842 5.56947C21.223 6.60824 21.8065 8.01711 21.8065 9.48614C21.8065 10.9552 21.223 12.364 20.1842 13.4028C19.1454 14.4416 17.7366 15.0252 16.2675 15.0252C14.7985 15.0252 13.3896 14.4416 12.3509 13.4028C11.3121 12.364 10.7285 10.9552 10.7285 9.48614C10.7285 8.01711 11.3121 6.60824 12.3509 5.56947C13.3896 4.53071 14.7985 3.94714 16.2675 3.94714Z" 
            fill="url(#paint0_linear_1786_10763)" 
            stroke="url(#paint1_linear_1786_10763)" 
            strokeWidth="1.5"
          />
          <Path 
            d="M15.93 18.948C7.90935 18.948 5.47693 21.2965 5.19323 25.9054C5.1593 26.4566 5.61178 26.9054 6.16406 26.9054H26.1641C26.7163 26.9054 27.168 26.4548 27.1399 25.9033C26.8571 20.3552 24.0435 18.948 15.93 18.948Z" 
            fill="url(#paint2_linear_1786_10763)" 
            stroke="url(#paint3_linear_1786_10763)" 
            strokeWidth="1.5" 
            strokeLinecap="round"
          />
        </Svg>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
  },
});