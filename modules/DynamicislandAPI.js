import { NativeModules, Platform } from 'react-native';

const { DynamicIslandModule } = NativeModules;

class DynamicIslandAPI {
  /**
   * Check if Dynamic Island is available on the device
   */
  static isAvailable() {
    return Platform.OS === 'ios' && parseInt(Platform.Version, 10) >= 16.1;
  }
  
  /**
   * Activate the Dynamic Island with speed data
   */
  static async activateDynamicIsland(params = {}) {
    if (!this.isAvailable()) {
      console.warn('Dynamic Island is not available on this device');
      return { success: false, message: 'Dynamic Island not available' };
    }
    
    try {
      return await DynamicIslandModule.activateDynamicIsland(params);
    } catch (error) {
      console.error('Failed to activate Dynamic Island:', error);
      return { success: false, message: error.message };
    }
  }
  
  /**
   * Update the Dynamic Island with new data
   */
  static async updateDynamicIsland(params = {}) {
    if (!this.isAvailable()) {
      return { success: false, message: 'Dynamic Island not available' };
    }
    
    try {
      return await DynamicIslandModule.updateDynamicIsland(params);
    } catch (error) {
      console.error('Failed to update Dynamic Island:', error);
      return { success: false, message: error.message };
    }
  }
  
  /**
   * Deactivate the Dynamic Island
   */
  static async deactivateDynamicIsland() {
    if (!this.isAvailable()) {
      return { success: false, message: 'Dynamic Island not available' };
    }
    
    try {
      return await DynamicIslandModule.deactivateDynamicIsland();
    } catch (error) {
      console.error('Failed to deactivate Dynamic Island:', error);
      return { success: false, message: error.message };
    }
  }
}

export default DynamicIslandAPI;