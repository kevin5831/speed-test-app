import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Switch, Platform } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import SpeedWidget from '@/components/SpeedWidgetModule'; // Import the bridge

export default function EyeScreen() {
  // State for the widget values - these will come from your API in the future
  const [speed, setSpeed] = useState(100);
  const [distance, setDistance] = useState(15);
  const [speedLimit, setSpeedLimit] = useState(60);
  const [isWidgetVisible, setIsWidgetVisible] = useState(true);

  // Function to toggle the widget
  const toggleWidget = () => {
    const newVisibility = !isWidgetVisible;
    setIsWidgetVisible(newVisibility);
    
    // Call the native module to toggle widget visibility
    if (Platform.OS === 'ios') {
      SpeedWidget.toggleWidget(newVisibility);
    }
  };

  // Function to update widget data
  const updateWidgetData = (newSpeed, newDistance, newSpeedLimit) => {
    setSpeed(newSpeed);
    setDistance(newDistance);
    setSpeedLimit(newSpeedLimit);
    
    // Update the native widget data
    if (Platform.OS === 'ios') {
      SpeedWidget.updateWidgetData(newSpeed, newDistance, newSpeedLimit);
    }
  };

  // This effect runs when values change
  useEffect(() => {
    if (Platform.OS === 'ios') {
      SpeedWidget.updateWidgetData(speed, distance, speedLimit);
    }
  }, [speed, distance, speedLimit]);

  // This effect runs once when the screen mounts
  useEffect(() => {
    // Initialize widget with current values
    if (Platform.OS === 'ios') {
      SpeedWidget.updateWidgetData(speed, distance, speedLimit);
      SpeedWidget.toggleWidget(isWidgetVisible);
    }
    
    // Mock API call - this is where you would fetch data from your backend
    const fetchDataFromAPI = () => {
      // Simulating API response
      setTimeout(() => {
        // These values would come from your API
        updateWidgetData(100, 15, 60);
      }, 500);
    };
    
    fetchDataFromAPI();
    
    // Optional: Set up an interval to periodically fetch new data
    const intervalId = setInterval(() => {
      // In a real app, you would call your API here
      // For mock purposes, we'll just slightly change the values
      const newSpeed = Math.floor(speed + (Math.random() * 10 - 5));
      const newDistance = Math.max(1, Math.floor(distance + (Math.random() * 2 - 1)));
      updateWidgetData(newSpeed, newDistance, speedLimit);
    }, 3000);
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <ThemedView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Speed Widget Controls</Text>
        </View>

        {/* Widget Switch */}
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Show Widget</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#FF4D4D' }}
            thumbColor={isWidgetVisible ? '#ffffff' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleWidget}
            value={isWidgetVisible}
          />
        </View>

        {/* Speed Control */}
        <View style={styles.controlContainer}>
          <Text style={styles.controlText}>Speed: {speed} km/h</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => updateWidgetData(Math.max(0, speed - 10), distance, speedLimit)}
            >
              <Text style={styles.buttonText}>-10</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => updateWidgetData(speed + 10, distance, speedLimit)}
            >
              <Text style={styles.buttonText}>+10</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Distance Control */}
        <View style={styles.controlContainer}>
          <Text style={styles.controlText}>Distance: {distance} 公尺</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => updateWidgetData(speed, Math.max(1, distance - 1), speedLimit)}
            >
              <Text style={styles.buttonText}>-1</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => updateWidgetData(speed, distance + 1, speedLimit)}
            >
              <Text style={styles.buttonText}>+1</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Speed Limit Control */}
        <View style={styles.controlContainer}>
          <Text style={styles.controlText}>Speed Limit: {speedLimit} km/h</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => updateWidgetData(speed, distance, Math.max(10, speedLimit - 10))}
            >
              <Text style={styles.buttonText}>-10</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => updateWidgetData(speed, distance, speedLimit + 10)}
            >
              <Text style={styles.buttonText}>+10</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Instructions */}
        <View style={styles.instructionContainer}>
          <Text style={styles.instructionTitle}>Widget Instructions:</Text>
          <Text style={styles.instructionText}>• Add the widget to your home screen from the widget gallery</Text>
          <Text style={styles.instructionText}>• Use this screen to control the widget's data</Text>
          <Text style={styles.instructionText}>• The widget will update in real-time with your changes</Text>
          <Text style={styles.instructionText}>• The widget will continue to show even when the app is closed</Text>
          <Text style={styles.instructionText}>• In production, data will come from your backend API</Text>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#222222',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  switchText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  controlContainer: {
    backgroundColor: '#222222',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  controlText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#FF4D4D',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  instructionContainer: {
    backgroundColor: '#222222',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  instructionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  instructionText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 5,
  },
});