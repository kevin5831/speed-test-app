import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { RewardIcon } from "@/components/icon/reward";
import { MacButton } from "@/components/button/MacButton";  // Fixed import path
import { PictureButton } from "@/components/button/PictureButton";  // Fixed import path
import { CameraButton } from "@/components/button/CameraButton";  // Fixed import path
import { DisableButton } from "@/components/button/DisableButton";  // Fixed import path

interface NotificationButtonProps {
  mode?: boolean;
  setReward: (value: boolean) => void;
  setPicture: (value: boolean) => void;
  onCameraPress?: () => void; 
}

const NotificationButton: React.FC<NotificationButtonProps> = ({
  mode = true,
  setReward,
  setPicture,
  onCameraPress
}) => {
  return (
    <View style={styles.notificationButton}>
      {mode ? (
        <View>
          <View style={styles.camera}>
            <TouchableOpacity onPress={onCameraPress}>
              <CameraButton focused={false} />
            </TouchableOpacity>
          </View>
          <View style={styles.picture}>
            <TouchableOpacity 
              onPress={() => {
                setPicture(false)
                setReward(false)
              }}
            >
              <PictureButton focused={false} />
            </TouchableOpacity>
          </View>
          <View style={styles.reward}>
            <TouchableOpacity style={styles.mac}>
              <MacButton focused={false} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setReward(false)}>
              <DisableButton focused={false} />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity onPress={() => setReward(true)}>
          <RewardIcon focused={false} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  notificationButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    shadowColor: "#1a171f",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  camera: {
    flex: 1,
    alignItems: "flex-end",
    bottom: -25,
  },
  picture: {
    marginLeft: "22%",
  },
  mac: {
    marginRight: 40,
  },
  reward: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
});

export default NotificationButton;