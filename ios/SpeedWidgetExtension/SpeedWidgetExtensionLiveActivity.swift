//
//  SpeedWidgetExtensionLiveActivity.swift
//  SpeedWidgetExtension
//
//  Created by XCroft Solution on 4/22/25.
//
import WidgetKit
import SwiftUI
import ActivityKit

struct SpeedAttributes: ActivityAttributes {
    public struct ContentState: Codable, Hashable {
        var speed: Int
        var distance: Double
    }
    
    var name: String
}

struct SpeedWidgetExtensionLiveActivity: Widget {
    var body: some WidgetConfiguration {
        ActivityConfiguration(for: SpeedAttributes.self) { context in
            // Lock screen/banner UI
            VStack {
                HStack {
                    Text("\(context.state.speed)")
                        .font(.title)
                        .foregroundColor(.white)
                    Text("km/h")
                        .font(.caption)
                        .foregroundColor(.gray)
                }
                
                Text("\(String(format: "%.1f", context.state.distance)) km")
                    .font(.caption)
                    .foregroundColor(.white)
            }
            .padding()
            .activityBackgroundTint(Color.black.opacity(0.8))
            
        } dynamicIsland: { context in
            DynamicIsland {
                // Expanded UI
                DynamicIslandExpandedRegion(.leading) {
                    Text("Speed")
                        .font(.caption)
                        .foregroundColor(.white)
                }
                DynamicIslandExpandedRegion(.trailing) {
                    Text("\(context.state.distance, specifier: "%.1f") km")
                        .font(.caption)
                        .foregroundColor(.white)
                }
                DynamicIslandExpandedRegion(.center) {
                    Text("\(context.state.speed)")
                        .font(.title)
                        .foregroundColor(.white)
                    Text("km/h")
                        .font(.caption)
                        .foregroundColor(.gray)
                }
                DynamicIslandExpandedRegion(.bottom) {
                    Text("Tap to return to app")
                        .font(.caption)
                        .foregroundColor(.gray)
                }
            } compactLeading: {
                Image(systemName: "speedometer")
                    .foregroundColor(.white)
            } compactTrailing: {
                Text("\(context.state.speed)")
                    .font(.caption)
                    .foregroundColor(.white)
            } minimal: {
                Image(systemName: "speedometer")
                    .foregroundColor(.white)
            }
        }
    }
}
