//
//  SpeedWidgetExtensionBundle.swift
//  SpeedWidgetExtension
//
//  Created by XCroft Solution on 4/22/25.
//

import WidgetKit
import SwiftUI

@main
struct SpeedWidgetExtensionBundle: WidgetBundle {
    var body: some Widget {
        SpeedWidgetExtension()
        SpeedWidgetExtensionControl()
        SpeedWidgetExtensionLiveActivity()
    }
}
