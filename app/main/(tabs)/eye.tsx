import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Switch, Platform, Alert } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import SpeedActivity from '@/components/SpeedActivityModule'; // Import the Live Activity module

export default function EyeScreen() {
  // State for the Live Activity values
  const [speed, setSpeed] = useState(100);
  const [distance, setDistance] = useState(15);
  const [speedLimit, setSpeedLimit] = useState(60);
  const [isActivityActive, setIsActivityActive] = useState(false);

  // Function to start the Live Activity
  const startLiveActivity = async () => {
    if (Platform.OS !== 'ios') {
      Alert.alert('Not Supported', 'Live Activities are only available on iOS 16.1+');
      return;
    }
    
    try {
      const result = await SpeedActivity.startActivity(speed, distance, speedLimit);
      console.log('Live Activity started:', result);
      setIsActivityActive(true);
      
      // Optionally minimize the app to show the effect
      Alert.alert(
        'Live Activity Started', 
        'Press Home to see the Dynamic Island widget. The app will continue tracking in the background.',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
      );
    } catch (error) {
      console.error('Failed to start Live Activity:', error);
      Alert.alert('Error', `Failed to start Live Activity: ${error}`);
    }
  };

  // Function to update the Live Activity
  const updateLiveActivity = async (newSpeed, newDistance, newSpeedLimit) => {
    if (!isActivityActive || Platform.OS !== 'ios') return;
    
    setSpeed(newSpeed);
    setDistance(newDistance);
    setSpeedLimit(newSpeedLimit);
    
    try {
      await SpeedActivity.updateActivity(newSpeed, newDistance, newSpeedLimit);
      console.log('Live Activity updated');
    } catch (error) {
      console.error('Failed to update Live Activity:', error);
    }
  };

  // Function to stop the Live Activity
  const stopLiveActivity = async () => {
    if (!isActivityActive || Platform.OS !== 'ios') return;
    
    try {
      await SpeedActivity.stopActivity();
      console.log('Live Activity stopped');
      setIsActivityActive(false);
    } catch (error) {
      console.error('Failed to stop Live Activity:', error);
    }
  };

  // Toggle the Live Activity
  const toggleLiveActivity = () => {
    if (isActivityActive) {
      stopLiveActivity();
    } else {
      startLiveActivity();
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (isActivityActive) {
        stopLiveActivity();
      }
    };
  }, [isActivityActive]);

  // Simulate speed changes
  useEffect(() => {
    if (!isActivityActive) return;
    
    const interval = setInterval(() => {
      // Simulate random speed changes (for demo purposes)
      const newSpeed = Math.max(0, Math.floor(speed + (Math.random() * 10 - 5)));
      const newDistance = Math.max(1, Math.floor(distance + (Math.random() * 2 - 1)));
      
      updateLiveActivity(newSpeed, newDistance, speedLimit);
    }, 5000); // Update every 5 seconds
    
    return () => clearInterval(interval);
  }, [isActivityActive, speed, distance, speedLimit]);

  return (
    <ThemedView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Speed Live Activity</Text>
          <Text style={styles.subheaderText}>iOS 16.1+ required</Text>
        </View>

        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>Current Values</Text>
          
          <View style={styles.valueRow}>
            <Text style={styles.valueLabel}>Speed:</Text>
            <Text style={styles.valueText}>{speed} km/h</Text>
          </View>
          
          <View style={styles.valueRow}>
            <Text style={styles.valueLabel}>Distance:</Text>
            <Text style={styles.valueText}>{distance} 公尺</Text>
          </View>
          
          <View style={styles.valueRow}>
            <Text style={styles.valueLabel}>Speed Limit:</Text>
            <Text style={styles.valueText}>{speedLimit} km/h</Text>
          </View>
        </View>

        <View style={styles.controlsContainer}>
          <Text style={styles.controlsTitle}>Controls</Text>
          
          <View style={styles.switchContainer}>
            <Text style={styles.switchText}>Live Activity</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#FF4D4D' }}
              thumbColor={isActivityActive ? '#ffffff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleLiveActivity}
              value={isActivityActive}
            />
          </View>
          
          <View style={styles.buttonRow}>
            <TouchableOpacity 
              style={[styles.button, !isActivityActive && styles.buttonDisabled]} 
              onPress={() => updateLiveActivity(Math.max(0, speed - 10), distance, speedLimit)}
              disabled={!isActivityActive}
            >
              <Text style={styles.buttonText}>Speed -10</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.button, !isActivityActive && styles.buttonDisabled]} 
              onPress={() => updateLiveActivity(speed + 10, distance, speedLimit)}
              disabled={!isActivityActive}
            >
              <Text style={styles.buttonText}>Speed +10</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.buttonRow}>
            <TouchableOpacity 
              style={[styles.button, !isActivityActive && styles.buttonDisabled]} 
              onPress={() => updateLiveActivity(speed, Math.max(1, distance - 1), speedLimit)}
              disabled={!isActivityActive}
            >
              <Text style={styles.buttonText}>Distance -1</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.button, !isActivityActive && styles.buttonDisabled]} 
              onPress={() => updateLiveActivity(speed, distance + 1, speedLimit)}
              disabled={!isActivityActive}
            >
              <Text style={styles.buttonText}>Distance +1</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.instructionContainer}>
          <Text style={styles.instructionTitle}>Instructions:</Text>
          <Text style={styles.instructionText}>• Toggle the switch to start/stop the Live Activity</Text>
          <Text style={styles.instructionText}>• Press the Home button to see the Dynamic Island</Text>
          <Text style={styles.instructionText}>• Use controls to update values while in background</Text>
          <Text style={styles.instructionText}>• Requires iOS 16.1 or later</Text>
          <Text style={styles.instructionText}>• Live Activities appear in Dynamic Island</Text>
          <Text style={styles.instructionText}>• Data will update automatically in the background</Text>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subheaderText: {
    color: '#AAAAAA',
    fontSize: 14,
    marginTop: 5,
  },
  cardContainer: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  valueRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  valueLabel: {
    color: '#AAAAAA',
    fontSize: 16,
  },
  valueText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  controlsContainer: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  controlsTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#FF4D4D',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#555555',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  instructionContainer: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 20,
  },
  instructionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  instructionText: {
    color: '#CCCCCC',
    fontSize: 14,
    marginBottom: 5,
    lineHeight: 20,
  },
});