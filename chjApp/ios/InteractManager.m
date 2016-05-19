//
//  InteractManager.m
//  chjApp
//
//  Created by 张政 on 16/4/10.
//  Copyright © 2016年 Facebook. All rights reserved.
//
#import "InteractManager.h"
#import "UIKit/UIKit.h"

@implementation InteractManager 

RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(addEvent:(int)name location:(NSString *)str)
{
  //RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
  switch (name) {
    case 1:
    {
      
      RCTLogInfo(@"Tel to: %@", str);
      [[UIApplication sharedApplication] openURL:[NSURL URLWithString:@"tel://02134637000"]];
    }
      break;
    case 2:
    {
      RCTLogInfo(@"regist push");
      if ([[[UIDevice currentDevice] systemVersion] floatValue] >= 8.0)
      {
        [[UIApplication sharedApplication] registerUserNotificationSettings:[UIUserNotificationSettings
                                                                             settingsForTypes:(UIUserNotificationTypeSound | UIUserNotificationTypeAlert | UIUserNotificationTypeBadge)
                                                                             categories:nil]];
        
        
        [[UIApplication sharedApplication] registerForRemoteNotifications];
      }
      else
      {
        //这里还是原来的代码
        [[UIApplication sharedApplication] registerForRemoteNotificationTypes:
         (UIUserNotificationTypeBadge | UIUserNotificationTypeSound | UIUserNotificationTypeAlert)];
      }
      
    }
      break;
    default:
      RCTLogInfo(@"default for: %@", str);
      break;
  }
}
@end