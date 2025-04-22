import { NativeModules, Platform } from 'react-native';

// Get the native module
const { SpeedWidgetModule } = NativeModules;

// Create a JavaScript interface with fallbacks for Android
const SpeedWidget = {
  updateWidgetData: (speed, distance, speedLimit) => {
    if (Platform.OS === 'ios' && SpeedWidgetModule) {
      SpeedWidgetModule.updateWidgetData(speed, distance, speedLimit);
    } else {
      console.log('SpeedWidgetModule is only available on iOS');
    }
  },
  
  toggleWidget: (visible) => {
    if (Platform.OS === 'ios' && SpeedWidgetModule) {
      SpeedWidgetModule.toggleWidget(visible);
    } else {
      console.log('SpeedWidgetModule is only available on iOS');
    }
  }
};

export default SpeedWidget;