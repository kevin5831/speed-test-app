import { NativeModules, Platform } from 'react-native';

// Get the native module
const { SpeedActivityManager } = NativeModules;

// Create a JavaScript interface with fallbacks for Android
const SpeedActivity = {
  startActivity: (speed, distance, speedLimit) => {
    return new Promise((resolve, reject) => {
      if (Platform.OS === 'ios' && SpeedActivityManager) {
        SpeedActivityManager.startActivity(speed, distance, speedLimit, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      } else {
        console.log('SpeedActivityManager is only available on iOS');
        reject('SpeedActivityManager is only available on iOS');
      }
    });
  },
  
  updateActivity: (speed, distance, speedLimit) => {
    return new Promise((resolve, reject) => {
      if (Platform.OS === 'ios' && SpeedActivityManager) {
        SpeedActivityManager.updateActivity(speed, distance, speedLimit, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      } else {
        console.log('SpeedActivityManager is only available on iOS');
        reject('SpeedActivityManager is only available on iOS');
      }
    });
  },
  
  stopActivity: () => {
    return new Promise((resolve, reject) => {
      if (Platform.OS === 'ios' && SpeedActivityManager) {
        SpeedActivityManager.stopActivity((error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      } else {
        console.log('SpeedActivityManager is only available on iOS');
        reject('SpeedActivityManager is only available on iOS');
      }
    });
  }
};

export default SpeedActivity;