//
//  SpeedBundle.swift
//  Speed
//
//  Created by XCroft Solution on 4/22/25.
//

import WidgetKit
import SwiftUI

@main
struct SpeedBundle: WidgetBundle {
    var body: some Widget {
        Speed()
        SpeedControl()
        SpeedLiveActivity()
    }
}
