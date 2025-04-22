#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(SpeedWidgetModule, NSObject)

RCT_EXTERN_METHOD(updateWidgetData:(nonnull NSNumber *)speed
                  distance:(nonnull NSNumber *)distance
                  speedLimit:(nonnull NSNumber *)speedLimit)

RCT_EXTERN_METHOD(toggleWidget:(BOOL)visible)

@end