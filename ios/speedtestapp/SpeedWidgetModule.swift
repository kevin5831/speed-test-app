import Foundation
import React

// This module exposes native methods to JavaScript
@objc(SpeedWidgetModule)
class SpeedWidgetModule: NSObject {
    
    // Method to update widget data from React Native
    @objc func updateWidgetData(_ speed: NSNumber, distance: NSNumber, speedLimit: NSNumber) {
        SpeedDataManager.shared.saveSpeedData(
            speed: speed.intValue,
            distance: distance.intValue,
            speedLimit: speedLimit.intValue
        )
    }
    
    // Method to toggle widget visibility (if your widget supports this)
    @objc func toggleWidget(_ visible: Bool) {
        // In iOS, widgets are always visible once added
        // This method could be used to show/hide content within the widget
        UserDefaults(suiteName: "group.com.yourcompany.speedapp")?.set(visible, forKey: "widgetVisible")
        UserDefaults(suiteName: "group.com.yourcompany.speedapp")?.synchronize()
        WidgetCenter.shared.reloadAllTimelines()
    }
    
    // Required for React Native modules
    @objc static func requiresMainQueueSetup() -> Bool {
        return false
    }
}