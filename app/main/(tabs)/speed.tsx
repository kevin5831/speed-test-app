import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { ThemedView } from '@/components/ThemedView';

export default function SpeedScreen() {
  const colorScheme = useColorScheme();
  const [speed, setSpeed] = useState(100);
  const [distance, setDistance] = useState(15);
  
  // SVG parameters for the large speedometer
  const size = 250;
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  
  // Calculate progress (speed should be between 0-100)
  const normalizedSpeed = Math.min(100, Math.max(0, speed));
  const progress = (normalizedSpeed / 100) * circumference;
  const remainingProgress = circumference - progress;
  
  // Colors
  const tintColor = '#FF4D4D'; // Match the red color from Figma

  return (
    <ThemedView style={styles.container}>
      {/* Banner at the top */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>CAR FOR RENT</Text>
        <Text style={styles.bannerSubtext}>With 5% discount</Text>
        <View style={styles.bannerPrice}>
          <Text style={styles.bannerPriceText}>$5.99</Text>
          <IconSymbol size={20} name="car.fill" color="white" />
        </View>
      </View>
      
      {/* Main speedometer */}
      <View style={styles.speedometerContainer}>
        <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* Background circle */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            stroke={Colors[colorScheme ?? 'light'].tabIconDefault}
            fill="transparent"
            opacity={0.3}
          />
          
          {/* Progress circle */}
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
          
          {/* Speed value in the center */}
          <SvgText
            x={size / 2}
            y={size / 2 + 15}
            textAnchor="middle"
            fontSize="60"
            fontWeight="bold"
            fill={colorScheme === 'dark' ? 'white' : 'black'}
          >
            {speed}
          </SvgText>
        </Svg>
        
        {/* Speed indicator badge */}
        <View style={styles.speedBadge}>
          <Text style={styles.speedBadgeText}>{speed}</Text>
        </View>

        <TouchableOpacity style={[styles.distanceButton, { backgroundColor: tintColor }]}>
          <Text style={styles.distanceText}>{distance} 公尺</Text>
        </TouchableOpacity>
      </View>

      {/* Notification button */}
      <TouchableOpacity style={styles.notificationButton}>
        <IconSymbol size={24} name="megaphone.fill" color={tintColor} />
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between',
    backgroundColor: '#000000',
  },
  banner: {
    backgroundColor: '#222',
    padding: 10,
    height: 80,
    zIndex: 1,
  },
  bannerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  bannerSubtext: {
    color: 'white',
    fontSize: 12,
    opacity: 0.8,
  },
  bannerPrice: {
    position: 'absolute',
    right: 10,
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerPriceText: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 5,
  },
  speedometerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  speedBadge: {
    position: 'absolute',
    right: 10,
    bottom: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  speedBadgeText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  distanceButton: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  distanceText: {
    color: 'white',
    fontWeight: 'bold',
  },
  notificationButton: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
});