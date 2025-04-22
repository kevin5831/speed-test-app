import Foundation
import WidgetKit

// Class to manage speed data and share it with the widget
class SpeedDataManager {
    static let shared = SpeedDataManager()
    
    // Use an app group to share data between your app and widget
    // You'll need to set up an app group in your Apple Developer account
    let appGroupUserDefaults = UserDefaults(suiteName: "group.com.yourcompany.speedapp")
    
    private init() {}
    
    // Save speed data to shared UserDefaults
    func saveSpeedData(speed: Int, distance: Int, speedLimit: Int) {
        appGroupUserDefaults?.set(speed, forKey: "speed")
        appGroupUserDefaults?.set(distance, forKey: "distance")
        appGroupUserDefaults?.set(speedLimit, forKey: "speedLimit")
        appGroupUserDefaults?.synchronize()
        
        // Refresh all widgets
        WidgetCenter.shared.reloadAllTimelines()
    }
    
    // Get saved speed data
    func getSpeedData() -> (speed: Int, distance: Int, speedLimit: Int) {
        let speed = appGroupUserDefaults?.integer(forKey: "speed") ?? 0
        let distance = appGroupUserDefaults?.integer(forKey: "distance") ?? 0
        let speedLimit = appGroupUserDefaults?.integer(forKey: "speedLimit") ?? 0
        
        return (speed, distance, speedLimit)
    }
}