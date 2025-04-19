import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';  
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function MainLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(non-tabs)"
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="(tabs)"
        options={{headerShown: false}}
      />
    </Stack>
  );
}