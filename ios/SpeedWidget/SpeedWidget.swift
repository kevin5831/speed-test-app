import WidgetKit
import SwiftUI
import Intents

// Structure to hold the speed data
struct SpeedData: TimelineEntry {
    let date: Date
    let speed: Int
    let distance: Int
    let speedLimit: Int
}

// Provider that supplies timeline entries for the widget
struct Provider: TimelineProvider {
    func placeholder(in context: Context) -> SpeedData {
        SpeedData(date: Date(), speed: 100, distance: 15, speedLimit: 60)
    }

    func getSnapshot(in context: Context, completion: @escaping (SpeedData) -> ()) {
        let entry = SpeedData(date: Date(), speed: 100, distance: 15, speedLimit: 60)
        completion(entry)
    }

    func getTimeline(in context: Context, completion: @escaping (Timeline<SpeedData>) -> ()) {
        var entries: [SpeedData] = []
        
        // Generate a timeline with several entries
        let currentDate = Date()
        for hourOffset in 0 ..< 5 {
            let entryDate = Calendar.current.date(byAdding: .hour, value: hourOffset, to: currentDate)!
            
            // In a real app, you would fetch these values from UserDefaults or a shared data source
            // For this example, we're using mock data
            let entry = SpeedData(
                date: entryDate,
                speed: 100 + hourOffset * 5,
                distance: 15,
                speedLimit: 60
            )
            entries.append(entry)
        }

        let timeline = Timeline(entries: entries, policy: .atEnd)
        completion(timeline)
    }
}

// The widget view
struct SpeedWidgetEntryView : View {
    var entry: Provider.Entry
    @Environment(\.widgetFamily) var family

    var body: some View {
        ZStack {
            Color(red: 0.1, green: 0.1, blue: 0.1)
                .edgesIgnoringSafeArea(.all)
            
            VStack(spacing: 10) {
                HStack {
                    // Speed limit icon
                    ZStack {
                        Circle()
                            .fill(Color.white)
                            .frame(width: 40, height: 40)
                        Circle()
                            .strokeBorder(Color.red, lineWidth: 2)
                            .frame(width: 40, height: 40)
                        Text("\(entry.speedLimit)")
                            .font(.system(size: 18, weight: .bold))
                            .foregroundColor(.black)
                    }
                    .frame(width: 40, height: 40)
                    
                    Spacer()
                    
                    // Current speed
                    VStack {
                        Text("\(entry.speed)")
                            .font(.system(size: 28, weight: .bold))
                            .foregroundColor(.white)
                        Text("Km/h")
                            .font(.system(size: 12))
                            .foregroundColor(.white)
                    }
                    
                    Spacer()
                    
                    // Distance button
                    ZStack {
                        RoundedRectangle(cornerRadius: 15)
                            .fill(Color.red)
                            .frame(width: 70, height: 30)
                        Text("\(entry.distance)公尺")
                            .font(.system(size: 12, weight: .bold))
                            .foregroundColor(.white)
                    }
                }
                .padding(.horizontal, 15)
            }
            .padding()
        }
    }
}

// Widget configuration
struct SpeedWidget: Widget {
    let kind: String = "SpeedWidget"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: Provider()) { entry in
            SpeedWidgetEntryView(entry: entry)
        }
        .configurationDisplayName("Speed Widget")
        .description("Displays current speed, distance, and speed limit.")
        .supportedFamilies([.systemSmall])
    }
}

// Preview for design time
struct SpeedWidget_Previews: PreviewProvider {
    static var previews: some View {
        SpeedWidgetEntryView(entry: SpeedData(date: Date(), speed: 100, distance: 15, speedLimit: 60))
            .previewContext(WidgetPreviewContext(family: .systemSmall))
    }
}
