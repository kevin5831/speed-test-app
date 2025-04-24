import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Text,
  Modal,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Image } from "react-native";

import { IconBack } from "@/components/icon/icon-back";
import { SpeedIndicators } from "@/components/SpeedIndicators";
import { DistanceButtonSVG } from "@/components/DistanceButtonSVG";
import { SpeedometerSVG } from "@/components/Speedometer";
import ImageInput from "@/components/ImageInput";
import { ProgressButton } from "@/components/button/ProgressButton";
import NotificationButton from "@/components/button/NoficationButton";
import CameraScreen from "@/components/CameraScreen"; // Import the CameraScreen component

export default function SpeedScreen() {
  const [speed, setSpeed] = useState(100);
  const [distance, setDistance] = useState(16);
  const [speedLimit, setSpeedLimit] = useState(70);
  const [picture, setPicture] = useState(true);
  const [reward, setReward] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isCameraOpen, setIsCameraOpen] = useState(false); // Set to false initially
  const [capturedImage, setCapturedImage] = useState(null);

  const MAX_CHARS = 200;

  // Handle the camera button press
  const handleCameraPress = () => {
    setIsCameraOpen(true);
  };

  // Handle the captured image
  const handleImageCapture = (image) => {
    setCapturedImage(image);
    setPicture(false); 
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        {/* Camera Modal */}
        {isCameraOpen && (
          <Modal
            visible={isCameraOpen}
            animationType="slide"
            onRequestClose={() => setIsCameraOpen(false)}
          >
            <CameraScreen 
              onClose={() => setIsCameraOpen(false)} 
              onCapture={handleImageCapture}
            />
          </Modal>
        )}

        {/* ImgUpload page */}
        {!picture && (
          <View style={styles.report}>
            <TouchableOpacity
              onPress={() => {
                setPicture(true);
                setReward(false);
              }}
            >
              <IconBack />
            </TouchableOpacity>
            <Text style={styles.title}>回報現況</Text>
          </View>
        )}

        {/* Banner at the top */}
        <View style={styles.banner}>
          <Image
            source={require("@/assets/images/advertise.png")} // Make sure this path is correct
            style={styles.bannerImage}
          />
        </View>
        {/* Main content area - contains both components */}
        {picture == true ? (
          <View style={styles.contentContainer}>
            <View style={styles.speedContainer}>
              <SpeedometerSVG speed={speed} />
              <View style={styles.distanceContainer}>
                <TouchableOpacity style={styles.distanceButton}>
                  <DistanceButtonSVG distance={distance} />
                </TouchableOpacity>
              </View>
            </View>
            <SpeedIndicators speedLimit={speedLimit} />
          </View>
        ) : (
          <View style={styles.imgContainer}>
            <View>
              {/* Show captured image if available */}
              {capturedImage ? (
                <Image
                  source={{ uri: capturedImage.uri }}
                  style={styles.capturedImage}
                />
              ) : (
                <ImageInput />
              )}
            </View>
            <View style={styles.inputWrapper}>
              <View style={styles.textInputContainer}>
                <TextInput
                  style={styles.inputText}
                  multiline={true}
                  textAlignVertical="top"
                  placeholder="輸入回報內容:"
                  placeholderTextColor="#666666"
                  value={inputText}
                  onChangeText={setInputText}
                  maxLength={MAX_CHARS}
                />
                <Text style={styles.characterCounter}>
                  {inputText.length}/{MAX_CHARS}
                </Text>
              </View>
            </View>
            <View style={styles.buttonWrapper}>
              <ProgressButton
                progress={50}
                variant="light"
                text="回報"
                onPress={() => console.log("Submit report")}
              />
            </View>
          </View>
        )}
        {/* Notification/Reward button */}
        <View style={styles.notificationButton}>
          <NotificationButton
            mode={reward}
            setReward={setReward}
            setPicture={setPicture}
            onCameraPress={handleCameraPress}
          />
        </View>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000000",
  },
  container: {
    flex: 1,
    backgroundColor: "#1a171f",
  },
  report: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    maxHeight: "6%",
  },
  title: {
    right: 160,
    color: "white",
  },
  banner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#222222",
    height: 80,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    marginTop: "5%",
  },
  imgContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: "5%",
  },
  capturedImage: {
    width: 320,
    height: 200,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#39343F",
  },
  inputWrapper: {
    width: 320,
    marginTop: "5%",
  },
  textInputContainer: {
    position: "relative",
    width: "100%",
  },
  inputText: {
    backgroundColor: "#100f12",
    minHeight: 172,
    width: "100%",
    color: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#39343F",
    padding: 12,
    fontSize: 14,
    paddingBottom: 30, // Make room for the character counter
  },
  characterCounter: {
    position: "absolute",
    bottom: 10,
    right: 12,
    color: "#666666",
    fontSize: 12,
  },
  buttonWrapper: {
    width: 320,
    marginTop: "1%",
  },
  speedContainer: {
    marginTop: "28%",
  },
  distanceContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  distanceButton: {
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 25,
  },
  distanceText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  button: {
    marginTop: 4,
    borderRadius: 10,
    borderWidth: 4.5,
    height: "10%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  notificationButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    shadowColor: "#1a171f",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
});