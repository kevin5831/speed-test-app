#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(LiveActivity, NSObject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
