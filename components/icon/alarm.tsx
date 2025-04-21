import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, LinearGradient, Stop, Defs } from 'react-native-svg';

interface AlarmIconProps {
  focused?: boolean;
}

export const AlarmIcon: React.FC<AlarmIconProps> = ({ focused = false }) => {
  return (
    <View style={styles.container}>
      {!focused ? (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <Path d="M12.32 24.9621C12.32 28.32 14.56 29.12 15.9205 29.12C17.6 29.12 19.68 28.32 19.68 24.9621M13.28 6.49738C13.28 3.68 14.56 2.72 15.9205 2.72C17.2811 2.72 18.4 3.68 18.4 6.51446M7.97807 24.9621H23.8631C25.3205 24.9686 27.04 24.1624 27.04 22.0632C27.04 19.964 24.816 18.6146 23.863 17.8648V13.7164C23.863 11.9887 23.3431 10.6237 22.24 9.28C21.4074 8.26592 19.2 6.08 15.9205 6.08C12.48 6.08 10.7541 7.87507 9.59996 9.28C8.49684 10.6228 7.97807 11.9879 7.97807 13.7164L7.9781 17.8648C6.86615 18.6146 4.95996 20.114 4.95996 22.0632C4.95996 24.0125 6.48237 24.9621 7.97807 24.9621Z" 
            stroke="#E6D8D9" 
            strokeWidth="2.24" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
        </Svg>
      ) : (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <Defs>
            <LinearGradient id="paint0_linear_1786_10759" x1="16" y1="2.72" x2="16" y2="29.12" gradientUnits="userSpaceOnUse">
              <Stop stopColor="#FF4D4D" />
              <Stop offset="1" stopColor="#BD001F" />
            </LinearGradient>
            <LinearGradient id="paint1_linear_1786_10759" x1="16" y1="2.72" x2="16" y2="29.12" gradientUnits="userSpaceOnUse">
              <Stop stopColor="#FF4D4D" />
              <Stop offset="1" stopColor="#BD001F" />
            </LinearGradient>
          </Defs>
          <Path d="M7.97807 24.9621C6.48237 24.9621 4.95996 24.0125 4.95996 22.0632C4.95996 20.114 6.86615 18.6146 7.9781 17.8648L7.97807 13.7164C7.97807 11.9879 8.49684 10.6228 9.59996 9.28C10.7541 7.87507 12.48 6.08 15.9205 6.08C19.2 6.08 21.4074 8.26592 22.24 9.28C23.3431 10.6237 23.863 11.9887 23.863 13.7164V17.8648C24.816 18.6146 27.04 19.964 27.04 22.0632C27.04 24.1624 25.3205 24.9686 23.8631 24.9621H7.97807Z" fill="url(#paint0_linear_1786_10759)"/>
          <Path d="M12.32 24.9621C12.32 28.32 14.56 29.12 15.9205 29.12C17.6 29.12 19.68 28.32 19.68 24.9621M13.28 6.49738C13.28 3.68 14.56 2.72 15.9205 2.72C17.2811 2.72 18.4 3.68 18.4 6.51446M7.97807 24.9621H23.8631C25.3205 24.9686 27.04 24.1624 27.04 22.0632C27.04 19.964 24.816 18.6146 23.863 17.8648V13.7164C23.863 11.9887 23.3431 10.6237 22.24 9.28C21.4074 8.26592 19.2 6.08 15.9205 6.08C12.48 6.08 10.7541 7.87507 9.59996 9.28C8.49684 10.6228 7.97807 11.9879 7.97807 13.7164L7.9781 17.8648C6.86615 18.6146 4.95996 20.114 4.95996 22.0632C4.95996 24.0125 6.48237 24.9621 7.97807 24.9621Z" 
            stroke="url(#paint1_linear_1786_10759)" 
            strokeWidth="2.24" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
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