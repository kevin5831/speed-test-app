//
//  SpeedLiveActivity.swift
//  Speed
//
//  Created by XCroft Solution on 4/22/25.
//

import ActivityKit
import WidgetKit
import SwiftUI

struct SpeedAttributes: ActivityAttributes {
    public struct ContentState: Codable, Hashable {
        // Dynamic stateful properties about your activity go here!
        var emoji: String
    }

    // Fixed non-changing properties about your activity go here!
    var name: String
}

struct SpeedLiveActivity: Widget {
    var body: some WidgetConfiguration {
        ActivityConfiguration(for: SpeedAttributes.self) { context in
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

extension SpeedAttributes {
    fileprivate static var preview: SpeedAttributes {
        SpeedAttributes(name: "World")
    }
}

extension SpeedAttributes.ContentState {
    fileprivate static var smiley: SpeedAttributes.ContentState {
        SpeedAttributes.ContentState(emoji: "😀")
     }
     
     fileprivate static var starEyes: SpeedAttributes.ContentState {
         SpeedAttributes.ContentState(emoji: "🤩")
     }
}

#Preview("Notification", as: .content, using: SpeedAttributes.preview) {
   SpeedLiveActivity()
} contentStates: {
    SpeedAttributes.ContentState.smiley
    SpeedAttributes.ContentState.starEyes
}
