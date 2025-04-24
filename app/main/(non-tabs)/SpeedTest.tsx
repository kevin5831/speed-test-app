// In your speed.tsx file
import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Platform } from "react-native";
import { ActivityKit } from "react-native-activitykit";

export default function SpeedTestScreen() {
  const [speed, setSpeed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [activityId, setActivityId] = useState(null);

  // Function to start speed test
  const startSpeedTest = async () => {
    setIsRunning(true);
    // Your speed test logic here
    simulateSpeedTest();

    // Start Live Activity if on iOS
    if (Platform.OS === "ios") {
      try {
        const id = await ActivityKit.startActivity({
          activityName: "SpeedTest",
          contentState: {
            speed: speed,
            status: "Running",
          },
        });
        setActivityId(id);
      } catch (error) {
        console.error("Failed to start activity:", error);
      }
    }
  };

  // Function to stop speed test
  const stopSpeedTest = async () => {
    setIsRunning(false);

    // End Live Activity if it exists
    if (activityId && Platform.OS === "ios") {
      try {
        await ActivityKit.endActivity(activityId);
        setActivityId(null);
      } catch (error) {
        console.error("Failed to end activity:", error);
      }
    }
  };

  // Function to enter background mode with active widget
  const enterBackgroundWithWidget = async () => {
    if (!activityId && Platform.OS === "ios") {
      // Start activity if not already running
      const id = await ActivityKit.startActivity({
        activityName: "SpeedTest",
        contentState: {
          speed: speed,
          status: "Running",
        },
      });
      setActivityId(id);
    }

    // The Live Activity will continue in the background
    // You can trigger this when your eye button is pressed
  };

  // Simulate speed test with changing values
  const simulateSpeedTest = () => {
    const interval = setInterval(() => {
      // Generate random speed between 10 and 150 Mbps
      const newSpeed = Math.floor(Math.random() * 140) + 10;
      setSpeed(newSpeed);

      // Update the Live Activity with new speed
      if (activityId && Platform.OS === "ios") {
        ActivityKit.updateActivity(activityId, {
          speed: newSpeed,
          status: "Running",
        });
      }
    }, 1000);

    // Cleanup interval after 10 seconds
    setTimeout(() => {
      clearInterval(interval);
      setIsRunning(false);

      // Update Live Activity with "Completed" status
      if (activityId && Platform.OS === "ios") {
        ActivityKit.updateActivity(activityId, {
          speed: speed,
          status: "Completed",
        });
      }
    }, 10000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.speedText}>{speed} Mbps</Text>

      {!isRunning ? (
        <Button title="Start Speed Test" onPress={startSpeedTest} />
      ) : (
        <Button title="Stop Speed Test" onPress={stopSpeedTest} />
      )}

      {Platform.OS === "ios" && (
        <Button
          title="Show in Widget (Background)"
          onPress={enterBackgroundWithWidget}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  speedText: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 30,
  },
});
