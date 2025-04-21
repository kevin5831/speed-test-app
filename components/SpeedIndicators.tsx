// components/SpeedIndicators.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
      <View style={styles.fixedPositionIndicator}>
        <Text style={styles.fixedPositionText}>固</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorsContainer: {
    position: 'absolute',
    right: 20,
    top: 100,
    zIndex: 10,
    alignItems: 'center',
  },
  speedLimitIndicator: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#FF4D4D',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  speedLimitText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  fixedPositionIndicator: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#FFCC00',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFA000',
  },
  fixedPositionText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});