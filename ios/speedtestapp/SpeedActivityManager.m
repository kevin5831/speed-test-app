#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(SpeedActivityManager, NSObject)

RCT_EXTERN_METHOD(startActivity:(nonnull NSNumber *)speed
                  distance:(nonnull NSNumber *)distance
                  speedLimit:(nonnull NSNumber *)speedLimit
                  callback:(RCTResponseSenderBlock)callback)

RCT_EXTERN_METHOD(updateActivity:(nonnull NSNumber *)speed
                  distance:(nonnull NSNumber *)distance
                  speedLimit:(nonnull NSNumber *)speedLimit
                  callback:(RCTResponseSenderBlock)callback)

RCT_EXTERN_METHOD(stopActivity:(RCTResponseSenderBlock)callback)

@end