import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';
import { ThemedView } from '@/components/ThemedView';
import { RewardIcon } from '@/components/icon/reward';
import { SpeedIndicators } from '@/components/SpeedIndicators';

export default function SpeedScreen() {
  const colorScheme = useColorScheme();
  const [speed, setSpeed] = useState(90);
  const [distance, setDistance] = useState(15);
  const [speedLimit, setSpeedLimit] = useState(60);
  
  // SVG parameters for the large speedometer
  const size = 280;
  const strokeWidth = 25;
  const radius = (size - strokeWidth) / 2;
  const innerRadius = radius - strokeWidth/2;
  // Smaller inner circle to create the red ring around the speed value
  const innerRedRadius = innerRadius - 10; 
  const circumference = 2 * Math.PI * radius;
  
  // Calculate progress (speed should be between 0-100)
  const normalizedSpeed = Math.min(100, Math.max(0, speed));
  const progress = (normalizedSpeed / 100) * circumference;
  const remainingProgress = circumference - progress;
  
  // Colors
  const tintColor = '#FF4D4D';

  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        {/* Banner at the top */}
        <View style={styles.banner}>
          <View>
            <Text style={styles.bannerText}>CAR FOR RENT</Text>
            <Text style={styles.bannerSubtext}>With 5% discount</Text>
            <Text style={styles.bannerPrice}>$5.99</Text>
          </View>
          <View style={styles.carImagePlaceholder} />
        </View>
        
        {/* Main content area - contains both components */}
        <View style={styles.contentContainer}>
          {/* Speed indicators as a separate component above the speedometer */}
          <SpeedIndicators speedLimit={speedLimit} />
          
          {/* Speedometer as a separate component */}
          <View style={styles.speedometerContainer}>
            <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
              {/* Background circle - dark gray */}
              <Circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                strokeWidth={strokeWidth}
                stroke={'rgba(30, 30, 30, 0.6)'}
                fill="transparent"
              />
              
              {/* Progress circle - red with rounded ends */}
              <Circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                strokeWidth={strokeWidth}
                stroke={tintColor}
                fill="transparent"
                strokeDasharray={`${progress} ${remainingProgress}`}
                strokeDashoffset={0}
                strokeLinecap="round"
                transform={`rotate(-90, ${size / 2}, ${size / 2})`}
              />
              
              {/* Inner border for progress circle */}
              <Circle
                cx={size / 2}
                cy={size / 2}
                r={innerRadius}
                strokeWidth={1}
                stroke={'rgba(80, 80, 80, 0.5)'}
                fill="transparent"
              />
              
              {/* Red circle around the speed value */}
              <Circle
                cx={size / 2}
                cy={size / 2}
                r={innerRedRadius}
                strokeWidth={2}
                stroke={tintColor}
                fill="#272323"
              />
              
              {/* Inner black circle for the speed value background */}
              <Circle
                cx={size / 2}
                cy={size / 2}
                r={innerRedRadius - 2}
                fill="#272323"
              />
            </Svg>
            
            {/* Speed value overlay */}
            <View style={styles.speedValueContainer}>
              <Text style={styles.speedValueText}>{speed}</Text>
              <Text style={styles.speedUnitText}>Km/h</Text>
            </View>
            
            {/* Distance button */}
            <TouchableOpacity style={styles.distanceButton}>
              <Text style={styles.distanceText}>{distance} 公尺</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Notification/Reward button */}
        <TouchableOpacity style={styles.notificationButton}>
          <RewardIcon focused={false} />
        </TouchableOpacity>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container: {
    flex: 1,
    backgroundColor: '#1a171f',
    paddingTop: 25,
  },
  banner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#222222',
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 80,
  },
  bannerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  bannerSubtext: {
    color: 'white',
    fontSize: 12,
    opacity: 0.8,
    marginTop: 2,
  },
  bannerPrice: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
  carImagePlaceholder: {
    width: 120,
    height: 60,
    backgroundColor: '#333333',
    borderRadius: 5,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  speedometerContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: 280,
    height: 350,
  },
  speedValueContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  speedValueText: {
    fontSize: 72,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  speedUnitText: {
    fontSize: 14,
    color: '#999999',
    marginTop: -5,
  },
  distanceButton: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#634A50',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 25,
  },
  distanceText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  notificationButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1a171f',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
});