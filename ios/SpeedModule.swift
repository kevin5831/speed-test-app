//
//  SpeedModule.swift
//  speedtestapp
//
//  Created by XCroft Solution on 4/22/25.
//

import SwiftUI

@objc(SpeedActivity)
class SpeedModule: NSObject {
  
  private var content: ActivityContent<Speed.ContentState>?

  @objc(startActivity)
  func startActivity() {
    do {
      if #available(iOS 16.1, *) {
        let liveActAttributes = Speed(name: "test")
        let liveActContentState = Speed.ContentState(emoji: "")
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
      for activity in Activity<Speed>.activities {
        await activity.end(content, dismissalPolicy: .default)
      }
    }
  }
}
