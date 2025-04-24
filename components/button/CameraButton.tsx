// components/icon/camera.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path, Rect, Defs, LinearGradient, Stop } from "react-native-svg";

interface CameraButtonProps {
  focused?: boolean;
}

export const CameraButton: React.FC<CameraButtonProps> = ({ focused = false }) => {
  const color = focused ? "#FF4D4D" : "#E6D8D9";

  return (
    <View style={styles.container}>
      <Svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <Defs>
          <LinearGradient
            id="paint0_linear_1786_10964"
            x1="6.28148e-07"
            y1="0.447557"
            x2="64"
            y2="63.5524"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#FF4D4D" />
            <Stop offset="1" stopColor="#BD001F" />
          </LinearGradient>
        </Defs>
        <Rect
          x="0.5"
          y="0.5"
          width="63"
          height="63"
          rx="31.5"
          fill="url(#paint0_linear_1786_10964)"
        />
        <Rect
          x="0.5"
          y="0.5"
          width="63"
          height="63"
          rx="31.5"
          stroke="#FF4040"
        />
        <Path
          d="M43.2222 20.7197H41.0033C40.8134 20.7197 40.6521 20.5896 40.6183 20.4101C40.0629 17.3992 37.3082 15.75 34.8618 15.75H29.139C26.6926 15.75 23.9378 17.1222 23.3825 20.4101C23.3487 20.5896 23.1874 20.7197 22.9975 20.7197H20.7786C17.2566 20.7197 14.4004 23.8503 14.4004 27.2306V39.3537C14.4004 42.5272 17.081 45.6188 20.3872 45.6188H43.6136C46.9198 45.6188 49.6004 42.5272 49.6004 39.3537V27.2306C49.6004 23.8503 46.7442 20.7197 43.2222 20.7197ZM46.3293 38.04C46.3293 40.558 44.4629 42.5987 41.8383 42.5987H22.1612C19.5378 42.5987 17.6702 40.558 17.6702 38.04V28.513C17.6702 25.995 19.7967 23.9543 22.4213 23.9543H26.0487C26.2373 23.9543 26.3999 23.8243 26.4337 23.6461L26.7563 21.9605C27.0892 20.0381 28.8191 19.3124 30.2849 19.3124H33.7172C35.183 19.3124 36.9128 20.2007 37.2458 21.9605L37.5683 23.6461C37.6022 23.8243 37.7647 23.9543 37.9533 23.9543H41.5795C44.2028 23.9543 46.3306 25.995 46.3306 28.513V38.04H46.3293Z"
          fill={color}
        />
        <Path
          d="M32.0004 26.4827C28.3417 26.4827 25.375 29.4481 25.375 33.1081C25.375 36.768 28.3404 39.7334 32.0004 39.7334C35.6603 39.7334 38.6258 36.768 38.6258 33.1081C38.6258 29.4481 35.6603 26.4827 32.0004 26.4827ZM32.0004 36.569C30.0898 36.569 28.5394 35.02 28.5394 33.1081C28.5394 31.1962 30.0885 29.6471 32.0004 29.6471C33.9123 29.6471 35.4613 31.1962 35.4613 33.1081C35.4613 35.02 33.9123 36.569 32.0004 36.569Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 64,
    height: 64,
  },
});
