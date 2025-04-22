import SwiftUI

@objc(SpeedTestApp)
class SpeedTestAppModule: NSObject {
  
  private var content: ActivityContent<SpeedTestAppAttributes.ContentState>?

  @objc(startActivity)
  func startActivity() {
    do {
      if #available(iOS 16.1, *) {
        let liveActAttributes = SpeedTestAppAttributes(name: "test")
        let liveActContentState = SpeedTestAppAttributes.ContentState(emoji: "")
        content = ActivityContent(state: liveActContentState, staleDate: nil, relevanceScore: 1.0)
        if let content{
          try Activity.request(attributes: liveActAttributes , content: content, pushType: nil)
        }
      }
    } catch {
      print("Error")
    }
  }

  @objc(endActivity)
  func endActivity() {
    Task {
      for activity in Activity<SpeedTestAppAttributes>.activities {
        await activity.end(content, dismissalPolicy: .default)
      }
    }
  }
}
