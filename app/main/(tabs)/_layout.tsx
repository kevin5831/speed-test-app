import { Stack, Tabs } from 'expo-router';
import React, { useState } from 'react';
import { View, Platform, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Import custom SVG icon components
import { SpeedIcon } from '@/components/icon/speed';
import { AlarmIcon } from '@/components/icon/alarm';
import { EyeIcon } from '@/components/icon/eye';
import { UserIcon } from '@/components/icon/user';
import { VoiceIcon } from '@/components/icon/voice';

export default function TabLayout() {
  // Track if eye button was pressed
  const [eyePressed, setEyePressed] = useState(false);
  
  // Function to handle the eye button press
  const handleEyePress = () => {
    setEyePressed(!eyePressed);
    
    // Show alert when button is pressed (just for demonstration)
    Alert.alert(
      'Eye Button Pressed', 
      'This button doesn\'t navigate to any screen.',
      [{ text: 'OK', onPress: () => {
        console.log('OK Pressed');
        // Reset the pressed state after a short delay
        setTimeout(() => setEyePressed(false), 200);
      }}]
    );
  };

  // Create a custom tab bar
  function CustomTabBar({ state, descriptors, navigation }) {
    return (
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          // Get the component for the route
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel || options.title || route.name;
          const isFocused = state.index === index;

          // Don't render a tab for the middle position (eye button)
          if (index === 1) {
            return (
              <TouchableOpacity
                key="eye-button"
                style={styles.tabButton}
                onPress={handleEyePress}
                accessibilityRole="button"
                accessibilityState={eyePressed ? { selected: true } : {}}
                accessibilityLabel="Eye button"
              >
                <EyeIcon focused={eyePressed} />
              </TouchableOpacity>
            );
          }

          // Skip the dummy tab if needed
          if (route.name === 'dummy') {
            return null;
          }

          // Calculate the actual index to account for the eye button
          const actualIndex = index > 1 ? index - 1 : index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          // Render the icons based on the tab
          let icon;
          switch (actualIndex) {
            case 0:
              icon = <AlarmIcon focused={isFocused} />;
              break;
            case 1:
              icon = <SpeedIcon focused={isFocused} />;
              break;
            case 2:
              icon = <VoiceIcon focused={isFocused} />;
              break;
            case 3:
              icon = <UserIcon focused={isFocused} />;
              break;
            default:
              icon = null;
          }

          return (
            <TouchableOpacity
              key={route.key}
              style={styles.tabButton}
              onPress={onPress}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={`${label} tab`}
            >
              {icon}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
        tabBar={props => <CustomTabBar {...props} />}
      >
        <Tabs.Screen
          name="alarm"
          options={{ title: "Alarm" }}
        />
        <Tabs.Screen
          name="dummy"
          options={{ title: "Dummy" }}
        />
        <Tabs.Screen
          name="speed"
          options={{ title: "Speed" }}
        />
        <Tabs.Screen
          name="voice"
          options={{ title: "Voice" }}
        />
        <Tabs.Screen
          name="user"
          options={{ title: "User" }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#121212',
    borderTopWidth: 0,
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});