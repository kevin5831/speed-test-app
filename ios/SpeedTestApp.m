#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(SpeedTestApp, NSObject)

RCT_EXTERN_METHOD(startActivity)
RCT_EXTERN_METHOD(endActivity)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}
  
@end