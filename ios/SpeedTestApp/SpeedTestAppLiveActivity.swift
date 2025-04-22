//
//  SpeedTestAppLiveActivity.swift
//  SpeedTestApp
//
//  Created by XCroft Solution on 4/22/25.
//

import ActivityKit
import WidgetKit
import SwiftUI

struct SpeedTestAppAttributes: ActivityAttributes {
    public struct ContentState: Codable, Hashable {
        // Dynamic stateful properties about your activity go here!
        var emoji: String
    }

    // Fixed non-changing properties about your activity go here!
    var name: String
}

struct SpeedTestAppLiveActivity: Widget {
    var body: some WidgetConfiguration {
        ActivityConfiguration(for: SpeedTestAppAttributes.self) { context in
            // Lock screen/banner UI goes here
            VStack {
                Text("Hello \(context.state.emoji)")
            }
            .activityBackgroundTint(Color.cyan)
            .activitySystemActionForegroundColor(Color.black)

        } dynamicIsland: { context in
            DynamicIsland {
                // Expanded UI goes here.  Compose the expanded UI through
                // various regions, like leading/trailing/center/bottom
                DynamicIslandExpandedRegion(.leading) {
                    Text("Leading")
                }
                DynamicIslandExpandedRegion(.trailing) {
                    Text("Trailing")
                }
                DynamicIslandExpandedRegion(.bottom) {
                    Text("Bottom \(context.state.emoji)")
                    // more content
                }
            } compactLeading: {
                Text("L")
            } compactTrailing: {
                Text("T \(context.state.emoji)")
            } minimal: {
                Text(context.state.emoji)
            }
            .widgetURL(URL(string: "http://www.apple.com"))
            .keylineTint(Color.red)
        }
    }
}

extension SpeedTestAppAttributes {
    fileprivate static var preview: SpeedTestAppAttributes {
        SpeedTestAppAttributes(name: "World")
    }
}

extension SpeedTestAppAttributes.ContentState {
    fileprivate static var smiley: SpeedTestAppAttributes.ContentState {
        SpeedTestAppAttributes.ContentState(emoji: "😀")
     }
     
     fileprivate static var starEyes: SpeedTestAppAttributes.ContentState {
         SpeedTestAppAttributes.ContentState(emoji: "🤩")
     }
}

#Preview("Notification", as: .content, using: SpeedTestAppAttributes.preview) {
   SpeedTestAppLiveActivity()
} contentStates: {
    SpeedTestAppAttributes.ContentState.smiley
    SpeedTestAppAttributes.ContentState.starEyes
}
