import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { 
  Path, 
  LinearGradient, 
  Stop, 
  Defs, 
  Rect, 
  G, 
  ClipPath
} from 'react-native-svg';

interface RewardIconProps {
  focused?: boolean;
}

export const RewardIcon: React.FC<RewardIconProps> = ({ focused = false }) => {
  return (
    <View style={styles.container}>
      <Svg width="32" height="32" viewBox="0 0 64 64" fill="none">
        <Defs>
          <LinearGradient id="paint0_linear_1786_10956" x1="0" y1="0.447557" x2="64" y2="63.5524" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#FF4D4D" />
            <Stop offset="1" stopColor="#BD001F" />
          </LinearGradient>
          <ClipPath id="clip0_1786_10956">
            <Rect width="36.1093" height="36.7129" fill="white" transform="matrix(-1 0 0 1 50.1094 13.4999)" />
          </ClipPath>
        </Defs>

        <Rect x="0.5" y="0.5" width="63" height="63" rx="31.5" fill="url(#paint0_linear_1786_10956)" />
        <Rect x="0.5" y="0.5" width="63" height="63" rx="31.5" stroke="#FF4040" />
        
        <G clipPath="url(#clip0_1786_10956)">
          <Path 
            d="M35.64 38.8802L38.4459 39.6917C39.2589 39.9268 39.7274 40.7765 39.4922 41.5895L37.7218 47.7113C37.4867 48.5243 36.637 48.9928 35.824 48.7577L33.0181 47.9462C32.2051 47.7111 31.7366 46.8614 31.9717 46.0484L33.7422 39.9266C33.9773 39.1136 34.827 38.6451 35.64 38.8802Z" 
            stroke="#E6D8D9" 
            strokeWidth="2.78621" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <Path 
            d="M42.7599 27.1065L47.1004 28.3618C48.287 28.7049 48.9708 29.9451 48.6276 31.1318L46.1657 39.6447C45.8225 40.8313 44.5823 41.5151 43.3956 41.1719L39.0552 39.9166C37.8685 39.5735 37.1848 38.3333 37.5279 37.1466L39.9899 28.6338C40.3331 27.4471 41.5733 26.7633 42.7599 27.1065Z" 
            stroke="#E6D8D9" 
            strokeWidth="2.78621" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <Path 
            d="M17.8618 38.5264L37.3776 36.8717L39.489 29.4914C39.5834 29.1663 39.7119 28.6416 39.7676 28.4759L25.705 15.5061C24.6617 14.4489 22.877 14.8127 22.3321 16.1934L15.543 35.7588C14.944 37.2757 16.2659 38.853 17.8633 38.5264H17.8618Z" 
            stroke="#E6D8D9" 
            strokeWidth="2.78621" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </G>
      </Svg>
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