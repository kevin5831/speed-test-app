import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { 
  Path, 
  Defs, 
  LinearGradient, 
  Stop, 
  Mask
} from 'react-native-svg';

export const DistanceButtonSVG = ({ distance = 15 }) => {
  return (
    <View style={styles.container}>
      <Svg width="136" height="53" viewBox="0 0 136 53" fill="none">
        <Defs>
          <LinearGradient 
            id="paint0_linear_1460_12194" 
            x1="68.0004" 
            y1="0.535156" 
            x2="68.0004" 
            y2="52.0235" 
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#8F7365" stopOpacity="0.6" />
            <Stop offset="1" stopColor="#1F0101" stopOpacity="0.8" />
          </LinearGradient>
          
          <Mask id="path-1-inside-1_1460_12194" fill="white">
            <Path d="M0.302734 26.2793C0.302734 12.0612 11.8288 0.535156 26.0469 0.535156H109.954C124.172 0.535156 135.698 12.0612 135.698 26.2793C135.698 40.4975 124.172 52.0235 109.954 52.0235H26.0469C11.8288 52.0235 0.302734 40.4975 0.302734 26.2793Z" />
          </Mask>
        </Defs>
        
        <Path 
          d="M0.302734 26.2793C0.302734 12.0612 11.8288 0.535156 26.0469 0.535156H109.954C124.172 0.535156 135.698 12.0612 135.698 26.2793C135.698 40.4975 124.172 52.0235 109.954 52.0235H26.0469C11.8288 52.0235 0.302734 40.4975 0.302734 26.2793Z" 
          fill="#634A50"
        />
        
        <Path 
          d="M0.302734 26.2793C0.302734 12.0612 11.8288 0.535156 26.0469 0.535156H109.954C124.172 0.535156 135.698 12.0612 135.698 26.2793C135.698 40.4975 124.172 52.0235 109.954 52.0235H26.0469C11.8288 52.0235 0.302734 40.4975 0.302734 26.2793Z" 
          fill="url(#paint0_linear_1460_12194)" 
          fillOpacity="0.6"
        />
        
        <Path 
          d="M0.302734 26.2793C0.302734 11.5089 12.2765 -0.464844 27.0469 -0.464844H108.954C123.724 -0.464844 135.698 11.5089 135.698 26.2793C135.698 12.6135 124.172 1.53516 109.954 1.53516H26.0469C11.8288 1.53516 0.302734 12.6135 0.302734 26.2793ZM135.698 52.0235H0.302734H135.698ZM0.302734 52.0235V0.535156V52.0235ZM135.698 0.535156V52.0235V0.535156Z" 
          fill="#B5918F" 
          mask="url(#path-1-inside-1_1460_12194)"
        />
      </Svg>
      
      <View style={styles.textOverlay}>
        <Text style={styles.distanceText}>{distance} 公尺</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 136,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  distanceText: {
    color: 'white',
    fontSize: 22,
  },
});