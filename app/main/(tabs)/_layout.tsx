import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { Platform} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';

// Import custom SVG icon components
import { SpeedIcon } from '@/components/icon/speed';
import { AlarmIcon } from '@/components/icon/alarm';
import { EyeIcon } from '@/components/icon/eye';
import { UserIcon } from '@/components/icon/user';
import { VoiceIcon } from '@/components/icon/voice';
export default function TabLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#FF4D4D', 
          tabBarInactiveTintColor: '#777777', 
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarShowLabel: false,
          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
              backgroundColor: '#121212', 
              borderTopWidth: 0, 
            },
            default: {
              backgroundColor: '#121212', 
              borderTopWidth: 0, 
            },
          }),
        }}>
        <Tabs.Screen
          name="alarm"
          options={{
            tabBarIcon: ({ focused }) => <AlarmIcon focused={focused} />,
          }}
        />
        <Tabs.Screen
          name="eye"
          options={{
            tabBarIcon: ({ focused }) => <EyeIcon focused={focused} />,
          }}
        />
        <Tabs.Screen
          name="speed"
          options={{
            tabBarIcon: ({ focused }) => <SpeedIcon focused={focused} />,
          }}
        />
        <Tabs.Screen
          name="voice"
          options={{
            tabBarIcon: ({ focused }) => <VoiceIcon focused={focused} />,
          }}
        />
        <Tabs.Screen
          name="user"
          options={{
            tabBarIcon: ({ focused }) => <UserIcon focused={focused} />,
          }}
        />
      </Tabs>
    </>
  );
}