//
//  DynamicIslandModule.swift
//  speedtestapp
//
//  Created by XCroft Solution on 4/22/25.
//
import Foundation
import ActivityKit

// Make sure the SpeedAttributes struct matches exactly with the one in your widget extension
struct SpeedAttributes: ActivityAttributes {
    public struct ContentState: Codable, Hashable {
        var speed: Int
        var distance: Double
    }
    
    var name: String
}

@objc(DynamicIslandModule)
class DynamicIslandModule: NSObject {
    
    private var speedActivity: Activity<SpeedAttributes>? = nil
    
    @objc
    static func requiresMainQueueSetup() -> Bool {
        return false
    }
    
    @objc(activateDynamicIsland:withResolver:withRejecter:)
    func activateDynamicIsland(params: NSDictionary, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        if #available(iOS 16.1, *) {
            if Activity<SpeedAttributes>.activities.count > 0 {
                // Already active
                resolve(["success": true, "message": "Dynamic Island already active"])
                return
            }
            
            let speed = params["speed"] as? Int ?? 0
            let distance = params["distance"] as? Double ?? 0.0
            
            let attributes = SpeedAttributes(name: "Speed Test")
            let initialState = SpeedAttributes.ContentState(
                speed: speed,
                distance: distance
            )
            
            do {
                speedActivity = try Activity.request(
                    attributes: attributes,
                    contentState: initialState,
                    pushType: nil
                )
                resolve(["success": true, "message": "Dynamic Island activated"])
            } catch {
                reject("ERROR", "Failed to activate Dynamic Island: \(error.localizedDescription)", error)
            }
        } else {
            reject("UNAVAILABLE", "Dynamic Island requires iOS 16.1 or later", nil)
        }
    }
    
    @objc(updateDynamicIsland:withResolver:withRejecter:)
    func updateDynamicIsland(params: NSDictionary, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        if #available(iOS 16.1, *) {
            let speed = params["speed"] as? Int ?? 0
            let distance = params["distance"] as? Double ?? 0.0
            
            let updatedState = SpeedAttributes.ContentState(
                speed: speed,
                distance: distance
            )
            
            Task {
                for activity in Activity<SpeedAttributes>.activities {
                    await activity.update(using: updatedState)
                }
                resolve(["success": true, "message": "Dynamic Island updated"])
            }
        } else {
            reject("UNAVAILABLE", "Dynamic Island requires iOS 16.1 or later", nil)
        }
    }
    
    @objc(deactivateDynamicIsland:withRejecter:)
    func deactivateDynamicIsland(resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        if #available(iOS 16.1, *) {
            Task {
                for activity in Activity<SpeedAttributes>.activities {
                    await activity.end(dismissalPolicy: .immediate)
                }
                speedActivity = nil
                resolve(["success": true, "message": "Dynamic Island deactivated"])
            }
        } else {
            reject("UNAVAILABLE", "Dynamic Island requires iOS 16.1 or later", nil)
        }
    }
}
