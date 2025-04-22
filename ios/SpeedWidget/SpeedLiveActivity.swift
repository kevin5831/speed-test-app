import ActivityKit
import SwiftUI
import WidgetKit

struct SpeedLiveActivity: Widget {
    var body: some WidgetConfiguration {
        ActivityConfiguration(for: SpeedActivityAttributes.self) { context in
            // Live Activity UI (compact for Dynamic Island)
            HStack {
                // Speed limit circle
                ZStack {
                    Circle()
                        .fill(Color.white)
                        .frame(width: 28, height: 28)
                    Circle()
                        .strokeBorder(Color.red, lineWidth: 2)
                        .frame(width: 28, height: 28)
                    Text("\(context.state.speedLimit)")
                        .font(.system(size: 14, weight: .bold))
                        .foregroundColor(.black)
                }
                
                Spacer()
                
                // Speed
                VStack(spacing: 0) {
                    Text("\(context.state.speed)")
                        .font(.system(size: 20, weight: .bold))
                        .foregroundColor(.white)
                    Text("km/h")
                        .font(.system(size: 10))
                        .foregroundColor(.white)
                }
                
                Spacer()
                
                // Distance
                Text("\(context.state.distance)公尺")
                    .font(.caption2)
                    .padding(5)
                    .background(Color.red)
                    .cornerRadius(8)
                    .foregroundColor(.white)
            }
            .padding(12)
            .activityBackgroundTint(Color.black.opacity(0.7))
            
        } dynamicIsland: { context in
            // Dynamic Island UI
            DynamicIsland {
                // Expanded UI
                DynamicIslandExpandedRegion(.leading) {
                    // Speed limit
                    ZStack {
                        Circle()
                            .fill(Color.white)
                            .frame(width: 40, height: 40)
                        Circle()
                            .strokeBorder(Color.red, lineWidth: 2)
                            .frame(width: 40, height: 40)
                        Text("\(context.state.speedLimit)")
                            .font(.system(size: 18, weight: .bold))
                            .foregroundColor(.black)
                    }
                }
                
                DynamicIslandExpandedRegion(.center) {
                    // Current speed
                    VStack(spacing: 2) {
                        Text("\(context.state.speed)")
                            .font(.system(size: 28, weight: .bold))
                            .foregroundColor(.white)
                        Text("Km/h")
                            .font(.system(size: 12))
                            .foregroundColor(.white)
                    }
                }
                
                DynamicIslandExpandedRegion(.trailing) {
                    // Distance
                    Text("\(context.state.distance)公尺")
                        .font(.caption)
                        .padding(8)
                        .background(Color.red)
                        .cornerRadius(10)
                        .foregroundColor(.white)
                }
            } compactLeading: {
                Text("\(context.state.speedLimit)")
                    .font(.caption2)
                    .padding(4)
                    .background(Circle().fill(Color.white))
                    .foregroundColor(.black)
            } compactTrailing: {
                Text("\(context.state.speed)")
                    .font(.caption2)
                    .foregroundColor(.white)
            } minimal: {
                Text("\(context.state.speed)")
                    .font(.caption2)
                    .foregroundColor(.white)
            }
        }
    }
}