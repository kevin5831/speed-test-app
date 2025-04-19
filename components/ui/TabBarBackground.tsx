import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

// Custom background component for the tab bar
export default function TabBarBackground() {
  // This is a simple component that renders the background color for the tab bar
  return (
    <View style={styles.background} />
  );
}

// Export this function to prevent "useBottomTabOverflow is not a function" error
// This is needed because some components might be trying to access this function
export const useBottomTabOverflow = () => {
  return { 
    enabled: false, 
    overflow: 'hidden' 
  };
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#121212', // Dark background color
  },
});