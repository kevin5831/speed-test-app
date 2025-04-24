import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import { RewardIcon } from '@/components/icon/reward';
import { PictureIcon } from '@/components/button/PictureButton';
import { CameraIcon } from '@/components/button/CameraButton';
import { VoiceIcon } from '@/components/icon/voice';
import Svg, { Path, Circle } from 'react-native-svg';

// Close/X Icon Component
const CloseIcon = () => (
  <View style={styles.closeIconContainer}>
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <Circle cx="16" cy="16" r="15.5" stroke="#FFFFFF" />
      <Path
        d="M10 10L22 22M10 22L22 10"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  </View>
);

interface ExpandableIconMenuProps {
  onRewardPress?: () => void;
  onPicturePress?: () => void;
  onCameraPress?: () => void;
  onVoicePress?: () => void;
}

const ExpandableIconMenu: React.FC<ExpandableIconMenuProps> = ({
  onRewardPress,
  onPicturePress,
  onCameraPress,
  onVoicePress
}) => {
  const [expanded, setExpanded] = useState(false);
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  // Animation for showing/hiding the expanded menu
  useEffect(() => {
    if (expanded) {
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 300,
          easing: Easing.out(Easing.back(1.5)),
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 0,
          duration: 200,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [expanded, scaleAnim, opacityAnim]);

  // Toggle expanded state
  const toggleExpanded = () => {
    setExpanded(!expanded);
    if (!expanded && onRewardPress) {
      onRewardPress();
    }
  };

  // Handle button presses for the expanded menu options
  const handlePicturePress = () => {
    if (onPicturePress) onPicturePress();
    setExpanded(false);
  };

  const handleCameraPress = () => {
    if (onCameraPress) onCameraPress();
    setExpanded(false);
  };

  const handleVoicePress = () => {
    if (onVoicePress) onVoicePress();
    setExpanded(false);
  };

  return (
    <View style={styles.container}>
      {/* Expanded menu buttons */}
      {expanded && (
        <Animated.View 
          style={[
            styles.expandedMenu,
            {
              opacity: opacityAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <TouchableOpacity 
            style={styles.menuButton}
            onPress={handlePicturePress}
          >
            <View style={styles.iconButton}>
              <PictureIcon focused={true} />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.menuButton}
            onPress={handleCameraPress}
          >
            <View style={styles.iconButton}>
              <CameraIcon focused={true} />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.menuButton}
            onPress={handleVoicePress}
          >
            <View style={styles.iconButton}>
              <VoiceIcon focused={true} />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.closeButton}
            onPress={() => setExpanded(false)}
          >
            <CloseIcon />
          </TouchableOpacity>
        </Animated.View>
      )}

      {/* Main reward button */}
      <TouchableOpacity
        style={styles.rewardButton}
        onPress={toggleExpanded}
      >
        <RewardIcon focused={expanded} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rewardButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 10,
  },
  expandedMenu: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    width: 32,
    height: 32,
  },
  closeIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ExpandableIconMenu;