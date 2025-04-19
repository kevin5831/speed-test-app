import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function NonTabsLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="ImgReport" 
        options={{ 
          title: "Image Report",
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#fff',
          presentation: 'card'
        }} 
      />
      <Stack.Screen 
        name="VoiceReport" 
        options={{ 
          title: "Voice Report",
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#fff',
          presentation: 'card'
        }} 
      />
    </Stack>
  );
}