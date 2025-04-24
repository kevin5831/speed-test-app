import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Image, Platform } from 'react-native';
import { IconBack } from '@/components/icon/icon-back';
import * as ImagePicker from 'expo-image-picker';

export default function CameraScreen({ onClose, onCapture }) {
  const [capturedImage, setCapturedImage] = useState(null);

  const takePhoto = async () => {
    try {
      // Request permissions first
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
        return;
      }

      // Use ImagePicker to launch camera or image library
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 0.8,
        aspect: [4, 3],
      });
      
      if (!result.canceled) {
        setCapturedImage(result.assets[0]);
      }
    } catch (error) {
      console.log('Error taking picture:', error);
    }
  };

  const handleSave = () => {
    if (capturedImage) {
      onCapture(capturedImage);
      onClose();
    }
  };

  const handleCancel = () => {
    setCapturedImage(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={styles.backButton}>
          <IconBack />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>拍照</Text>
      </View>

      {capturedImage ? (
        <View style={styles.previewContainer}>
          <Image 
            source={{ uri: capturedImage.uri }} 
            style={styles.preview} 
          />
          <View style={styles.previewControls}>
            <TouchableOpacity style={styles.controlButton} onPress={handleCancel}>
              <Text style={styles.controlText}>重拍</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.controlButton, styles.saveButton]} onPress={handleSave}>
              <Text style={styles.controlText}>使用照片</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.cameraPlaceholder}>
          <View style={styles.focusFrame} />
          <Text style={styles.instructionText}>
            {Platform.OS === 'web' 
              ? '點擊按鈕選擇照片' 
              : '點擊按鈕開啟相機或選擇照片'}
          </Text>
          <TouchableOpacity 
            style={styles.captureButton} 
            onPress={takePhoto}
          >
            <View style={styles.captureButtonInner} />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#1a171f',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
  },
  cameraPlaceholder: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusFrame: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
    marginBottom: 50,
  },
  instructionText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  previewContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  preview: {
    flex: 1,
    resizeMode: 'contain',
    backgroundColor: '#222',
  },
  previewControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#1a171f',
  },
  controlButton: {
    flex: 1,
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButton: {
    backgroundColor: '#FF4D4D',
  },
  controlText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  }
});