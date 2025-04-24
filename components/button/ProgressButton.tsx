import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Svg, { 
  Rect,
  Defs, 
  LinearGradient, 
  Stop
} from "react-native-svg";

interface ProgressButtonProps {
  progress?: number;
  onPress?: () => void;
  text?: string;
  variant?: 'light' | 'dark';
}

export const ProgressButton: React.FC<ProgressButtonProps> = ({
  progress = 0,
  onPress,
  text = "回報",
  variant = 'dark'
}) => {
  // Light variant is pink, dark variant is red
  const colors = {
    light: {
      start: "#F9A8A9",
      end: "#E57374"
    },
    dark: {
      start: "#E01B1F",
      end: "#C10005"
    }
  };

  const selectedColors = colors[variant];

  return (
    <TouchableOpacity 
      style={styles.container} 
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Svg
        width="100%"
        height="50"
        viewBox="0 0 325 50"
      >
        <Defs>
          <LinearGradient
            id="buttonGradient"
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor={selectedColors.start} offset="0" />
            <Stop stopColor={selectedColors.end} offset="1" />
          </LinearGradient>
        </Defs>
        
        <Rect
          x="0"
          y="0"
          width="100%"
          height="50"
          rx="12"
          fill="url(#buttonGradient)"
        />
      </Svg>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    marginTop:'5%',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    position: 'relative'
  },
  buttonText: {
    position: 'absolute',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center'
  }
});