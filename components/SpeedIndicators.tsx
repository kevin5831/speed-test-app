// components/SpeedIndicators.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Rect, Path } from 'react-native-svg';
interface SpeedIndicatorsProps {
  speedLimit: number;
}

export const SpeedIndicators: React.FC<SpeedIndicatorsProps> = ({ speedLimit }) => {
  return (
    <View style={styles.indicatorsContainer}>
      {/* Speed limit indicator */}
      <View style={styles.speedLimitIndicator}>
        <Text style={styles.speedLimitText}>{speedLimit}</Text>
      </View>
      
      {/* Fixed position indicator */}
      <View style={styles.iconContainer}>
        <Svg width="76" height="76" viewBox="0 0 76 76" fill="none">
          <Rect
            x="75"
            y="1"
            width="74"
            height="74"
            rx="18.2183"
            transform="rotate(90 75 1)"
            fill="#FFC505"
            stroke="#FFC505"
          />
          <Rect
            x="71.5278"
            y="4.47222"
            width="67.0556"
            height="67.0556"
            rx="15.0278"
            transform="rotate(90 71.5278 4.47222)"
            fill="#FFC505"
            stroke="black"
            strokeWidth="3.94444"
          />
          <Path
            d="M27.799 29.63H49.324V33.566H27.799V29.63ZM36.122 25.694H40.755V39.142H36.122V25.694ZM33.949 40.536V44.103H43.051V40.536H33.949ZM29.685 36.887H47.602V47.752H29.685V36.887ZM21.075 19.954H56.048V56.772H50.923V24.505H25.995V56.772H21.075V19.954ZM23.945 50.417H52.891V54.968H23.945V50.417Z"
            fill="black"
          />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorsContainer: {
    position: 'absolute',
    top: 0,
    right: 20,
    zIndex: 10,
    alignItems: 'center',
  },
  speedLimitIndicator: {
    width: 80,
    height: 80,
    borderRadius: "100%",
    backgroundColor: 'white',
    borderWidth: 10,
    borderColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  speedLimitText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000',
  },
  fixedPositionIndicator: {
    width: 75,
    height: 75,
    borderRadius: 20,
    backgroundColor: '#FFCC00',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFA000',
  },
  iconContainer: {
    width: 76,
    height: 76,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fixedPositionText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});