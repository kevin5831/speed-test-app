// components/ui/CustomTabBar.tsx
import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useRouter } from 'expo-router';
import { HapticTab } from '@/components/HapticTab';
import { EyeIcon } from '@/components/icon/eye';

export function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const [eyeActive, setEyeActive] = useState(false);
  const router = useRouter();

  const handleEyePress = () => {
    // Toggle the active state of eye button
    setEyeActive(!eyeActive);
    
    // Here you would trigger your widget display logic
    // For example, you could call a function to show/hide the widget
    console.log('Eye button pressed, would show widget here');
    
    // You could also emit an event that your speed screen listens for
    // or use a global state management solution like Context or Redux
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || options.title || route.name;
        const isFocused = state.index === index;

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

        return (
          <HapticTab
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tab}
          >
            {options.tabBarIcon ? options.tabBarIcon({ focused: isFocused, color: '', size: 0 }) : null}
          </HapticTab>
        );
      })}
      
      {/* Add the eye button */}
      <TouchableOpacity
        style={[styles.tab, styles.eyeTab]}
        onPress={handleEyePress}
        activeOpacity={0.7}
      >
        <EyeIcon focused={eyeActive} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#121212',
    height: 60,
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
    borderTopWidth: 0,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeTab: {
    // Additional styling for the eye tab if needed
  },
});