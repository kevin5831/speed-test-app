//
//  speedTest.m
//  speedtestapp
//
//  Created by XCroft Solution on 4/22/25.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(SpeedModule, NSObject)

RCT_EXTERN_METHOD(startActivity)
RCT_EXTERN_METHOD(endActivity)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}
  
@end
