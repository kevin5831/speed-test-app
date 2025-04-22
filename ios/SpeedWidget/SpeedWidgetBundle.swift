//
//  SpeedWidgetBundle.swift
//  SpeedWidget
//
//  Created by XCroft Solution on 4/21/25.
//

import WidgetKit
import SwiftUI

@main
struct SpeedWidgetBundle: WidgetBundle {
    var body: some Widget {
        SpeedWidget()
        SpeedWidgetControl()
        SpeedWidgetLiveActivity()
    }
}
