import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform, TextInput } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ActivityKit } from 'react-native-activitykit';

export default function EyeScreen() {
  const [isLiveActivity, setIsLiveActivity] = useState(false);
  const [activityId, setActivityId] = useState(null);
  const [speed, setSpeed] = useState(60);
  const [speedLimit, setSpeedLimit] = useState(50);
  const [distance, setDistance] = useState(12);
  const [updateInterval, setUpdateInterval] = useState(null);

  // Function to start the live activity
  const startLiveActivity = async () => {
    if (Platform.OS === 'ios') {
      try {
        // Start a new live activity with speed metrics
        const id = await ActivityKit.startActivity({
          attributes: {
            name: "Speed Monitor",
            status: speed > speedLimit ? "Over Limit" : "Within Limit"
          },
          contentState: {
            speed: speed,
            speedLimit: speedLimit,
            distance: distance,
            overSpeedLimit: speed > speedLimit
          }
        });
        
        setActivityId(id);
        setIsLiveActivity(true);
        console.log('Live activity started with ID: ', id);
        
        // Set up interval to simulate speed changes
        const interval = setInterval(() => {
          // Simulate random speed fluctuations
          const newSpeed = Math.max(0, Math.min(150, speed + (Math.random() * 10 - 5)));
          setSpeed(Math.round(newSpeed));
          
          // Update the live activity with new speed
          updateLiveActivityWithCurrentValues(id, Math.round(newSpeed), speedLimit, distance);
        }, 3000);
        
        setUpdateInterval(interval);
      } catch (error) {
        console.error('Failed to start live activity:', error);
      }
    }
  };

  // Function to update the live activity with current values
  const updateLiveActivityWithCurrentValues = async (id, currentSpeed, currentSpeedLimit, currentDistance) => {
    if (Platform.OS === 'ios' && id) {
      try {
        await ActivityKit.updateActivity(id, {
          contentState: {
            speed: currentSpeed,
            speedLimit: currentSpeedLimit,
            distance: currentDistance,
            overSpeedLimit: currentSpeed > currentSpeedLimit
          }
        });
        console.log('Live activity updated with speed: ', currentSpeed);
      } catch (error) {
        console.error('Failed to update live activity:', error);
      }
    }
  };

  // Function to update the live activity with manual values
  const updateLiveActivity = async () => {
    if (Platform.OS === 'ios' && activityId) {
      try {
        await ActivityKit.updateActivity(activityId, {
          contentState: {
            speed: speed,
            speedLimit: speedLimit,
            distance: distance,
            overSpeedLimit: speed > speedLimit
          }
        });
        console.log('Live activity updated manually');
      } catch (error) {
        console.error('Failed to update live activity:', error);
      }
    }
  };

  // Function to end the live activity
  const endLiveActivity = async () => {
    if (Platform.OS === 'ios' && activityId) {
      try {
        // Clear the update interval
        if (updateInterval) {
          clearInterval(updateInterval);
          setUpdateInterval(null);
        }
        
        await ActivityKit.endActivity(activityId);
        setIsLiveActivity(false);
        setActivityId(null);
        console.log('Live activity ended');
      } catch (error) {
        console.error('Failed to end live activity:', error);
      }
    }
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (updateInterval) {
        clearInterval(updateInterval);
      }
      if (isLiveActivity && activityId) {
        endLiveActivity();
      }
    };
  }, [isLiveActivity, activityId, updateInterval]);

  return (
    <ThemedView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.mainContent}>
          <Text style={styles.title}>Speed Monitor</Text>
          
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Current Status</Text>
            <Text style={styles.text}>
              {isLiveActivity 
                ? "Dynamic Island is active - showing live speed data" 
                : "Dynamic Island is inactive - tap Start to monitor speed"}
            </Text>
          </View>
          
          <View style={styles.metricsContainer}>
            <View style={styles.metricRow}>
              <Text style={styles.metricLabel}>Current Speed:</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, speed > speedLimit ? styles.speedWarning : null]}
                  value={speed.toString()}
                  onChangeText={(text) => setSpeed(parseInt(text) || 0)}
                  keyboardType="number-pad"
                  editable={!isLiveActivity}
                />
                <Text style={styles.unitText}>km/h</Text>
              </View>
            </View>
            
            <View style={styles.metricRow}>
              <Text style={styles.metricLabel}>Speed Limit:</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  value={speedLimit.toString()}
                  onChangeText={(text) => setSpeedLimit(parseInt(text) || 0)}
                  keyboardType="number-pad"
                  editable={!isLiveActivity}
                />
                <Text style={styles.unitText}>km/h</Text>
              </View>
            </View>
            
            <View style={styles.metricRow}>
              <Text style={styles.metricLabel}>Distance:</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  value={distance.toString()}
                  onChangeText={(text) => setDistance(parseInt(text) || 0)}
                  keyboardType="number-pad"
                  editable={!isLiveActivity}
                />
                <Text style={styles.unitText}>km</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.statusContainer}>
            <Text style={[styles.statusText, speed > speedLimit ? styles.statusWarning : styles.statusOk]}>
              {speed > speedLimit ? 'OVER SPEED LIMIT' : 'WITHIN SPEED LIMIT'}
            </Text>
          </View>
          
          <View style={styles.buttonContainer}>
            {!isLiveActivity ? (
              <TouchableOpacity 
                style={[styles.button, styles.startButton]} 
                onPress={startLiveActivity}
              >
                <Text style={styles.buttonText}>Start Speed Monitoring</Text>
              </TouchableOpacity>
            ) : (
              <>
                <TouchableOpacity 
                  style={[styles.button, styles.updateButton]} 
                  onPress={updateLiveActivity}
                >
                  <Text style={styles.buttonText}>Update Speed Data</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={[styles.button, styles.endButton]} 
                  onPress={endLiveActivity}
                >
                  <Text style={styles.buttonText}>End Speed Monitoring</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
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
    alignItems: 'center',
  },
  mainContent: {
    width: '100%',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 6,
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor: '#1a171f',
    padding: 20,
    borderRadius: 10,
    marginVertical: 15,
    width: '100%',
  },
  infoTitle: {
    color: '#FF4D4D',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  metricsContainer: {
    backgroundColor: '#1a171f',
    padding: 20,
    borderRadius: 10,
    marginVertical: 15,
    width: '100%',
  },
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  metricLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    width: '40%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '55%',
  },
  input: {
    backgroundColor: '#2a2a2a',
    color: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
    width: '70%',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  speedWarning: {
    backgroundColor: '#4a1919',
    color: '#FF4D4D',
  },
  unitText: {
    color: '#777777',
    fontSize: 14,
    marginLeft: 8,
  },
  statusContainer: {
    backgroundColor: '#1a171f',
    padding: 15,
    borderRadius: 10,
    marginVertical: 15,
    width: '100%',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statusWarning: {
    color: '#FF4D4D',
  },
  statusOk: {
    color: '#4caf50',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: '#3f51b5',
  },
  updateButton: {
    backgroundColor: '#4caf50',
    marginBottom: 15,
  },
  endButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});