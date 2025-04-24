// components/icon/eye.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path, Rect, Defs, LinearGradient, Stop } from "react-native-svg";

interface MacButtonProps {
  focused?: boolean;
}

export const MacButton: React.FC<MacButtonProps> = ({ focused = false }) => {
  const color = focused ? "#FF4D4D" : "#E6D8D9";

  return (
    <View style={styles.container}>
      <Svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <Defs>
          <LinearGradient
            id="paint0_linear_1786_10960"
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
          fill="url(#paint0_linear_1786_10960)"
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
          d="M32.2004 13.6624C27.4988 13.6624 23.6865 17.4747 23.6865 22.1763V29.8256C23.6865 34.5271 27.4988 38.3395 32.2004 38.3395C36.902 38.3395 40.7143 34.5271 40.7143 29.8256V22.1763C40.7143 17.4747 36.902 13.6624 32.2004 13.6624ZM38.0261 29.4226C38.0261 32.6408 35.4172 35.2484 32.2004 35.2484C28.9822 35.2484 26.3746 32.6394 26.3746 29.4226V22.4549C26.3746 19.2368 28.9836 16.6292 32.2004 16.6292C35.4186 16.6292 38.0261 19.2381 38.0261 22.4549V29.4226Z"
          fill={color}
        />
        <Path
          d="M33.8163 44.4453C33.8163 43.5528 33.0928 42.8294 32.2004 42.8294C31.308 42.8294 30.5845 43.5528 30.5845 44.4453V47.6375C30.5845 48.5299 31.308 49.2534 32.2004 49.2534C33.0928 49.2534 33.8163 48.5299 33.8163 47.6375V44.4453Z"
          fill={color}
        />
        <Path
          d="M47.0004 29.3885V29.4226C47.0004 37.5418 40.3196 44.2226 32.2004 44.2226C24.0812 44.2226 17.4004 37.5418 17.4004 29.4226V29.3885C17.4004 28.4965 18.123 27.7726 19.0163 27.7726C19.9096 27.7726 20.6308 28.4965 20.6308 29.3885V29.4172C20.6308 35.7647 25.8529 40.9867 32.2004 40.9867C38.5479 40.9867 43.7658 35.7674 43.7699 29.4226V29.3885C43.7699 28.4965 44.4925 27.7726 45.3845 27.7726C46.2764 27.7726 47.0004 28.4965 47.0004 29.3885Z"
          fill={color}
        />
        <Path
          d="M40.2185 48.5527V48.3204C40.2185 47.4921 39.547 46.8206 38.7187 46.8206H25.6807C24.8524 46.8206 24.1809 47.4921 24.1809 48.3204V48.5527C24.1809 49.381 24.8524 50.0525 25.6807 50.0525H38.7187C39.547 50.0525 40.2185 49.381 40.2185 48.5527Z"
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
