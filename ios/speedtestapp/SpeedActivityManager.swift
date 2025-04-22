import Foundation
import ActivityKit
import React

@objc(SpeedActivityManager)
class SpeedActivityManager: NSObject {
    private var liveActivity: Activity<SpeedActivityAttributes>? = nil
    
    @objc func startActivity(_ speed: NSNumber, distance: NSNumber, speedLimit: NSNumber, callback: @escaping RCTResponseSenderBlock) {
        // Check if Live Activities are supported
        guard ActivityAuthorizationInfo().areActivitiesEnabled else {
            callback(["Live activities not supported", NSNull()])
            return
        }
        
        // Create initial content state
        let initialContentState = SpeedActivityAttributes.ContentState(
            speed: speed.intValue,
            distance: distance.intValue,
            speedLimit: speedLimit.intValue
        )
        
        // Create attributes
        let activityAttributes = SpeedActivityAttributes(tripName: "Current Trip")
        
        do {
            // Start the live activity
            liveActivity = try Activity.request(
                attributes: activityAttributes,
                contentState: initialContentState,
                pushType: nil
            )
            
            if let activity = liveActivity {
                callback([NSNull(), ["id": activity.id]])
            } else {
                callback(["Failed to start activity", NSNull()])
            }
        } catch {
            callback([error.localizedDescription, NSNull()])
        }
    }
    
    @objc func updateActivity(_ speed: NSNumber, distance: NSNumber, speedLimit: NSNumber, callback: @escaping RCTResponseSenderBlock) {
        guard let activity = liveActivity else {
            callback(["No active Live Activity to update", NSNull()])
            return
        }
        
        // Create updated content state
        let updatedContentState = SpeedActivityAttributes.ContentState(
            speed: speed.intValue,
            distance: distance.intValue,
            speedLimit: speedLimit.intValue
        )
        
        // Update activity
        Task {
            await activity.update(using: updatedContentState)
            callback([NSNull(), ["updated": true]])
        }
    }
    
    @objc func stopActivity(_ callback: @escaping RCTResponseSenderBlock) {
        guard let activity = liveActivity else {
            callback(["No active Live Activity to stop", NSNull()])
            return
        }
        
        // End activity
        Task {
            await activity.end(dismissalPolicy: .immediate)
            liveActivity = nil
            callback([NSNull(), ["stopped": true]])
        }
    }
    
    @objc static func requiresMainQueueSetup() -> Bool {
        return false
    }
}