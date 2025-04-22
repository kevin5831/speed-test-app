import ActivityKit
import SwiftUI

struct SpeedActivityAttributes: ActivityAttributes {
    public struct ContentState: Codable, Hashable {
        var speed: Int
        var distance: Int
        var speedLimit: Int
    }
    
    var tripName: String
}