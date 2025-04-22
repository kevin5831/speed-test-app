import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface DynamicIslandProps {
  speed: number;
  distance: number;
  speedLimit: number;
  onClose?: () => void;
  visible: boolean;
}

export const DynamicIsland: React.FC<DynamicIslandProps> = ({
  speed,
  distance,
  speedLimit,
  onClose,
  visible
}) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        {/* Speed Limit Icon */}
        <View style={styles.speedLimitContainer}>
          <View style={styles.speedLimitCircle}>
            <Text style={styles.speedLimitText}>{speedLimit}</Text>
          </View>
        </View>

        {/* Current Speed */}
        <View style={styles.speedContainer}>
          <Text style={styles.speedText}>{speed}</Text>
          <Text style={styles.unitText}>Km/h</Text>
        </View>

        {/* Distance */}
        <View style={styles.distanceContainer}>
          <Text style={styles.distanceText}>{distance}公尺</Text>
        </View>

        {/* Close Button */}
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>×</Text>
        </TouchableOpacity>

        {/* Screenshot Icon */}
        <View style={styles.screenshotContainer}>
          <View style={styles.screenshotIcon}>
            <View style={styles.screenshotInner} />
          </View>
        </View>

        {/* Speedometer Icon */}
        <TouchableOpacity style={styles.speedometerButton}>
          <Text style={styles.speedometerIcon}>⚙</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 120,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1000,
  },
  container: {
    backgroundColor: 'rgba(40, 40, 40, 0.8)',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: width * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  speedLimitContainer: {
    marginRight: 5,
  },
  speedLimitCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  speedLimitText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  speedContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  speedText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  unitText: {
    color: 'white',
    fontSize: 14,
  },
  distanceContainer: {
    backgroundColor: '#DD4B4B',
    padding: 8,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  distanceText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 10,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  screenshotContainer: {
    marginHorizontal: 5,
  },
  screenshotIcon: {
    width: 28,
    height: 28,
    backgroundColor: '#FFCC00',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenshotInner: {
    width: 14,
    height: 14,
    borderWidth: 2,
    borderColor: 'black',
  },
  speedometerButton: {
    marginLeft: 5,
  },
  speedometerIcon: {
    color: 'white',
    fontSize: 20,
  },
});