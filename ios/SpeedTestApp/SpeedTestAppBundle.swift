//
//  SpeedTestAppBundle.swift
//  SpeedTestApp
//
//  Created by XCroft Solution on 4/22/25.
//

import WidgetKit
import SwiftUI

@main
struct SpeedTestAppBundle: WidgetBundle {
    var body: some Widget {
        SpeedTestApp()
        SpeedTestAppControl()
        SpeedTestAppLiveActivity()
    }
}
